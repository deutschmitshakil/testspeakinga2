/* =============================================================
   TEIL 1 — Fragen stellen (113 cards) + Study Mode + Bookmarks
   ============================================================= */

// ---- T1 data (113 entries) ----
        // ---- Teil 1: 113 Einträge (Fragen stellen) ----
        const T1_DATA = [
            { id: 1, keyword: 'Wohnort', bn: 'বাসস্থান', q: 'Wo wohnst du im Moment?', q_bn: 'তুমি বর্তমানে কোথায় থাকো?',
                a1: 'Ich wohne in Dhaka.', a1_bn: 'আমি ঢাকা তে থাকি।',
                a2: 'Ich wohne in Dhaka. Die Stadt ist sehr schön und hat viele Parks.',
                a2_bn: 'আমি ঢাকা তে থাকি। শহরটি খুব সুন্দর এবং অনেক পার্ক আছে।' },
            { id: 2, keyword: 'Familie', bn: 'পরিবার', q: 'Hast du eine große Familie?', q_bn: 'তোমার কি বড় পরিবার আছে?',
                a1: 'Ja, ich habe zwei Geschwister und wohne mit meinen Eltern.',
                a1_bn: 'হ্যাঁ, আমার দুই ভাইবোন আছে এবং বাবা-মায়ের সাথে থাকি।',
                a2: 'Ja, ich habe eine große Familie. Ich habe zwei Brüder und eine Schwester, und wir leben alle zusammen mit unseren Eltern.',
                a2_bn: 'হ্যাঁ, আমার একটি বড় পরিবার আছে। আমার দুই ভাই এবং একটি বোন আছে এবং আমরা সবাই আমাদের বাবা-মায়ের সাথে থাকি।' },
            { id: 3, keyword: 'Beruf', bn: 'পেশা', q: 'Was sind Sie von Beruf?', q_bn: 'আপনার পেশা কী?',
                a1: 'Ich arbeite als Lehrer an einer internationalen Sprachschule.',
                a1_bn: 'আমি একটি আন্তর্জাতিক ভাষা স্কুলে শিক্ষক হিসেবে কাজ করি।',
                a2: 'Ich bin Lehrer. Ich arbeite an einer Schule und unterrichte Mathematik. Die Arbeit ist sehr interessant und ich mag meine Schüler.',
                a2_bn: 'আমি একজন শিক্ষক। আমি একটি স্কুলে কাজ করি এবং গণিত পড়াই। কাজটি খুব আকর্ষণীয় এবং আমি আমার শিক্ষার্থীদের পছন্দ করি।' },
            { id: 4, keyword: 'Freizeit', bn: 'অবসর সময়', q: 'Was machst du in deiner Freizeit?',
                q_bn: 'তুমি অবসর সময়ে কী করো?', a1: 'In meiner Freizeit lese ich gern Bücher oder treffe Freunde.',
                a1_bn: 'অবসর সময়ে আমি বই পড়তে বা বন্ধুদের সাথে দেখা করতে পছন্দ করি।',
                a2: 'In meiner Freizeit spiele ich gern Fußball mit meinen Freunden. Manchmal sehe ich auch Filme oder lese ein Buch.',
                a2_bn: 'আমার অবসর সময়ে আমি বন্ধুদের সাথে ফুটবল খেলতে পছন্দ করি। কখনও কখনও আমি সিনেমা দেখি বা বই পড়ি।' },
            { id: 5, keyword: 'Wochenende', bn: 'ছুটির দিন', q: 'Was machst du am kommenden Wochenende?',
                q_bn: 'তুমি আগামী ছুটির দিনে কী করবে?', a1: 'Am kommenden Wochenende mache ich eine Radtour im Wald.',
                a1_bn: 'আগামী ছুটির দিনে আমি বনে সাইকেল চালাবো।',
                a2: 'Am kommenden Wochenende fahre ich in die Berge wandern. Das Wetter soll sehr schön sein, und ich freue mich darauf.',
                a2_bn: 'আগামী ছুটির দিনে আমি পাহাড়ে হাইকিং করব। আবহাওয়া খুব সুন্দর হবে বলে মনে হচ্ছে এবং আমি অপেক্ষায় আছি।' },
            { id: 6, keyword: 'Hobby', bn: 'শখ', q: 'Was ist dein größtes Hobby? / Was sind Ihre Hobbys?',
                q_bn: 'তোমার সবচেয়ে বড় শখ কী?', a1: 'Mein größtes Hobby ist Fußballspielen im Sportverein.',
                a1_bn: 'আমার সবচেয়ে বড় শখ স্পোর্টস ক্লাবে ফুটবল খেলা।',
                a2: 'Mein größtes Hobby ist Tennisspielen. Ich spiele zweimal pro Woche im Verein und nehme es sehr ernst.',
                a2_bn: 'আমার সবচেয়ে বড় শখ হলো টেনিস খেলা। আমি সপ্তাহে দুইবার ক্লাবে খেলি এবং এটি খুব গুরুত্বের সাথে করি।' },
            { id: 7, keyword: 'Reisen', bn: 'ভ্রমণ', q: 'Wohin reist du am liebsten im Urlaub?',
                q_bn: 'ছুটিতে তুমি কোথায় ঘুরতে যেতে সবচেয়ে পছন্দ করো?', a1: 'Ich reise am liebsten ans Meer nach Spanien.',
                a1_bn: 'আমি স্পেনে সমুদ্রের তীরে ঘুরতে যেতে সবচেয়ে পছন্দ করি。',

                a2: 'Ich reise gern ans Meer, besonders nach Spanien oder Italien. Das Wetter ist schön und das Essen ist lecker.',
                a2_bn: 'আমি সমুদ্রের তীরে ভ্রমণ করতে পছন্দ করি, বিশেষ করে স্পেন বা ইতালিতে। আবহাওয়া সুন্দর এবং খাবারটি সুস্বাদু।' },
            { id: 8, keyword: 'Essen und Trinken', bn: 'খাওয়া ও পান করা', q: 'Was essen Sie am liebsten zum Frühstück?',
                q_bn: 'সকালের নাস্তায় আপনি কী খেতে সবচেয়ে পছন্দ করেন?',
                a1: 'Ich esse ein Brötchen mit Butter, Marmelade und Honig.',
                a1_bn: 'আমি মাখন, জ্যাম এবং মধু দিয়ে রুটি খাই。',

                a2: 'Zum Frühstück esse ich gern ein Brötchen mit Butter und Marmelade. Manchmal trinke ich auch einen Kaffee oder einen Orangensaft dazu.',
                a2_bn: 'সকালের নাস্তায় আমি মাখন এবং জ্যাম দিয়ে রুটি খাই এবং কফি বা কমলার রস পান করি।' },
            { id: 9, keyword: 'Frühstück', bn: 'সকালের নাস্তা', q: 'Was isst du normalerweise zum Frühstück?',
                q_bn: 'তুমি সাধারণত সকালের নাস্তায় কী খাও?',
                a1: 'Ich esse meistens ein Brötchen mit Butter und Marmelade.',
                a1_bn: 'আমি বেশিরভাগ সময় মাখন ও জ্যাম দিয়ে রুটি খাই।',

                a2: 'Normalerweise frühstücke ich zu Hause mit meiner Familie. Ich esse ein Brötchen mit Käse oder Wurst und trinke Milch.',
                a2_bn: 'সাধারণত আমি আমার পরিবারের সাথে বাড়িতে সকালের নাস্তা করি। আমি পনির বা সসেজ দিয়ে রুটি খাই এবং দুধ পান করি।' },
            { id: 10, keyword: 'Sprachen', bn: 'ভাষাসমূহ', q: 'Welche Sprachen sprechen Sie?',
                q_bn: 'আপনি কোন কোন ভাষায় কথা বলেন?', a1: 'Ich spreche Spanisch, Englisch und ein bisschen Deutsch.',
                a1_bn: 'আমি স্প্যানিশ, ইংরেজি এবং একটু জার্মান বলি。',


                a2: 'Ich spreche Spanisch, Englisch und Deutsch. Spanisch ist meine Muttersprache, aber ich mag Deutsch sehr gern.',
                a2_bn: 'আমি স্প্যানিশ, ইংরেজি এবং জার্মান বলি। স্প্যানিশ আমার মাতৃভাষা, কিন্তু আমি জার্মান খুব পছন্দ করি।' },
            { id: 11, keyword: 'Wetter', bn: 'আবহাওয়া', q: 'Welches Wetter gefällt Ihnen am besten?',
                q_bn: 'কোন আবহাওয়া আপনার সবচেয়ে বেশি পছন্দ করে?',
                a1: 'Ich mag sonniges und warmes Wetter im Sommer sehr gern.',
                a1_bn: 'গ্রীষ্মকালে রৌদ্রোজ্জ্বল ও উষ্ণ আবহাওয়া আমার খুব পছন্দ।',

                a2: 'Mir gefällt Sommer am besten. Das Wetter ist sonnig und warm, und ich kann viel Zeit draußen verbringen.',
                a2_bn: 'আমার গ্রীষ্মকাল সবচেয়ে ভালো লাগে। আবহাওয়া রৌদ্রোজ্জ্বল এবং উষ্ণ এবং আমি অনেক সময় বাইরে কাটাতে পারি।' },
            { id: 12, keyword: 'Kleidung', bn: 'পোশাক', q: 'Welche Kleidung tragen Sie am liebsten?',
                q_bn: 'আপনি কোন পোশাক পরতে সবচেয়ে পছন্দ করেন?', a1: 'In der Freizeit trage ich am liebsten Jeans und T-Shirt.',
                a1_bn: 'অবসর সময়ে আমি জিন্স ও টি-শার্ট পরতে সবচেয়ে পছন্দ করি।',

                a2: 'In der Freizeit trage ich am liebsten Jeans und ein T-Shirt. Das ist bequem und praktisch für den Alltag.',
                a2_bn: 'অবসর সময়ে আমি জিন্স এবং টি-শার্ট পরতে সবচেয়ে বেশি পছন্দ করি। এটি আরামদায়ক এবং দৈনন্দিন কাজের জন্য ব্যবহারিক।' },
            { id: 13, keyword: 'Einkaufen', bn: 'কেনাকাটা', q: 'Wo kaufen Sie am liebsten Kleidung ein?',
                q_bn: 'আপনি কোথা থেকে পোশাক কিনতে সবচেয়ে পছন্দ করেন?',
                a1: 'Ich kaufe meine Kleidung meistens online im Internet.',
                a1_bn: 'আমি বেশিরভাগ সময় ইন্টারনেট থেকে অনলাইনে পোশাক কিনি।',

                a2: 'Ich kaufe meine Kleidung meistens online im Internet, weil das sehr bequem ist. Manchmal gehe ich auch in die Stadt zum Einkaufen.',
                a2_bn: 'আমি বেশিরভাগ সময় ইন্টারনেটে কিনি, কারণ এটি খুব সুবিধাজনক। কখনও কখনও আমি শহরে কেনাকাটায় যাই।' },
            { id: 14, keyword: 'Alter', bn: 'বয়স', q: 'Wie alt bist du?', q_bn: 'তোমার বয়স কত?',
                a1: 'Ich bin 20 Jahre alt.', a1_bn: 'আমার বয়স ২০ বছর।',
                a2: 'Ich bin 18 Jahre alt. Mein Geburtstag ist im März und ich werde nächstes Jahr 19.',
                a2_bn: 'আমি ১৮ বছর বয়সী। আমার জন্মদিন মার্চে এবং আগামী বছর আমি ১৯ হব।' },
            { id: 15, keyword: 'Adresse', bn: 'ঠিকানা', q: 'Wie ist deine genaue Adresse?',
                q_bn: 'তোমার সঠিক ঠিকানা কী?', a1: 'Meine Adresse ist Schweizer Straße 12 in Frankfurt.',
                a1_bn: 'আমার ঠিকানা সুইজার স্ট্রাসে ১২, ফ্রাঙ্কফুর্ট।',
                a2: 'Meine Adresse ist Berliner Straße 25 in Stuttgart. Das ist im Zentrum der Stadt und die Gegend ist sehr lebhaft.',
                a2_bn: 'আমার ঠিকানা স্টুটগার্টের বার্লিনার স্ট্রাসে ২৫। এটি শহরের কেন্দ্রে এবং এলাকাটি খুব প্রাণবন্ত।' },
            { id: 16, keyword: 'Geburtstag', bn: 'জন্মদিন', q: 'Wann haben Sie Geburtstag?',
                q_bn: 'আপনার জন্মদিন কবে?', a1: 'Ich habe am zweiten Mai Geburtstag und feiere mit der Familie.',
                a1_bn: 'আমার জন্মদিন দ্বিতীয় মে এবং আমি পরিবারের সাথে উদযাপন করি।',
                a2: 'Mein Geburtstag ist am 14. Juni. Ich feiere mit meiner Familie im Restaurant und bekomme Geschenke.',
                a2_bn: 'আমার জন্মদিন ১৪ জুন। আমি পরিবারের সাথে রেস্তোরাঁয় উদযাপন করি এবং উপহার পাই।' },
            { id: 17, keyword: 'Wohnen', bn: 'বসবাস করা', q: 'Wie möchten Sie in Zukunft am liebsten wohnen?',
                q_bn: 'ভবিষ্যতে আপনি কীভাবে থাকতে চান?', a1: 'Ich möchte am liebsten in einem Haus auf dem Land leben.',
                a1_bn: 'আমি গ্রামে একটি বাড়িতে থাকতে সবচেয়ে পছন্দ করব।',
                a2: 'Ich möchte gern in einem schönen Haus auf dem Land leben. Es soll einen großen Garten haben und ruhig sein.',
                a2_bn: 'আমি গ্রামে একটি সুন্দর বাড়িতে থাকতে চাই। এটির একটি বড় বাগান থাকবে এবং শান্ত হবে।' },
            { id: 18, keyword: 'Wohnung', bn: 'অ্যাপার্টমেন্ট', q: 'Wie sieht deine Wohnung aus?',
                q_bn: 'তোমার অ্যাপার্টমেন্ট দেখতে কেমন?',
                a1: 'Unsere Wohnung hat drei Zimmer, eine Küche und einen Balkon.',
                a1_bn: 'আমাদের অ্যাপার্টমেন্টে তিনটি রুম, একটি রান্নাঘর ও একটি ব্যালকনি আছে।',
                a2: 'Unsere Wohnung hat drei Zimmer, eine Küche, ein Bad und einen kleinen Balkon. Sie liegt im dritten Stock und ist sehr hell.',
                a2_bn: 'আমাদের অ্যাপার্টমেন্টে তিনটি রুম, একটি রান্নাঘর, একটি বাথরুম এবং একটি ছোট ব্যালকনি আছে। এটি তৃতীয় তলায় এবং খুব উজ্জ্বল।' },
            { id: 19, keyword: 'Sport', bn: 'খেলাধুলা', q: 'Machst du gern Sport?', q_bn: 'তুমি কি খেলাধুলা করতে পছন্দ করো?', a1: 'Ja, ich spiele zweimal in der Woche Tennis.', a1_bn: 'হ্যাঁ, আমি সপ্তাহে দুইবার টেনিস খেলি।',
                a2: 'Ja, ich spiele sehr gern Sport. Ich spiele dreimal pro Woche Volleyball in einem Verein.',
                a2_bn: 'হ্যাঁ, আমি খুব খেলাধুলা খেলতে পছন্দ করি। আমি একটি ক্লাবে সপ্তাহে তিনবার ভলিবল খেলি।' },
            { id: 20, keyword: 'Lieblingsessen', bn: 'প্রিয় খাবার', q: 'Was ist dein Lieblingsessen?',
                q_bn: 'তোমার প্রিয় খাবার কী?', a1: 'Mein Lieblingsessen ist Pizza mit viel Käse.',
                a1_bn: 'আমার প্রিয় খাবার প্রচুর পনির যুক্ত পিজ্জা।',
                a2: 'Mein Lieblingsessen ist Pizza mit viel Käse und Tomaten. Ich esse sie mindestens einmal pro Woche gern.',
                a2_bn: 'আমার প্রিয় খাবার প্রচুর পনির এবং টমেটো সহ পিজ্জা। আমি অন্তত সপ্তাহে একবার এটি খেতে পছন্দ করি।' },
            { id: 21, keyword: 'Verkehrsmittel', bn: 'যানবাহন', q: 'Welche Verkehrsmittel benutzen Sie am liebsten?',
                q_bn: 'আপনি কোন যানবাহন সবচেয়ে বেশি ব্যবহার করতে পছন্দ করেন?',
                a1: 'Ich fahre am liebsten mit dem Fahrrad oder der Straßenbahn.',
                a1_bn: 'আমি সাইকেল বা ট্রামে যাতায়াত করতে সবচেয়ে পছন্দ করি。',


                a2: 'Ich fahre am liebsten mit dem Fahrrad. Das ist umweltfreundlich und ich bekomme auch noch etwas Bewegung.',
                a2_bn: 'আমি সবচেয়ে বেশি সাইকেল চালিয়ে যাই। এটি পরিবেশ বান্ধব এবং আমি ব্যায়ামও পাই।' },
            { id: 22, keyword: 'Geschwister', bn: 'ভাইবোন', q: 'Hast du Geschwister?', q_bn: 'তোমার কি ভাইবোন আছে?',
                a1: 'Ja, ich habe eine ältere Schwester und einen Bruder.',
                a1_bn: 'হ্যাঁ, আমার এক বড় বোন এবং এক ভাই আছে।',
                a2: 'Ja, ich habe zwei Geschwister: einen älteren Bruder und eine jüngere Schwester. Wir verstehen uns sehr gut.',
                a2_bn: 'হ্যাঁ, আমার দুটি ভাইবোন আছে: একজন বড় ভাই এবং একজন ছোট বোন। আমরা খুব ভালোভাবে বুঝি।' },
            { id: 23, keyword: 'Lesen', bn: 'পড়া', q: 'Liest du gern Bücher oder Zeitungen?',
                q_bn: 'তুমি কি বই বা খবরের কাগজ পড়তে পছন্দ করো?', a1: 'Ja, ich lese sehr gern spannende Krimis.',
                a1_bn: 'হ্যাঁ, আমি রোমাঞ্চকর ক্রাইম থ্রিলার পড়তে খুব পছন্দ করি。',


                a2: 'Ja, ich lese gern Bücher. Besonders mag ich Krimis und Liebesromane. Ich lese mindestens zweimal pro Woche.',
                a2_bn: 'হ্যাঁ, আমি বই পড়তে পছন্দ করি। আমি বিশেষ করে ক্রাইম থ্রিলার এবং প্রেমের উপন্যাস পছন্দ করি। আমি সপ্তাহে অন্তত দুইবার পড়ি।' },
            { id: 24, keyword: 'Lieblingsmusik', bn: 'প্রিয় সঙ্গীত', q: 'Welche Musik hörst du am liebsten?',
                q_bn: 'তুমি কী ধরনের গান শুনতে সবচেয়ে পছন্দ করো?', a1: 'Ich höre am liebsten Rockmusik und Pop.',
                a1_bn: 'আমি রক এবং পপ মিউজিক শুনতে সবচেয়ে পছন্দ করি。',


                a2: 'Ich höre am liebsten Popmusik und Rockmusik. Manchmal auch etwas Klassische Musik zum Entspannen.',
                a2_bn: 'আমি সবচেয়ে বেশি পপ এবং রক সঙ্গীত শুনি। কখনও কখনও শিথিল করার জন্য ক্লাসিক্যাল সঙ্গীতও শুনি।' },
            { id: 25, keyword: 'Internet', bn: 'ইন্টারনেট', q: 'Wofür benutzt du das Internet?',
                q_bn: 'তুমি কী কাজে ইন্টারনেট ব্যবহার করো?',
                a1: 'Ich suche Informationen für die Schule und chatte mit Freunden.',
                a1_bn: 'আমি স্কুলের জন্য তথ্য খুঁজি এবং বন্ধুদের সাথে চ্যাট করি。',


                a2: 'Ich benutze das Internet hauptsächlich für Informationen und Kommunikation. Ich chatte mit Freunden und mache Hausaufgaben.',
                a2_bn: 'আমি প্রধানত তথ্য এবং যোগাযোগের জন্য ইন্টারনেট ব্যবহার করি। আমি বন্ধুদের সাথে চ্যাট করি এবং বাড়ির কাজ করি।' },
            { id: 26, keyword: 'Handy', bn: 'মোবাইল ফোন', q: 'Benutzen Sie Ihr Handy sehr oft?',
                q_bn: 'আপনি কি আপনার মোবাইল খুব বেশি ব্যবহার করেন?',
                a1: 'Ja, eigentlich den ganzen Tag für die Kommunikation.',
                a1_bn: 'হ্যাঁ, যোগাযোগের জন্য বলতে গেলে সারাদিনই।',
                a2: 'Ja, ich benutze mein Handy sehr oft. Ich kommuniziere mit Familie und Freunden und höre auch Musik darauf.',
                a2_bn: 'হ্যাঁ, আমি আমার মোবাইল খুব বেশি ব্যবহার করি। আমি পরিবার এবং বন্ধুদের সাথে যোগাযোগ করি এবং সঙ্গীতও শুনি।' },
            { id: 27, keyword: 'Soziale Netzwerke', bn: 'সামাজিক যোগাযোগ মাধ্যম',
                q: 'Nutzen Sie soziale Netzwerke?', q_bn: 'আপনি কি সামাজিক যোগাযোগ মাধ্যম ব্যবহার করেন?',
                a1: 'Ja, ich nutze täglich Facebook und Instagram für Nachrichten.',
                a1_bn: 'হ্যাঁ, আমি প্রতিদিন খবরের জন্য ফেসবুক ও ইনস্টাগ্রাম ব্যবহার করি।',
                a2: 'Ja, ich nutze Facebook und Instagram täglich. Ich schaue Nachrichten und poste Fotos mit meinen Freunden.',
                a2_bn: 'হ্যাঁ, আমি প্রতিদিন ফেসবুক ও ইনস্টাগ্রাম ব্যবহার করি। আমি সংবাদ দেখি এবং বন্ধুদের সাথে ছবি পোস্ট করি।' },
            { id: 28, keyword: 'fernsehen', bn: 'টিভি দেখা', q: 'Wie lange siehst du täglich fern?',
                q_bn: 'তুমি প্রতিদিন কতক্ষণ টিভি দেখো?', a1: 'Ich sehe am Abend ungefähr eine Stunde fern.',
                a1_bn: 'আমি সন্ধ্যায় প্রায় এক ঘণ্টা টিভি দেখি。',


                a2: 'Ich sehe ungefähr eine bis zwei Stunden am Abend fern. Ich mag Serien und Dokumentationen sehr gern.',
                a2_bn: 'আমি সন্ধ্যায় প্রায় এক থেকে দুই ঘণ্টা টিভি দেখি। আমি সিরিজ এবং ডকুমেন্টারি খুব পছন্দ করি।' },
            { id: 29, keyword: 'Hausaufgaben', bn: 'বাড়ির কাজ', q: 'Wann machst du deine Hausaufgaben?',
                q_bn: 'তুমি কখন তোমার বাড়ির কাজ করো?', a1: 'Ich mache meine Hausaufgaben direkt nach dem Mittagessen.',
                a1_bn: 'আমি দুপুরের খাবারের ঠিক পরেই বাড়ির কাজ করি。',


                a2: 'Ich mache meine Hausaufgaben normalerweise direkt nach der Schule. Dann habe ich den Kopf noch frei.',
                a2_bn: 'আমি সাধারণত স্কুলের ঠিক পরে আমার বাড়ির কাজ করি। তখন আমার মাথা এখনও তাজা থাকে।' },
            { id: 30, keyword: 'Ausbildung', bn: 'প্রশিক্ষণ/শিক্ষা', q: 'Welche Ausbildung haben Sie gemacht?',
                q_bn: 'আপনি কী প্রশিক্ষণ নিয়েছেন?', a1: 'Ich habe eine Ausbildung als Elektriker bei einer Firma gemacht.',
                a1_bn: 'আমি একটি কোম্পানিতে ইলেকট্রিশিয়ান হিসেবে প্রশিক্ষণ নিয়েছি।',
                a2: 'Ich habe eine Ausbildung als Krankenpfleger gemacht. Die Ausbildung war intensiv, aber sehr interessant.',
                a2_bn: 'আমি একজন নার্স হিসেবে প্রশিক্ষণ নিয়েছি। প্রশিক্ষণ নিবিড় ছিল কিন্তু খুব আকর্ষণীয়।' },
            { id: 31, keyword: 'Haustier', bn: 'পোষা প্রাণী', q: 'Möchtest du ein Haustier haben?',
                q_bn: 'তুমি কি কোনো পোষা প্রাণী পালতে চাও?', a1: 'Ja, ich hätte gern eine Katze oder einen Hund.',
                a1_bn: 'হ্যাঁ, আমি একটি বিড়াল বা কুকুর পালতে চাই।',
                a2: 'Ja, ich hätte gern einen Hund. Ich mag Hunde sehr, weil sie loyal und freundlich sind.',
                a2_bn: 'হ্যাঁ, আমি একটি কুকুর পালতে চাই। আমি কুকুরদের পছন্দ করি, কারণ তারা আনুগত্যশীল এবং বন্ধুত্বপূর্ণ।' },
            { id: 32, keyword: 'Fremdsprache', bn: 'বিদেশি ভাষা', q: 'Welche Fremdsprachen lernst du?',
                q_bn: 'তুমি কোন কোন বিদেশি ভাষা শিখছো?', a1: 'Ich lerne Englisch und jetzt auch Deutsch.',
                a1_bn: 'আমি ইংরেজি শিখছি এবং এখন জার্মানও শিখছি।',
                a2: 'Ich lerne Englisch und Deutsch. Englisch ist sehr wichtig für die Arbeit und Deutsch macht mir viel Spaß.',
                a2_bn: 'আমি ইংরেজি এবং জার্মান শিখছি। ইংরেজি কাজের জন্য খুব গুরুত্বপূর্ণ এবং জার্মান আমাকে অনেক আনন্দ দেয়।' },
            { id: 33, keyword: 'Sommerferien', bn: 'গ্রীষ্মের ছুটি', q: 'Wohin fährst du in den Sommerferien?',
                q_bn: 'গ্রীষ্মের ছুটিতে তুমি কোথায় যাবে?', a1: 'In den Sommerferien fahre ich oft nach Italien ans Meer.',
                a1_bn: 'গ্রীষ্মের ছুটিতে আমি প্রায়ই ইতালির সমুদ্রসৈকতে যাই।',
                a2: 'In den Sommerferien fahre ich oft an die Küste nach Italien oder Kroatien. Das Meer ist herrlich und das Wetter ist perfekt.',
                a2_bn: 'গ্রীষ্মের ছুটিতে আমি প্রায়ই ইতালি বা ক্রোয়েশিয়ার সমুদ্রতীরে যাই। সমুদ্র অসাধারণ এবং আবহাওয়া নিখুঁত।' },
            { id: 34, keyword: 'Fahrrad', bn: 'সাইকেল', q: 'Fährst du oft mit dem Fahrrad?',
                q_bn: 'তুমি কি প্রায়ই সাইকেল চালাও?', a1: 'Ja, ich fahre jeden Tag mit dem Fahrrad zur Schule.',
                a1_bn: 'হ্যাঁ, আমি প্রতিদিন সাইকেল চালিয়ে স্কুলে যাই।',
                a2: 'Ja, ich fahre jeden Tag mit dem Fahrrad zur Schule. Das dauert nur 15 Minuten und ist sehr gesund.',
                a2_bn: 'হ্যাঁ, আমি প্রতিদিন সাইকেল চালিয়ে স্কুলে যাই। এটি মাত্র ১৫ মিনিট লাগে এবং খুব স্বাস্থ্যকর।' },
            { id: 35, keyword: 'Obst', bn: 'ফল', q: 'Welches Obst isst du am liebsten?',
                q_bn: 'তুমি কী ফল খেতে সবচেয়ে পছন্দ করো?', a1: 'Ich esse am liebsten Äpfel, Bananen und Orangen.',
                a1_bn: 'আমি আপেল, কলা এবং কমলা খেতে সবচেয়ে পছন্দ করি。',


                a2: 'Ich esse am liebsten Äpfel und Bananen. Das sind Obst, die sehr gesund sind und überall zu bekommen.',
                a2_bn: 'আমি সবচেয়ে বেশি আপেল এবং কলা খেতে পছন্দ করি। এগুলি খুব স্বাস্থ্যকর এবং সর্বত্র পাওয়া যায়।' },
            { id: 36, keyword: 'Gemüse', bn: 'শাকসবজি', q: 'Isst du täglich Gemüse?',
                q_bn: 'তুমি কি প্রতিদিন শাকসবজি খাও?', a1: 'Ja, ich esse gern frisches Gemüse und Salat zum Abendessen.',
                a1_bn: 'হ্যাঁ, আমি রাতের খাবারে তাজা শাকসবজি এবং সালাদ খেতে পছন্দ করি।',
                a2: 'Ja, ich esse gern Gemüse, besonders Brokkoli und Karotten. Das ist sehr gesund und ich mag den Geschmack sehr.',
                a2_bn: 'হ্যাঁ, আমি শাকসবজি খেতে পছন্দ করি, বিশেষ করে ব্রোকোলি এবং গাজর। এটি খুব স্বাস্থ্যকর এবং আমি স্বাদটি খুব পছন্দ করি।' },
            { id: 37, keyword: 'Großeltern', bn: 'দাদা-দাদি/নানা-নানি', q: 'Wie oft besuchst du deine Großeltern?',
                q_bn: 'তুমি কত ঘন ঘন তোমার দাদা-দাদির সাথে দেখা করতে যাও?',
                a1: 'Ich besuche meine Großeltern fast jedes Wochenende.',
                a1_bn: 'আমি প্রায় প্রতি ছুটির দিনে আমার দাদা-দাদির সাথে দেখা করি。',


                a2: 'Ich besuche meine Großeltern fast jeden Sonntag. Sie wohnen nur 20 Minuten entfernt und ich mag die Zeit mit ihnen.',
                a2_bn: 'আমি প্রায় প্রতি রবিবার আমার দাদা-দাদির সাথে দেখা করি। তারা মাত্র ২০ মিনিটের দূরত্বে থাকে এবং আমি তাদের সাথে সময় কাটাতে পছন্দ করি।' },
            { id: 38, keyword: 'Tee', bn: 'চা', q: 'Trinkst du lieber Kaffee oder Tee?',
                q_bn: 'তুমি কি কফি নাকি চা খেতে বেশি পছন্দ করো?', a1: 'Ich trinke am liebsten grünen Tee am Vormittag.',
                a1_bn: 'আমি সকালে গ্রিন টি খেতে সবচেয়ে পছন্দ করি।',
                a2: 'Ich trinke am liebsten grünen Tee am Morgen. Er ist gesund und hilft mir aufzuwachen.',
                a2_bn: 'আমি সকালে সবচেয়ে বেশি গ্রিন টি পছন্দ করি। এটি স্বাস্থ্যকর এবং আমাকে জেগে উঠতে সাহায্য করে।' },
            { id: 39, keyword: 'Flugzeug', bn: 'উড়োজাহাজ', q: 'Bist du schon einmal mit dem Flugzeug geflogen?',
                q_bn: 'তুমি কি কখনো উড়োজাহাজে ভ্রমণ করেছো?', a1: 'Ja, ich bin im letzten Urlaub nach Rom geflogen.',
                a1_bn: 'হ্যাঁ, আমি গত ছুটিতে রোমে উড়ে গিয়েছিলাম।',
                a2: 'Ja, ich bin schon mehrmals mit dem Flugzeug geflogen. Letztes Jahr bin ich nach Österreich geflogen.',
                a2_bn: 'হ্যাঁ, আমি বেশ কয়েকবার উড়োজাহাজে উড়েছি। গত বছর আমি অস্ট্রিয়ায় উড়েছিলাম।' },
            { id: 40, keyword: 'Ausland', bn: 'বিদেশ', q: 'Möchtest du später im Ausland leben?',
                q_bn: 'তুমি কি ভবিষ্যতে বিদেশে থাকতে চাও?', a1: 'Ja, ich möchte gern für ein Jahr in Deutschland wohnen.',
                a1_bn: 'হ্যাঁ, আমি এক বছরের জন্য জার্মানিতে থাকতে চাই।',
                a2: 'Ja, ich möchte gern für ein Jahr im Ausland leben. Ich möchte die Kultur kennenlernen und mein Deutsch verbessern.',
                a2_bn: 'হ্যাঁ, আমি এক বছরের জন্য বিদেশে থাকতে চাই। আমি সংস্কৃতি জানতে এবং আমার জার্মান উন্নত করতে চাই।' },
            { id: 41, keyword: 'Schokolade', bn: 'চকলেট', q: 'Isst du gern Schokolade?',
                q_bn: 'তুমি কি চকলেট খেতে পছন্দ করো?', a1: 'Ja, ich esse sehr gern dunkle Schokolade, weil sie gesund ist.',
                a1_bn: 'হ্যাঁ, আমি ডার্ক চকলেট খেতে খুব পছন্দ করি, কারণ এটি স্বাস্থ্যকর।',
                a2: 'Ja, ich esse sehr gern Schokolade, besonders dunkle Schokolade. Sie schmeckt köstlich und ist auch noch gesund.',
                a2_bn: 'হ্যাঁ, আমি খুব চকলেট খেতে পছন্দ করি, বিশেষ করে ডার্ক চকলেট। এটি সুস্বাদু এবং স্বাস্থ্যকরও।' },
            { id: 42, keyword: 'abends', bn: 'সন্ধ্যায়', q: 'Was machst du normalerweise abends?',
                q_bn: 'তুমি সাধারণত সন্ধ্যায় কী করো?', a1: 'Abends sehe ich meistens fern oder lese ein Buch.',
                a1_bn: 'সন্ধ্যায় আমি বেশিরভাগ সময় টিভি দেখি বা বই পড়ি।',
                a2: 'Abends sehe ich meistens fern oder lese ein Buch. Manchmal telefoniere ich auch mit meinen Freunden.',
                a2_bn: 'সন্ধ্যায় আমি বেশিরভাগ সময় টিভি দেখি বা বই পড়ি। কখনও কখনও আমি বন্ধুদের সাথে টেলিফোনও করি।' },
            { id: 43, keyword: 'nachmittags', bn: 'বিকেলে', q: 'Was machst du meistens nachmittags?',
                q_bn: 'তুমি বিকেলে বেশিরভাগ সময় কী করো?', a1: 'Nachmittags treffe ich meine Freunde oder spiele Tennis.',
                a1_bn: 'বিকেলে আমি বন্ধুদের সাথে দেখা করি বা টেনিস খেলি।',
                a2: 'Nachmittags treffe ich meine Freunde oder treibe Sport. Meistens gehe ich ins Fitnessstudio oder spiele Fußball.',
                a2_bn: 'বিকেলে আমি বন্ধুদের সাথে দেখা করি বা খেলাধুলা করি। বেশিরভাগ সময় আমি জিমে যাই বা ফুটবল খেলি।' },
            { id: 44, keyword: 'Weihnachten', bn: 'বড়দিন', q: 'Wie feierst du Weihnachten?',
                q_bn: 'তুমি কীভাবে বড়দিন উদযাপন করো?', a1: 'Ich feiere Weihnachten immer mit meiner großen Familie.',
                a1_bn: 'আমি সবসময় আমার বড় পরিবারের সাথে বড়দিন উদযাপন করি।',
                a2: 'Ich feiere Weihnachten immer mit meiner ganzen Familie. Wir essen zusammen und öffnen Geschenke.',
                a2_bn: 'আমি সবসময় আমার পুরো পরিবারের সাথে বড়দিন উদযাপন করি। আমরা একসাথে খাই এবং উপহার খুলি।' },
            { id: 45, keyword: 'Ostern', bn: 'ইস্টার', q: 'Feiert ihr Ostern zu Hause?',
                q_bn: 'তোমরা কীভাবে বড়দিন উদযাপন করো?', a1: 'Ja, wir suchen immer bunte Ostereier im Garten.',
                a1_bn: 'হ্যাঁ, আমরা সবসময় বাগানে রঙিন ইস্টারের ডিম খুঁজি।',
                a2: 'Ja, wir feiern Ostern zu Hause. Wir suchen bunte Ostereier im Garten und die Kinder bekommen kleine Geschenke.',
                a2_bn: 'হ্যাঁ, আমরা বাড়িতে ইস্টার উদযাপন করি। আমরা বাগানে রঙিন ইস্টারের ডিম খুঁজি এবং শিশুরা ছোট উপহার পায়।' },
            { id: 46, keyword: 'Feste', bn: 'উৎসবসমূহ', q: 'Was ist Ihr absolutes Lieblingsfest?',
                q_bn: 'আপনার সবচেয়ে প্রিয় উৎসব কী?', a1: 'Mein Lieblingsfest ist Weihnachten, weil alle zusammen feiern.',
                a1_bn: 'আমার প্রিয় উৎসব বড়দিন, কারণ সবাই একসাথে উদযাপন করে।',
                a2: 'Mein absolutes Lieblingsfest ist Weihnachten, weil alle Familie zusammenkommt. Wir essen lecker und haben Quality-Time miteinander.',
                a2_bn: 'আমার সবচেয়ে প্রিয় উৎসব বড়দিন, কারণ সমস্ত পরিবার একসাথে আসে। আমরা সুস্বাদু খাবার খাই এবং একে অপরের সাথে মানসম্পন্ন সময় কাটাই।' },
            { id: 47, keyword: 'Schwester', bn: 'বোন', q: 'Hast du eine Schwester?', q_bn: 'তোমার কি কোনো বোন আছে?',
                a1: 'Ja, ich habe eine ältere Schwester, sie studiert Medizin.',
                a1_bn: 'হ্যাঁ, আমার এক বড় বোন আছে, সে চিকিৎসা বিজ্ঞান পড়ে।',
                a2: 'Ja, ich habe eine ältere Schwester. Sie ist 25 Jahre alt und studiert Medizin an der Universität München.',
                a2_bn: 'হ্যাঁ, আমার একজন বড় বোন আছে। তিনি ২৫ বছর বয়সী এবং মিউনিখ বিশ্ববিদ্যালয়ে চিকিৎসা বিজ্ঞান পড়ছেন।' },
            { id: 48, keyword: 'Tante', bn: 'খালা/ফুফু', q: 'Wie oft besuchst du deine Tante?',
                q_bn: 'তুমি কত ঘন ঘন তোমার খালার সাথে দেখা করতে যাও?',
                a1: 'Ich besuche meine Tante einmal im Monat am Sonntag.',
                a1_bn: 'আমি মাসে একবার রবিবারে আমার খালার সাথে দেখা করি।',
                a2: 'Ich besuche meine Tante mindestens einmal im Monat. Sie lebt in einer schönen Stadt und wir verbringen schöne Zeit miteinander.',
                a2_bn: 'আমি মাসে অন্তত একবার আমার খালার সাথে দেখা করি। তিনি একটি সুন্দর শহরে থাকেন এবং আমরা একসাথে সুন্দর সময় কাটাই।' },
            { id: 49, keyword: 'Opa und Oma', bn: 'দাদা ও দাদি', q: 'Wie oft besuchst du deinen Opa und deine Oma?',
                q_bn: 'তুমি কতবার তোমার দাদা ও দাদির সাথে দেখা করো?',
                a1: 'Ich besuche sie fast jedes Wochenende auf dem Land.',
                a1_bn: 'আমি প্রায় প্রতি ছুটির দিনে গ্রামে তাদের দেখা করি।',
                a2: 'Ich besuche meine Großeltern fast jedes Wochenende. Sie wohnen auf dem Land und ich mag die Ruhe dort sehr.',
                a2_bn: 'আমি প্রায় প্রতি ছুটির দিনে আমার দাদা-দাদির সাথে দেখা করি। তারা গ্রামে থাকেন এবং আমি সেখানকার শান্তি খুব পছন্দ করি।' },
            { id: 50, keyword: 'Katzen', bn: 'বিড়াল', q: 'Magst du Katzen lieber als Hunde?',
                q_bn: 'তুমি কি কুকুরের চেয়ে বিড়াল বেশি পছন্দ করো?', a1: 'Ich mag Katzen sehr gern, weil sie so ruhig sind.',
                a1_bn: 'আমি বিড়াল খুব পছন্দ করি, কারণ তারা খুব শান্ত হয়।',
                a2: 'Ich mag Katzen lieber als Hunde. Sie sind ruhig, unabhängig und sehr affektuös.',
                a2_bn: 'আমি কুকুরের চেয়ে বিড়াল বেশি পছন্দ করি। তারা শান্ত, স্বাধীন এবং খুব স্নেহময়।' },
            { id: 51, keyword: 'E-Mail oder SMS', bn: 'ই-মেইল বা এসএমএস',
                q: 'Schreibst du lieber eine E-Mail oder eine SMS?', q_bn: 'তুমি কি ই-মেইল নাকি এসএমএস লিখতে বেশি পছন্দ করো?',
                a1: 'Ich schreibe lieber eine SMS, das geht viel schneller.',
                a1_bn: 'আমি এসএমএস লিখতে বেশি পছন্দ করি, এটি অনেক দ্রুত হয়।',
                a2: 'Ich schreibe lieber SMS, weil das schneller geht. Eine E-Mail dauert länger und ist weniger persönlich.',
                a2_bn: 'আমি এসএমএস লিখতে বেশি পছন্দ করি, কারণ এটি দ্রুত হয়। ই-মেইল বেশি সময় লাগে এবং কম ব্যক্তিগত।' },
            { id: 52, keyword: 'Klasse', bn: 'শ্রেণি', q: 'In welche Klasse gehst du?',
                q_bn: 'তুমি কোন শ্রেণিতে পড়ো?', a1: 'Ich gehe in die neunte Klasse einer Realschule.',
                a1_bn: 'আমি একটি রিয়েলশুলের নবম শ্রেণিতে পড়ি。',


                a2: 'Ich gehe in die neunte Klasse einer Realschule. Die Schule ist modern und die Lehrer sind sehr nett.',
                a2_bn: 'আমি একটি রিয়েলশুলের নবম শ্রেণিতে পড়ি। স্কুলটি আধুনিক এবং শিক্ষকরা খুব ভালো।' },
            { id: 53, keyword: 'Lieblingsfach', bn: 'প্রিয় বিষয়', q: 'Was ist dein Lieblingsfach in der Schule?',
                q_bn: 'স্কুলে তোমার প্রিয় বিষয় কী?', a1: 'Mein Lieblingsfach ist Deutsch, weil es Spaß macht.',
                a1_bn: 'আমার প্রিয় বিষয় জার্মান, কারণ এটি মজাদার।',
                a2: 'Mein Lieblingsfach ist Deutsch, weil ich die Sprache sehr interessant finde. Der Unterricht macht mir viel Spaß.',
                a2_bn: 'আমার প্রিয় বিষয় জার্মান, কারণ আমি ভাষাটি খুব আকর্ষণীয় মনে করি। ক্লাসটি আমাকে অনেক আনন্দ দেয়।' },
            { id: 54, keyword: 'Klassenzimmer', bn: 'শ্রেণিকক্ষ', q: 'Wie sieht dein Klassenzimmer aus?',
                q_bn: 'তোমার শ্রেণিকক্ষ দেখতে কেমন?',
                a1: 'Unsere Klassenzimmer ist sehr groß, hell und hat viele Poster.',
                a1_bn: 'আমাদের শ্রেণিকক্ষ অনেক বড়, উজ্জ্বল এবং এতে অনেক পোস্টার আছে।',
                a2: 'Unsere Klassenzimmer ist sehr groß und hell. Es hat viele Poster an den Wänden und moderne Möbel.',
                a2_bn: 'আমাদের শ্রেণিকক্ষ খুব বড় এবং উজ্জ্বল। এতে দেয়ালে অনেক পোস্টার এবং আধুনিক আসবাবপত্র আছে।' },
            { id: 55, keyword: 'Sport machen', bn: 'খেলাধুলা করা', q: 'Wo machst du meistens Sport?',
                q_bn: 'তুমি বেশিরভাগ সময় কোথায় খেলাধুলা করো?', a1: 'Ich mache meistens Sport im Fitnessstudio oder draußen im Park.',
                a1_bn: 'আমি বেশিরভাগ সময় জিমে বা বাইরে পার্কে খেলাধুলা করি।',
                a2: 'Ich mache meistens Sport im Fitnessstudio oder draußen im Park. Zwei- bis dreimal pro Woche trainiere ich gern.',
                a2_bn: 'আমি বেশিরভাগ সময় জিমে বা বাইরে পার্কে খেলাধুলা করি। সপ্তাহে দুই থেকে তিনবার আমি প্রশিক্ষণ নিতে পছন্দ করি।' },
            { id: 56, keyword: 'Tanzen', bn: 'নাচা', q: 'Gehst du am Wochenende gern tanzen?',
                q_bn: 'তুমি কি ছুটির দিনে নাচতে যেতে পছন্দ করো?', a1: 'Ja, ich tanze sehr gern Hip-Hop mit meinen Freunden.',
                a1_bn: 'হ্যাঁ, আমি বন্ধুদের সাথে হিপ-হপ নাচতে খুব পছন্দ করি।',
                a2: 'Ja, ich tanze sehr gern, besonders Hip-Hop mit meinen Freunden. Wir gehen jeden Freitag in einen Tanzkurs.',
                a2_bn: 'হ্যাঁ, আমি খুব নাচতে পছন্দ করি, বিশেষ করে বন্ধুদের সাথে হিপ-হপ। আমরা প্রতি শুক্রবার একটি নাচের ক্লাসে যাই।' },
            { id: 57, keyword: 'Kino', bn: 'সিনেমা', q: 'Wie oft gehst du ins Kino?',
                q_bn: 'তুমি কতবার সিনেমায় যাও?', a1: 'Ich gehe ungefähr einmal im Monat ins Kino.',
                a1_bn: 'আমি মাসে প্রায় একবার সিনেমায় যাই।',
                a2: 'Ich gehe ungefähr zweimal im Monat ins Kino. Besonders mag ich Actionfilme und Komödien.',
                a2_bn: 'আমি মাসে প্রায় দুইবার সিনেমায় যাই। আমি বিশেষ করে অ্যাকশন এবং কমেডি চলচ্চিত্র পছন্দ করি।' },
            { id: 58, keyword: 'Theater', bn: 'থিয়েটার', q: 'Gehst du oft ins Theater?',
                q_bn: 'তুমি কি প্রায়ই থিয়েটারে যাও?', a1: 'Nein, ich gehe nicht gern ins Theater, sondern lieber ins Kino.',
                a1_bn: 'না, আমি থিয়েটারে যেতে পছন্দ করি না, বরং সিনেমায় যেতে পছন্দ করি।',
                a2: 'Nein, ich gehe nicht gern ins Theater. Ich finde es zu langweilig. Lieber gehe ich ins Kino.',
                a2_bn: 'না, আমি থিয়েটারে যেতে পছন্দ করি না। আমি এটি খুব বিরক্তিকর মনে করি। আমি বরং সিনেমায় যেতে পছন্দ করি।' },
            { id: 59, keyword: 'Computerspiele', bn: 'কম্পিউটার গেমস', q: 'Spielst du gern Computerspiele?',
                q_bn: 'তুমি কি কম্পিউটার গেম খেলতে পছন্দ করো?', a1: 'Ja, ich spiele oft am Computer mit meinen Freunden.',
                a1_bn: 'হ্যাঁ, আমি প্রায়ই বন্ধুদের সাথে কম্পিউটারে গেম খেলি।',
                a2: 'Ja, ich spiele gern am Computer. Besonders mag ich Strategiespiele und ich spiele oft mit meinen Freunden online.',
                a2_bn: 'হ্যাঁ, আমি কম্পিউটারে গেম খেলতে পছন্দ করি। আমি বিশেষ করে কৌশল গেম পছন্দ করি এবং প্রায়ই বন্ধুদের সাথে অনলাইনে খেলি।' },
            { id: 60, keyword: 'Eis', bn: 'আইসক্রিম', q: 'Isst du gern Eis im Sommer?',
                q_bn: 'তুমি কি গ্রীষ্মে আইসক্রিম খেতে পছন্দ করো?', a1: 'Ja, meine Lieblingssorte ist Erdbeereis mit Sahne.',
                a1_bn: 'হ্যাঁ, আমার সবচেয়ে পছন্দের ফ্লেভার হলো ক্রিমযুক্ত স্ট্রবেরি আইসক্রিম。',


                a2: 'Ja, ich esse im Sommer sehr gern Eis. Meine Lieblingssorte ist Vanille mit Erdbeersauce und Sahne.',
                a2_bn: 'হ্যাঁ, আমি গ্রীষ্মে আইসক্রিম খেতে পছন্দ করি। আমার প্রিয় স্বাদ হলো স্ট্রবেরি সস এবং ক্রিমসহ ভ্যানিলা।' },
            { id: 61, keyword: 'sparen', bn: 'জমানো', q: 'Wofür sparst du dein Geld?',
                q_bn: 'তুমি কীসের জন্য টাকা জমাচ্ছো?', a1: 'Ich spare für eine Reise nach Deutschland im Sommer.',
                a1_bn: 'আমি গ্রীষ্মে জার্মানিতে ভ্রমণের জন্য টাকা জমাচ্ছি।',
                a2: 'Ich spare für eine Reise nach Deutschland im nächsten Sommer. Ich möchte gern Berlin und München besuchen.',
                a2_bn: 'আমি আগামী গ্রীষ্মে জার্মানিতে ভ্রমণের জন্য টাকা জমাচ্ছি। আমি বার্লিন এবং মিউনিখ দেখতে চাই।' },
            { id: 62, keyword: 'Taschengeld', bn: 'হাতখরচ', q: 'Wie viel Taschengeld bekommst du?',
                q_bn: 'তুমি কত টাকা হাতখরচ পাও?', a1: 'Ich bekomme dreißig Euro Taschengeld im Monat.',
                a1_bn: 'আমি মাসে তিরিশ ইউরো হাতখরচ পাই。',


                a2: 'Ich bekomme 40 Euro Taschengeld im Monat. Das gebe ich aus für Kleidung, Kino und Essen mit Freunden.',
                a2_bn: 'আমি মাসে ৪০ ইউরো হাতখরচ পাই। আমি এটি পোশাক, সিনেমা এবং বন্ধুদের সাথে খাওয়ার জন্য খরচ করি।' },
            { id: 63, keyword: 'singen', bn: 'গান গাওয়া', q: 'Singst du gern Lieder?',
                q_bn: 'তুমি কি গান গাইতে পছন্দ করো?', a1: 'Ja, ich singe sehr gern im Schulchor mit meinen Freunden.',
                a1_bn: 'হ্যাঁ, আমি বন্ধুদের সাথে স্কুলের গায়কদলে গান গাইতে খুব পছন্দ করি。',


                a2: 'Ja, ich singe gern im Schulchor. Wir proben einmal pro Woche und führen jedes Jahr ein Konzert auf.',
                a2_bn: 'হ্যাঁ, আমি স্কুলের গায়কদলে গান গাই। আমরা সপ্তাহে একবার প্রশিক্ষণ নিই এবং প্রতি বছর একটি কনসার্ট করি।' },
            { id: 64, keyword: 'musizieren', bn: 'বাদ্যযন্ত্র বাজানো', q: 'Kannst du ein Instrument spielen oder musizieren?',
                q_bn: 'তুমি কি কোনো বাদ্যযন্ত্র বাজাতে পারো?', a1: 'Ja, ich spiele seit drei Jahren sehr gern Klavier.',
                a1_bn: 'হ্যাঁ, আমি তিন বছর ধরে খুব আগ্রহের সাথে পিয়ানো বাজাই।',
                a2: 'Ja, ich spiele seit sechs Jahren Klavier. Ich nehme Unterricht und mache auch an Wettbewerben teil.',
                a2_bn: 'হ্যাঁ, আমি ছয় বছর ধরে পিয়ানো বাজাই। আমি ক্লাস নিই এবং প্রতিযোগিতায়ও অংশ নিই।' },
            { id: 65, keyword: 'Konzert', bn: 'কনসার্ট', q: 'Warst du schon einmal auf einem Konzert?',
                q_bn: 'তুমি কি কখনো কোনো কনসার্টে গিয়েছো?', a1: 'Ja, ich war letztes Jahr auf einem Rockkonzert.',
                a1_bn: 'হ্যাঁ, আমি গত বছর একটি রক কনসার্টে গিয়েছিলাম。',


                a2: 'Ja, ich war letztes Jahr auf einem Rockkonzert. Es war wunderbar und die Atmosphäre war fantastisch.',
                a2_bn: 'হ্যাঁ, আমি গত বছর একটি রক কনসার্টে ছিলাম। এটি অসাধারণ ছিল এবং পরিবেশ দুর্দান্ত ছিল।' },
            { id: 66, keyword: 'malen', bn: 'ছবি আঁকা', q: 'Kannst du gut malen oder zeichnen?',
                q_bn: 'তুমি কি ভালো ছবি আঁকতে পারো?', a1: 'Ja, mein großes Hobby ist das Malen von Landschaften.',
                a1_bn: 'হ্যাঁ, আমার বড় শখ হলো প্রাকৃতিক দৃশ্যের ছবি আঁকা。',


                a2: 'Ja, ich male gern, besonders Landschaften und Porträts. Ich habe schon mehrere Ausstellungen besucht und bin davon inspiriert.',
                a2_bn: 'হ্যাঁ, আমি ছবি আঁকতে পছন্দ করি, বিশেষ করে প্রাকৃতিক দৃশ্য এবং প্রতিকৃতি। আমি ইতিমধ্যে বেশ কয়েকটি প্রদর্শনী দেখেছি এবং অনুপ্রাণিত।' },
            { id: 67, keyword: 'sammeln', bn: 'সংগ্রহ করা', q: 'Sammelst du irgendwelche Sachen?',
                q_bn: 'তুমি কি কোনো কিছু সংগ্রহ করো?', a1: 'Ja, ich sammle seit fünf Jahren Postkarten und Münzen.',
                a1_bn: 'হ্যাঁ, আমি পাঁচ বছর ধরে পোস্টকার্ড এবং মুদ্রা সংগ্রহ করি。',


                a2: 'Ja, ich sammle Briefmarken und alte Münzen. Ich sammle schon seit zehn Jahren und habe eine große Sammlung.',
                a2_bn: 'হ্যাঁ, আমি ডাকটিকিট এবং পুরানো মুদ্রা সংগ্রহ করি। আমি দশ বছর ধরে সংগ্রহ করছি এবং একটি বড় সংগ্রহ আছে।' },
            { id: 68, keyword: 'Lieblingsfarbe', bn: 'প্রিয় রং', q: 'Was ist deine Lieblingsfarbe?',
                q_bn: 'তোমার প্রিয় রং কী?', a1: 'Meine Lieblingsfarbe ist Rot, aber Blau gefällt mir auch.',
                a1_bn: 'আমার প্রিয় রং লাল, তবে নীলও আমার পছন্দ।',
                a2: 'Meine Lieblingsfarbe ist Blau, aber ich mag auch Grün. Das sind Farben, die mir ruhig und entspannt machen.',
                a2_bn: 'আমার প্রিয় রং নীল, তবে আমি সবুজও পছন্দ করি। এগুলি এমন রং যা আমাকে শান্ত এবং শিথিল করে তোলে।' },
            { id: 69, keyword: 'Garten', bn: 'বাগান', q: 'Haben Sie einen Garten zu Hause?',
                q_bn: 'আপনাদের বাড়িতে কি কোনো বাগান আছে?', a1: 'Ja, wir haben einen großen Garten mit vielen Blumen.',
                a1_bn: 'হ্যাঁ, আমাদের অনেক ফুলসহ একটি বড় বাগান আছে।',
                a2: 'Ja, wir haben einen großen Garten mit vielen Blumen und Obstbäumen. Im Sommer verbringen wir viel Zeit dort.',
                a2_bn: 'হ্যাঁ, আমাদের অনেক ফুল এবং ফলের গাছ সহ একটি বড় বাগান আছে। গ্রীষ্মে আমরা সেখানে অনেক সময় কাটাই।' },
            { id: 70, keyword: 'Frühling', bn: 'বসন্তকাল', q: 'Was gefällt dir am Frühling?',
                q_bn: 'বসন্তকালের কোন বিষয়টি তোমার ভালো লাগে?', a1: 'Im Frühling blühen die Blumen und es ist nicht mehr kalt.',
                a1_bn: 'বসন্তকালে ফুল ফোটে এবং তখন আর শীত থাকে না।',
                a2: 'Im Frühling gefällt mir, dass die Blumen blühen und die Natur wieder grün wird. Das Wetter wird auch langsam wärmer.',
                a2_bn: 'বসন্তে আমার ভালো লাগে যে ফুল ফোটে এবং প্রকৃতি আবার সবুজ হয়। আবহাওয়াও ধীরে ধীরে উষ্ণ হতে থাকে।' },
            { id: 71, keyword: 'Winter', bn: 'শীতকাল', q: 'Was machst du gern im Winter?',
                q_bn: 'তুমি শীতকালে কী করতে পছন্দ করো?', a1: 'Im Winter fahre ich sehr gern in die Berge zum Skifahren.',
                a1_bn: 'শীতকালে আমি স্কি করতে পাহাড়ে যেতে খুব পছন্দ করি।',
                a2: 'Im Winter fahre ich sehr gern in die Berge zum Skifahren. Ich fahre mindestens zweimal pro Saison.',
                a2_bn: 'শীতকালে আমি স্কি করতে পাহাড়ে যেতে খুব পছন্দ করি। আমি প্রতি সিজনে অন্তত দুইবার যাই।' },
            { id: 72, keyword: 'Weg zur Arbeit', bn: 'কাজের পথ', q: 'Wie ist Ihr Weg zum Deutschkurs?',
                q_bn: 'আপনার জার্মান কোর্সে যাওয়ার পথ কেমন?',
                a1: 'Ich fahre zwischen zwanzig Minuten mit der U-Bahn zum Kurs.',
                a1_bn: 'আমি কোর্সে যেতে সাবওয়েতে প্রায় বিশ মিনিট সময় নিই।',
                a2: 'Ich fahre mit der U-Bahn zum Deutschkurs. Die Fahrt dauert ungefähr 25 Minuten und kostet nicht viel.',
                a2_bn: 'আমি জার্মান কোর্সে সাবওয়েতে যাই। যাত্রা প্রায় ২৫ মিনিট সময় লাগে এবং খুব বেশি খরচ হয় না।' },
            { id: 73, keyword: 'Gehalt', bn: 'বেতন', q: 'Sind Sie mit Ihrem Gehalt zufrieden?',
                q_bn: 'আপনি কি আপনার বেতন নিয়ে সন্তুষ্ট?', a1: 'Ja, mein Gehalt ist für meine Arbeit ganz in Ordnung.',
                a1_bn: 'হ্যাঁ, আমার কাজের তুলনায় আমার বেতন ঠিক আছে।',
                a2: 'Ja, ich bin mit meinem Gehalt zufrieden. Es ist fair für meine Arbeit und ich kann gut leben davon.',
                a2_bn: 'হ্যাঁ, আমি আমার বেতন নিয়ে সন্তুষ্ট। এটি আমার কাজের জন্য ন্যায্য এবং আমি এটি দিয়ে ভালোভাবে থাকতে পারি।' },
            { id: 74, keyword: 'Arbeitszeit', bn: 'কাজের সময়', q: 'Wie sieht Ihre tägliche Arbeitszeit aus?',
                q_bn: 'আপনার প্রতিদিনের কাজের সময় কেমন?', a1: 'Ich arbeite von Montag bis Freitag von 9 bis 18 Uhr.',
                a1_bn: 'আমি সোমবার থেকে শুক্রবার সকাল ৯টা থেকে সন্ধ্যা ৬টা পর্যন্ত কাজ করি。',


                a2: 'Ich arbeite von Montag bis Freitag von 9 bis 18 Uhr. Das sind 40 Stunden pro Woche und es ist sehr regelmäßig.',
                a2_bn: 'আমি সোমবার থেকে শুক্রবার সকাল ৯টা থেকে সন্ধ্যা ৬টা পর্যন্ত কাজ করি। এটি সপ্তাহে ৪০ ঘণ্টা এবং খুব নিয়মিত।' },
            { id: 75, keyword: 'Einrichtung', bn: 'আসবাবপত্র', q: 'Wie sieht Ihre Einrichtung zu Hause aus?',
                q_bn: 'আপনার বাড়ির ভেতরের সাজসজ্জা কেমন?', a1: 'Meine Möbel im Wohnzimmer sind sehr modern und hell.',
                a1_bn: 'আমার বসার ঘরের আসবাবপত্র খুব আধুনিক এবং উজ্জ্বল।',
                a2: 'Meine Möbel sind modern und hell. Ich habe große Fenster und die Wohnung ist sehr gemütlich eingerichtet.',
                a2_bn: 'আমার আসবাবপত্র আধুনিক এবং উজ্জ্বল। আমার বড় জানালা আছে এবং অ্যাপার্টমেন্টটি খুব আরামদায়ক।' },
            { id: 76, keyword: 'Haushalt', bn: 'গৃহস্থালির কাজ', q: 'Welche Arbeiten machen Sie gern im Haushalt?',
                q_bn: 'আপনি গৃহস্থালির কোন কাজগুলো করতে পছন্দ করেন?',
                a1: 'Ich koche gern für meine Familie und spüle das Geschirr.',
                a1_bn: 'আমি পরিবারের জন্য রান্না করতে এবং থালাবাসন ধুতে পছন্দ করি।',
                a2: 'Ich koche gern für meine Familie und ich spüle auch gern das Geschirr. Das macht mir keine Mühe.',
                a2_bn: 'আমি পরিবারের জন্য রান্না করতে এবং থালাবাসন ধুতে পছন্দ করি। এটি আমার কোনো কষ্ট দেয় না।' },
            { id: 77, keyword: 'Prüfungen', bn: 'পরীক্ষাসমূহ', q: 'Haben Sie Angst vor Prüfungen?',
                q_bn: 'আপনি কি পরীক্ষাকে ভয় পান?', a1: 'Nein, eigentlich nicht, aber ich bin immer ein bisschen nervös.',
                a1_bn: 'না, ঠিক তা নয়, তবে আমি সবসময় একটু চিন্তিত থাকি।',
                a2: 'Nein, ich habe eigentlich nicht wirklich Angst vor Prüfungen. Ich bereite mich gut vor und bin meistens ruhig.',
                a2_bn: 'না, আমি আসলে পরীক্ষাকে খুব ভয় পাই না। আমি ভালোভাবে প্রস্তুত করি এবং বেশিরভাগ সময় শান্ত থাকি।' },
            { id: 78, keyword: 'Aussehen', bn: 'চেহারা/দর্শন', q: 'Tun Sie viel für Ihr gutes Aussehen?',
                q_bn: 'আপনি কি আপনার চেহারা ভালো রাখতে অনেক কিছু করেন?',
                a1: 'Ich gehe regelmäßig zum Friseur und treibe viel Sport.',
                a1_bn: 'আমি নিয়মিত সেলুনে যাই এবং প্রচুর খেলাধুলা করি。',


                a2: 'Ja, ich gehe regelmäßig zum Friseur und treibe viel Sport. Das ist wichtig für meine Gesundheit und mein Aussehen.',
                a2_bn: 'হ্যাঁ, আমি নিয়মিত সেলুনে যাই এবং প্রচুর খেলাধুলা করি। এটি আমার স্বাস্থ্য এবং চেহারার জন্য গুরুত্বপূর্ণ।' },
            { id: 79, keyword: 'Mode', bn: 'ফ্যাশন', q: 'Interessierst du dich für Mode?',
                q_bn: 'তুমি কি ফ্যাশনে আগ্রহী?', a1: 'Ja, ich finde schöne und moderne Kleidung wichtig.',
                a1_bn: 'হ্যাঁ, আমার মতে সুন্দর এবং আধুনিক পোশাক গুরুত্বপূর্ণ।',
                a2: 'Ja, ich interessiere mich für Mode. Ich lese Modezeitschriften und folge aktuellen Trends in den sozialen Medien.',
                a2_bn: 'হ্যাঁ, আমি ফ্যাশনে আগ্রহী। আমি ফ্যাশন ম্যাগাজিন পড়ি এবং সোশ্যাল মিডিয়ায় বর্তমান ট্রেন্ড অনুসরণ করি।' },
            { id: 80, keyword: 'Skateboard', bn: 'স্কেটবোর্ড', q: 'Kannst du Skateboard fahren?',
                q_bn: 'তুমি কি স্কেটবোর্ড চালাতে পারো?', a1: 'Nein, das kann ich nicht, aber ich würde es gern lernen.',
                a1_bn: 'না, আমি পারি না, তবে আমি এটি শিখতে চাই।',
                a2: 'Nein, das kann ich nicht, aber ich würde es sehr gern lernen. Skateboard fahren sieht sehr cool aus.',
                a2_bn: 'না, আমি পারি না, তবে আমি এটি শিখতে খুব চাই। স্কেটবোর্ড চালানো খুব দারুণ দেখায়।' },
            { id: 81, keyword: 'Zirkus', bn: 'সার্কাস', q: 'Gehst du gern in den Zirkus?',
                q_bn: 'তুমি কি সার্কাসে যেতে পছন্দ করো?', a1: 'Nein, ich finde den Zirkus nicht so interessant.',
                a1_bn: 'না, আমার কাছে সার্কাস তেমন আকর্ষণীয় মনে হয় না।',
                a2: 'Nein, ich finde den Zirkus nicht so interessant. Ich bevorzuge eher Sport oder Kulturveranstaltungen.',
                a2_bn: 'না, আমি সার্কাসে যেতে পছন্দ করি না। আমি বরং খেলাধুলা বা সাংস্কৃতিক অনুষ্ঠান পছন্দ করি।' },
            { id: 82, keyword: 'Extremsport', bn: 'চরম খেলাধুলা', q: 'Möchtest du einen Extremsport ausprobieren?',
                q_bn: 'তুমি কি কোনো এক্সট্রিম স্পোর্টস চেষ্টা করতে চাও?',
                a1: 'Ja, ich möchte gern einmal Bungee-Jumping machen.',
                a1_bn: 'হ্যাঁ, আমি একবার বাঞ্জি জাম্পিং করতে চাই।',
                a2: 'Ja, ich möchte gern einmal Bungee-Jumping machen. Das klingt aufregend und ich bin mutig genug dafür.',
                a2_bn: 'হ্যাঁ, আমি একবার বাঞ্জি জাম্পিং করতে চাই। এটি উত্তেজনাপূর্ণ শোনায় এবং আমি এর জন্য সাহসী।' },
            { id: 83, keyword: 'Medien', bn: 'মিডিয়া', q: 'Welche Medien sind für Sie im Alltag wichtig?',
                q_bn: 'দৈনন্দিন জীবনে আপনার জন্য কোন মিডিয়াগুলো গুরুত্বপূর্ণ?',
                a1: 'Für mich sind der Computer und das Handy sehr wichtig.',
                a1_bn: 'আমার জন্য কম্পিউটার এবং মোবাইল ফোন খুব গুরুত্বপূর্ণ।',
                a2: 'Für mich sind der Computer und das Handy sehr wichtig. Ich brauche sie täglich für Arbeit und Kommunikation.',
                a2_bn: 'আমার জন্য কম্পিউটার এবং মোবাইল ফোন খুব গুরুত্বপূর্ণ। আমার কাজ এবং যোগাযোগের জন্য দৈনিক প্রয়োজন।' },
            { id: 84, keyword: 'Kinder', bn: 'সন্তান', q: 'Haben Sie Kinder?', q_bn: 'আপনার কি সন্তান আছে?',
                a1: 'Ja, ich habe einen Sohn und eine Tochter.', a1_bn: 'হ্যাঁ, আমার একটি ছেলে ও একটি মেয়ে আছে।',
                a2: 'Ja, ich habe einen Sohn und eine Tochter. Mein Sohn ist 8 Jahre alt und meine Tochter ist 6 Jahre alt.',
                a2_bn: 'হ্যাঁ, আমার একটি ছেলে এবং একটি মেয়ে আছে। আমার ছেলে ৮ বছর এবং মেয়ে ৬ বছর বয়সী।' },
            { id: 85, keyword: 'Arbeit', bn: 'কাজ/চাকরি', q: 'Wo arbeiten Sie zur Zeit?',
                q_bn: 'আপনি বর্তমানে কোথায় কাজ করেন?', a1: 'Ich arbeite in einem großen Büro in der Stadt.',
                a1_bn: 'আমি শহরের একটি বড় অফিসে কাজ করি।',
                a2: 'Ich arbeite in einem großen Büro in der Stadt. Es ist ein modernes Gebäude mit sehr guter Ausstattung.',
                a2_bn: 'আমি শহরের একটি বড় অফিসে কাজ করি। এটি একটি আধুনিক ভবন এবং খুব ভালো সুবিধা আছে।' },
            { id: 86, keyword: 'Urlaub', bn: 'ছুটি', q: 'Wie machen Sie am liebsten Urlaub?',
                q_bn: 'আপনি কীভাবে ছুটি কাটাতে পছন্দ করেন?', a1: 'Ich mache am liebsten Urlaub am Meer.',
                a1_bn: 'আমি সমুদ্রের তীরে ছুটি কাটাতে সবচেয়ে পছন্দ করি।',
                a2: 'Ich mache am liebsten Urlaub am Meer. Ich schwimme, sonnenbade und genieße die Ruhe.',
                a2_bn: 'আমি সমুদ্রের তীরে ছুটি কাটাতে পছন্দ করি। আমি সাঁতার কাটি, রোদ পোহাই এবং শান্তি উপভোগ করি।' },
            { id: 87, keyword: 'Freunde', bn: 'বন্ধুরা', q: 'Triffst du oft deine Freunde?',
                q_bn: 'তুমি কি প্রায়ই তোমার বন্ধুদের সাথে দেখা করো?', a1: 'Ja, wir treffen uns jedes Wochenende im Café.',
                a1_bn: 'হ্যাঁ, আমরা প্রতি ছুটির দিনে ক্যাফেতে দেখা করি।',
                a2: 'Ja, ich treffe meine Freunde sehr oft. Wir sehen uns jedes Wochenende und manchmal auch unter der Woche.',
                a2_bn: 'হ্যাঁ, আমি খুব বেশি বন্ধুদের সাথে দেখা করি। আমরা প্রতি ছুটির দিনে দেখা করি এবং কখনও কখনও সপ্তাহের দিনেও।' },
            { id: 88, keyword: 'Heimatland', bn: 'নিজ দেশ', q: 'Was vermissen Sie aus Ihrem Heimatland?',
                q_bn: 'আপনার নিজ দেশ থেকে কী জিনিসটি বেশি মনে পড়ে?', a1: 'Ich vermisse das Essen und meine Familie.',
                a1_bn: 'আমার খাবার ও পরিবারের কথা খুব মনে পড়ে。',

                a2: 'Ich vermisse das Essen und meine Familie sehr. Das Wetter ist auch anders und ich vermisse meine Freunde.',
                a2_bn: 'আমি খাবার এবং আমার পরিবারের কথা খুব মনে করি। আবহাওয়াও আলাদা এবং আমি আমার বন্ধুদের মিস করি।' },
            { id: 89, keyword: 'Firma', bn: 'কোম্পানি', q: 'Seit wann arbeiten Sie in dieser Firma?',
                q_bn: 'আপনি কতদিন ধরে এই কোম্পানিতে কাজ করছেন?', a1: 'Ich arbeite seit zwei Jahren in dieser Firma.',
                a1_bn: 'আমি দুই বছর ধরে এই কোম্পানিতে কাজ করছি।',
                a2: 'Ich arbeite seit fünf Jahren in dieser Firma. Ich bin sehr zufrieden hier und mag meine Arbeit sehr.',
                a2_bn: 'আমি পাঁচ বছর ধরে এই কোম্পানিতে কাজ করছি। আমি এখানে খুব সন্তুষ্ট এবং আমার কাজ খুব পছন্দ করি।' },
            { id: 90, keyword: 'Arbeitsplatz', bn: 'কর্মক্ষেত্র', q: 'Wie ist Ihr Arbeitsplatz?',
                q_bn: 'আপনার কর্মক্ষেত্র কেমন?', a1: 'Mein Arbeitsplatz ist modern und hell.',
                a1_bn: 'আমার কর্মক্ষেত্রটি আধুনিক এবং উজ্জ্বল।',
                a2: 'Mein Arbeitsplatz ist modern, hell und sehr praktisch eingerichtet. Ich habe eine schöne Aussicht und gute Arbeitsbedingungen.',
                a2_bn: 'আমার কর্মক্ষেত্র আধুনিক, উজ্জ্বল এবং খুব ব্যবহারিকভাবে সজ্জিত। আমার একটি সুন্দর দৃশ্য এবং ভালো কাজের পরিস্থিতি আছে।' },
            { id: 91, keyword: 'Kollegen', bn: 'সহকর্মীরা', q: 'Sind Sie mit Ihren Kollegen zufrieden?',
                q_bn: 'আপনি কি আপনার সহকর্মীদের নিয়ে সন্তুষ্ট?', a1: 'Ja, meine Kollegen sind sehr nett und hilfsbereit.',
                a1_bn: 'হ্যাঁ, আমার সহকর্মীরা খুব ভালো এবং সহযোগিতাপূর্ণ।',
                a2: 'Ja, ich bin sehr mit meinen Kollegen zufrieden. Sie sind freundlich, hilfsbereit und wir arbeiten gut zusammen.',
                a2_bn: 'হ্যাঁ, আমি আমার সহকর্মীদের নিয়ে খুব সন্তুষ্ট। তারা বন্ধুত্বপূর্ণ, সহায়ক এবং আমরা ভালোভাবে একসাথে কাজ করি।' },
            { id: 92, keyword: 'Pause', bn: 'বিরতি', q: 'Wann haben Sie Mittagspause?',
                q_bn: 'আপনার দুপুরের বিরতি কখন থাকে?', a1: 'Ich habe von 12 bis 13 Uhr Mittagspause.',
                a1_bn: 'আমার দুপুর ১২টা থেকে ১টা পর্যন্ত বিরতি থাকে।',
                a2: 'Ich habe von 12 bis 13 Uhr Mittagspause. Das ist genug Zeit, um etwas zu essen und mich kurz auszuruhen.',
                a2_bn: 'আমার দুপুর ১২টা থেকে ১টা পর্যন্ত বিরতি। এটি কিছু খাওয়ার এবং একটু বিশ্রাম নেওয়ার জন্য যথেষ্ট সময়।' },
            { id: 93, keyword: 'Führerschein', bn: 'ড্রাইভিং লাইসেন্স', q: 'Haben Sie einen Führerschein?',
                q_bn: 'আপনার কি ড্রাইভিং লাইসেন্স আছে?', a1: 'Ja, ich habe seit fünf Jahren einen Führerschein.',
                a1_bn: 'হ্যাঁ, পাঁচ বছর ধরে আমার ড্রাইভিং লাইসেন্স আছে。',


                a2: 'Ja, ich habe seit acht Jahren einen Führerschein. Ich fahre sehr gern Auto und fahre meistens sicher.',
                a2_bn: 'হ্যাঁ, আট বছর ধরে আমার ড্রাইভিং লাইসেন্স আছে। আমি গাড়ি চালাতে খুব পছন্দ করি এবং সাধারণত নিরাপদে চালাই।' },
            { id: 94, keyword: 'Geschenk', bn: 'উপহার', q: 'Was schenken Sie gern Ihren Freunden?',
                q_bn: 'আপনি আপনার বন্ধুদের কী উপহার দিতে পছন্দ করেন?', a1: 'Ich schenke gern Bücher oder Blumen.',
                a1_bn: 'আমি বই বা ফুল উপহার দিতে পছন্দ করি।',
                a2: 'Ich schenke gern Bücher oder schöne Dinge wie Blumen. Das sind Geschenke, die zeigen, dass ich an die Person denke.',
                a2_bn: 'আমি বই বা ফুলের মতো সুন্দর জিনিস উপহার দিতে পছন্দ করি। এগুলো এমন উপহার যা দেখায় যে আমি ব্যক্তির কথা ভাবছি।' },
            { id: 95, keyword: 'Konto', bn: 'ব্যাংক অ্যাকাউন্ট', q: 'Haben Sie ein Konto bei der Bank?',
                q_bn: 'ব্যাংকে কি আপনার কোনো অ্যাকাউন্ট আছে?', a1: 'Ja, ich habe ein Girokonto bei der Sparkasse.',
                a1_bn: 'হ্যাঁ, স্পার্কাস ব্যাংকে আমার একটি কারেন্ট অ্যাকাউন্ট আছে।',
                a2: 'Ja, ich habe ein Girokonto bei einer Bank. Ich verwende es täglich für Zahlungen und Überweisungen.',
                a2_bn: 'হ্যাঁ, আমার একটি ব্যাংকে কারেন্ট অ্যাকাউন্ট আছে। আমি এটি দৈনিক পেমেন্ট এবং ট্রান্সফারের জন্য ব্যবহার করি।' },
            { id: 96, keyword: 'Arzt', bn: 'ডাক্তার', q: 'Wie oft gehen Sie zum Arzt?',
                q_bn: 'আপনি কত ঘন ঘন ডাক্তারের কাছে যান?', a1: 'Ich gehe nur selten zum Arzt, wenn ich krank bin.',
                a1_bn: 'আমি খুব কমই ডাক্তারের কাছে যাই, যখন অসুস্থ থাকি।',
                a2: 'Ich gehe nur selten zum Arzt, eigentlich nur wenn ich krank bin. Ich bin normalerweise sehr gesund.',
                a2_bn: 'আমি খুব কমই ডাক্তারের কাছে যাই, আসলে শুধুমাত্র যখন আমি অসুস্থ থাকি। আমি সাধারণত খুব স্বাস্থ্যবান।' },
            { id: 97, keyword: 'Krankenhaus', bn: 'হাসপাতাল', q: 'Warst du schon mal im Krankenhaus?',
                q_bn: 'তুমি কি কখনো হাসপাতালে গিয়েছিলে?', a1: 'Ja, letztes Jahr wegen einer Operation.',
                a1_bn: 'হ্যাঁ, গত বছর একটি অপারেশনের জন্য গিয়েছিলাম।',
                a2: 'Ja, ich war letztes Jahr zwei Wochen im Krankenhaus wegen einer Operation. Die Erfahrung war nicht besonders angenehm.',
                a2_bn: 'হ্যাঁ, আমি গত বছর একটি অপারেশনের জন্য দুই সপ্তাহ হাসপাতালে ছিলাম। অভিজ্ঞতাটি খুব আনন্দদায়ক ছিল না।' },
            { id: 98, keyword: 'Apotheke', bn: 'ফার্মেসি', q: 'Wo ist die nächste Apotheke?',
                q_bn: 'নিকটতম ফার্মেসি কোথায়?', a1: 'Die nächste Apotheke ist direkt am Bahnhof.',
                a1_bn: 'নিকটতম ফার্মেসি ঠিক স্টেশনের পাশেই。',


                a2: 'Die nächste Apotheke ist in meiner Nähe, direkt neben der Bushaltestelle. Ich gehe dort hin, wenn ich Medikamente brauche.',
                a2_bn: 'নিকটতম ফার্মেসি আমার কাছাকাছি, বাস স্টপের পাশে। আমি ওষুধের প্রয়োজন হলে সেখানে যাই।' },
            { id: 99, keyword: 'Bahnhof', bn: 'রেলস্টেশন', q: 'Wie kommen Sie zum Bahnhof?',
                q_bn: 'আপনি কীভাবে স্টেশনে যান?', a1: 'Ich fahre mit dem Bus zum Bahnhof.',
                a1_bn: 'আমি বাসে করে স্টেশনে যাই।',
                a2: 'Ich fahre mit dem Bus zum Bahnhof. Die Fahrt dauert ungefähr 10 Minuten und ist sehr zuverlässig.',
                a2_bn: 'আমি বাসে করে স্টেশনে যাই। যাত্রা প্রায় ১০ মিনিট সময় লাগে এবং খুব নির্ভরযোগ্য।' },
            { id: 100, keyword: 'Gepäck', bn: 'লাগেজ', q: 'Haben Sie viel Gepäck dabei?',
                q_bn: 'আপনার সাথে কি অনেক লাগেজ আছে?', a1: 'Nein, ich habe nur einen kleinen Koffer.',
                a1_bn: 'না, আমার সাথে কেবল একটি ছোট স্যুটকেস আছে।',
                a2: 'Nein, ich habe nicht viel Gepäck dabei. Ich habe nur einen kleinen Rucksack und eine Tasche mit den wichtigsten Sachen.',
                a2_bn: 'না, আমার অনেক লাগেজ নেই। আমার কেবল একটি ছোট রুকস্যাক এবং প্রয়োজনীয় জিনিসপত্রের একটি ব্যাগ আছে।' },
            { id: 101, keyword: 'Hotel', bn: 'হোটেল', q: 'In welchem Hotel übernachten Sie?',
                q_bn: 'আপনি কোন হোটেলে রাত কাটাচ্ছেন?', a1: 'Ich wohne in einem kleinen Hotel im Zentrum.',
                a1_bn: 'আমি শহরের কেন্দ্রের একটি ছোট হোটেলে থাকি。',


                a2: 'Ich wohne in einem kleinen, aber sehr gemütlichen Hotel im Zentrum. Das Hotel ist sauber und das Personal ist sehr freundlich.',
                a2_bn: 'আমি শহরের কেন্দ্রের একটি ছোট কিন্তু খুব আরামদায়ক হোটেলে থাকি। হোটেলটি পরিষ্কার এবং কর্মীরা খুব বন্ধুত্বপূর্ণ।' },
            { id: 102, keyword: 'Sehenswürdigkeit', bn: 'দর্শনীয় স্থান', q: 'Welche Sehenswürdigkeit möchtest du besuchen?',
                q_bn: 'তুমি কোন দর্শনীয় স্থান দেখতে চাও?', a1: 'Ich möchte gern das alte Schloss besuchen.',
                a1_bn: 'আমি পুরনো রাজপ্রাসাদটি দেখতে চাই।',
                a2: 'Ich möchte gern das alte Schloss besuchen. Ich interessiere mich für Geschichte und die Architektur ist wunderbar.',
                a2_bn: 'আমি পুরনো রাজপ্রাসাদটি দেখতে চাই। আমি ইতিহাসে আগ্রহী এবং স্থাপত্য অসাধারণ।' },
            { id: 103, keyword: 'Schiff', bn: 'জাহাজ', q: 'Fährst du gern mit dem Schiff?',
                q_bn: 'তুমি কি জাহাজে ভ্রমণ করতে পছন্দ করো?', a1: 'Ja, eine Schifffahrt im Sommer ist sehr schön.',
                a1_bn: 'হ্যাঁ, গ্রীষ্মকালে নৌভ্রমণ খুব সুন্দর হয়।',
                a2: 'Ja, ich fahre gern mit dem Schiff. Eine Schifffahrt im Sommer ist sehr schön und erholsam.',
                a2_bn: 'হ্যাঁ, আমি জাহাজে ভ্রমণ করতে পছন্দ করি। গ্রীষ্মে নৌভ্রমণ খুব সুন্দর এবং পুনরুজ্জীবনকারী।' },
            { id: 104, keyword: 'Post', bn: 'ডাকঘর', q: 'Wo ist die Post bitte?', q_bn: 'ডাকঘরটি কোথায় দয়া করে বলতে পারবেন?',
                a1: 'Die Post ist gleich um die Ecke.', a1_bn: 'ডাকঘরটি ঠিক মোড়ের সাথেই。',


                a2: 'Die Post ist gleich um die Ecke von meinem Haus. Sie ist sehr nah und ich gehe dort hin, wenn ich Briefe aufgeben muss.',
                a2_bn: 'ডাকঘরটি আমার বাড়ির সাথে ঠিক মোড়ে। এটি খুব কাছে এবং আমি চিঠি পাঠাতে সেখানে যাই।' },
            { id: 105, keyword: 'Anruf', bn: 'ফোন কল', q: 'Bekommst du viele Anrufe am Tag?',
                q_bn: 'তুমি কি দিনে অনেক ফোন কল পাও?', a1: 'Ja, beruflich telefoniere ich sehr viel.',
                a1_bn: 'হ্যাঁ, পেশাগত কারণে আমাকে অনেক ফোন করতে হয়।',
                a2: 'Ja, ich bekomme viele Anrufe am Tag, besonders beruflich. Ich telefoniere mit Kunden und Kollegen sehr häufig.',
                a2_bn: 'হ্যাঁ, আমি প্রতিদিন অনেক ফোন কল পাই, বিশেষ করে পেশাদারভাবে। আমি গ্রাহক এবং সহকর্মীদের সাথে খুব ঘন ঘন কথা বলি।' },
            { id: 106, keyword: 'Schalter', bn: 'কাউন্টার', q: 'An welchem Schalter bekomme ich die Fahrkarte?',
                q_bn: 'আমি কোন কাউন্টার থেকে টিকিটি পাবো?', a1: 'Gehen Sie bitte an Schalter Nummer drei.',
                a1_bn: 'দয়া করে তিন নম্বর কাউন্টারে যান।',
                a2: 'Gehen Sie bitte an Schalter Nummer 3 oder Nummer 5. Dort bekommen Sie schnell die Fahrkarte für Ihre Reise.',
                a2_bn: 'দয়া করে ৩ নম্বর বা ৫ নম্বর কাউন্টারে যান। সেখানে আপনি আপনার ভ্রমণের জন্য দ্রুত টিকিট পাবেন।' },
            { id: 107, keyword: 'Eintritt', bn: 'প্রবেশমূল্য', q: 'Wie viel kostet der Eintritt?',
                q_bn: 'প্রবেশমূল্য কত?', a1: 'Der Eintritt kostet fünf Euro für Erwachsene.',
                a1_bn: 'প্রাপ্তবয়স্কদের জন্য প্রবেশমূল্য পাঁচ ইউরো。',


                a2: 'Der Eintritt kostet 8 Euro für Erwachsene und 4 Euro für Kinder. Studenten bekommen auch einen Rabatt von 20 Prozent.',
                a2_bn: 'প্রাপ্তবয়স্কদের জন্য প্রবেশমূল্য ৮ ইউরো এবং শিশুদের জন্য ৪ ইউরো। শিক্ষার্থীরা ২০ শতাংশ ছাড়ও পায়।' },
            { id: 108, keyword: 'Gesundheit', bn: 'স্বাস্থ্য', q: 'Was machen Sie für Ihre Gesundheit?',
                q_bn: 'আপনার স্বাস্থ্যের সুরক্ষায় আপনি কী করেন?', a1: 'Ich treibe viel Sport und esse gesund.',
                a1_bn: 'আমি প্রচুর খেলাধুলা করি এবং স্বাস্থ্যকর খাবার খাই।',
                a2: 'Ich treibe viel Sport und esse gesund. Ich esse viel Obst und Gemüse und trinke viel Wasser.',
                a2_bn: 'আমি প্রচুর খেলাধুলা করি এবং স্বাস্থ্যকর খাবার খাই। আমি অনেক ফল এবং শাকসবজি খাই এবং অনেক জল পান করি।' },
            { id: 109, keyword: 'Fleisch', bn: 'মাংস', q: 'Isst du oft Fleisch?', q_bn: 'তুমি কি প্রায়ই মাংস খাও?', a1: 'Nein, ich esse lieber Fisch und Gemüse.', a1_bn: 'না, আমি মাছ এবং শাকসবজি খেতে বেশি পছন্দ করি।',
                a2: 'Nein, ich esse nicht oft Fleisch. Ich bevorzuge Fisch und Gemüse, weil das gesund ist.',
                a2_bn: 'না, আমি প্রায়ই মাংস খাই না। আমি মাছ এবং শাকসবজি পছন্দ করি কারণ এটি স্বাস্থ্যকর।' },
            { id: 110, keyword: 'Kuchen', bn: 'কেক', q: 'Backst du gern Kuchen?', q_bn: 'তুমি কি কেক বেক করতে পছন্দ করো?', a1: 'Ja, am Wochenende backe ich oft Schokoladenkuchen.',
                a1_bn: 'হ্যাঁ, ছুটির দিনে আমি প্রায়ই চকোলেট কেক বানাই।',
                a2: 'Ja, ich backe gern Kuchen. Am Wochenende backe ich oft Schokoladenkuchen oder Apfelkuchen für meine Familie.',
                a2_bn: 'হ্যাঁ, আমি কেক বেক করতে পছন্দ করি। ছুটির দিনে আমি প্রায়ই আমার পরিবারের জন্য চকোলেট বা আপেলের কেক বানাই।' },
            { id: 111, keyword: 'Nachrichten', bn: 'সংবাদ', q: 'Woher bekommen Sie Ihre Nachrichten?',
                q_bn: 'আপনি কোথা থেকে সংবাদ পান?', a1: 'Ich lese Nachrichten im Internet auf dem Handy.',
                a1_bn: 'আমি মোবাইলে ইন্টারনেটের মাধ্যমে সংবাদ পড়ি।',
                a2: 'Ich lese Nachrichten im Internet auf dem Handy oder Computer. Ich mag Nachrichten-Portale, die sehr zuverlässig sind.',
                a2_bn: 'আমি মোবাইল বা কম্পিউটারে ইন্টারনেটের মাধ্যমে সংবাদ পড়ি। আমি এমন সংবাদ পোর্টাল পছন্দ করি যা খুব নির্ভরযোগ্য।' },
            { id: 112, keyword: 'Traumberuf', bn: 'স্বপ্নের পেশা', q: 'Was ist dein Traumberuf?',
                q_bn: 'তোমার স্বপ্নের পেশা কী?', a1: 'Mein Traumberuf ist Journalist zu werden.',
                a1_bn: 'আমার স্বপ্নের পেশা একজন সাংবাদিক হওয়া।',
                a2: 'Mein Traumberuf ist Journalist zu werden. Ich interessiere mich für Nachrichten und ich möchte Menschen informieren.',
                a2_bn: 'আমার স্বপ্নের পেশা একজন সাংবাদিক হওয়া। আমি সংবাদে আগ্রহী এবং মানুষকে অবহিত করতে চাই।' },
            { id: 113, keyword: 'Familienname', bn: 'পদবি', q: 'Wie ist Ihr Familienname?',
                q_bn: 'আপনার পদবি কী?', a1: 'Mein Familienname ist Müller.', a1_bn: 'আমার পদবি মুলার।',
                a2: 'Mein Familienname ist Müller. Das ist ein sehr häufiger Name in Deutschland.',
                a2_bn: 'আমার পদবি মুলার। এটি জার্মানিতে একটি খুব সাধারণ নাম।' }
        ];


// ---- T2 search toggle (lives here because T1 search toggle is below) ----
function toggleT2Search() {
    const wrap = document.getElementById('t2-search-wrap');
    const input = document.getElementById('t2-search');
    if (wrap.classList.contains('hidden')) {
        wrap.classList.remove('hidden');
        input.focus();
    } else {
        wrap.classList.add('hidden');
        input.value = '';
        renderT2();
    }
}

// ---- T1 render + state ----
let initialT1Render = true;

function renderT1() {
    const search = document.getElementById('t1-search').value.trim().toLocaleLowerCase();
    t1Sort = document.getElementById('t1-sort').value;
    const grid = document.getElementById('t1-grid');

    let filtered = T1_DATA.filter(d => {
        const searchable = [d.keyword, d.bn, d.q, d.q_bn, d.a1, d.a1_bn, d.a2, d.a2_bn].join(' ').toLocaleLowerCase();
        return !search || searchable.includes(search);
    });

    if (t1BookmarkFilter) {
        filtered = filtered.filter(d => t1Bookmarks.has(d.id));
    }

    const data = sortEntries(filtered, t1Sort);
    animateCount(document.getElementById('t1-count'), data.length);

    if (data.length === 0 && t1BookmarkFilter) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-500 dark:text-slate-400"><i class="fa-solid fa-bookmark text-4xl mb-3 opacity-30"></i><p class="text-base font-medium">Keine Lesezeichen gefunden.</p><p class="text-[13px] mt-1">Markieren Sie Karten mit dem Lesezeichen-Symbol, um sie hier zu sehen.</p></div>`;
    } else {
        const cardsHTML = data.map(d => {
            const isBookmarked = t1Bookmarks.has(d.id);
            const bookmarkIcon = isBookmarked ? 'fa-solid fa-bookmark text-amber-500' : 'fa-regular fa-bookmark text-slate-400';
            const bookmarkTitle = isBookmarked ? 'Lesezeichen entfernen' : 'Lesezeichen hinzufügen';
            const isRevealed = t1RevealedCards.has(d.id);
            const answerStyle = (t1StudyMode && !isRevealed) ? 'display: none;' : '';
            const cardClickHandler = (t1StudyMode && !isRevealed) ? `onclick="toggleT1CardReveal(${d.id})"` : '';
            const cardCursor = (t1StudyMode && !isRevealed) ? 'cursor-pointer' : '';
            const showBengali = t1ShowBengali;

            return `<div class="bg-white dark:bg-ghSurface ring-1 ring-slate-900/5 dark:ring-white/5 rounded-2xl p-4 shadow-sm card-hover space-y-3 ${cardCursor}" ${cardClickHandler}>
                <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <div class="flex items-center gap-2"><span class="text-[12px] font-black px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">#${d.id}</span><span class="text-4xl">${getT1Icon(d.keyword)}</span><h3 class="text-lg font-extrabold text-slate-900 dark:text-white">${d.keyword}</h3>${showBengali ? `<span class="text-[22px] text-slate-500 font-medium">${d.bn}</span>` : ''}</div>
                    <div class="flex items-center gap-1.5">
                        <button onclick="event.stopPropagation(); toggleT1Bookmark(${d.id})" class="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="${bookmarkTitle}" title="${bookmarkTitle}"><i class="${bookmarkIcon} text-lg"></i></button>
                    </div>
                </div>
                <div class="p-2.5 bg-sky-100/15 dark:bg-sky-950/30 rounded-xl border border-sky-200 dark:border-sky-900/50 space-y-1 relative">
                    <div class="flex items-center justify-between text-[12px] font-bold text-sky-700 dark:text-sky-400">
                        <span>Frage</span>
                        <button onclick="event.stopPropagation(); speakText('${d.q.replace(/'/g,"\'")}', this)" class="text-amber-400 hover:text-amber-300 p-1 shrink-0"><i class="fa-solid fa-volume-high"></i></button>
                    </div>
                    <p class="text-base font-bold text-slate-900 dark:text-white">${d.q}</p>
                    ${showBengali ? `<p class="bangla-t2-t3 text-[13px] text-slate-500 dark:text-slate-200 font-medium">${d.q_bn}</p>` : ''}
                </div>
                <div class="p-2.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-900/50 space-y-1" style="${answerStyle}">
                    <div class="flex items-center justify-between text-[12px] font-bold text-emerald-700 dark:text-emerald-400"><span>Antwort 1 (Easy)</span><button onclick="event.stopPropagation(); speakText('${d.a1.replace(/'/g,"\'")}', this)" class="hover:underline"><i class="fa-solid fa-volume-high"></i></button></div>
                    <p class="text-base font-bold text-emerald-950 dark:text-emerald-200">${d.a1}</p>
                    ${showBengali ? `<p class="bangla-t2-t3 text-[13px] text-emerald-700 dark:text-emerald-200 font-medium">${d.a1_bn}</p>` : ''}
                </div>
                <div class="p-2.5 bg-sky-950/23 dark:bg-slate-800/50 rounded-xl border border-sky-200 dark:border-slate-700 space-y-1" style="${answerStyle}">
                    <div class="flex items-center justify-between text-[12px] font-bold text-black/90 dark:text-white/90"><span>Antwort 2 (Better)</span><button onclick="event.stopPropagation(); speakText('${d.a2.replace(/'/g,"\'")}', this)" class="hover:underline"><i class="fa-solid fa-volume-high"></i></button></div>
                    <p class="text-base font-bold text-amber-950 dark:text-white">${d.a2}</p>
                    ${showBengali ? `<p class="bangla-t2-t3 text-[13px] text-amber-700 dark:text-slate-200 font-medium">${d.a2_bn}</p>` : ''}
                </div>
                ${(t1StudyMode && !isRevealed) ? `<div class="w-full mt-2"><div class="w-full h-20 flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 dark:bg-slate-800 border border-blue-300 dark:border-slate-700 rounded-xl text-blue-800 dark:text-blue-200 font-medium"><i class="fa-solid fa-eye"></i><span>দেখতে এখানে ট্যাপ করুন (Click to Reveal)</span></div></div>` : ''}
            </div>`;
        }).join('');
        renderWithSkeleton(grid, cardsHTML, initialT1Render);
        initialT1Render = false;
    }
}

// ---- T1 features ----
function toggleT1StudyMode() {
    t1StudyMode = !t1StudyMode;
    localStorage.setItem('t1StudyMode', String(t1StudyMode));
    const btn = document.getElementById('t1-study-btn');
    if (t1StudyMode) {
        btn.classList.add('bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300');
        btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
        btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i><span class="hidden sm:block">Study Mode</span>';
        showToast('Study Mode: AN – Antworten ausgeblendet');
    } else {
        btn.classList.remove('bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300');
        btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
        btn.innerHTML = '<i class="fa-solid fa-eye"></i><span class="hidden sm:block">Study Mode</span>';
        showToast('Study Mode: AUS – Antworten sichtbar');
        t1RevealedCards.clear();
    }
    renderT1();
}

function toggleT1BookmarkFilter() {
    t1BookmarkFilter = !t1BookmarkFilter;
    localStorage.setItem('t1BookmarkFilter', String(t1BookmarkFilter));
    const btn = document.getElementById('t1-bookmark-btn');
    if (t1BookmarkFilter) {
        btn.classList.add('bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300');
        btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
        btn.innerHTML = '<i class="fa-solid fa-bookmark text-lg"></i><span class="hidden sm:block">Bookmarks</span>';
        showToast('Lesezeichen-Filter: AN');
    } else {
        btn.classList.remove('bg-amber-100', 'dark:bg-amber-900/30', 'text-amber-700', 'dark:text-amber-300');
        btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-200');
        btn.innerHTML = '<i class="fa-solid fa-bookmark text-lg"></i>';
        showToast('Lesezeichen-Filter: AUS');
    }
    initialT1Render = true;
    renderT1();
}

function toggleT1Bookmark(id) {
    if (t1Bookmarks.has(id)) {
        t1Bookmarks.delete(id);
        showToast('Lesezeichen entfernt');
    } else {
        t1Bookmarks.add(id);
        showToast('Lesezeichen hinzugefügt');
    }
    localStorage.setItem('t1Bookmarks', JSON.stringify([...t1Bookmarks]));
    renderT1();
}

function toggleT1Search() {
    const wrap = document.getElementById('t1-search-wrap');
    const input = document.getElementById('t1-search');
    if (wrap.classList.contains('hidden')) {
        wrap.classList.remove('hidden');
        input.focus();
    } else {
        wrap.classList.add('hidden');
        input.value = '';
        renderT1();
    }
}

function toggleT1CardReveal(id) {
    if (!t1StudyMode) return;
    if (t1RevealedCards.has(id)) {
        t1RevealedCards.delete(id);
    } else {
        t1RevealedCards.add(id);
    }
    renderT1();
}

function clearT1RevealedCards() {
    t1RevealedCards.clear();
    renderT1();
}

function toggleT1Bengali() {
    t1ShowBengali = !t1ShowBengali;
    localStorage.setItem('t1ShowBengali', String(t1ShowBengali));
    const btn = document.getElementById('t1-bengali-btn');
    if (t1ShowBengali) {
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
    renderT1();
}
