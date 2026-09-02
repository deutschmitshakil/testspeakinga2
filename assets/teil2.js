/* =============================================================
   TEIL 2 — Monolog / Speech (25 cards) + Timer
   ============================================================= */

// ---- T2 data (25 entries) ----
        // ---- Teil 2: 25 Monologe (Speech) ----
        const T2_DATA = [{
            id: 1,
            topic: 'Freizeit / Sport',
            q: 'Was machen Sie gern in Ihrer Freizeit?',
            speech: 'Hallo! Ich spreche heute über meine Freizeit.\n\nIn meiner Freizeit mache ich gern Sport. Ich spiele am Wochenende oft Fußball, denn Sport macht mir viel Spaß.\n\nIch gehe auch manchmal ins Kino. Ich sehe gern Filme mit Freunden, aber die Tickets sind oft teuer. Deshalb gehe ich nur einmal im Monat ins Kino.\n\nAm Wochenende besuche ich meine Freunde. Wir trinken zusammen Kaffee und sprechen viel, weil wir uns sehr gut verstehen.\n\nIch habe auch andere Aktivitäten. Ich lese abends Bücher oder höre Musik, denn das ist sehr entspannend.\n\nDas ist alles über meine Freizeit. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার অবসর সময় সম্পর্কে বলছি।\n\nআমার অবসর সময়ে আমি খেলাধুলা করতে পছন্দ করি। আমি সপ্তাহান্তে প্রায়ই ফুটবল খেলি, কারণ খেলাধুলা আমাকে অনেক আনন্দ দেয়।\n\nআমি মাঝে মাঝে সিনেমা দেখতে যাই। আমি বন্ধুদের সাথে সিনেমা দেখতে পছন্দ করি, কিন্তু টিকিটগুলো প্রায়ই অনেক দামী হয়। তাই আমি মাসে মাত্র একবার সিনেমা দেখতে যাই।\n\nসপ্তাহান্তে আমি আমার বন্ধুদের সাথে দেখা করি। আমরা একসাথে কফি পান করি এবং অনেক কথা বলি, কারণ আমাদের মধ্যে খুব ভালো বোঝাপড়া আছে।\n\nআমার অন্যান্য কিছু কার্যকলাপও আছে। আমি সন্ধ্যায় বই পড়ি বা গান শুনি, কারণ এটি খুব শান্তিদায়ক।\n\nআমার অবসর সময় সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Sport?',
                top_right: 'Kino?',
                bottom_left: 'Freunde besuchen?',
                bottom_right: 'Andere Aktivitäten?'
            }
         }, {
            id: 2,
            topic: 'Geld / Einkaufen',
            q: 'Was machen Sie mit Ihrem Geld?',
            speech: 'Hallo! Ich spreche heute über mein Geld.\n\nIch bekomme jeden Monat Geld aus meinem Gehalt. Zuerst bezahle ich meine Miete und Lebensmittel, weil das sehr wichtig ist. Ich kaufe jede Woche frisches Essen.\n\nManchmal kaufe ich auch neue Kleidung, wenn ich etwas brauche. Aber ich kaufe nicht zu viel, denn Kleidung ist oft teuer.\n\nIch möchte auch Geld sparen. Ich spare jeden Monat einen kleinen Betrag, deshalb habe ich einen guten Überblick über mein Geld. Das ist sehr wichtig für die Zukunft.\n\nWenn ich genug gespart habe, möchte ich reisen. Ich mache im Sommer gern eine Reise, denn Reisen macht mich glücklich und ich lerne neue Orte kennen.\n\nDas ist alles über mein Geld. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার টাকা সম্পর্কে বলছি।\n\nআমি প্রতি মাসে আমার বেতন থেকে টাকা পাই। প্রথমে আমি আমার বাড়িভাড়া এবং খাবার খরচ দিই, কারণ এটি খুব গুরুত্বপূর্ণ। আমি প্রতি সপ্তাহে তাজা খাবার কিনি।\n\nকখনও কখনও আমি নতুন পোশাকও কিনি, যখন আমার কিছু প্রয়োজন হয়। কিন্তু আমি খুব বেশি কিনি না, কারণ পোশাক প্রায়ই ব্যয়বহুল হয়।\n\nআমি টাকা জমাতেও চাই। আমি প্রতি মাসে অল্প পরিমাণ টাকা সঞ্চয় করি, তাই আমার টাকা সম্পর্কে একটি ভালো ধারণা থাকে। ভবিষ্যতের জন্য এটি খুবই গুরুত্বপূর্ণ।\n\nযখন আমি যথেষ্ট সঞ্চয় করি, তখন আমি ভ্রমণ করতে চাই। আমি গ্রীষ্মকালে ভ্রমণে যেতে পছন্দ করি, কারণ ভ্রমণ আমাকে আনন্দ দেয় এবং আমি নতুন জায়গা দেখতে পারি।\n\nআমার টাকা সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Kleidung?',
                top_right: 'Lebensmittel, Miete?',
                bottom_left: 'Sparen?',
                bottom_right: 'Reisen?'
            }
         }, {
            id: 3,
            topic: 'Familie',
            q: 'Was machen Sie mit Ihrer Familie?',
            speech: 'Hallo! Ich spreche heute über meine Familie.\n\nWir essen sehr oft gemeinsam, besonders am Wochenende. Wir kochen zusammen und sprechen viel beim Essen, weil das sehr gemütlich ist.\n\nManchmal sehen wir am Abend zusammen fern. Wir schauen Nachrichten oder einen Film, aber wir sehen nicht zu viel fern, denn wir sprechen lieber miteinander.\n\nBei allen Festen feiern wir zusammen. Wir feiern Geburtstage oder besondere Tage mit der Familie, deshalb kochen wir etwas Leckeres und hören Musik.\n\nWenn das Wetter gut ist, gehen wir zusammen spazieren. Wir gehen oft im Park spazieren, denn das macht Spaß und ist gut für die Gesundheit.\n\nDas ist alles. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার পরিবার সম্পর্কে বলছি।\n\nআমরা খুব প্রায়ই একসাথে খাই, বিশেষ করে সপ্তাহান্তে। আমরা একসাথে রান্না করি এবং খাওয়ার সময় অনেক কথা বলি, কারণ এটি খুবই আরামদায়ক।\n\nমাঝে মাঝে আমরা সন্ধ্যায় একসাথে টিভি দেখি। আমরা খবর বা একটি সিনেমা দেখি, কিন্তু আমরা খুব বেশি টিভি দেখি না, কারণ আমরা একে অপরের সাথে কথা বলতে বেশি পছন্দ করি।\n\nসব উৎসবে আমরা একসাথে উদযাপন করি। আমরা পরিবারের সাথে জন্মদিন বা বিশেষ দিন উদযাপন করি, তাই আমরা সুস্বাদু কিছু রান্না করি এবং গান শুনি।\n\nআবহাওয়া ভালো থাকলে আমরা একসাথে হাঁটতে যাই। আমরা প্রায়ই পার্কে হাঁটতে যাই, কারণ এটি আনন্দদায়ক এবং স্বাস্থ্যের জন্য ভালো।\n\nএটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'fernsehen',
                top_right: 'essen',
                bottom_left: 'Feste',
                bottom_right: 'spazieren gehen'
            }
         }, {
            id: 4,
            topic: 'Wochenende',
            q: 'Was machen Sie oft am Wochenende?',
            speech: 'Hallo! Ich spreche heute über mein Wochenende.\n\nAm Wochenende möchte ich mich zuerst ausruhen. Ich habe viel Zeit für mich, denn unter der Woche arbeite ich viel.\n\nIch mache auch oft Sport. Ich gehe im Park joggen oder spiele Fußball, weil Sport gut für die Gesundheit ist und Spaß macht.\n\nManchmal besuche ich meine Freunde. Wir trinken zusammen Kaffee und sprechen viel, aber wir gehen auch zusammen spazieren.\n\nAm Abend habe ich Zeit für andere Aktivitäten. Ich sehe manchmal einen Film oder lese ein Buch, deshalb bin ich am Abend sehr entspannt.\n\nDas ist alles über mein Wochenende. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার সপ্তাহান্ত সম্পর্কে বলছি।\n\nসপ্তাহান্তে আমি প্রথমে বিশ্রাম নিতে চাই। আমার কাছে নিজের জন্য অনেক সময় থাকে, কারণ সপ্তাহের কর্মদিবসে আমি অনেক কাজ করি।\n\nআমি প্রায়ই খেলাধুলা করি। আমি পার্কে দৌড়াতে যাই বা ফুটবল খেলি, কারণ খেলাধুলা স্বাস্থ্যের জন্য ভালো এবং আনন্দদায়ক।\n\nমাঝে মাঝে আমি আমার বন্ধুদের সাথে দেখা করি। আমরা একসাথে কফি পান করি এবং অনেক কথা বলি, কিন্তু আমরা একসাথে হাঁটতেও যাই।\n\nসন্ধ্যায় আমার অন্যান্য কাজকর্মের জন্য সময় থাকে। আমি মাঝে মাঝে সিনেমা দেখি বা বই পড়ি, তাই সন্ধ্যায় আমি খুব শান্ত থাকি।\n\nআমার সপ্তাহান্ত সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Sport, ...?',
                top_right: 'Mit wem?',
                bottom_left: 'Jemanden besuchen?',
                bottom_right: 'Wo?'
            }
         }, {
            id: 5,
            topic: 'Ausgehen',
            q: 'Was machen Sie, wenn Sie am Abend ausgehen?',
            speech: 'Hallo! Ich spreche heute über das Ausgehen am Abend.\n\nWenn ich ausgehe, gehe ich oft mit Freunden essen. Wir probieren gern neue Gerichte im Restaurant, denn das Essen schmeckt sehr gut.\n\nManchmal gehe ich am Wochenende in einen Club. Wir hören Musik und tanzen ein bisschen, weil das viel Spaß macht.\n\nIch besuche auch manchmal ein Konzert. Ich mag Live-Musik sehr, deshalb gehe ich oft mit meinen Freunden dorthin.\n\nWenn ich etwas Ruhiges möchte, gehe ich ins Theater. Ich sehe dort ein schönes Theaterstück, denn das ist sehr interessant und entspannend.\n\nDas ist alles. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ সন্ধ্যায় বাইরে যাওয়া সম্পর্কে বলছি।\n\nআমি যখন বাইরে যাই, আমি প্রায়ই বন্ধুদের সাথে খেতে যাই। আমরা রেস্টুরেন্টে নতুন খাবার চেষ্টা করি, কারণ খাবার খুব সুস্বাদু হয়।\n\nমাঝে মাঝে আমি সপ্তাহান্তে কোনো ক্লাব এ যাই। আমরা গান শুনি এবং একটু নাচি, কারণ এটি অনেক আনন্দদায়ক।\n\nআমি মাঝে মাঝে কোনো কনসার্টেও যাই। আমি সরাসরি গান শুনতে খুব পছন্দ করি, তাই আমি প্রায়ই আমার বন্ধুদের সাথে সেখানে যাই।\n\nআমি যদি একটু শান্ত পরিবেশ চাই, তবে থিয়েটারে যাই। আমি সেখানে একটি সুন্দর নাটক দেখি, কারণ এটি খুবই আকর্ষণীয় এবং আরামদায়ক।\n\nএটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Club/Disko?',
                top_right: 'essen',
                bottom_left: 'Konzert',
                bottom_right: 'Theater?'
            }
         }, {
            id: 6,
            topic: 'Urlaub',
            q: 'Wie machen Sie gerne Urlaub?',
            speech: 'Hallo! Ich spreche heute über meinen Urlaub.\n\nIm Urlaub fahre ich am liebsten an den Strand. Aber manchmal fahre ich auch in die Berge, denn die Natur ist sehr schön.\n\nIch reise fast immer mit meiner Familie. Wir verbringen gern Zeit zusammen, weil wir unter der Woche viel arbeiten.\n\nAls Unterkunft buchen wir meistens ein Hotel. Das ist sehr bequem, aber manchmal mieten wir auch eine kleine Ferienwohnung.\n\nIm Urlaub habe ich viele Aktivitäten. Am Strand gehe ich schwimmen und in den Bergen gehe ich wandern, deshalb bin ich immer sehr aktiv.\n\nDas ist alles über meinen Urlaub. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার ছুটি সম্পর্কে বলছি।\n\nছুটিতে আমি সমুদ্রে যেতে সবচেয়ে পছন্দ করি। তবে মাঝে মাঝে আমি পাহাড়েও যাই, কারণ প্রকৃতি খুব সুন্দর।\n\nআমি প্রায় সবসময় আমার পরিবারের সাথে ভ্রমণ করি। আমরা একসাথে সময় কাটাতে পছন্দ করি, কারণ সপ্তাহের কর্মদিবসে আমরা অনেক কাজ করি।\n\nরাত্রিযাপনের জন্য আমরা সাধারণত একটি হোটেল বুক করি। এটি খুব আরামদায়ক, তবে মাঝে মাঝে আমরা একটি ছোট ছুটির অ্যাপার্টমেন্টও ভাড়া নিই।\n\nছুটিতে আমার অনেক কাজকর্ম থাকে। আমি সমুদ্রে সাঁতার কাটতে যাই এবং পাহাড়ে হাইকিং করি, তাই আমি সবসময় খুব সক্রিয় থাকি।\n\nআমার ছুটি সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'mit wem?',
                top_right: 'Wohin?',
                bottom_left: 'Wie reisen?',
                bottom_right: 'In welchem Monat?'
            }
         }, {
            id: 7,
            topic: 'Einkaufen',
            q: 'Wo kaufen Sie am liebsten ein?',
            speech: 'Hallo! Ich spreche heute über das Einkaufen.\n\nIch kaufe sehr oft online ein. Ich bestelle gerne Kleidung und Bücher im Internet, denn das ist schnell und sehr bequem.\n\nAm Wochenende gehe ich gern auf die Märkte. Ich kaufe dort frisches Obst und Gemüse, weil die Qualität sehr gut ist.\n\nJede Woche gehe ich auch in den Supermarkt. Ich kaufe dort alle wichtigen Lebensmittel für die Woche, deshalb spare ich viel Zeit.\n\nManchmal kaufe ich in kleinen Geschäften ein. Ich finde dort besondere Dinge und die Leute sind sehr nett.\n\nDas ist alles über mein Einkaufen. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ কেনাকাটা সম্পর্কে বলছি।\n\nআমি খুব প্রায়ই অনলাইনে কেনাকাটা করি। আমি ইন্টারনেটে পোশাক এবং বই অর্ডার করি, কারণ এটি দ্রুত এবং খুব সুবিধাজনক।\n\nসপ্তাহান্তে আমি বাজারে যাই। আমি সেখান থেকে তাজা ফলমূল এবং শাকসবজি কিনি, কারণ সেগুলোর মান খুব ভালো।\n\nপ্রতি সপ্তাহে আমি সুপারমার্কেটেও যাই। আমি সেখান থেকে সপ্তাহের জন্য সমস্ত প্রয়োজনীয় খাবার কিনি, তাই আমার অনেক সময় বাঁচে।\n\nমাঝে মাঝে আমি ছোট দোকানগুলোতে কেনাকাটা করি। আমি সেখানে বিশেষ জিনিসপত্র খুঁজে পাই এবং মানুষগুলো খুব ভালো।\n\nআমার কেনাকাটা সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Online?',
                top_right: 'Auf Märkten?',
                bottom_left: 'Im Supermarkt?',
                bottom_right: 'In kleinen Geschäften?'
            }
         }, {
            id: 8,
            topic: 'Wohnen',
            q: 'Wie möchten Sie gern wohnen?',
            speech: 'Hallo! Ich spreche heute über meine Wohnung.\n\nIch möchte in einer Wohnung mit drei Zimmern wohnen. Ein Wohnzimmer und zwei Schlafzimmer sind perfekt für mich, denn ich brauche genug Platz.\n\nIch möchte nicht allein wohnen. Ich wohne lieber mit meiner Familie zusammen, weil das sehr gemütlich und schön ist.\n\nIch wohne sehr gern in einer Großstadt. Dort gibt es viele Geschäfte, Restaurants und Busse, deshalb ist das Leben hier sehr praktisch.\n\nIch möchte auch ein Haustier haben. Ich mag Hunde sehr, aber eine Katze ist auch schön, weil sie sehr süß ist.\n\nDas ist alles über mein Wohnen. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার বাসস্থান সম্পর্কে বলছি।\n\nআমি তিনটি ঘর বিশিষ্ট একটি ফ্ল্যাটে থাকতে চাই। একটি বসার ঘর এবং দুটি শোয়ার ঘর আমার জন্য উপযুক্ত, কারণ আমার পর্যাপ্ত জায়গার প্রয়োজন।\n\nআমি একা থাকতে চাই না। আমি পরিবারের সাথে একসাথে থাকতে বেশি পছন্দ করি, কারণ এটি খুবই আরামদায়ক এবং সুন্দর।\n\nআমি বড় শহরে থাকতে খুব পছন্দ করি। সেখানে অনেক দোকান, রেস্তোরাঁ এবং বাস আছে, তাই এখানে জীবনযাপন করা খুবই সুবিধাজনক।\n\nআমি একটি পোষা প্রাণীও রাখতে চাই। আমি কুকুর খুব পছন্দ করি, তবে বিড়ালও সুন্দর, কারণ এটি খুব কিউট।\n\nআমার বাসস্থান সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Wie viele Zimmer?',
                top_right: 'Großstadt?',
                bottom_left: 'Allein?',
                bottom_right: 'Haustiere?'
            }
         }, {
            id: 9,
            topic: 'Arbeitstag',
            q: 'Was machen Sie an einem normalen Arbeitstag?',
            speech: 'Hallo! Ich spreche heute über meinen Arbeitstag.\n\nIch muss am Morgen sehr früh aufstehen. Ich stehe normalerweise um sechs Uhr auf, denn mein Arbeitstag beginnt schon früh.\n\nNach dem Aufstehen mache ich mein Frühstück. Ich trinke einen Kaffee und esse ein Brot, weil das viel Energie gibt.\n\nAm Nachmittag gehe ich einkaufen. Ich kaufe frische Lebensmittel im Supermarkt und koche Abendessen. Ich esse gesund.\n\nAm Abend habe ich Zeit für Fernsehen. Ich sehe meistens die Nachrichten oder einen Film, denn das ist sehr entspannend.\n\nDas ist alles über meinen Arbeitstag. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার কর্মদিবস সম্পর্কে বলছি।\n\nআমি সকালে খুব ভোরে উঠতে হয়। আমি সাধারণত সকাল ছয়টায় উঠি, কারণ আমার কর্মদিবস খুব সকালেই শুরু হয়।\n\nওঠার পর আমি আমার প্রাতরাশ তৈরি করি। আমি কফি পান করি এবং রুটি খাই, কারণ এটি প্রচুর শক্তি দেয়।\n\nবিকালে আমি কেনাকাটা করি। আমি সুপারমার্কেট থেকে তাজা খাবার কিনি এবং রাতের খাবার রান্না করি। আমি স্বাস্থ্যকর খাবার খাই।\n\nসন্ধ্যায় আমার অন্যান্য কাজকর্মের জন্য সময় থাকে। আমি মাঝে মাঝে সিনেমা দেখি বা বই পড়ি, তাই সন্ধ্যায় আমি খুব শান্ত থাকি।\n\nআমার কর্মদিবস সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Aufstehen',
                top_right: 'Frühstück',
                bottom_left: 'Einkaufen / Kochen',
                bottom_right: 'Fernsehen'
            }
         }, {
            id: 10,
            topic: 'Freunde',
            q: 'Was machen Sie gern mit Ihren Freunden zusammen?',
            speech: 'Hallo! Ich spreche heute über meine Aktivitäten mit Freunden.\n\nWir spielen manchmal zusammen Computerspiele. Wir spielen am Abend online zusammen, denn das macht viel Spaß.\n\nWir machen auch oft zusammen Sport. Wir spielen Fußball im Park oder machen unsere Hobbys, weil Sport sehr gesund ist.\n\nIm Sommer machen wir kleine Ausflüge und wandern. Wir gehen gern in der Natur spazieren, deshalb nehmen wir immer Essen und Trinken mit.\n\nBesonders am Wochenende treffen wir uns sehr oft. Wir trinken zusammen Kaffee und sprechen viel, weil wir uns sehr gut verstehen.\n\nDas ist alles. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ বন্ধুদের সাথে আমার কাজকর্ম সম্পর্কে বলছি।\n\nআমরা মাঝে মাঝে একসাথে কম্পিউটার গেম খেলি। আমরা সন্ধ্যায় অনলাইনে খেলি, কারণ এটি অনেক আনন্দদায়ক।\n\nআমরা প্রায়ই একসাথে খেলাধুলা করি। আমরা পার্কে ফুটবল খেলি বা আমাদের শখ পূরণ করি, কারণ খেলাধুলা স্বাস্থ্যের জন্য খুব ভালো।\n\nগ্রীষ্মকালে আমরা ছোটখাটো ভ্রমণ করি এবং হাইকিং করি। আমরা প্রকৃতিতে হাঁটতে যাই, তাই আমরা সবসময় খাবার এবং পানীয় সাথে নিই।\n\nবিশেষ করে সপ্তাহান্তে আমরা খুব প্রায়ই দেখা করি। আমরা একসাথে কফি পান করি এবং অনেক কথা বলি, কারণ আমাদের মধ্যে খুব ভালো বোঝাপড়া আছে।\n\nএটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Computerspiele?',
                top_right: 'Sport / Hobbys?',
                bottom_left: 'Ausflüge / Wandern?',
                bottom_right: 'Am Wochenende?'
            }
         }, {
            id: 11,
            topic: 'Internet',
            q: 'Was machen Sie oft im Internet?',
            speech: 'Hallo! Ich spreche heute über das Internet.\n\nIch nutze das Internet für Spiele, Musik und Filme. Ich höre täglich Musik und sehe am Abend gern Filme, denn das ist sehr entspannend.\n\nIch brauche den Computer auch zum Arbeiten. Ich schreibe jeden Tag E-Mails und suche Informationen, weil das für meinen Job wichtig ist.\n\nIch bin auch oft in sozialen Netzwerken. Ich schreibe mit meinen Freunden und teile Fotos, deshalb bleibe ich mit allen in Kontakt.\n\nAber wie oft bin ich online? Ich bin jeden Tag im Internet. Ich mache auch oft Einkaufen im Internet, denn das ist sehr bequem.\n\nDas ist alles. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ ইন্টারনেট সম্পর্কে বলছি।\n\nআমি গেম, গান এবং সিনেমা জন্য ইন্টারনেট ব্যবহার করি। আমি প্রতিদিন গান শুনি এবং সন্ধ্যায় সিনেমা দেখতে পছন্দ করি, কারণ এটি খুবই আরামদায়ক।\n\nআমি কাজ করার জন্য কম্পিউটার প্রয়োজন। আমি প্রতিদিন ইমেল লিখি এবং তথ্য খুঁজি, কারণ এটি আমার চাকরির জন্য গুরুত্বপূর্ণ।\n\nআমি প্রায়ই সোশ্যাল মিডিয়াতেও যুক্ত থাকি। আমি বন্ধুদের সাথে মেসেজ করি এবং ছবি শেয়ার করি, তাই আমি সবার সাথে যোগাযোগ রাখতে পারি।\n\nতবে আমি কত ঘন ঘন অনলাইনে থাকি? আমি প্রতিদিন ইন্টারনেটে থাকি। আমি প্রায়ই ইন্টারনেটে কেনাকাটাও করি, কারণ এটি খুব সুবিধাজনক।\n\nএটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Spiele, Musik, Filme?',
                top_right: 'Arbeiten? Soziale Netzwerke?',
                bottom_left: 'Wie oft? Internet?',
                bottom_right: 'Einkaufen?'
            }
         }, {
            id: 12,
            topic: 'Geburtstag',
            q: 'Wie feiern Sie Ihren Geburtstag?',
            speech: 'Hallo! Ich spreche heute über meinen Geburtstag.\n\nIch feiere meinen Geburtstag immer im Sommer. Ich habe im August Geburtstag, deshalb ist das Wetter meistens sehr schön.\n\nManchmal möchte ich am Wochenende wegfahren. Ich mache einen kleinen Ausflug mit meiner Familie, weil wir zusammen entspannen möchten.\n\nZu Hause esse ich am Nachmittag immer eine leckere Torte. Meine Frau backt eine Schokoladentorte, denn ich liebe Süßigkeiten.\n\nAm Abend mache ich eine kleine Party. Ich lade meine Freunde ein, wir hören Musik und tanzen viel. Das macht immer großen Spaß.\n\nDas ist alles über meinen Geburtstag. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার জন্মদিন সম্পর্কে বলছি।\n\nআমি সবসময় গ্রীষ্মকালে আমার জন্মদিন উদযাপন করি। আগস্ট মাসে আমার জন্মদিন, তাই আবহাওয়া সাধারণত খুব সুন্দর থাকে।\n\nমাঝে মাঝে আমি সপ্তাহান্তে বাইরে কোথাও ঘুরতে যাই। আমি আমার পরিবারের সাথে একটি ছোট ভ্রমণে যাই, কারণ আমরা একসাথে বিশ্রাম নিতে চাই।\n\nবাড়িতে বিকালে আমি সবসময় একটি সুস্বাদু কেক খাই। আমার স্ত্রী একটি চকোলেট কেক তৈরি করে, কারণ আমি মিষ্টি খুব পছন্দ করি।\n\nসন্ধ্যায় আমি একটি ছোট পার্টি করি। আমি আমার বন্ধুদের আমন্ত্রণ জানাই, আমরা গান শুনি এবং অনেক নাচি। এটি সবসময় খুব আনন্দদায়ক হয়।\n\nআমার জন্মদিন উদযাপন সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Wegfahren?',
                top_right: 'Torte?',
                bottom_left: 'Party?',
                bottom_right: 'Wann?'
            }
         }, {
            id: 13,
            topic: 'Sport',
            q: 'Wie machen Sie Sport?',
            speech: 'Hallo! Ich spreche heute über Sport.\n\nIch mache meistens allein Sport, aber manchmal spiele ich auch in einer Mannschaft. Ich spiele am Wochenende mit Freunden Fußball, denn das macht viel Spaß.\n\nWas mache ich noch? Ich gehe sehr gern joggen oder schwimmen. Ich finde Laufen sehr gut, weil es gesund ist.\n\nAber wie lange mache ich Sport? Ich trainiere normalerweise dreimal in der Woche für eine Stunde, deshalb fühle ich mich fit.\n\nIm Sommer mache ich Sport lieber draußen im Park. Im Winter gehe ich nach drinnen ins Fitnessstudio, denn draußen ist es sehr kalt.\n\nDas ist alles über meinen Sport. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ খেলাধুলা সম্পর্কে বলছি।\n\nআমি সাধারণত একা একা ব্যায়াম করি, তবে মাঝে মাঝে দলের সাথেও খেলি। আমি সপ্তাহান্তে বন্ধুদের সাথে ফুটবল খেলি, কারণ এটি অনেক আনন্দদায়ক।\n\nআমি আর কী করি? আমি দৌড়াতে বা সাঁতার কাটতে খুব পছন্দ করি। আমি মনে করি দৌড়ানো খুব ভালো, কারণ এটি স্বাস্থ্যকর।\n\nতবে আমি কতক্ষণ ব্যায়াম করি? আমি সাধারণত সপ্তাহে তিনবার এক ঘণ্টার জন্য অনুশীলন করি, তাই আমি ফিট অনুভব করি।\n\nগ্রীষ্মকালে আমি বাইরে পার্কে ব্যায়াম করতে বেশি পছন্দ করি। শীতকালে আমি ঘরের ভেতরে ফিটনেস স্টুডিওতে যাই, কারণ বাইরে খুব ঠান্ডা থাকে।\n\nআমার খেলাধুলা সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Allein/Mannschaft?',
                top_right: 'Was?',
                bottom_left: 'Wie lange?',
                bottom_right: 'Drinnen/Draußen?'
            }
         }, {
            id: 14,
            topic: 'Arbeitsplatz',
            q: 'Was machen Sie an Ihrem Arbeitsplatz?',
            speech: 'Hallo! Ich spreche heute über meinen Arbeitsplatz.\n\nWo arbeite ich? Ich arbeite in einem großen Büro im Stadtzentrum, denn die Lage ist sehr gut und zentral.\n\nMeine Arbeitszeit ist von Montag bis Freitag. Ich arbeite von acht Uhr morgens bis fünf Uhr nachmittags, deshalb habe ich am Abend frei.\n\nIch habe viele verschiedene Aufgaben. Ich schreibe E-Mails, telefoniere mit Kunden und mache Berichte am Computer, weil das mein Job ist.\n\nMeine Kollegen sind sehr nett und hilfsbereit. Wir trinken oft zusammen Kaffee und sprechen viel, deshalb arbeite ich hier sehr gern.\n\nDas ist alles über meinen Arbeitsplatz. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার কর্মস্থল সম্পর্কে বলছি।\n\nআমি কোথায় কাজ করি? আমি শহরের কেন্দ্রের একটি বড় অফিসে কাজ করি, কারণ এর অবস্থান খুব ভালো এবং কেন্দ্রস্থলে।\n\nআমার কাজের সময় সোমবার থেকে শুক্রবার পর্যন্ত। আমি সকাল আটটা থেকে বিকাল পাঁচটা পর্যন্ত কাজ করি, তাই সন্ধ্যায় আমি ফ্রি থাকি।\n\nআমার অনেক ধরনের কাজ আছে। আমি ইমেল লিখি, গ্রাহকদের সাথে ফোনে কথা বলি এবং কম্পিউটারে রিপোর্ট তৈরি করি, কারণ এটি আমার কাজ।\n\nআমার কর্মস্থল সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Wo?',
                top_right: 'Aufgaben?',
                bottom_left: 'Arbeitszeit?',
                bottom_right: 'Kollegen?'
            }
         }, {
            id: 15,
            topic: 'Gesundheit',
            q: 'Was tun Sie für Ihre Gesundheit?',
            speech: 'Hallo! Ich spreche heute über meine Gesundheit.\n\nIch mache regelmäßig Sport. Ich gehe dreimal in der Woche im Park joggen, denn Bewegung ist sehr gut für das Herz.\n\nAuch meine Ernährung ist mir wichtig. Ich esse jeden Tag viel Obst und frisches Gemüse, weil das gesund ist und Vitamin C hat.\n\nEinmal im Jahr gehe ich zum Arzt. Der Arzt kontrolliert mich und gibt mir gute Tipps, deshalb fühle ich mich sicher.\n\nZum Schluss brauche ich auch Erholung. Ich schlafe jede Nacht acht Stunden und lese am Abend ein Buch, denn das ist sehr entspannend.\n\nDas ist alles über meine Gesundheit. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার স্বাস্থ্য সম্পর্কে বলছি।\n\nআমি নিয়মিত খেলাধুলা করি। আমি সপ্তাহে তিনবার পার্কে দৌড়াতে যাই, কারণ শারীরিক পরিশ্রম হৃদযন্ত্রের জন্য খুব ভালো।\n\nআমার খাদ্যাভ্যাসও আমার কাছে গুরুত্বপূর্ণ। আমি প্রতিদিন প্রচুর ফলমূল এবং তাজা শাকসবজি খাই, কারণ এটি স্বাস্থ্যকর এবং এতে ভিটামিন সি রয়েছে।\n\nবছরে একবার আমি ডাক্তারের কাছে যাই। ডাক্তার আমাকে পরীক্ষা করেন এবং ভালো পরামর্শ দেন, তাই আমি নিরাপদ বোধ করি।\n\nসবশেষে আমার বিশ্রামেরও প্রয়োজন। আমি প্রতি রাতে আট ঘণ্টা ঘুমাই এবং সন্ধ্যায় একটি বই পড়ি, কারণ এটি খুবই আরামদায়ক।\n\nআমার স্বাস্থ্য সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Sport?',
                top_right: 'Ernährung?',
                bottom_left: 'Arzt?',
                bottom_right: 'Erholung?'
            }
         }, {
            id: 16,
            topic: 'Kleidung',
            q: 'Welche Kleidung tragen Sie gern?',
            speech: 'Hallo! Ich spreche heute über meine Kleidung.\n\nBei der Arbeit trage ich normalerweise ein Hemd und eine schöne Hose. Das ist elegant und gut für das Büro, denn meine Arbeit ist mir wichtig.\n\nIn der Freizeit mag ich es lieber bequem. Ich trage oft ein T-Shirt und Jeans, weil das sehr gemütlich ist.\n\nIch trage sehr gern Turnschuhe. Ich gehe viel zu Fuß, deshalb sind bequeme Schuhe perfekt für mich.\n\nEin Anzug gefällt mir nicht gern. Einen Anzug trage ich nur zu besonderen Festen, denn er ist nicht so bequem.\n\nDas ist alles über meine Kleidung. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার পোশাক সম্পর্কে বলছি।\n\nকাজের সময় আমি সাধারণত একটি শার্ট এবং একটি সুন্দর প্যান্ট পরি। এটি মার্জিত এবং অফিসের জন্য ভালো, কারণ আমার কাজ আমার কাছে গুরুত্বপূর্ণ।\n\nঅবসর সময়ে আমি আরামদায়ক পোশাক বেশি পছন্দ করি। আমি প্রায়ই টি-শার্ট এবং জিন্স পরি, কারণ এটি খুবই আরামদায়ক।\n\nআমি স্নিকার্স পরতে খুব পছন্দ করি। আমি অনেক হাঁটি, তাই আরামদায়ক জুতো আমার জন্য উপযুক্ত।\n\nসুট আমার পরতে একদম ভালো লাগে না। আমি কেবল বিশেষ কোনো উৎসবে সুট পরি, কারণ এটি ততটা আরামদায়ক নয়।\n\nআমার পোশাক সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Bei der Arbeit?',
                top_right: 'In der Freizeit?',
                bottom_left: 'Gern?',
                bottom_right: 'Nicht gern?'
            }
         }, {
            id: 17,
            topic: 'Abend',
            q: 'Wie sieht Ihr Tag aus, wenn Sie abends nach Hause kommen?',
            speech: 'Hallo! Ich spreche heute über meinen Abend nach der Arbeit.\n\nWenn ich abends nach Hause komme, möchte ich zuerst kochen. Ich koche oft eine einfache Suppe oder Reis mit Gemüse, denn frisches Essen schmeckt sehr gut.\n\nDanach verbringe ich Zeit mit meiner Familie. Wir essen zusammen zu Abend und sprechen über unseren Tag, weil uns das sehr wichtig ist.\n\nZweimal in der Woche mache ich am Abend ein kurzes Training. Ich gehe im Park joggen oder mache Fitness zu Hause, deshalb bleibe ich gesund und fit.\n\nSpäter habe ich auch Zeit für meine Hobbys. Ich höre gern Musik oder lese ein Buch, denn das ist sehr entspannend für mich.\n\nDas ist alles über meinen Abend. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ কাজ শেষে আমার সন্ধ্যা সম্পর্কে বলছি।\n\nআমি যখন সন্ধ্যায় বাড়ি ফিরি, তখন আমি প্রথমে রান্না করতে চাই। আমি প্রায়ই একটি সহজ সুপ বা সবজি দিয়ে ভাত রান্না করি, কারণ তাজা খাবার খেতে খুব ভালো লাগে।\n\nতারপর আমি আমার পরিবারের সাথে সময় কাটাই। আমরা একসাথে রাতের খাবার খাই এবং আমাদের সারাদিন নিয়ে কথা বলি, কারণ এটি আমাদের কাছে খুব গুরুত্বপূর্ণ।\n\nসপ্তাহে দুইবার আমি সন্ধ্যায় একটি ছোট ওয়ার্কআউট করি। আমি পার্কে দৌড়াতে যাই বা বাড়িতে ফিটনেস অনুশীলন করি, তাই আমি সুস্থ এবং ফিট থাকি।\n\nপরে আমার শখের জন্যও সময় থাকে। আমি গান শুনতে বা বই পড়তে পছন্দ করি, কারণ এটি আমার জন্য খুবই আরামদায়ক।\n\nআমার সন্ধ্যা সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Kochen?',
                top_right: 'Familie?',
                bottom_left: 'Training?',
                bottom_right: 'Hobbys?'
            }
         }, {
            id: 18,
            topic: 'Deutschunterricht',
            q: 'Was machen Sie im Deutschunterricht?',
            speech: 'Hallo! Ich spreche heute über meinen Deutschunterricht.\n\nIm Unterricht machen wir oft Partnerarbeit. Wir sprechen viel zusammen und üben kurze Dialoge, denn das Sprechen hilft mir sehr beim Lernen.\n\nUnsere Kursgröße ist nicht so groß. Wir sind nur zehn Personen im Kurs, deshalb kann der Lehrer allen Studenten gut helfen.\n\nAber wie lange dauert der Kurs? Wir lernen dreimal in der Woche für zwei Stunden Deutsch, weil wir schnell besser werden möchten.\n\nNach dem Unterricht mache ich immer meine Hausaufgaben. Ich lerne neue Wörter und schreibe kurze Texte, denn das Üben zu Hause ist sehr wichtig.\n\nDas ist alles über meinen Deutschunterricht. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার জার্মান ভাষার ক্লাস সম্পর্কে বলছি।\n\nক্লাসে আমরা প্রায়ই জোড়ায় কাজ করি। আমরা একসাথে অনেক কথা বলি এবং ছোট সংলাপ অনুশীলন করি, কারণ এটি খুবই আনন্দদায়ক।\n\nআমাদের ক্লাসের আকার খুব বড় নয়। আমাদের ক্লাসে মাত্র দশজন শিক্ষার্থী আছে, তাই শিক্ষক সব ছাত্রকে ভালোভাবে সাহায্য করতে পারেন।\n\nতবে ক্লাসটি কতক্ষণ চলে? আমরা সপ্তাহে তিনবার দুই ঘণ্টার জন্য জার্মান ভাষা শিখি, কারণ আমরা দ্রুত আরও উন্নতি করতে চাই।\n\nক্লাসের পর আমি সবসময় আমার বাড়ির কাজ করি। আমি নতুন শব্দ শিখি এবং ছোট টেক্সট লিখি, কারণ বাড়িতে অনুশীলন করা খুবই গুরুত্বপূর্ণ।\n\nআমার জার্মান ভাষার ক্লাস সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Partnerarbeit?',
                top_right: 'Kursgröße?',
                bottom_left: 'Wie lange?',
                bottom_right: 'Hausaufgaben?'
            }
         }, {
            id: 19,
            topic: 'Deutschkurs',
            q: 'Was finden Sie im Deutschkurs interessant?',
            speech: 'Hallo! Ich spreche heute über meinen Deutschkurs.\n\nUnser Kursbuch finde ich sehr interessant. Es hat viele bunte Bilder und tolle Themen, deshalb lerne ich sehr gern damit.\n\nUnser Lehrer ist auch sehr nett und geduldig. Er erklärt die Grammatik sehr einfach, weil er viel Erfahrung hat.\n\nIch habe im Kurs viele neue Freunde gefunden. Wir lernen zusammen und sprechen oft auf Deutsch, denn das macht viel Spaß.\n\nDie Texte und Übungen sind wirklich super. Wir lesen kurze Geschichten und machen viele praktische Übungen, deshalb verstehe ich die Sprache jeden Tag besser.\n\nDas ist alles über meinen Deutschkurs. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার জার্মান ভাষার কোর্স সম্পর্কে বলছি।\n\nআমাদের কোর্স বইটি আমার কাছে খুব আকর্ষণীয় লাগে। এতে অনেক রঙিন ছবি এবং চমৎকার বিষয় রয়েছে, তাই আমি এটি দিয়ে শিখতে খুব পছন্দ করি।\n\nআমাদের শিক্ষকও খুব ভালো এবং ধৈর্যশীল। তিনি ব্যাকরণ খুব সহজভাবে বুঝিয়ে দেন, কারণ তাঁর অনেক অভিজ্ঞতা রয়েছে।\n\nআমি কোর্সে অনেক নতুন বন্ধু পেয়েছি। আমরা একসাথে শিখি এবং প্রায়ই জার্মানে কথা বলি, কারণ এটি অনেক আনন্দদায়ক।\n\nআমার জার্মান কোর্স সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Kursbuch?',
                top_right: 'Lehrer?',
                bottom_left: 'Freunde?',
                bottom_right: 'Texte / Übungen?'
            }
         }, {
            id: 20,
            topic: 'Haushalt',
            q: 'Was machen Sie im Haushalt?',
            speech: 'Hallo! Ich spreche heute über meine Aufgaben im Haushalt.\n\nIch muss regelmäßig in der Wohnung saubermachen. Ich putze am Wochenende das Bad und die Küche, denn Sauberkeit ist mir sehr wichtig.\n\nJeden Tag muss ich auch mein Zimmer aufräumen. Ich bringe die Kleidung in den Schrank und mache das Bett, weil das ordentlich aussieht.\n\nAm Abend bringe ich immer den Müll nach draußen. Ich trenne Plastik und Papier, denn das ist gut für die Umwelt.\n\nNach dem Essen helfe ich beim Geschirrspülen. Ich wasche die Teller und Gläser ab, deshalb ist die Küche schnell wieder sauber.\n\nDas ist alles über meinen Haushalt. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ গৃহস্থালির কাজ সম্পর্কে বলছি।\n\nআমাকে নিয়মিত ঘর পরিষ্কার-পরিচ্ছন্ন করতে হয়। আমি সপ্তাহান্তে বাথরুম এবং রান্নাঘর পরিষ্কার করি, কারণ পরিচ্ছন্নতা আমার কাছে খুব গুরুত্বপূর্ণ।\n\nপ্রতিদিন আমার ঘর গুছিয়ে রাখতেও হয়। আমি জামাকাপড় আলমারিতে রাখি এবং বিছানা গুছাই, কারণ এটি দেখতে পরিপাটি লাগে।\n\nসন্ধ্যায় আমি সবসময় ময়লা বাইরে ফেলে দিয়ে আসি। আমি প্লাস্টিক এবং কাগজ আলাদা করি, কারণ এটি পরিবেশের জন্য ভালো।\n\nখাবারের পর আমি থালাবাসন মাজতে সাহায্য করি। আমি প্লেট এবং গ্লাস ধুয়ে নিই, তাই রান্নাঘর দ্রুত আবার পরিষ্কার হয়ে যায়।\n\nআমার গৃহস্থালির কাজ সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Saubermachen?',
                top_right: 'Aufräumen?',
                bottom_left: 'Müll?',
                bottom_right: 'Geschirrspülen?'
            }
         }, {
            id: 21,
            topic: 'Sprachen',
            q: 'Welche Sprachen sprechen Sie?',
            speech: 'Hallo! Ich spreche heute über Sprachen.\n\nMeine Muttersprache ist Bengali. Ich spreche auch sehr gut Englisch, weil ich diese Sprache schon in der Schule und an der Universität gelernt habe.\n\nJetzt lerne ich zwei Fremdsprachen: Deutsch und etwas Spanisch. Deutsch lerne ich jeden Tag, denn ich wohne in Deutschland.\n\nWo habe ich die Sprachen gelernt? Englisch habe ich in meiner Heimat gelernt und Deutsch lerne ich jetzt in einem Sprachkurs in der Stadt.\n\nWelche Sprache hat mir am besten gefallen? Deutsch gefällt mir am besten, weil die Grammatik sehr logisch ist und das Lernen viel Spaß macht.\n\nDas ist alles über meine Sprachen. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ ভাষা সম্পর্কে বলছি।\n\nআমার মাতৃভাষা বাংলা। আমি খুব ভালো ইংরেজিও বলতে পারি, কারণ আমি এই ভাষাটি স্কুলে এবং বিশ্ববিদ্যালয়ে শিখেছি।\n\nএখন আমি দুটি বিদেশি ভাষা শিখছি: জার্মান এবং কিছুটা স্প্যানিশ। আমি প্রতিদিন জার্মান শিখছি, কারণ আমি জার্মানিতে থাকি।\n\nআমি ভাষাগুলো কোথায় শিখেছি? ইংরেজি আমি আমার নিজ দেশে শিখেছি এবং জার্মান আমি এখানে একটি ল্যাঙ্গুয়েজ কোর্সে শিখছি।\n\nকোন ভাষাটি আমার সবচেয়ে বেশি পছন্দ হয়েছে? জার্মান আমার সবচেয়ে বেশি পছন্দ হয়েছে, কারণ এর ব্যাকরণ খুবই যুক্তিযুক্ত এবং শেখাটা অনেক আনন্দদায়ক।\n\nআমার ভাষা সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Muttersprache?',
                top_right: 'Fremdsprachen?',
                bottom_left: 'Wo gelernt?',
                bottom_right: 'Am besten gefallen?'
            }
         }, {
            id: 22,
            topic: 'Weihnachten',
            q: 'Was machen Sie an Weihnachten?',
            speech: 'Hallo! Ich spreche heute über Weihnachten.\n\nAn Weihnachten besuchen wir oft unsere Familie. Wir fahren zusammen zu den Großeltern, denn wir möchten das Fest gemeinsam verbringen.\n\nManchmal möchten wir auch Freunde zu uns nach Hause einladen. Wir kochen zusammen ein leckeres Abendessen, weil das sehr gemütlich ist.\n\nDie Kinder bekommen an diesem Abend schöne Geschenke. Wir packen die Geschenke unter dem Weihnachtsbaum aus, denn das bringt allen viel Freude.\n\nIn diesem Jahr möchten wir nicht weit reisen. Wir bleiben lieber zu Hause im Kreis der Familie, weil es im Winter draußen sehr kalt ist.\n\nDas ist alles über mein Weihnachtsfest. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ বড়দিন সম্পর্কে বলছি।\n\nবড়দিনে আমরা প্রায়ই আমাদের পরিবারের সাথে দেখা করতে যাই। আমরা একসাথে দাদা-দাদী/নানা-নানীর বাড়িতে যাই, কারণ আমরা উৎসবটি একসাথে কাটাতে চাই।\n\nমাঝে মাঝে আমরা বন্ধুদেরও আমাদের বাড়িতে আমন্ত্রণ জানাতে চাই। আমরা একসাথে একটি সুস্বাদু রাতের খাবার রান্না করি, কারণ এটি খুবই আরামদায়ক।\n\nশিশুরা এই সন্ধ্যায় সুন্দর সুন্দর উপহার পায়। আমরা ক্রিসমাস ট্রির নিচে উপহারগুলো খুলি, কারণ এটি সবাইকে অনেক আনন্দ দেয়।\n\nএই বছর আমরা দূরে কোথাও ভ্রমণ করতে চাই না। আমরা পরিবারের সাথে বাড়িতেই থাকতে পছন্দ করি, কারণ শীতকালে বাইরে খুব ঠান্ডা থাকে।\n\nআমার বড়দিন উদযাপন সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Besuchen?',
                top_right: 'Einladen?',
                bottom_left: 'Geschenke?',
                bottom_right: 'Reisen?'
            }
         }, {
            id: 23,
            topic: 'Wunschberuf',
            q: 'Welchen Beruf möchtest du später haben?',
            speech: 'Hallo! Ich spreche heute über meinen Wunschberuf.\n\nMein Wunschberuf ist Lehrer. Ich möchte später als Deutschlehrer arbeiten, denn ich helfe anderen Menschen sehr gern beim Lernen.\n\nWarum möchte ich diesen Beruf machen? Ich finde die Arbeit sehr interessant und wichtig, weil man jeden Tag mit vielen freundlichen Menschen spricht.\n\nDafür muss man natürlich studieren. Ich möchte an der Universität Germanistik studieren, denn man braucht ein gutes Diplom und viel Wissen für diesen Job.\n\nGibt es einen Beruf, den ich nicht mag? Ich möchte nicht als Verkäufer arbeiten, weil Stehen den ganzen Tag sehr anstrengend ist.\n\nDas ist alles über meinen Wunschberuf. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার স্বপ্নের পেশা সম্পর্কে বলছি।\n\nআমার স্বপ্নের পেশা হলো শিক্ষকতা। আমি ভবিষ্যতে জার্মান ভাষার শিক্ষক হিসেবে কাজ করতে চাই, কারণ আমি অন্য মানুষকে শেখাতে খুব পছন্দ করি।\n\nআমি কেন এই পেশাটি বেছে নিতে চাই? আমি এই কাজটি খুব আকর্ষণীয় এবং গুরুত্বপূর্ণ মনে করি, কারণ প্রতিদিন অনেক বন্ধুত্বপূর্ণ মানুষের সাথে কথা বলা যায়।\n\nএর জন্য অবশ্যই পড়াশোনা করতে হবে। আমি বিশ্ববিদ্যালয়ে জার্মানিটিক্স পড়তে চাই, কারণ এই কাজের জন্য একটি ভালো ডিপ্লোমা এবং অনেক জ্ঞানের প্রয়োজন।\n\nএমন কোনো পেশা আছে কি যা আমি পছন্দ করি না? আমি বিক্রেতা হিসেবে কাজ করতে চাই না, কারণ সারাদিন দাঁড়িয়ে থাকা খুব কষ্টকর।\n\nআমার স্বপ্নের পেশা সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Wunschberuf?',
                top_right: 'Warum?',
                bottom_left: 'Studieren?',
                bottom_right: 'Beruf, den du nicht magst?'
            }
         }, {
            id: 24,
            topic: 'Lieblingstier',
            q: 'Was ist Ihr Lieblingstier?',
            speech: 'Hallo! Ich spreche heute über mein Lieblingstier.\n\nMein Lieblingstier ist der Hund. Ich mag Hunde sehr, weil sie treu und freundlich sind.\n\nIst ein Hund gefährlich? Nein, meistens ist ein Hund nicht gefährlich. Er ist ein guter Freund für die Familie.\n\nWarum mag ich Hunde? Sie spielen gern im Garten und begleiten uns überall hin, deshalb bringen sie viel Freude.\n\nWie ist das Aussehen? Hunde haben ein weiches Fell, zwei große Ohren und vier Beine. Sie können sehr süß aussehen.\n\nWelches Futter brauchen sie? Sie fressen am liebsten Fleisch und spezielles Hundefutter, aber sie trinken auch viel frisches Wasser.\n\nDas ist alles über mein Lieblingstier. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমার প্রিয় প্রাণী সম্পর্কে বলছি।\n\nআমার প্রিয় প্রাণী হলো কুকুর। আমি কুকুর খুব পছন্দ করি, কারণ তারা বিশ্বস্ত এবং বন্ধুত্বপূর্ণ।\n\nকুকুর কি বিপজ্জনক? না, বেশিরভাগ সময় কুকুর বিপজ্জনক নয়। এটি পরিবারের জন্য একজন ভালো বন্ধু।\n\nআমি কেন কুকুর পছন্দ করি? তারা বাগানে খেলতে পছন্দ করে এবং সব জায়গায় আমাদের সাথে যায়, তাই তারা অনেক আনন্দ নিয়ে আসে।\n\nএর চেহারা কেমন? কুকুরের নরম পশম, দুটি বড় কান এবং চারটি পা রয়েছে। তারা দেখতে খুব সুন্দর হতে পারে।\n\nতাদের কী খাবার প্রয়োজন? তারা মাংস এবং বিশেষ কুকুরের খাবার খেতে সবচেয়ে বেশি পছন্দ করে, তবে তারা প্রচুর তাজা পানিও পান করে।\n\nআমার প্রিয় প্রাণী সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Gefährlich',
                top_right: 'Warum?',
                bottom_left: 'Aussehen',
                bottom_right: 'Futter'
            }
         }, {
            id: 25,
            topic: 'Lernen',
            q: 'Wie lernen Sie am besten?',
            speech: 'Hallo! Ich spreche heute darüber, wie ich am besten lerne.\n\nIch lese oft viele Bücher. Gute Fachbücher helfen mir sehr, denn die Erklärungen dort sind immer klar und strukturiert.\n\nEin Deutschkurs in der Schule oder in einem Kurs ist auch super. Man lernt zusammen mit anderen Menschen und kann dem Lehrer Fragen stellen.\n\nSehr viel lerne ich im Internet. Ich schaue Lernvideos auf YouTube und mache Online-Übungen, weil das sehr praktisch ist.\n\nLerne ich lieber allein oder mit jemandem? Ich lerne am liebsten allein, denn dann kann ich mich gut konzentrieren und ruhig arbeiten.\n\nDas ist alles über mein Lernen. Vielen Dank!',
            speech_bn: 'হ্যালো! আমি আজ আমি কীভাবে সবচেয়ে ভালোভাবে শিখি তা নিয়ে বলছি।\n\nআমি প্রায়ই অনেক বই পড়ি। ভালো পাঠ্যবই আমাকে অনেক সাহায্য করে, কারণ সেগুলোর ব্যাখ্যা সবসময় স্পষ্ট এবং সুসংগঠিত।\n\nস্কুলে বা কোনো কোর্সে জার্মান ভাষা শেখাও দারুণ। সেখানে অন্যান্য মানুষের সাথে শেখা যায় এবং শিক্ষককে প্রশ্ন করা যায়।\n\nআমি ইন্টারনেটে অনেক কিছু শিখি। আমি ইউটিউবে টিউটোরিয়াল ভিডিও দেখি এবং অনলাইন অনুশীলন করি, কারণ এটি খুবই সুবিধাজনক।\n\nআমি একা নাকি কারো সাথে শিখতে পছন্দ করি? আমি একা শিখতেই বেশি পছন্দ করি, কারণ তখন আমি ভালোভাবে মনোযোগ দিতে পারি এবং শান্তভাবে কাজ করতে পারি।\n\nআমার শেখার পদ্ধতি সম্পর্কে এটাই সব। অনেক ধন্যবাদ!',
            corner_words: {
                top_left: 'Bücher',
                top_right: 'Schule, Kurs',
                bottom_left: 'Im Internet',
                bottom_right: 'Allein / mit jemandem'
            }
         }];


// ---- T2 timer + format + toggle + render ----
// (initialT2Render is defined in index.html core)
        // TEIL 2 – Timer & Bengali Toggle
        // ================================================================
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }

        function updateT2TimerDisplay() {
            // Update legacy header timer (if it exists)
            const legacyBtn = document.getElementById('t2-timer-btn');
            const legacyDisplay = document.getElementById('t2-timer-display');
            if (legacyBtn && legacyDisplay) {
                legacyDisplay.textContent = formatTime(t2TimerSeconds);
            }
            // Update all per-card timers
            const displays = document.querySelectorAll('[id^="t2-timer-display-"]');
            displays.forEach(display => {
                display.textContent = formatTime(t2TimerSeconds);
            });
            const buttons = document.querySelectorAll('[id^="t2-timer-btn-"]');
            buttons.forEach(btn => {
                btn.classList.remove(
                    'bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200',
                    'bg-red-100', 'dark:bg-red-900/30', 'text-red-700', 'dark:text-red-300',
                    'bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300'
                );
                if (t2TimerRunning) {
                    btn.classList.add('bg-red-100', 'dark:bg-red-900/30', 'text-red-700', 'dark:text-red-300');
                } else if (t2TimerPaused) {
                    btn.classList.add('bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300');
                } else {
                    btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                }
            });
        }

        // Teil 3 Timer Display Update
        function updateT3TimerDisplay() {
            // Update legacy header timer (if it exists)
            const legacyBtn = document.getElementById('t3-timer-btn');
            const legacyDisplay = document.getElementById('t3-timer-display');
            if (legacyBtn && legacyDisplay) {
                legacyDisplay.textContent = formatTime(t3TimerSeconds);
            }
            // Update all per-card timers
            const displays = document.querySelectorAll('[id^="t3-timer-display-"]');
            displays.forEach(display => {
                display.textContent = formatTime(t3TimerSeconds);
            });
            const buttons = document.querySelectorAll('[id^="t3-timer-btn-"]');
            buttons.forEach(btn => {
                btn.classList.remove(
                    'bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200',
                    'bg-red-100', 'dark:bg-red-900/30', 'text-red-700', 'dark:text-red-300',
                    'bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300'
                );
                if (t3TimerRunning) {
                    btn.classList.add('bg-red-100', 'dark:bg-red-900/30', 'text-red-700', 'dark:text-red-300');
                } else if (t3TimerPaused) {
                    btn.classList.add('bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300');
                } else {
                    btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
                }
            });
        }

        function toggleT2Timer() {
            if (t2TimerRunning) {
                // Pause timer
                clearInterval(t2TimerInterval);
                t2TimerInterval = null;
                t2TimerRunning = false;
                t2TimerPaused = true;
                showToast('Timer pausiert – erneut klicken zum Zurücksetzen');
            } else if (t2TimerPaused) {
                // Reset (timer was paused)
                t2TimerPaused = false;
                t2TimerSeconds = 90;
                showToast('Timer zurückgesetzt');
            } else {
                // Start timer
                if (t2TimerSeconds <= 0) {
                    t2TimerSeconds = 90;
                }
                t2TimerRunning = true;
                t2TimerInterval = setInterval(() => {
                    t2TimerSeconds--;
                    updateT2TimerDisplay();
                    if (t2TimerSeconds <= 0) {
                        clearInterval(t2TimerInterval);
                        t2TimerInterval = null;
                        t2TimerRunning = false;
                        showToast('Zeit abgelaufen!');
                    }
                }, 1000);
                showToast('Timer gestartet');
            }
            updateT2TimerDisplay();
        }

        function resetT2Timer() {
            clearInterval(t2TimerInterval);
            t2TimerInterval = null;
            t2TimerRunning = false;
            t2TimerSeconds = 90;
            updateT2TimerDisplay();
            showToast('Timer zurückgesetzt');
        }

        // Teil 3 Timer Functions
        function toggleT3Timer() {
            if (t3TimerRunning) {
                // Pause timer
                clearInterval(t3TimerInterval);
                t3TimerInterval = null;
                t3TimerRunning = false;
                t3TimerPaused = true;
                showToast('Timer pausiert – erneut klicken zum Zurücksetzen');
            } else if (t3TimerPaused) {
                // Reset (timer was paused)
                t3TimerPaused = false;
                t3TimerSeconds = 180;
                showToast('Timer zurückgesetzt');
            } else {
                // Start timer
                if (t3TimerSeconds <= 0) {
                    t3TimerSeconds = 180;
                }
                t3TimerRunning = true;
                t3TimerInterval = setInterval(() => {
                    t3TimerSeconds--;
                    updateT3TimerDisplay();
                    if (t3TimerSeconds <= 0) {
                        clearInterval(t3TimerInterval);
                        t3TimerInterval = null;
                        t3TimerRunning = false;
                        showToast('Zeit abgelaufen!');
                    }
                }, 1000);
                showToast('Timer gestartet');
            }
            updateT3TimerDisplay();
        }

        function resetT3Timer() {
            clearInterval(t3TimerInterval);
            t3TimerInterval = null;
            t3TimerRunning = false;
            t3TimerSeconds = 180;
            updateT3TimerDisplay();
            showToast('Timer zurückgesetzt');
        }

        function toggleT2Bengali() {
            t2ShowBengali = !t2ShowBengali;
            const btn = document.getElementById('t2-bengali-btn');
            if (t2ShowBengali) {
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
            renderT2();
        }


// ---- T2 render ----
        function renderT2() {
            const search = document.getElementById('t2-search').value.trim().toLocaleLowerCase();
            t2Sort = document.getElementById('t2-sort').value;
            const grid = document.getElementById('t2-grid');
            const filtered = T2_DATA.filter(d => {
                const searchable = [d.topic, d.q, d.speech, d.speech_bn].join(' ').toLocaleLowerCase();
                return !search || searchable.includes(search);
            });
            const data = sortEntries(filtered, t2Sort, 'topic');
            animateCount(document.getElementById('t2-count'), data.length);
            const cardsHTML = data.map(d => {
                // Split speech into paragraphs by double newlines
                const speechParagraphs = d.speech.split('\n\n').filter(p => p.trim());
                const bengaliParagraphs = d.speech_bn.split('\n\n').filter(p => p.trim());
                
                return `<div class="bg-white dark:bg-ghSurface ring-1 ring-slate-900/5 dark:ring-white/5 rounded-2xl p-4 shadow-sm card-hover space-y-3">
                    <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 gap-2">
                        <div class="flex items-center gap-2 min-w-0 flex-1">
                            <span class="text-[12px] font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 shrink-0">#${d.id}</span>
                            <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white break-words min-w-0 flex-1">${d.topic}</h3>
                            <span class="text-4xl shrink-0">${getT2Icon(d.topic)}</span>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <button id="t2-timer-btn-${d.id}" onclick="toggleT2Timer()" class="press-subtle px-2 py-1 rounded-lg text-[12px] font-bold transition-all bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-amber-100 dark:hover:bg-amber-900/30 hover:text-amber-700 dark:hover:text-amber-300 flex items-center gap-1" aria-label="Toggle Timer" title="Timer">
                                <i class="fa-solid fa-clock"></i><span id="t2-timer-display-${d.id}">1:30</span>
                            </button>
                            <button onclick="speakText('${d.speech.replace(/'/g,"\\'").replace(/\n/g,' ')}', this)" class="text-amber-400 hover:text-amber-300 p-1"><i class="fa-solid fa-volume-high"></i></button>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex gap-2 justify-center">
                            <div class="w-1/2 p-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl text-center">
                                <p class="text-sm font-bold text-amber-800 dark:text-amber-300">${d.corner_words.top_left}</p>
                            </div>
                            <div class="w-1/2 p-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl text-center">
                                <p class="text-sm font-bold text-amber-800 dark:text-amber-300">${d.corner_words.top_right}</p>
                            </div>
                        </div>
                        <div class="p-2.5 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                            <p class="text-lg font-bold text-slate-900 dark:text-white text-center">${d.q}</p>
                        </div>
                        <div class="flex gap-2 justify-center">
                            <div class="w-1/2 p-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl text-center">
                                <p class="text-sm font-bold text-amber-800 dark:text-amber-300">${d.corner_words.bottom_left}</p>
                            </div>
                            <div class="w-1/2 p-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl text-center">
                                <p class="text-sm font-bold text-amber-800 dark:text-amber-300">${d.corner_words.bottom_right}</p>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-3">
                        ${speechParagraphs.map((para, idx) => {
                            const bengaliPara = bengaliParagraphs[idx] || '';
                            return `
                            <div class="space-y-2">
                                <div class="p-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2 relative">
                                    <button onclick="speakText('${para.replace(/'/g,"\\'")}', this)" class="absolute top-2 right-2 text-amber-400 hover:text-amber-300 p-1 shrink-0"><i class="fa-solid fa-volume-high"></i></button>
                                    <p class="text-base whitespace-pre-wrap text-slate-800 dark:text-slate-200 leading-relaxed pr-8">${para}</p>
                                </div>
                                ${t2ShowBengali && bengaliPara ? `
                                <div class="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-900/50 space-y-2">
                                    <p class="text-base bangla-t2-t3 whitespace-pre-wrap text-emerald-900 dark:text-emerald-100 leading-relaxed">${bengaliPara}</p>
                                </div>
                                ` : ''}
                            </div>
                            `;
                        }).join('')}
                     </div>
                </div>`;
             }).join('');
            renderWithSkeleton(grid, cardsHTML, initialT2Render);
            initialT2Render = false;
        }
