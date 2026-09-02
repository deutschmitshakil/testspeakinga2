/* =============================================================
   TEIL 3 — Gemeinsam planen (5 dialogs) + Bengali toggle
   ============================================================= */

// ---- T3 data (5 entries) ----
        // ---- Teil 3: 5 Dialoge (Gemeinsam planen) ----
        const T3_DATA = [{
            id: 1,
            title: 'Patricks Geburtstag – Geschenk kaufen',
            icon: '🎁',
            situation: '<strong>Dein Freund Patrick hat Geburtstag. Du willst zusammen ein Geschenk kaufen. Ihr müsst einen Termin am Samstag, 17. Mai finden, an dem ihr beide frei seid.</strong>',
            situation_bn: 'তোমার বন্ধু প্যাট্রিকের জন্মদিন। তুমি একসাথে একটি উপহার কিনতে চাও। তোমাদের শনিবার, ১৭ মে একটি সময় খুঁজে বের করতে হবে যখন তোমরা দুজনেই ফ্রি থাকবে।',
            candidateA: {
                label: 'Kandidat A (তোমার কার্ড)',
                items: [
                    '07:00–10:00 Uhr: lange schlafen (দেরি করে ঘুমানো)',
                    '11:00–13:00 Uhr: Frühstück bei Mario (মারিওর ওখানে নাস্তা করা)',
                    '14:00–15:00 Uhr: Fahrrad abholen (সাইকেল আনা)',
                    '16:00–17:00 Uhr: Eltern anrufen (বাবা-মাকে ফোন করা)',
                    '18:00–19:00 Uhr: Fußball-Training (ফুটবল অনুশীলন)',
                    'ab 20:00 Uhr: Fußball-Länderspiel im Fernsehen (টিভিতে ফুটবল ম্যাচ দেখা)'
                ]
            },
            candidateB: {
                label: 'Kandidat B (পার্টনারের কার্ড)',
                items: [
                    '07:00–10:00 Uhr: vormittags Großeinkauf (সকালে বাজার করা)',
                    '11:00–12:00 Uhr: Friseur/Haare schneiden (চুল কাটানো)',
                    '12:00–14:00 Uhr: Essen bei Stefan (স্টেফানের বাসায় খাওয়া)',
                    '15:00–16:00 Uhr: Schwimmen (সাঁতার কাটা)',
                    '18:00–19:00 Uhr: mit dem Hund nach draußen (কুকুর নিয়ে বাইরে যাওয়া)',
                    'ab 20:00 Uhr: Arena Kino (সিনেমায় যাওয়া)'
                ]
            },
            extra: {
                label: 'উভয়ের ফাঁকা সময়',
                lines: ['17:00 Uhr (বিকাল ৫:০০ টা) - এই সময়েই দুজনে দেখা করবে।']
            },
            lines: [
                { speaker: 'A', de: 'Hallo! Wie geht es dir? Patrick hat bald Geburtstag. Wollen wir zusammen ein Geschenk für ihn kaufen?',
                    bn: 'হ্যালো! কেমন আছো? প্যাট্রিকের সামনেই জন্মদিন। আমরা কি একসাথে একটা উপহার কিনতে পারি?' },
                { speaker: 'B', de: 'Hallo! Mir geht es gut, danke. Und dir? Ja, das ist eine tolle Idee! Wann hast du Zeit? Passt es dir am Samstag, den 17. Mai?',
                    bn: 'হ্যালো! আমি ভালো আছি, ধন্যবাদ। তুমি কেমন আছো? হ্যাঁ, এটি চমৎকার বুদ্ধি! তোমার কখন সময় হবে? ১৭ মে, শনিবারে কি তোমার সুবিধা হবে?' },
                { speaker: 'A', de: 'Ja, genau am Samstag. Aber am Vormittag kann ich leider nicht. Ich schlafe bis 10 Uhr und frühstücke bei Mario. Hast du am Mittag Zeit?',
                    bn: 'হ্যাঁ, শনিবারে। কিন্তু সকালে আমার একটু সমস্যা আছে। আমি ১০টা পর্যন্ত ঘুমাব এবং তারপর মারিওর ওখানে নাস্তা করব। দুপুরে তোমার সময় হবে?' },
                { speaker: 'B', de: 'Am Vormittag kann ich auch nicht. Ich mache einen Großeinkauf und gehe zum Friseur. Passt es dir um 13 Uhr?',
                    bn: 'সকালে আমিও পারব না। আমি বাজার করব এবং চুল কাটাতে যাব। দুপুর ১টায় কি তোমার হবে?' },
                { speaker: 'A', de: 'Ja, um 13 Uhr habe ich Zeit!', bn: 'হ্যাঁ, দুপুর ১টায় আমার সময় আছে!' },
                { speaker: 'B', de: 'Nein, das geht leider nicht. Von 12 bis 14 Uhr esse ich bei Stefan. Hast du um 14 Uhr Zeit?',
                    bn: 'না, দুঃখিত ওটা হবে না। ১২টা থেকে ২টা পর্যন্ত আমি স্টেফানের বাসায় খাব। ২টায় কি তোমার সময় হবে?' },
                { speaker: 'A', de: 'Nein, tut mir leid. Um 14 Uhr muss ich mein Fahrrad abholen. Passt es dir um 15 Uhr?',
                    bn: 'না, দুঃখিত। ২টায় আমাকে সাইকেল আনতে যেতে হবে। ৩টায় কি তোমার চলবে?' },
                { speaker: 'B', de: 'Um 15 Uhr geht es leider nicht. Da gehe ich schwimmen. Können wir uns um 16 Uhr treffen?',
                    bn: '৩টায় দুঃখিত হবে না। তখন আমি সাঁতার কাটতে যাব। আমরা কি ৪টায় দেখা করতে পারি?' },
                { speaker: 'A', de: 'Um 16 Uhr kann ich auch nicht. Ich muss meine Eltern anrufen. Aber um 17 Uhr bin ich frei. Hast du Zeit?',
                    bn: '৪টায় আমিও পারব না। আমাকে বাবা-মাকে ফোন করতে হবে। কিন্তু ৫টায় আমি একদম ফ্রি। তোমার সময় হবে?' },
                { speaker: 'B', de: 'Ja, super! Das passt perfekt. Um 17 Uhr habe ich auch Zeit. Ab 18 Uhr gehe ich mit dem Hund spazieren. Eine Stunde ist genug, oder?',
                    bn: 'হ্যাঁ, চমৎকার! এটা একদম পারফেক্ট। ৫টায় আমারও সময় আছে। ৬টা থেকে আমি কুকুর নিয়ে হাঁটতে যাব। উপহার কেনার জন্য এক ঘণ্টাই যথেষ্ট, তাই না?' },
                { speaker: 'A', de: 'Ja, eine Stunde reicht. Wo treffen wir uns?',
                    bn: 'হ্যাঁ, এক ঘণ্টাই যথেষ্ট। আমরা কোথায় দেখা করব?' },
                { speaker: 'B', de: 'Treffen wir uns im Stadtzentrum, vor dem Kaufhaus?',
                    bn: 'আমরা কি শহরের কেন্দ্রে, শপিং মলের সামনে দেখা করব?' },
                { speaker: 'A', de: 'Alles klar! Also Samstag um 17 Uhr vor dem Kaufhaus. Ich freue mich. Bis dann!',
                    bn: 'ঠিক আছে! তাহলে শনিবার বিকাল ৫টায় মলের সামনে। আমি আসছি। পরে দেখা হবে!' },
                { speaker: 'B', de: 'Ich mich auch! Bis Samstag! Tschüss!',
                    bn: 'আমিও! শনিবারে দেখা হবে! বাই!' }
            ]
        }, {
            id: 2,
            title: 'Sonntagsausflug – In die Berge',
            icon: '🏔️',
            situation: '<strong>Du möchtest am Sonntag einen Ausflug machen. Was wollt ihr machen? Macht Vorschläge, diskutiert und findet eine Lösung.</strong>',
            situation_bn: 'তোমরা রবিবার একটি ভ্রমণে যেতে চাও। তোমরা কী করতে চাও? প্রস্তাব দাও, আলোচনা করো এবং একটি সমাধান বের করো।',
            candidateA: {
                label: 'Kandidat A (তোমার কার্ড)',
                items: [
                    'mit dem Fahrrad fahren (সাইকেলে যাওয়া)',
                    'an den See (হ্রদে যাওয়া)',
                    'schwimmen (সাঁতার কাটা)',
                    'im Restaurant essen (রেস্তোরাঁয় খাওয়া)'
                ]
            },
            candidateB: {
                label: 'Kandidat B (পার্টনারের কার্ড)',
                items: [
                    'mit dem Zug fahren (ট্রেনে যাওয়া)',
                    'in die Berge (পাহাড়ে যাওয়া)',
                    'wandern (হাইকিং করা)',
                    'etwas zu essen mitnehmen (সাথে খাবার নিয়ে যাওয়া)'
                ]
            },
            extra: {
                label: 'আপোষ ও চূড়ান্ত সিদ্ধান্ত',
                lines: [
                    'স্থান: পাহাড়ে যাবে, তবে পাহাড়ে অবস্থিত হ্রদে সাঁতারও কাটবে।',
                    'বাহন: বি-এর সাইকেল নষ্ট থাকায় ট্রেন (Zug) দিয়ে যাবে।',
                    'খাবার: রেস্তোরাঁ ব্যয়বহুল হওয়ায় বাড়ি থেকে আনা খাবার (Käsebrote, Obst, Wasser, Saft) খাবে।',
                    'সময় ও স্থান: রবিবার সকাল ৯:০০ টায় সেন্ট্রাল রেল স্টেশনে (Hauptbahnhof) দেখা করবে।'
                ]
            },
            lines: [
                { speaker: 'A', de: 'Hallo! Wie geht es dir? Hast du Lust, am Sonntag einen Ausflug zu machen?',
                    bn: 'হ্যালো! কেমন আছো? রবিবারে কি একটা ঘুরতে যাওয়ার ইচ্ছে আছে?' },
                { speaker: 'B', de: 'Hallo! Mir geht es gut, danke. Und dir? Ja, das ist eine super Idee! Wohin wollen wir fahren?',
                    bn: 'হ্যালো! আমি ভালো আছি, ধন্যবাদ। তুমি কেমন আছো? হ্যাঁ, এটা দুর্দান্ত আইডিয়া! আমরা কোথায় যেতে পারি?' },
                { speaker: 'A', de: 'Ich schlage vor: Wir fahren an den See.', bn: 'আমি প্রস্তাব করছি: আমরা হ্রদে (See) যেতে পারি।' },
                { speaker: 'B', de: 'Ach, am See ist es langweilig. Sollen wir lieber in die Berge fahren?',
                    bn: 'আরে, লেকে তো বোরিং। আমরা কি পাহাড়ে (Berge) যেতে পারি?' },
                { speaker: 'A', de: 'In die Berge? Das gefällt mir! In den Bergen gibt es auch einen schönen See.',
                    bn: 'পাহাড়ে? এটা আমার বেশ পছন্দ হয়েছে! পাহাড়েও একটি সুন্দর লেক আছে।' },
                { speaker: 'B', de: 'Klasse! Wie fahren wir? Wollen wir mit dem Zug fahren?',
                    bn: 'চমৎকার! আমরা কীভাবে যাব? আমরা কি ট্রেনে যেতে পারি?' },
                { speaker: 'A', de: 'Nein, Zugfahren ist teuer. Können wir mit dem Fahrrad fahren?',
                    bn: 'না, ট্রেনে যাওয়া অনেক ব্যয়বহুল। আমরা কি সাইকেলে যেতে পারি?' },
                { speaker: 'B', de: 'Mein Fahrrad ist leider kaputt. Fahren wir lieber mit dem Zug! Das ist schneller.',
                    bn: 'আমার সাইকেলটি দুর্ভাগ্যবশত নষ্ট। আমরা বরং ট্রেনেই যাই! ওটা অনেক দ্রুত হবে।' },
                { speaker: 'A', de: 'Okay, einverstanden. Wir nehmen den Zug.',
                    bn: 'ঠিক আছে, সম্মত হলাম। আমরা ট্রেনেই যাব।' },
                { speaker: 'B', de: 'Perfekt. In den Bergen können wir wandern.',
                    bn: 'দারুণ। পাহাড়ে আমরা পায়ে হেঁটে ঘুরে বেড়াতে (wandern) পারি।' },
                { speaker: 'A', de: 'Ja, wir wandern zuerst. Danach können wir im See schwimmen. Passt das?',
                    bn: 'হ্যাঁ, আমরা প্রথমে হাইকিং করব। তারপর লেকে সাঁতার কাটতে পারব। কেমন হবে?' },
                { speaker: 'B', de: 'Ja, das ist eine tolle Idee!', bn: 'হ্যাঁ, এটি একটি দারুণ আইডিয়া!' },
                { speaker: 'A', de: 'Nach dem Schwimmen können wir im Restaurant essen.',
                    bn: 'সাঁতার কাটার পর আমরা রেস্তোরাঁয় খেতে পারি।' },
                { speaker: 'B', de: 'Ein Restaurant ist teuer. Wollen wir lieber etwas zu essen mitnehmen?',
                    bn: 'রেস্টুরেন্ট অনেক ব্যয়বহুল। আমরা কি সাথে কিছু খাবার নিয়ে যেতে পারি?' },
                { speaker: 'A', de: 'Ja, kein Problem. Ich mache Käsebrote und bringe Obst mit. Und du?',
                    bn: 'হ্যাঁ, সমস্যা নেই। আমি চিজ-স্যান্ডউইচ বানাব এবং ফল নিয়ে আসব। আর তুমি?' },
                { speaker: 'B', de: 'Ich bringe Wasser und Saft mit.', bn: 'আমি পানি এবং জুস নিয়ে আসব।' },
                { speaker: 'A', de: 'Super! Wann fährt der Zug ab?', bn: 'চমৎকার! ট্রেন কখন ছাড়বে?' },
                { speaker: 'B', de: 'Am Sonntag um 9:00 Uhr am Hauptbahnhof. Passt das?',
                    bn: 'রবিবার সকাল ৯টায় সেন্ট্রাল স্টেশন থেকে। চলবে?' },
                { speaker: 'A', de: 'Ja, perfekt. Dann treffen wir uns am Sonntag um 9:00 Uhr am Bahnhof. Ich freue mich! Bis dann!',
                    bn: 'হ্যাঁ, পারফেক্ট। তাহলে রবিবার সকাল ৯টায় স্টেশনে দেখা হচ্ছে। আমি খুবই আনন্দিত! পরে দেখা হবে!' },
                { speaker: 'B', de: 'Bis Sonntag! Tschüss!', bn: 'রবিবারে দেখা হবে! বাই!' }
            ]
        }, {
            id: 3,
            title: 'Lerntermin vereinbaren – Deutschprüfung',
            icon: '📚',
            situation: '<strong>Du möchtest am Samstag zusammen mit deinem Partner für die Deutschprüfung lernen. Findet einen gemeinsamen Termin.</strong>',
            situation_bn: 'তোমরা আগামী শনিবারে একসাথে জার্মান পরীক্ষার প্রস্তুতি নেওয়ার জন্য পড়তে চাও। দুজনে মিলে আলোচনার মাধ্যমে একটি সুবিধাজনক সময় ঠিক করো।',
            candidateA: {
                label: 'Kandidat A (তোমার কার্ড)',
                items: [
                    '09:00–10:00 Uhr: Zimmer aufräumen (ঘর গোছানো)',
                    '11:00–13:00 Uhr: Oma besuchen (দাদি/নানিকে দেখতে যাওয়া)',
                    '15:00–17:00 Uhr: Fußball spielen (ফুটবল খেলা)'
                ]
            },
            candidateB: {
                label: 'Kandidat B (পার্টনারের কার্ড)',
                items: [
                    '10:00–12:00 Uhr: Hausaufgaben machen (হোমওয়ার্ক করা)',
                    '13:00–14:00 Uhr: Einkaufen (বাজার/কেনাকাটা করা)',
                    '17:00–19:00 Uhr: Paul treffen (পালের সাথে দেখা করা)'
                ]
            },
            extra: {
                label: 'উভয়ের ফাঁকা সময়',
                lines: ['14:00 Uhr (দুপুর ২:০০ টা) - এই সময়েই দুজনে দেখা করবে।']
            },
            lines: [
                { speaker: 'A', de: 'Hallo! Am Montag haben wir eine Deutschprüfung. Wollen wir am Samstag zusammen lernen?',
                    bn: 'হ্যালো! সোমবারে আমাদের একটা জার্মান পরীক্ষা আছে। আমরা কি শনিবারে একসাথে পড়াশোনা করতে পারি?' },
                { speaker: 'B', de: 'Hallo! Ja, das ist eine sehr gute Idee! Wann hast du Zeit? Passt es dir am Vormittag um 10:00 Uhr?',
                    bn: 'হ্যালো! হ্যাঁ, এটি একটি খুব ভালো আইডিয়া! তোমার কখন সময় হবে? সকাল ১০টায় কি তোমার সুবিধা হবে?' },
                { speaker: 'A', de: 'Nein, um 10:00 Uhr kann ich leider nicht. Ich muss mein Zimmer aufräumen. Geht es bei dir um 11:00 Uhr?',
                    bn: 'না, দুঃখিত ১০টায় আমি পারব না। আমাকে আমার ঘর গোছাতে হবে। ১১টায় কি তোমার চলবে?' },
                { speaker: 'B', de: 'Um 11:00 Uhr geht es leider auch nicht. Da mache ich meine Hausaufgaben. Hast du am Mittag um 13:00 Uhr Zeit?',
                    bn: 'দুর্ভাগ্যবশত ১১টাতেও আমার হবে না। তখন আমি হোমওয়ার্ক করব। দুপুরে ১টায় কি তোমার সময় হবে?' },
                { speaker: 'A', de: 'Nein, das tut mir leid. Von 11:00 bis 13:00 Uhr besuche ich meine Oma. Aber um 14:00 Uhr bin ich frei. Passt es dir?',
                    bn: 'না, দুঃখিত। ১১টা থেকে ১টা পর্যন্ত আমি আমার দাদিকে দেখতে যাব। তবে দুপুর ২টায় আমি একদম ফ্রি আছি। তোমার কি চলবে?' },
                { speaker: 'B', de: 'Ja, super! Das passt perfekt. Um 14:00 Uhr habe ich auch Zeit. Ich bin mit dem Einkaufen schon fertig.',
                    bn: 'হ্যাঁ, দারুণ! এটা একদম পারফেক্ট। দুপুর ২টায় আমারও সময় আছে। ততক্ষণে আমার কেনাকাটা করাও শেষ হয়ে যাবে।' },
                { speaker: 'A', de: 'Klasse! Wo wollen wir lernen? Treffen wir uns in der Stadtbibliothek?',
                    bn: 'চমৎকার! আমরা কোথায় পড়ব? আমরা কি সিটি লাইব্রেরিতে (Stadtbibliothek) দেখা করতে পারি?' },
                { speaker: 'B', de: 'Ja, in der Bibliothek ist es sehr ruhig und wir können gut lernen. Also Samstag um 14:00 Uhr in der Stadtbibliothek. Ich freue mich!',
                    bn: 'হ্যাঁ, লাইব্রেরি অনেক শান্ত এবং আমরা ভালোভাবে পড়তে পারব। তাহলে শনিবার দুপুর ২টায় সিটি লাইব্রেরিতে দেখা হচ্ছে। আমি আনন্দিত!' },
                { speaker: 'A', de: 'Ich mich auch! Bis Samstag! Tschüss!', bn: 'আমিও! শনিবারে দেখা হবে! বাই!' }
            ]
        }, {
            id: 4,
            title: 'Kranke Katze – Zum Tierarzt',
            icon: '🐱',
            situation: '<strong>Ihr habt am Freitag keine Schule und wollt eure kranke Katze zum Tierarzt bringen. Wann könnt ihr euch treffen?</strong>',
            situation_bn: 'আগামী শুক্রবারে তোমাদের স্কুল বন্ধ এবং তোমরা তোমাদের অসুস্থ বিড়ালটিকে পশু চিকিৎসকের (Tierarzt) কাছে নিয়ে যেতে চাও। তোমরা কখন দেখা করতে পারো?',
            candidateA: {
                label: 'Kandidat A (তোমার কার্ড)',
                items: [
                    '09:00 Uhr: länger schlafen (দেরি করে ঘুমানো)',
                    '12:00–13:00 Uhr: mit Mario skaten (মারিওর সাথে স্কেটিং করা)',
                    '17:00 Uhr: einkaufen gehen (কেনাকাটা করতে যাওয়া)'
                ]
            },
            candidateB: {
                label: 'Kandidat B (পার্টনারের কার্ড)',
                items: [
                    '09:00–10:00 Uhr: gemütlich frühstücken (আরামে সকালের নাস্তা করা)',
                    '14:00–16:00 Uhr: Bücher in die Bibliothek abgeben (লাইব্রেরিতে বই ফেরত দেওয়া)',
                    '18:00–19:00 Uhr: mit Mama das Abendessen kochen (মায়ের সাথে রাতের খাবার রান্না করা)'
                ]
            },
            extra: {
                label: 'উভয়ের ফাঁকা সময়',
                lines: ['10:00 Uhr / 11:00 Uhr (সকাল ১০:০০ টা বা ১১:০০ টা) - এর যেকোনো একটিতে দুজনে দেখা করতে পারবে।']
            },
            lines: [
                { speaker: 'A', de: 'Hallo! Wie geht es dir? Unsere Katze ist leider krank. Wollen wir sie am Freitag zusammen zum Tierarzt bringen?',
                    bn: 'হ্যালো! কেমন আছো? আমাদের বিড়ালটি দুর্ভাগ্যবশত অসুস্থ। আমরা কি শুক্রবারে একসাথে ওকে পশু চিকিৎসকের কাছে নিয়ে যাব?' },
                { speaker: 'B', de: 'Hallo! Mir geht es gut, danke. Ja, das müssen wir unbedingt machen! Wann hast du Zeit? Treffen wir uns am Freitag um 9:00 Uhr?',
                    bn: 'হ্যালো! আমি ভালো আছি, ধন্যবাদ। হ্যাঁ, এটি আমাদের অবশ্যই করতে হবে! তোমার কখন সময় হবে? আমরা কি শুক্রবার সকাল ৯:০০ টায় দেখা করব?' },
                { speaker: 'A', de: 'Nein, um 9:00 Uhr kann ich leider nicht. Ich möchte am Freitag länger schlafen. Geht es bei dir um 12:00 Uhr?',
                    bn: 'না, দুঃখিত সকাল ৯:০০ টায় আমার হবে না। আমি শুক্রবারে একটু দেরি করে ঘুমাতে চাই। দুপুর ১২:০০ টায় কি তোমার চলবে?' },
                { speaker: 'B', de: 'Am Vormittag um 9:00 Uhr kann ich auch nicht, da frühstücke ich gemütlich. Aber um 12:00 Uhr geht es bei mir leider auch nicht.',
                    bn: 'সকালে ৯:০০ টায় আমিও পারব না, তখন আমি আরামে নাস্তা করব। তবে দুপুর ১২:০০ টায় দুর্ভাগ্যবশত আমারও চলবে না।' },
                { speaker: 'A', de: 'Warum passt dir 12:00 Uhr nicht?', bn: '১২:০০ টায় তোমার সমস্যা কী?' },
                { speaker: 'B', de: 'Von 12:00 bis 13:00 Uhr habe ich einen anderen Termin. Wie sieht es um 11:00 Uhr aus?',
                    bn: '১২:০০ টা থেকে ১:০০ টা পর্যন্ত আমার আরেকটি কাজ আছে। সকাল ১১:০০ টায় কেমন হয়?' },
                { speaker: 'A', de: 'Ja, super! Das passt perfekt. Um 11:00 Uhr bin ich frei und du hast auch Zeit.',
                    bn: 'হ্যাঁ, দারুণ! এটা একদম পারফেক্ট। ১১:০০ টায় আমিও ফ্রি আছি এবং তোমারও সময় আছে।' },
                { speaker: 'B', de: 'Klasse. Dann bringen wir die Katze um 11:00 Uhr zum Arzt.',
                    bn: 'চমৎকার। তাহলে আমরা সকাল ১১:০০ টায় বিড়ালটিকে ডাক্তারের কাছে নিয়ে যাব।' },
                { speaker: 'A', de: 'Gut. Aber wie fahren wir? Mein Auto ist kaputt. Fahren wir mit dem Bus?',
                    bn: 'ভালো। কিন্তু আমরা কীভাবে যাব? আমার গাড়িটি নষ্ট। আমরা কি বাসে যাব?' },
                { speaker: 'B', de: 'Nein, mit der Katze im Bus ist es schwierig. Ich kann meine Mutter fragen. Sie kann uns mit dem Auto fahren.',
                    bn: 'না, বিড়াল নিয়ে বাসে যাওয়া একটু কঠিন। আমি আমার মাকে বলতে পারি। উনি আমাদের গাড়িতে পৌঁছে দিতে পারবেন।' },
                { speaker: 'A', de: 'Oh, das ist sehr nett! Vielen Dank. Dann treffen wir uns am Freitag um 10:30 Uhr vor meinem Haus.',
                    bn: 'ওহ, এটি খুবই চমৎকার! অনেক ধন্যবাদ। তাহলে আমরা শুক্রবার সকাল ১০:৩০ মিনিটে আমার বাসার সামনে দেখা করছি।' },
                { speaker: 'B', de: 'Alles klar! Ich komme mit meiner Mutter. Bis Freitag! Tschüss!',
                    bn: 'সব ঠিক আছে! আমি আমার মায়ের সাথে আসব। শুক্রবারে দেখা হবে! বাই!' },
                { speaker: 'A', de: 'Tschüss!', bn: 'বাই!' }
            ]
        }, {
            id: 5,
            title: 'Marias Geschenk – Führerschein bestanden',
            icon: '🚗',
            situation: '<strong>Deine Freundin Maria hat ihre Führerscheinprüfung bestanden. Du möchtest zusammen mit deinem Partner ein Geschenk für sie kaufen. Findet ein Geschenk und vereinbart einen Termin.</strong>',
            situation_bn: 'তোমার বান্ধবী মারিয়া ড্রাইভিং লাইসেন্স পরীক্ষায় পাস করেছে। তুমি ওর জন্য একটি উপহার কিনতে চাও। দুজনে আলোচনা করে একটি উপহার নির্ধারণ করো এবং দেখা করার সময় ঠিক করো।',
            candidateA: {
                label: 'Kandidat A – উপহারের আইডিয়া',
                items: [
                    'Blumen (ফুল)',
                    'Rucksack (পিঠের ব্যাগ)',
                    'Stadtplan (শহরের মানচিত্র)'
                ]
            },
            candidateB: {
                label: 'Kandidat B – উপহারের আইডিয়া',
                items: [
                    'Kuchen (কেক)',
                    'Musik (মিউজিক)',
                    'Geldbörse (মানিব্যাগ)'
                ]
            },
            extra: {
                label: 'চূড়ান্ত সিদ্ধান্ত',
                lines: ['Geldbörse (মানিব্যাগ) - শনিবার বিকাল ৩টায় শপিং মলের সামনে কেনা হবে।']
            },
            lines: [
                { speaker: 'A', de: 'Hallo! Wie geht es dir? Maria hat ihre Führerscheinprüfung bestanden! Wollen wir zusammen ein Geschenk für sie kaufen?',
                    bn: 'হ্যালো! কেমন আছো? মারিয়া তার ড্রাইভিং লাইসেন্স পরীক্ষায় পাস করেছে! আমরা কি একসাথে ওর জন্য একটা উপহার কিনতে পারি?' },
                { speaker: 'B', de: 'Hallo! Mir geht es gut, danke. Und dir? Ja, unbedingt! Was für ein Geschenk schlägst du vor?',
                    bn: 'হ্যালো! আমি ভালো আছি, ধন্যবাদ। তুমি কেমন আছো? হ্যাঁ, অবশ্যই! তুমি কী উপহারের প্রস্তাব দিচ্ছ?' },
                { speaker: 'A', de: 'Maria reist gern in andere Städte. Sollen wir ihr einen Stadtplan schenken?',
                    bn: 'মারিয়া অন্য শহরে ভ্রমণ করতে পছন্দ করে। আমরা কি ওকে একটি শহরের মানচিত্র উপহার দেব?' },
                { speaker: 'B', de: 'Nein, ein Stadtplan ist langweilig. Sie hat doch ein Handy mit GPS. Wollen wir ihr lieber einen Kuchen backen?',
                    bn: 'না, শহরের মানচিত্র তো বোরিং। ওর মোবাইলে তো জিপিএস আছে। আমরা কি বরং ওর জন্য একটা কেক (Kuchen) বানাব?' },
                { speaker: 'A', de: 'Ein Kuchen ist nett, aber das ist kein richtiges Geschenk für die Prüfung. Wie wäre es mit Blumen?',
                    bn: 'কেক ভালো, কিন্তু পরীক্ষার জন্য এটা আসল উপহার না। ফুল (Blumen) কেমন হয়?' },
                { speaker: 'B', de: 'Blumen welken schnell. Wollen wir ihr stattdessen etwas Musik schenken, zum Beispiel eine CD für das Auto?',
                    bn: 'ফুল তো দ্রুত শুকিয়ে যায়। আমরা কি তার বদলে গাড়ির জন্য একটা মিউজিক (Musik) সিডি উপহার দিই?' },
                { speaker: 'A', de: 'Musik ist eine nette Idee, aber sie hört meistens Radio im Auto. Vielleicht passt ein Rucksack besser für ihre Ausflüge?',
                    bn: 'মিউজিক ভালো আইডিয়া, কিন্তু গাড়িতে সে বেশিরভাগ সময় রেডিও শোনে। ওর ভ্রমণের জন্য বরং একটা ব্যাকপ্যাক (Rucksack) বেশি উপযোগী হবে না?' },
                { speaker: 'B', de: 'Ein Rucksack ist praktisch, aber ich finde, die Größe passt nicht so gut als Geschenk. Schenken wir ihr lieber eine schöne Geldbörse?',
                    bn: 'ব্যাকপ্যাক দরকারী, কিন্তু আমার মনে হয় এর সাইজ উপহারের জন্য ঠিক না। আমরা বরং ওকে একটা সুন্দর মানিব্যাগ (Geldbörse) দিই?' },
                { speaker: 'A', de: 'Oh ja, eine Geldbörse ist sehr praktisch für das Auto! Bist du damit einverstanden?',
                    bn: 'ওহ হ্যাঁ, গাড়ির জন্য মানিব্যাগ খুবই দরকারি! তুমি কি এতে একমত?' },
                { speaker: 'B', de: 'Ja, das ist eine super Idee! Ich bin absolut einverstanden. Wann treffen wir uns, um das Geschenk zu kaufen?',
                    bn: 'হ্যাঁ, এটি একটি চমৎকার আইডিয়া! আমি পুরোপুরি একমত। উপহারটি কেনার জন্য আমরা কখন দেখা করব?' },
                { speaker: 'A', de: 'Passt es dir am Samstag um 15:00 Uhr?', bn: 'শনিবারে বিকাল ৩টায় কি তোমার সুবিধা হবে?' },
                { speaker: 'B', de: 'Ja, um 15:00 Uhr habe ich Zeit. Treffen wir uns im Stadtzentrum vor dem Kaufhaus. Wollen wir das so machen?',
                    bn: 'হ্যাঁ, ৩টায় আমার সময় আছে। আমরা শহরের কেন্দ্রে শপিং মলের সামনে দেখা করব। আমরা কি এভাবেই সিদ্ধান্ত চূড়ান্ত করব?' },
                { speaker: 'A', de: 'Ja, perfekt! Also, wir kaufen eine Geldbörse und treffen uns am Samstag um 15:00 Uhr vor dem Kaufhaus. Abgemacht! Ich freue mich.',
                    bn: 'হ্যাঁ, পারফেক্ট! তাহলে আমরা একটি মানিব্যাগ কিনছি এবং শনিবার বিকাল ৩টায় মলের সামনে দেখা করছি। চূড়ান্ত কথা রইল! আমি খুবই আনন্দিত।' },
                { speaker: 'B', de: 'Ich mich auch! Bis Samstag! Tschüss!', bn: 'আমিও! শনিবারে দেখা হবে! বাই!' }
            ]
        }];


// ---- T3 Bengali toggle + render ----
// (initialT3Render is defined in index.html core)
        function toggleT3Bengali() {
            t3ShowBengali = !t3ShowBengali;
            const btn = document.getElementById('t3-bengali-btn');
            if (t3ShowBengali) {
                btn.classList.add('bg-emerald-100', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-300');
                btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                btn.innerHTML = '<i class="fa-solid fa-language"></i>';
                showToast('Translation: AN');
            } else {
                btn.classList.remove('bg-emerald-100', 'dark:bg-emerald-900/30', 'text-emerald-700', 'dark:text-emerald-300');
                btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                btn.innerHTML = '<i class="fa-solid fa-language"></i>';
                showToast('Translation: AUS');
            }
            renderT3();
        }

// ---- T3 render ----
        function renderT3() {
            const grid = document.getElementById('t3-grid');
            const select = document.getElementById('t3-topic-select');
            const data = T3_DATA;
            
            // Populate dropdown if not already populated
            if (select && select.options.length <= 1) {
                data.forEach((d, idx) => {
                    const option = document.createElement('option');
                    option.value = String(d.id);
                    option.textContent = d.title;
                    select.appendChild(option);
                });
            }
            
            // Get selected topic
            const selectedTopic = select ? select.value : 'all';
            
            // Filter data based on selection
            let filteredData = data;
            if (selectedTopic !== 'all') {
                filteredData = data.filter(d => d.id == selectedTopic);
            }
            
            document.getElementById('t3-count').textContent = filteredData.length;
            animateCount(document.getElementById('t3-count'), filteredData.length);
            
            const cardsHTML = filteredData.map((d, idx) =>
                `<div class="bg-white dark:bg-ghSurface ring-1 ring-slate-900/5 dark:ring-white/5 rounded-2xl p-4 shadow-sm card-hover space-y-3">
                    <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 gap-2">
                        <div class="flex items-center gap-2 min-w-0 flex-1">
                            <span class="text-[12px] font-black px-2 py-0.5 rounded-full bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-300 shrink-0">প্রশ্ন ${d.id}</span>
                            <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white break-words min-w-0 flex-1">${d.title}</h3>
                            <span class="t3-card-icon shrink-0">${d.icon}</span>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <button id="t3-timer-btn-${d.id}" onclick="toggleT3Timer()" class="press-subtle px-2 py-1 rounded-lg text-[12px] font-bold transition-all bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-amber-100 dark:hover:bg-amber-900/30 hover:text-amber-700 dark:hover:text-amber-300 flex items-center gap-1" aria-label="Toggle Timer" title="Timer">
                                <i class="fa-solid fa-clock"></i><span id="t3-timer-display-${d.id}">3:00</span>
                            </button>
                            <button onclick="speakText('${d.situation.replace(/'/g,"\\'")}', this)" class="text-amber-400 hover:text-amber-300 p-1" aria-label="Read situation aloud"><i class="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>
                    <div class="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                        <p class="text-base text-slate-700 dark:text-slate-300">${d.situation}</p>
                        ${t3ShowBengali ? `<p class="bangla-t2-t3 text-[13px] text-slate-500 dark:text-slate-200">${d.situation_bn}</p>` : ''}
                    </div>
                    ${d.candidateA && d.candidateB ? `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div class="p-3 bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/50 rounded-xl space-y-1.5">
                            <div class="text-[12px] font-black text-sky-700 dark:text-sky-400 uppercase">👩 ${d.candidateA.label}</div>
                            <ul class="space-y-1">
                                ${d.candidateA.items.map(it => `<li class="text-[13px] text-slate-700 dark:text-slate-200 flex items-start gap-1.5">${t3ShowBengali ? `<span class="text-sky-500 mt-0.5">•</span><span class="bangla-t2-t3">${it}</span>` : `<span class="text-sky-500 mt-0.5">•</span><span>${it}</span>`}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-xl space-y-1.5">
                            <div class="text-[12px] font-black text-emerald-700 dark:text-emerald-400 uppercase">👦 ${d.candidateB.label}</div>
                            <ul class="space-y-1">
                                ${d.candidateB.items.map(it => `<li class="text-[13px] text-slate-700 dark:text-slate-200 flex items-start gap-1.5">${t3ShowBengali ? `<span class="text-emerald-500 mt-0.5">•</span><span class="bangla-t2-t3">${it}</span>` : `<span class="text-emerald-500 mt-0.5">•</span><span>${it}</span>`}</li>`).join('')}
                            </ul>
                        </div>
                    </div>` : ''}
                    ${d.extra ? `
                    <div class="p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-xl space-y-1">
                        <div class="text-[12px] font-black text-amber-700 dark:text-amber-400 uppercase">🏆 ${d.extra.label}</div>
                        ${t3ShowBengali ? `${d.extra.lines.map(l => `<p class="text-[13px] text-slate-700 dark:text-slate-200 bangla-t2-t3">${l}</p>`).join('')}` : `${d.extra.lines.map(l => `<p class="text-[13px] text-slate-700 dark:text-slate-300">${l}</p>`).join('')}`}
                    </div>` : ''}
                    <div class="space-y-2 overflow-y-auto pr-1">
                        ${d.lines.map(l =>
                            `<div class="p-2.5 ${l.speaker === 'A' ? 'bg-sky-50 dark:bg-sky-950/20 border-sky-200 dark:border-sky-900/50' : 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50'} rounded-xl border space-y-1">
                                <div class="flex items-center justify-between text-[12px] font-bold ${l.speaker === 'A' ? 'text-sky-700 dark:text-sky-400' : 'text-emerald-700 dark:text-emerald-400'}"><span>${l.speaker === 'A' ? '👩 Person A' : '👦 Person B'}</span><button onclick="speakText('${l.de.replace(/'/g,"\\'")}', this)" class="hover:underline"><i class="fa-solid fa-volume-high"></i></button></div>
                                <p class="text-base font-bold text-slate-900 dark:text-white">${l.de}</p>
                                <p class="bangla-t2-t3 text-[13px] text-slate-500 dark:text-slate-200">${t3ShowBengali ? l.bn : ''}</p>
                            </div>`
                        ).join('')}
                     </div>
                </div>`
             ).join('');
            renderWithSkeleton(grid, cardsHTML, initialT3Render);
            initialT3Render = false;
        }
