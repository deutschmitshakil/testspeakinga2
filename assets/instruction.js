/* =============================================================
   INSTRUCTION — Quiz module (cross-section practice)
   ============================================================= */

// Quiz state (qScore, qTotal, quizQuestions, quizIndex, quizAdvanceTimer,
// quizTouchStartX) is defined in index.html core.

function resetQuiz() {
            clearTimeout(quizAdvanceTimer);
            qScore = 0;
            qTotal = 0;
            quizIndex = 0;
            document.getElementById('q-score').textContent = '0 / 0';
            generateQuiz();
        }

        function generateQuiz() {
            const filter = document.getElementById('quiz-filter').value;
            const count = parseInt(document.getElementById('quiz-count').value);
            const search = (document.getElementById('quiz-search')?.value || '').trim().toLocaleLowerCase();

            let pool = [];

            if (filter === 'all' || filter === 't1') {
                pool = pool.concat(T1_DATA.map(d => ({ type: 't1', data: d })));
            }
            if (filter === 'all' || filter === 't2') {
                pool = pool.concat(T2_DATA.map(d => ({ type: 't2', data: d })));
            }
            if (filter === 'all' || filter === 't3') {
                // For T3, we create quiz items from dialogues
                T3_DATA.forEach(d => {
                    d.lines.forEach((line, idx) => {
                        if (line.speaker === 'A') {
                            pool.push({
                                type: 't3',
                                data: {
                                    title: d.title,
                                    icon: d.icon,
                                    speaker: line.speaker,
                                    de: line.de,
                                    bn: line.bn,
                                    context: d.situation,
                                    context_bn: d.situation_bn
                                }
                            });
                        }
                    });
                });
            }

            if (search) {
                pool = pool.filter(({ type, data }) => {
                    const haystack = [
                        type,
                        data.keyword,
                        data.topic,
                        data.title,
                        data.q,
                        data.speech,
                        data.de,
                        data.bn,
                        data.context,
                        data.a1,
                        data.a2
                    ].filter(Boolean).join(' ').toLocaleLowerCase();
                    return haystack.includes(search);
                });
            }

            if (count > 0 && count < pool.length) {
                pool = pool.sort(() => Math.random() - 0.5).slice(0, count);
            } else {
                pool = pool.sort(() => Math.random() - 0.5);
            }

            quizQuestions = pool;
            quizIndex = 0;
            qTotal = pool.length;
            document.getElementById('q-score').textContent = qScore + ' / ' + qTotal;

            if (pool.length === 0) {
                document.getElementById('q-badge').textContent = 'কোন প্রশ্ন নেই';
                document.getElementById('q-icon').textContent = '😅';
                document.getElementById('q-title').textContent = 'ফিল্টার পরিবর্তন করুন';
                document.getElementById('q-prompt').textContent = '';
                document.getElementById('q-opts').innerHTML = '';
                document.getElementById('q-exp').classList.add('hidden');
                document.getElementById('q-final-result').classList.add('hidden');
                document.getElementById('q-final-message').classList.add('hidden');
                updateQuizNavigation();
                return;
            }
            showQuestion();
        }

        function showQuestion() {
            if (quizIndex >= quizQuestions.length) {
                document.getElementById('q-badge').textContent = '✅ শেষ!';
                document.getElementById('q-icon').textContent = '🎉';
                document.getElementById('q-title').textContent = 'আপনি সব প্রশ্নের উত্তর দিয়েছেন!';
                const percentage = qTotal ? Math.round((qScore / qTotal) * 100) : 0;
                document.getElementById('q-prompt').textContent = 'ফলাফল';
                document.getElementById('q-final-result').textContent = 'স্কোর: ' + qScore + ' / ' + qTotal + ' · ' +
                    percentage + '%';
                document.getElementById('q-final-result').classList.remove('hidden');
                const finalMessage = document.getElementById('q-final-message');
                finalMessage.textContent = percentage > 90 ? 'Great job!' : percentage < 90 ?
                    'Try again to improve.' : '90% achieved. Keep practicing!';
                finalMessage.className = percentage > 90 ? 'text-base font-bold text-emerald-500' :
                    'text-base font-bold text-amber-500';
                document.getElementById('q-opts').innerHTML = '';
                document.getElementById('q-exp').classList.add('hidden');
                document.getElementById('q-progress').textContent = quizIndex + ' / ' + qTotal;
                updateQuizNavigation();
                return;
            }

            const item = quizQuestions[quizIndex];
            const box = document.getElementById('q-opts');
            const exp = document.getElementById('q-exp');
            exp.classList.add('hidden');
            document.getElementById('q-final-result').classList.add('hidden');
            document.getElementById('q-final-message').classList.add('hidden');
            box.innerHTML = '';
            document.getElementById('q-progress').textContent = (quizIndex + 1) + ' / ' + qTotal;
            updateQuizNavigation();

            if (item.type === 't1') {
                const d = item.data;
                document.getElementById('q-badge').textContent = 'Teil 1 · Fragen stellen';
                document.getElementById('q-icon').textContent = '💬';
                document.getElementById('q-title').textContent = d.keyword + ' (' + d.bn + ')';
                document.getElementById('q-prompt').textContent = 'সঠিক প্রশ্নটি বেছে নিন';

                const correct = d.q;
                const opts = [
                    { text: correct, correct: true },
                    { text: correct.replace(' du ', ' Sie ').replace(' deine ', ' Ihre '), correct: false },
                    { text: 'Was ist ' + d.keyword + '?', correct: false },
                    { text: 'Wie heißt ' + d.keyword + '?', correct: false }
                ].sort(() => Math.random() - 0.5);

                opts.forEach((o, i) => {
                    const btn = document.createElement('button');
                    btn.dataset.correct = String(o.correct);
                    btn.className =
                        'w-full text-left p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-base sm:text-lg text-slate-800 dark:text-slate-200 font-semibold transition flex items-center justify-between';
                    btn.innerHTML =
                        `<span>${String.fromCharCode(65+i)}. ${o.text}</span> <i class="fa-solid fa-chevron-right text-slate-400 text-[12px]"></i>`;
                    btn.onclick = () => answerQuiz(o.correct, btn,
                        `সঠিক: "${correct}". W-Frage-এ প্রশ্ন শব্দ + Verb + Subject ... হয়।`
                        );
                    box.appendChild(btn);
                });
            } else if (item.type === 't2') {
                const d = item.data;
                document.getElementById('q-badge').textContent = 'Teil 2 · Monolog';
                document.getElementById('q-icon').textContent = '🎤';
                document.getElementById('q-title').textContent = d.topic;
                document.getElementById('q-prompt').textContent = 'এই বক্তৃতার মূল প্রশ্নটি কী?';

                const correct = d.q;
                const opts = [
                    { text: correct, correct: true },
                    { text: 'Was ist Ihr Lieblingsthema?', correct: false },
                    { text: 'Wie geht es Ihnen?', correct: false },
                    { text: 'Wo wohnen Sie?', correct: false }
                ].sort(() => Math.random() - 0.5);

                opts.forEach((o, i) => {
                    const btn = document.createElement('button');
                    btn.dataset.correct = String(o.correct);
                    btn.className =
                        'w-full text-left p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-base sm:text-lg text-slate-800 dark:text-slate-200 font-semibold transition flex items-center justify-between';
                    btn.innerHTML =
                        `<span>${String.fromCharCode(65+i)}. ${o.text}</span> <i class="fa-solid fa-chevron-right text-slate-400 text-[12px]"></i>`;
                    btn.onclick = () => answerQuiz(o.correct, btn,
                        `সঠিক: "${correct}". এটি Teil 2-এ মূল প্রশ্ন।`
                        );
                    box.appendChild(btn);
                });
            } else if (item.type === 't3') {
                const d = item.data;
                document.getElementById('q-badge').textContent = 'Teil 3 · Dialog';
                document.getElementById('q-icon').textContent = d.icon || '🤝';
                document.getElementById('q-title').textContent = d.title || 'Gemeinsam planen';
                document.getElementById('q-prompt').textContent = 'Person A-এর কথাটির সঠিক অর্থ কী?';

                const correct = d.bn;
                const opts = [
                    { text: correct, correct: true },
                    { text: 'আমি ভালো আছি, ধন্যবাদ।', correct: false },
                    { text: 'আমি কাজ করি।', correct: false },
                    { text: 'আমি জার্মান শিখি।', correct: false }
                ].sort(() => Math.random() - 0.5);

                opts.forEach((o, i) => {
                    const btn = document.createElement('button');
                    btn.dataset.correct = String(o.correct);
                    btn.className =
                        'w-full text-left p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-base sm:text-lg text-slate-800 dark:text-slate-200 font-semibold transition flex items-center justify-between';
                    btn.innerHTML =
                        `<span>${String.fromCharCode(65+i)}. ${o.text}</span> <i class="fa-solid fa-chevron-right text-slate-400 text-[12px]"></i>`;
                    btn.onclick = () => answerQuiz(o.correct, btn,
                        `সঠিক: "${correct}". Goethe A2-এ কথোপকথনের সঠিক অর্থ বোঝা গুরুত্বপূর্ণ।`
                        );
                    box.appendChild(btn);
                });
            }
        }

        function updateQuizNavigation() {
            const previous = document.getElementById('q-prev');
            const next = document.getElementById('q-next');
            if (!previous || !next) return;
            previous.disabled = quizIndex <= 0 || quizQuestions.length === 0;
            next.disabled = quizIndex >= quizQuestions.length || quizQuestions.length === 0;
        }

        function navigateQuiz(direction) {
            if (!quizQuestions.length) return;
            clearTimeout(quizAdvanceTimer);
            const nextIndex = quizIndex + direction;
            if (nextIndex < 0 || nextIndex >= quizQuestions.length) return;
            quizIndex = nextIndex;
            showQuestion();
        }

        function answerQuiz(isCorrect, btn, explain) {
            if (btn.classList.contains('answered')) return;
            btn.classList.add('answered');
            const exp = document.getElementById('q-exp');
            const expText = document.getElementById('q-exp-text');
            if (isCorrect) {
                qScore++;
                btn.className =
                    'w-full text-left p-3.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500 text-emerald-900 dark:text-emerald-200 text-base sm:text-lg font-bold shadow-sm answered';
            } else {
                btn.className =
                    'w-full text-left p-3.5 rounded-xl bg-red-100 dark:bg-red-950/80 border border-red-500 text-red-900 dark:text-red-200 text-base sm:text-lg font-bold shadow-sm answered';
                const correctButton = document.querySelector('#q-opts button[data-correct="true"]');
                if (correctButton) {
                    correctButton.className =
                        'w-full text-left p-3.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-500 text-emerald-900 dark:text-emerald-200 text-base sm:text-lg font-bold shadow-sm answered';
                }
            }
            expText.textContent = (isCorrect ? '✅ সঠিক! ' : '❌ ভুল। ') + explain;
            exp.classList.remove('hidden');
            document.getElementById('q-score').textContent = qScore + ' / ' + qTotal;
            clearTimeout(quizAdvanceTimer);
            quizAdvanceTimer = setTimeout(() => {
                quizIndex++;
                showQuestion();
            }, 1800);
        }

