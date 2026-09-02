        // ================================================================
        // GLOBAL STATE
        // ================================================================
        let ttsSpeed = 1.0;
        let t1Sort = 'az';
        let t2Sort = 'az';
        let t3Sort = 'az';
        let qScore = 0,
            qTotal = 0;
        let quizQuestions = [];
        let quizIndex = 0;
        let quizAdvanceTimer = null;
        let quizTouchStartX = 0;
        let pageZoom = 80;

        // Teil 1 Study Mode & Bookmarks
        let t1StudyMode = localStorage.getItem('t1StudyMode') === 'true';
        let t1BookmarkFilter = localStorage.getItem('t1BookmarkFilter') === 'true';
        let t1ShowBengali = localStorage.getItem('t1ShowBengali') !== 'false';
        let t1Bookmarks = new Set(JSON.parse(localStorage.getItem('t1Bookmarks') || '[]'));
        let t1RevealedCards = new Set();

        // Teil 2 Timer & Bengali Toggle
        let t2TimerRunning = false;
        let t2TimerPaused = false;
        let t2TimerSeconds = 90;
        let t2TimerInterval = null;
        let t2ShowBengali = true;

        // Teil 3 Timer
        let t3TimerRunning = false;
        let t3TimerPaused = false;
        let t3TimerSeconds = 180;
        let t3TimerInterval = null;
        let t3ShowBengali = true;

        // Audio tracking
        let currentUtterance = null;
        let isAudioPlaying = false;
        let currentSpeakingText = '';
        let currentSpeakingBtn = null;

        // ================================================================
        // AUDIO (TTS)
        // ================================================================
        function setAudioButtonState(btn, playing) {
            if (!btn) return;
            const icon = btn.querySelector('i');
            if (!icon) return;
            if (playing) {
                icon.className = 'fa-solid fa-pause';
            } else {
                icon.className = 'fa-solid fa-volume-high';
            }
        }

        function resetAllAudioButtons() {
            document.querySelectorAll('button i.fa-volume-high, button i.fa-pause').forEach(icon => {
                if (icon.classList.contains('fa-volume-high') || icon.classList.contains('fa-pause')) {
                    icon.className = 'fa-solid fa-volume-high';
                }
            });
        }

        function speakText(text, btn) {
            if (!window.speechSynthesis) return;
            if (currentSpeakingText === text && isAudioPlaying) {
                window.speechSynthesis.cancel();
                isAudioPlaying = false;
                currentUtterance = null;
                currentSpeakingText = '';
                setAudioButtonState(currentSpeakingBtn, false);
                currentSpeakingBtn = null;
                return;
            }
            resetAllAudioButtons();
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'de-DE';
            u.rate = ttsSpeed;
            currentUtterance = u;
            isAudioPlaying = true;
            currentSpeakingText = text;
            currentSpeakingBtn = btn;
            setAudioButtonState(btn, true);
            u.onend = () => {
                isAudioPlaying = false;
                currentUtterance = null;
                currentSpeakingText = '';
                setAudioButtonState(btn, false);
                currentSpeakingBtn = null;
            };
            u.onerror = () => {
                isAudioPlaying = false;
                currentUtterance = null;
                currentSpeakingText = '';
                setAudioButtonState(btn, false);
                currentSpeakingBtn = null;
            };
            window.speechSynthesis.speak(u);
            playTick(720, 0.05, 0.05);
        }

        function speakTextSlow(text, btn) {
            if (!window.speechSynthesis) return;
            if (currentSpeakingText === text && isAudioPlaying) {
                window.speechSynthesis.cancel();
                isAudioPlaying = false;
                currentUtterance = null;
                currentSpeakingText = '';
                setAudioButtonState(currentSpeakingBtn, false);
                currentSpeakingBtn = null;
                return;
            }
            resetAllAudioButtons();
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'de-DE';
            u.rate = Math.min(ttsSpeed, 0.9);
            currentUtterance = u;
            isAudioPlaying = true;
            currentSpeakingText = text;
            currentSpeakingBtn = btn;
            setAudioButtonState(btn, true);
            u.onend = () => {
                isAudioPlaying = false;
                currentUtterance = null;
                currentSpeakingText = '';
                setAudioButtonState(btn, false);
                currentSpeakingBtn = null;
            };
            u.onerror = () => {
                isAudioPlaying = false;
                currentUtterance = null;
                currentSpeakingText = '';
                setAudioButtonState(btn, false);
                currentSpeakingBtn = null;
            };
            window.speechSynthesis.speak(u);
        }

        // ================================================================
        // SOUND + HAPTICS
        // ================================================================
        let soundEnabled = localStorage.getItem('soundEnabled') !== '0';

        function updateSoundUI() {
            const icon = document.getElementById('sound-icon');
            const label = document.getElementById('sound-label');
            if (!icon || !label) return;
            if (soundEnabled) {
                icon.className = 'fa-solid fa-volume-high';
                label.textContent = 'On';
            } else {
                icon.className = 'fa-solid fa-volume-xmark';
                label.textContent = 'Off';
            }
        }

        function toggleSound() {
            soundEnabled = !soundEnabled;
            localStorage.setItem('soundEnabled', soundEnabled ? '1' : '0');
            updateSoundUI();
            if (soundEnabled) {
                haptic(8);
                playTick(660, 0.05, 0.05);
                showToast('Sound effects: ON');
            } else {
                haptic(8);
                showToast('Sound effects: OFF');
            }
            closeSettingsPanel();
        }

        function haptic(ms = 8) {
            if (window.navigator && window.navigator.vibrate) {
                try { window.navigator.vibrate(ms); } catch (e) { /* ignore */ }
            }
        }

        let audioCtx = null;
        function getAudioCtx() {
            if (audioCtx) return audioCtx;
            try {
                const Ctx = window.AudioContext || window.webkitAudioContext;
                if (Ctx) audioCtx = new Ctx();
            } catch (e) { /* ignore */ }
            return audioCtx;
        }

        function playTick(freq = 600, duration = 0.04, vol = 0.04) {
            if (!soundEnabled) return;
            const ctx = getAudioCtx();
            if (!ctx) return;
            try {
                if (ctx.state === 'suspended') ctx.resume();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.value = freq;
                gain.gain.setValueAtTime(vol, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
                osc.connect(gain).connect(ctx.destination);
                osc.start();
                osc.stop(ctx.currentTime + duration);
            } catch (e) { /* ignore */ }
        }

        function playSwish() {
            if (!soundEnabled) return;
            const ctx = getAudioCtx();
            if (!ctx) return;
            try {
                if (ctx.state === 'suspended') ctx.resume();
                const bufferSize = Math.floor(ctx.sampleRate * 0.18);
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    const t = i / bufferSize;
                    data[i] = (Math.random() * 2 - 1) * (1 - t) * 0.6;
                }
                const noise = ctx.createBufferSource();
                noise.buffer = buffer;
                const filter = ctx.createBiquadFilter();
                filter.type = 'bandpass';
                filter.frequency.value = 1800;
                filter.Q.value = 0.6;
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0.025, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);
                noise.connect(filter).connect(gain).connect(ctx.destination);
                noise.start();
                noise.stop(ctx.currentTime + 0.18);
            } catch (e) { /* ignore */ }
        }

        // ================================================================
        // TOAST
        // ================================================================
        function showToast(msg) {
            const el = document.getElementById('toast');
            const span = document.getElementById('toast-msg');
            span.textContent = msg;
            el.classList.remove('translate-x-full', 'opacity-0');
            el.classList.add('translate-x-0', 'opacity-100');
            clearTimeout(el._timeout);
            el._timeout = setTimeout(() => {
                el.classList.remove('translate-x-0', 'opacity-100');
                el.classList.add('translate-x-full', 'opacity-0');
            }, 2600);
        }

        // ================================================================
        // TTS + ZOOM + THEME
        // ================================================================
        function setTtsSpeed(s) {
            ttsSpeed = Number(s);
            showToast('গতি: ' + ttsSpeed.toFixed(1) + 'x');
            haptic(10);
            closeSettingsPanel();
        }

        function changePageZoom(value) {
            pageZoom = Number(value);
            document.body.style.zoom = pageZoom + '%';
            const zoomSelect = document.getElementById('page-zoom');
            if (zoomSelect) zoomSelect.value = String(pageZoom);
            haptic(10);
            closeSettingsPanel();
        }

        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            haptic(12);
            closeSettingsPanel();
        }

        // ================================================================
        // SETTINGS PANEL
        // ================================================================
        let settingsButtonClicked = false;

        function openSettingsPanel() {
            const panel = document.getElementById('settings-panel');
            const backdrop = document.getElementById('settings-backdrop');
            if (!panel) return;
            panel.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-full', 'md:translate-y-0');
            panel.classList.add('opacity-100', 'pointer-events-auto');
            if (backdrop) {
                backdrop.classList.remove('opacity-0', 'pointer-events-none');
                backdrop.classList.add('opacity-100', 'pointer-events-auto');
            }
        }

        function closeSettingsPanel() {
            const panel = document.getElementById('settings-panel');
            const backdrop = document.getElementById('settings-backdrop');
            if (!panel) return;
            panel.classList.remove('opacity-100', 'pointer-events-auto');
            panel.classList.add('opacity-0', 'pointer-events-none');
            if (window.innerWidth < 768) {
                panel.classList.add('translate-y-full');
                panel.classList.remove('md:translate-y-0');
            }
            if (backdrop) {
                backdrop.classList.remove('opacity-100', 'pointer-events-auto');
                backdrop.classList.add('opacity-0', 'pointer-events-none');
            }
        }

        function toggleSettings() {
            settingsButtonClicked = true;
            haptic(8);
            playTick(800, 0.04, 0.035);
            const panel = document.getElementById('settings-panel');
            if (!panel) return;
            const isVisible = !panel.classList.contains('opacity-0');
            if (isVisible) {
                closeSettingsPanel();
            } else {
                openSettingsPanel();
            }
        }

        document.addEventListener('click', function(e) {
            if (settingsButtonClicked) {
                settingsButtonClicked = false;
                return;
            }
            const panel = document.getElementById('settings-panel');
            const btn = document.getElementById('settings-btn');
            const backdrop = document.getElementById('settings-backdrop');
            if (!panel || !btn) return;
            if (!panel.classList.contains('opacity-0')) {
                if (!panel.contains(e.target) && !btn.contains(e.target) && !(backdrop && backdrop.contains(e.target))) {
                    closeSettingsPanel();
                }
            }
        });

        // ================================================================
        // TAB SWITCH + MOBILE INDICATOR
        // ================================================================
        let currentTab = 't1';

        function moveMobileTabIndicator(tabId) {
            const indicator = document.getElementById('mtab-indicator');
            const tab = document.getElementById('mtab-' + tabId);
            const container = document.getElementById('mtab-container');
            if (!indicator || !tab || !container) return;
            const tabRect = tab.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const x = tabRect.left - containerRect.left;
            indicator.style.width = tabRect.width + 'px';
            indicator.style.transform = 'translateX(' + x + 'px)';
        }

        function switchTab(tab) {
            currentTab = tab;
            haptic(6);
            playTick(540, 0.035, 0.03);
            ['t1', 't2', 't3', 'quiz'].forEach(t => {
                const v = document.getElementById('view-' + t);
                const b = document.getElementById('tab-' + t);
                const m = document.getElementById('mtab-' + t);
                if (t === tab) {
                    v.classList.remove('hidden');
                    if (b) b.className =
                        'tab-btn press-subtle active px-3.5 py-1.5 rounded-xl text-base font-bold transition-all flex items-center gap-1.5';
                    if (m) m.className =
                        'press-subtle relative z-10 flex flex-col items-center gap-0.5 w-14 h-10 justify-center text-sky-600 dark:text-amber-400 text-[12px] font-bold';
                } else {
                    v.classList.add('hidden');
                    if (b) b.className =
                        'tab-btn press-subtle px-3.5 py-1.5 rounded-xl text-base font-bold transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1.5';
                    if (m) m.className =
                        'press-subtle relative z-10 flex flex-col items-center gap-0.5 w-14 h-10 justify-center text-slate-500 dark:text-slate-400 text-[12px] font-bold';
                }
            });
            moveMobileTabIndicator(tab);

            // Show/hide header action buttons based on active tab
            const headerActions = document.getElementById('header-actions');
            if (headerActions) {
                const buttons = headerActions.querySelectorAll('.hdr-action-btn');
                buttons.forEach(btn => {
                    const btnTab = btn.getAttribute('data-tab');
                    if (btnTab === tab) {
                        btn.classList.remove('hidden');
                    } else {
                        btn.classList.add('hidden');
                    }
                });
            }

            // Close any open search wraps when switching tabs
            document.querySelectorAll('[id$="-search-wrap"]').forEach(wrap => {
                wrap.classList.add('hidden');
            });

            // Initialize Teil 1 button states when switching to t1
            if (tab === 't1') {
                const studyBtn = document.getElementById('t1-study-btn');
                const bookmarkBtn = document.getElementById('t1-bookmark-btn');
                const bengaliBtn = document.getElementById('t1-bengali-btn');
                if (studyBtn) {
                    if (t1StudyMode) {
                        studyBtn.classList.add('bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300');
                        studyBtn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                        studyBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i><span class="hidden sm:block">Study Mode</span>';
                    } else {
                        studyBtn.classList.remove('bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300');
                        studyBtn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                        studyBtn.innerHTML = '<i class="fa-solid fa-eye"></i><span class="hidden sm:block">Study Mode</span>';
                    }
                }
                if (bookmarkBtn) {
                    if (t1BookmarkFilter) {
                        bookmarkBtn.classList.add('bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300');
                        bookmarkBtn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                        bookmarkBtn.innerHTML = '<i class="fa-solid fa-bookmark text-lg"></i><span class="hidden sm:block">Bookmarks</span>';
                    } else {
                        bookmarkBtn.classList.remove('bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300');
                        bookmarkBtn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                        bookmarkBtn.innerHTML = '<i class="fa-solid fa-bookmark text-lg"></i>';
                    }
                }
                if (bengaliBtn) {
                    if (t1ShowBengali) {
                        bengaliBtn.classList.add('bg-emerald-100', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-300');
                        bengaliBtn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                    } else {
                        bengaliBtn.classList.remove('bg-emerald-100', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-300');
                        bengaliBtn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                    }
                }
                renderT1();
            }
            if (tab === 't2') {
                const bengaliBtn = document.getElementById('t2-bengali-btn');
                updateT2TimerDisplay();
                if (bengaliBtn) {
                    if (t2ShowBengali) {
                        bengaliBtn.classList.add('bg-emerald-100', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-300');
                        bengaliBtn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                    } else {
                        bengaliBtn.classList.remove('bg-emerald-100', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-300');
                        bengaliBtn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                    }
                }
                renderT2();
            }
            if (tab === 't3') {
                const bengaliBtn = document.getElementById('t3-bengali-btn');
                if (bengaliBtn) {
                    if (t3ShowBengali) {
                        bengaliBtn.classList.add('bg-emerald-100', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-300');
                        bengaliBtn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                    } else {
                        bengaliBtn.classList.remove('bg-emerald-100', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-300');
                        bengaliBtn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                    }
                }
                renderT3();
            }
            if (tab === 'quiz') resetQuiz();
        }

        // ================================================================
        // ICON MAPS (used by teil1.js + teil2.js renderers)
        // ================================================================
        function getT1Icon(keyword) {
            const map = {
                'Wohnort': '🏠', 'Familie': '👨‍👩‍👧‍👦', 'Beruf': '💼', 'Freizeit': '🎨', 'Wochenende': '🌅',
                'Hobby': '🎯', 'Reisen': '✈️', 'Essen und Trinken': '🍽️', 'Frühstück': '🍳', 'Sprachen': '🗣️',
                'Wetter': '☀️', 'Kleidung': '👔', 'Einkaufen': '🛍️', 'Alter': '🎂', 'Adresse': '📍',
                'Geburtstag': '🎂', 'Wohnen': '🏡', 'Wohnung': '🏠', 'Sport': '⚽', 'Lieblingsessen': '🍕',
                'Verkehrsmittel': '🚗', 'Geschwister': '👫', 'Lesen': '📚', 'Lieblingsmusik': '🎵', 'Internet': '🌐',
                'Handy': '📱', 'Soziale Netzwerke': '💬', 'fernsehen': '📺', 'Hausaufgaben': '📝', 'Ausbildung': '🎓',
                'Haustier': '🐱', 'Fremdsprache': '🗣️', 'Sommerferien': '🏖️', 'Fahrrad': '🚲', 'Obst': '🍎',
                'Gemüse': '🥦', 'Großeltern': '👴👵', 'Tee': '🍵', 'Flugzeug': '✈️', 'Ausland': '🌍',
                'Schokolade': '🍫', 'abends': '🌙', 'nachmittags': '☀️', 'Weihnachten': '🎄', 'Ostern': '🐰',
                'Feste': '🎉', 'Schwester': '👧', 'Tante': '👩', 'Opa und Oma': '👴👵', 'Katzen': '🐱',
                'E-Mail oder SMS': '📧', 'Klasse': '🏫', 'Lieblingsfach': '📖', 'Klassenzimmer': '🏫', 'Sport machen': '⚽',
                'Tanzen': '💃', 'Kino': '🎬', 'Theater': '🎭', 'Computerspiele': '🎮', 'Eis': '🍦',
                'sparen': '💰', 'Taschengeld': '💵', 'singen': '🎤', 'musizieren': '🎸', 'Konzert': '🎵',
                'malen': '🎨', 'sammeln': '📦', 'Lieblingsfarbe': '🎨', 'Garten': '🌻', 'Frühling': '🌸',
                'Winter': '❄️', 'Weg zur Arbeit': '🚶', 'Gehalt': '💰', 'Arbeitszeit': '⏰', 'Einrichtung': '🪑',
                'Haushalt': '🧹', 'Prüfungen': '📝', 'Aussehen': '💇', 'Mode': '👗', 'Skateboard': '🛹',
                'Zirkus': '🎪', 'Extremsport': '🧗', 'Medien': '📰', 'Kinder': '👶', 'Arbeit': '💼',
                'Urlaub': '🏖️', 'Freunde': '👫', 'Heimatland': '🏠', 'Firma': '🏢', 'Arbeitsplatz': '🏢',
                'Kollegen': '👥', 'Pause': '☕', 'Führerschein': '🚗', 'Geschenk': '🎁', 'Konto': '🏦',
                'Arzt': '🩺', 'Krankenhaus': '🏥', 'Apotheke': '💊', 'Bahnhof': '🚉', 'Gepäck': '🧳',
                'Anruf': '📞', 'Familienname': '📛', 'Fleisch': '🥩', 'Eintritt': '🎫', 'Schalter': '🔘',
                'Schiff': '🚢', 'Kuchen': '🍰', 'Nachrichten': '📰', 'Post': '📮', 'Sehenswürdigkeit': '🏛️',
                'Hotel': '🏨', 'Traumberuf': '💼'
            };
            return map[keyword] || '📝';
        }

        function getT2Icon(topic) {
            const map = {
                'Freizeit / Sport': '🏃', 'Geld / Einkaufen': '💰', 'Familie': '👨‍👩‍👧‍👦', 'Wochenende': '🌅',
                'Ausgehen': '🎉', 'Urlaub': '✈️', 'Einkaufen': '🛍️', 'Wohnen': '🏠', 'Arbeitstag': '💼',
                'Freunde': '👫', 'Internet': '🌐', 'Geburtstag': '🎂', 'Sport': '⚽', 'Arbeitsplatz': '🏢',
                'Gesundheit': '🏥', 'Kleidung': '👔', 'Abend': '🌙', 'Deutschunterricht': '📚', 'Deutschkurs': '📖',
                'Haushalt': '🧹', 'Sprachen': '🗣️', 'Weihnachten': '🎄', 'Wunschberuf': '💼', 'Lieblingstier': '🐾',
                'Lernen': '📖'
            };
            return map[topic] || '📝';
        }

        // ================================================================
        // SKELETON + ANIMATED COUNTER + SORT (used by all renderers)
        // ================================================================
        let initialT2Render = true;
        let initialT3Render = true;

        function skeletonCard() {
            return `<div class="bg-white dark:bg-ghSurface ring-1 ring-slate-900/5 dark:ring-white/5 rounded-2xl p-4 shadow-sm space-y-3">
                <div class="flex items-center gap-2"><div class="skeleton h-5 w-10 rounded-full"></div><div class="skeleton h-8 w-8 rounded-full"></div><div class="skeleton h-5 w-32"></div></div>
                <div class="skeleton h-3 w-full"></div>
                <div class="skeleton h-3 w-5/6"></div>
                <div class="skeleton h-3 w-4/6"></div>
            </div>`;
        }

        function renderWithSkeleton(grid, html, isInitialRender) {
            if (isInitialRender) {
                const skeletonHTML = Array.from({length: 6}, skeletonCard).join('');
                grid.innerHTML = skeletonHTML;
                setTimeout(() => { grid.innerHTML = html; }, 180);
            } else {
                grid.innerHTML = html;
            }
        }

        function animateCount(el, target, duration = 700) {
            if (!el) return;
            const start = parseInt(el.textContent, 10) || 0;
            if (start === target) return;
            const startTime = performance.now();
            function tick(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(start + (target - start) * eased);
                el.textContent = current;
                if (progress < 1) requestAnimationFrame(tick);
                else el.textContent = target;
            }
            requestAnimationFrame(tick);
        }

        function sortEntries(data, sortMode, keyField = 'keyword') {
            const sorted = [...data];
            if (sortMode === 'random') return sorted.sort(() => Math.random() - 0.5);
            return sorted.sort((a, b) => {
                if (sortMode === 'id') {
                    return a.id - b.id;
                }
                const result = a[keyField].localeCompare(b[keyField], 'de', { sensitivity: 'base' });
                return sortMode === 'za' ? -result : result;
            });
        }

        // ================================================================
        // INIT
        // ================================================================
        document.addEventListener('DOMContentLoaded', () => {
            renderT1();
            renderT2();
            renderT3();
            if (localStorage.getItem('theme') === 'light') document.documentElement.classList.remove('dark');

            // Apply default page zoom (80%)
            document.body.style.zoom = pageZoom + '%';
            const zoomSelect = document.getElementById('page-zoom');
            if (zoomSelect) zoomSelect.value = String(pageZoom);

            renderT1();
            renderT2();
            renderT3();
            resetQuiz();

            // Initialize mobile tab pill indicator
            requestAnimationFrame(() => moveMobileTabIndicator(currentTab));
            window.addEventListener('resize', () => moveMobileTabIndicator(currentTab));

            // Sync sound toggle UI with stored preference
            updateSoundUI();

            // Hide all search wraps initially
            document.querySelectorAll('[id$="-search-wrap"]').forEach(wrap => {
                wrap.classList.add('hidden');
            });

            // Quiz filter listeners
            document.getElementById('quiz-filter').addEventListener('change', resetQuiz);
            document.getElementById('quiz-count').addEventListener('change', resetQuiz);
            const quizSearchInput = document.getElementById('quiz-search');
            if (quizSearchInput) {
                quizSearchInput.addEventListener('input', resetQuiz);
            }

            // Quiz swipe + keyboard
            const quizView = document.getElementById('view-quiz');
            quizView.addEventListener('touchstart', event => {
                quizTouchStartX = event.changedTouches[0].screenX;
            }, { passive: true });
            quizView.addEventListener('touchend', event => {
                const distance = event.changedTouches[0].screenX - quizTouchStartX;
                if (Math.abs(distance) < 50 || quizView.classList.contains('hidden')) return;
                navigateQuiz(distance < 0 ? 1 : -1);
            }, { passive: true });
            document.addEventListener('keydown', event => {
                if (quizView.classList.contains('hidden') || ['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement
                        .tagName)) return;
                if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    navigateQuiz(-1);
                }
                if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    navigateQuiz(1);
                }
            });

            // Auto-hide tabs on scroll (refined: threshold + spring easing + swish)
            (function() {
                const headerTabs = document.querySelector('header nav.hidden.md\:flex');
                const mobileTabs = document.querySelector('header .md\:hidden');
                if (headerTabs) headerTabs.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease';
                if (mobileTabs) mobileTabs.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease';
                let lastY = window.scrollY;
                let ticking = false;
                let isHidden = false;
                let lastSwish = 0;
                const THRESHOLD = 6;
                function update() {
                    const y = window.scrollY;
                    const delta = y - lastY;
                    if (Math.abs(delta) < THRESHOLD) { ticking = false; return; }
                    if (delta > 0 && y > 80 && !isHidden) {
                        if (headerTabs) { headerTabs.style.transform = 'translateY(-100%)'; headerTabs.style.opacity = '0'; }
                        if (mobileTabs) { mobileTabs.style.transform = 'translateY(100%)'; mobileTabs.style.opacity = '0'; }
                        isHidden = true;
                        const now = Date.now();
                        if (now - lastSwish > 300) { playSwish(); lastSwish = now; }
                    } else if (delta < 0 && isHidden) {
                        if (headerTabs) { headerTabs.style.transform = ''; headerTabs.style.opacity = ''; }
                        if (mobileTabs) { mobileTabs.style.transform = ''; mobileTabs.style.opacity = ''; }
                        isHidden = false;
                        const now = Date.now();
                        if (now - lastSwish > 300) { playSwish(); lastSwish = now; }
                    }
                    lastY = y;
                    ticking = false;
                }
                window.addEventListener('scroll', () => {
                    if (!ticking) { requestAnimationFrame(update); ticking = true; }
                }, { passive: true });
            })();
        });
