// Minna no Nihongo Volume 1, Chapters 1-3 Data
// Comprehensive Japanese Learning Module

// Katakana Data
const katakanaData = [
    // Baris A
    { char: 'ア', romaji: 'a', meaning: 'Suara vokal "a"', strokes: ['ア'], examples: ['アメリカ (Amerika) - Amerika', 'アニメ (anime) - anime'] },
    { char: 'イ', romaji: 'i', meaning: 'Suara vokal "i"', strokes: ['イ'], examples: ['イギリス (Igirisu) - Inggris', 'インド (Indo) - India'] },
    { char: 'ウ', romaji: 'u', meaning: 'Suara vokal "u"', strokes: ['ウ'], examples: ['ウイスキー (uisukii) - whisky', 'ウール (uuru) - wool'] },
    { char: 'エ', romaji: 'e', meaning: 'Suara vokal "e"', strokes: ['エ'], examples: ['エレベーター (erebeetaa) - elevator', 'エンジン (enjin) - engine'] },
    { char: 'オ', romaji: 'o', meaning: 'Suara vokal "o"', strokes: ['オ'], examples: ['オーストラリア (Oosutoraria) - Australia', 'オレンジ (orenji) - orange'] },
    
    // Baris K
    { char: 'カ', romaji: 'ka', meaning: 'Konsonan K + A', strokes: ['カ'], examples: ['カメラ (kamera) - camera', 'カレー (karee) - curry'] },
    { char: 'キ', romaji: 'ki', meaning: 'Konsonan K + I', strokes: ['キ'], examples: ['キロ (kiro) - kilo', 'キッチン (kicchin) - kitchen'] },
    { char: 'ク', romaji: 'ku', meaning: 'Konsonan K + U', strokes: ['ク'], examples: ['クラス (kurasu) - class', 'クリーム (kuriimu) - cream'] },
    { char: 'ケ', romaji: 'ke', meaning: 'Konsonan K + E', strokes: ['ケ'], examples: ['ケーキ (keeki) - cake', 'ケース (keesu) - case'] },
    { char: 'コ', romaji: 'ko', meaning: 'Konsonan K + O', strokes: ['コ'], examples: ['コーヒー (koohii) - coffee', 'コンピューター (konpyuutaa) - computer'] },
    
    // Baris S
    { char: 'サ', romaji: 'sa', meaning: 'Konsonan S + A', strokes: ['サ'], examples: ['サラダ (sarada) - salad', 'サッカー (sakkaa) - soccer'] },
    { char: 'シ', romaji: 'shi', meaning: 'Konsonan S + I', strokes: ['シ'], examples: ['シャツ (shatsu) - shirt', 'システム (shisutemu) - system'] },
    { char: 'ス', romaji: 'su', meaning: 'Konsonan S + U', strokes: ['ス'], examples: ['スポーツ (supootsu) - sports', 'ステーション (suteeshon) - station'] },
    { char: 'セ', romaji: 'se', meaning: 'Konsonan S + E', strokes: ['セ'], examples: ['セーター (seetaa) - sweater', 'センター (sentaa) - center'] },
    { char: 'ソ', romaji: 'so', meaning: 'Konsonan S + O', strokes: ['ソ'], examples: ['ソファー (sofaa) - sofa', 'ソース (soosu) - sauce'] },
    
    // Baris T
    { char: 'タ', romaji: 'ta', meaning: 'Konsonan T + A', strokes: ['タ'], examples: ['タクシー (takushii) - taxi', 'タオル (taoru) - towel'] },
    { char: 'チ', romaji: 'chi', meaning: 'Konsonan T + I', strokes: ['チ'], examples: ['チーズ (chiizu) - cheese', 'チケット (chiketto) - ticket'] },
    { char: 'ツ', romaji: 'tsu', meaning: 'Konsonan T + U', strokes: ['ツ'], examples: ['ツアー (tsuaa) - tour', 'ツール (tsuuru) - tool'] },
    { char: 'テ', romaji: 'te', meaning: 'Konsonan T + E', strokes: ['テ'], examples: ['テレビ (terebi) - TV', 'テスト (tesuto) - test'] },
    { char: 'ト', romaji: 'to', meaning: 'Konsonan T + O', strokes: ['ト'], examples: ['トイレ (toire) - toilet', 'トマト (tomato) - tomato'] },
    
    // Baris N
    { char: 'ナ', romaji: 'na', meaning: 'Konsonan N + A', strokes: ['ナ'], examples: ['ナイフ (naifu) - knife', 'ナンバー (nanbaa) - number'] },
    { char: 'ニ', romaji: 'ni', meaning: 'Konsonan N + I', strokes: ['ニ'], examples: ['ニュース (nyuusu) - news', 'ニューヨーク (Nyuu Yooku) - New York'] },
    { char: 'ヌ', romaji: 'nu', meaning: 'Konsonan N + U', strokes: ['ヌ'], examples: ['ヌードル (nuudoru) - noodle'] },
    { char: 'ネ', romaji: 'ne', meaning: 'Konsonan N + E', strokes: ['ネ'], examples: ['ネクタイ (nekutai) - necktie', 'ネット (netto) - net'] },
    { char: 'ノ', romaji: 'no', meaning: 'Konsonan N + O', strokes: ['ノ'], examples: ['ノート (nooto) - notebook', 'ノーマル (noomaru) - normal'] },
    
    // Baris H
    { char: 'ハ', romaji: 'ha', meaning: 'Konsonan H + A', strokes: ['ハ'], examples: ['ハンバーガー (hanbaagaa) - hamburger', 'ハート (haato) - heart'] },
    { char: 'ヒ', romaji: 'hi', meaning: 'Konsonan H + I', strokes: ['ヒ'], examples: ['ヒーター (hiitaa) - heater', 'ヒント (hinto) - hint'] },
    { char: 'フ', romaji: 'fu', meaning: 'Konsonan H + U', strokes: ['フ'], examples: ['フィルム (firumu) - film', 'フォーク (fooku) - fork'] },
    { char: 'ヘ', romaji: 'he', meaning: 'Konsonan H + E', strokes: ['ヘ'], examples: ['ヘリコプター (herikoputaa) - helicopter'] },
    { char: 'ホ', romaji: 'ho', meaning: 'Konsonan H + O', strokes: ['ホ'], examples: ['ホテル (hoteru) - hotel', 'ホーム (hoomu) - home/platform'] },
    
    // Baris M
    { char: 'マ', romaji: 'ma', meaning: 'Konsonan M + A', strokes: ['マ'], examples: ['マーケット (maaketto) - market', 'マウス (mausu) - mouse'] },
    { char: 'ミ', romaji: 'mi', meaning: 'Konsonan M + I', strokes: ['ミ'], examples: ['ミルク (miruku) - milk', 'ミーティング (miitingu) - meeting'] },
    { char: 'ム', romaji: 'mu', meaning: 'Konsonan M + U', strokes: ['ム'], examples: ['ムービー (muubii) - movie'] },
    { char: 'メ', romaji: 'me', meaning: 'Konsonan M + E', strokes: ['メ'], examples: ['メール (meeru) - email', 'メニュー (menyuu) - menu'] },
    { char: 'モ', romaji: 'mo', meaning: 'Konsonan M + O', strokes: ['モ'], examples: ['モデル (moderu) - model', 'モーター (mootaa) - motor'] },
    
    // Baris Y
    { char: 'ヤ', romaji: 'ya', meaning: 'Konsonan Y + A', strokes: ['ヤ'], examples: ['ヤード (yaado) - yard'] },
    { char: 'ユ', romaji: 'yu', meaning: 'Konsonan Y + U', strokes: ['ユ'], examples: ['ユーザー (yuuzaa) - user', 'ユニフォーム (yunifoomu) - uniform'] },
    { char: 'ヨ', romaji: 'yo', meaning: 'Konsonan Y + O', strokes: ['ヨ'], examples: ['ヨーロッパ (Yooroppa) - Europe', 'ヨーグルト (yooguruto) - yogurt'] },
    
    // Baris R
    { char: 'ラ', romaji: 'ra', meaning: 'Konsonan R + A', strokes: ['ラ'], examples: ['ラジオ (rajio) - radio', 'ライス (raisu) - rice'] },
    { char: 'リ', romaji: 'ri', meaning: 'Konsonan R + I', strokes: ['リ'], examples: ['リモコン (rimokon) - remote control', 'リスト (risuto) - list'] },
    { char: 'ル', romaji: 'ru', meaning: 'Konsonan R + U', strokes: ['ル'], examples: ['ルール (ruuru) - rule', 'ルーム (ruumu) - room'] },
    { char: 'レ', romaji: 're', meaning: 'Konsonan R + E', strokes: ['レ'], examples: ['レストラン (resutoran) - restaurant', 'レモン (remon) - lemon'] },
    { char: 'ロ', romaji: 'ro', meaning: 'Konsonan R + O', strokes: ['ロ'], examples: ['ロボット (robotto) - robot', 'ロッカー (rokkaa) - locker'] },
    
    // Baris W dan N
    { char: 'ワ', romaji: 'wa', meaning: 'Konsonan W + A', strokes: ['ワ'], examples: ['ワイン (wain) - wine', 'ワード (waado) - word'] },
    { char: 'ヲ', romaji: 'wo/o', meaning: 'Partikel objek (jarang digunakan)', strokes: ['ヲ'], examples: ['Jarang digunakan dalam katakana'] },
    { char: 'ン', romaji: 'n', meaning: 'Konsonan N tunggal', strokes: ['ン'], examples: ['パン (pan) - bread', 'レモン (remon) - lemon'] }
];

// Katakana Dakuten
const katakanaDakutenData = [
    // G sounds
    { char: 'ガ', romaji: 'ga', meaning: 'Konsonan G + A', strokes: ['ガ'], examples: ['ガス (gasu) - gas', 'ガラス (garasu) - glass'] },
    { char: 'ギ', romaji: 'gi', meaning: 'Konsonan G + I', strokes: ['ギ'], examples: ['ギター (gitaa) - guitar', 'ギリシャ (Girisha) - Greece'] },
    { char: 'グ', romaji: 'gu', meaning: 'Konsonan G + U', strokes: ['グ'], examples: ['グループ (guruupu) - group', 'グラス (gurasu) - glass'] },
    { char: 'ゲ', romaji: 'ge', meaning: 'Konsonan G + E', strokes: ['ゲ'], examples: ['ゲーム (geemu) - game', 'ゲート (geeto) - gate'] },
    { char: 'ゴ', romaji: 'go', meaning: 'Konsonan G + O', strokes: ['ゴ'], examples: ['ゴルフ (gorufu) - golf', 'ゴール (gooru) - goal'] },
    
    // Z sounds
    { char: 'ザ', romaji: 'za', meaning: 'Konsonan Z + A', strokes: ['ザ'], examples: ['ザ (za) - the'] },
    { char: 'ジ', romaji: 'ji', meaning: 'Konsonan Z + I', strokes: ['ジ'], examples: ['ジュース (juusu) - juice', 'ジャズ (jazu) - jazz'] },
    { char: 'ズ', romaji: 'zu', meaning: 'Konsonan Z + U', strokes: ['ズ'], examples: ['ズボン (zubon) - pants'] },
    { char: 'ゼ', romaji: 'ze', meaning: 'Konsonan Z + E', strokes: ['ゼ'], examples: ['ゼロ (zero) - zero'] },
    { char: 'ゾ', romaji: 'zo', meaning: 'Konsonan Z + O', strokes: ['ゾ'], examples: ['ゾーン (zoon) - zone'] },
    
    // D sounds
    { char: 'ダ', romaji: 'da', meaning: 'Konsonan D + A', strokes: ['ダ'], examples: ['ダンス (dansu) - dance', 'ダイヤ (daiya) - diamond'] },
    { char: 'ヂ', romaji: 'ji', meaning: 'Konsonan D + I', strokes: ['ヂ'], examples: ['Jarang digunakan'] },
    { char: 'ヅ', romaji: 'zu', meaning: 'Konsonan D + U', strokes: ['ヅ'], examples: ['Jarang digunakan'] },
    { char: 'デ', romaji: 'de', meaning: 'Konsonan D + E', strokes: ['デ'], examples: ['デート (deeto) - date', 'デザイン (dezain) - design'] },
    { char: 'ド', romaji: 'do', meaning: 'Konsonan D + O', strokes: ['ド'], examples: ['ドア (doa) - door', 'ドライブ (doraibu) - drive'] },
    
    // B sounds
    { char: 'バ', romaji: 'ba', meaning: 'Konsonan B + A', strokes: ['バ'], examples: ['バス (basu) - bus', 'バナナ (banana) - banana'] },
    { char: 'ビ', romaji: 'bi', meaning: 'Konsonan B + I', strokes: ['ビ'], examples: ['ビール (biiru) - beer', 'ビデオ (bideo) - video'] },
    { char: 'ブ', romaji: 'bu', meaning: 'Konsonan B + U', strokes: ['ブ'], examples: ['ブック (bukku) - book', 'ブルー (buruu) - blue'] },
    { char: 'ベ', romaji: 'be', meaning: 'Konsonan B + E', strokes: ['ベ'], examples: ['ベッド (beddo) - bed', 'ベル (beru) - bell'] },
    { char: 'ボ', romaji: 'bo', meaning: 'Konsonan B + O', strokes: ['ボ'], examples: ['ボール (booru) - ball', 'ボタン (botan) - button'] }
];

// Katakana Handakuten
const katakanaHandakutenData = [
    { char: 'パ', romaji: 'pa', meaning: 'Konsonan P + A', strokes: ['パ'], examples: ['パン (pan) - bread', 'パーティー (paatii) - party'] },
    { char: 'ピ', romaji: 'pi', meaning: 'Konsonan P + I', strokes: ['ピ'], examples: ['ピアノ (piano) - piano', 'ピンク (pinku) - pink'] },
    { char: 'プ', romaji: 'pu', meaning: 'Konsonan P + U', strokes: ['プ'], examples: ['プール (puuru) - pool', 'プレゼント (purezento) - present'] },
    { char: 'ペ', romaji: 'pe', meaning: 'Konsonan P + E', strokes: ['ペ'], examples: ['ペン (pen) - pen', 'ペット (petto) - pet'] },
    { char: 'ポ', romaji: 'po', meaning: 'Konsonan P + O', strokes: ['ポ'], examples: ['ポスト (posuto) - post', 'ポケット (poketto) - pocket'] }
];

// Minna no Nihongo Vocabulary - Chapters 1-3
// Organized into groups of 10 words each

const minnaVocabularyGroups = {
    // Chapter 1 - Self Introduction & Basic Greetings
    group1: {
        title: "基本挨拶 (Basic Greetings)",
        words: [
            { japanese: "はじめまして", hiragana: "はじめまして", romaji: "hajimemashite", meaning: "Nice to meet you", type: "expression", chapter: 1 },
            { japanese: "わたし", hiragana: "わたし", romaji: "watashi", meaning: "I, me", type: "pronoun", chapter: 1 },
            { japanese: "です", hiragana: "です", romaji: "desu", meaning: "to be (polite)", type: "copula", chapter: 1 },
            { japanese: "どうぞよろしく", hiragana: "どうぞよろしく", romaji: "douzo yoroshiku", meaning: "Please treat me favorably", type: "expression", chapter: 1 },
            { japanese: "こちらこそ", hiragana: "こちらこそ", romaji: "kochira koso", meaning: "It's my pleasure", type: "expression", chapter: 1 },
            { japanese: "おはよう", hiragana: "おはよう", romaji: "ohayou", meaning: "Good morning (casual)", type: "greeting", chapter: 1 },
            { japanese: "おはようございます", hiragana: "おはようございます", romaji: "ohayou gozaimasu", meaning: "Good morning (polite)", type: "greeting", chapter: 1 },
            { japanese: "こんにちは", hiragana: "こんにちは", romaji: "konnichiwa", meaning: "Good afternoon", type: "greeting", chapter: 1 },
            { japanese: "こんばんは", hiragana: "こんばんは", romaji: "konbanwa", meaning: "Good evening", type: "greeting", chapter: 1 },
            { japanese: "おやすみ", hiragana: "おやすみ", romaji: "oyasumi", meaning: "Good night (casual)", type: "greeting", chapter: 1 }
        ]
    },
    
    group2: {
        title: "国と職業 (Countries & Occupations)",
        words: [
            { japanese: "にほん", hiragana: "にほん", romaji: "nihon", meaning: "Japan", type: "noun", chapter: 1 },
            { japanese: "アメリカ", hiragana: "アメリカ", romaji: "Amerika", meaning: "America", type: "noun", chapter: 1 },
            { japanese: "イギリス", hiragana: "イギリス", romaji: "Igirisu", meaning: "England", type: "noun", chapter: 1 },
            { japanese: "インド", hiragana: "インド", romaji: "Indo", meaning: "India", type: "noun", chapter: 1 },
            { japanese: "インドネシア", hiragana: "インドネシア", romaji: "Indoneshia", meaning: "Indonesia", type: "noun", chapter: 1 },
            { japanese: "がくせい", hiragana: "がくせい", romaji: "gakusei", meaning: "student", type: "noun", chapter: 1 },
            { japanese: "せんせい", hiragana: "せんせい", romaji: "sensei", meaning: "teacher", type: "noun", chapter: 1 },
            { japanese: "かいしゃいん", hiragana: "かいしゃいん", romaji: "kaishain", meaning: "company employee", type: "noun", chapter: 1 },
            { japanese: "エンジニア", hiragana: "エンジニア", romaji: "enjinia", meaning: "engineer", type: "noun", chapter: 1 },
            { japanese: "いしゃ", hiragana: "いしゃ", romaji: "isha", meaning: "doctor", type: "noun", chapter: 1 }
        ]
    },
    
    group3: {
        title: "年齢と質問 (Age & Questions)",
        words: [
            { japanese: "なんさい", hiragana: "なんさい", romaji: "nansai", meaning: "how old", type: "question", chapter: 1 },
            { japanese: "さい", hiragana: "さい", romaji: "sai", meaning: "years old", type: "counter", chapter: 1 },
            { japanese: "はたち", hiragana: "はたち", romaji: "hatachi", meaning: "20 years old", type: "noun", chapter: 1 },
            { japanese: "どちら", hiragana: "どちら", romaji: "dochira", meaning: "where (polite)", type: "question", chapter: 1 },
            { japanese: "から", hiragana: "から", romaji: "kara", meaning: "from", type: "particle", chapter: 1 },
            { japanese: "きました", hiragana: "きました", romaji: "kimashita", meaning: "came", type: "verb", chapter: 1 },
            { japanese: "そうです", hiragana: "そうです", romaji: "sou desu", meaning: "that's right", type: "expression", chapter: 1 },
            { japanese: "ちがいます", hiragana: "ちがいます", romaji: "chigaimasu", meaning: "that's wrong", type: "expression", chapter: 1 },
            { japanese: "わかりません", hiragana: "わかりません", romaji: "wakarimasen", meaning: "I don't understand", type: "expression", chapter: 1 },
            { japanese: "すみません", hiragana: "すみません", romaji: "sumimasen", meaning: "excuse me/sorry", type: "expression", chapter: 1 }
        ]
    },
    
    // Chapter 2 - Demonstratives & Objects
    group4: {
        title: "指示語 (Demonstratives)",
        words: [
            { japanese: "これ", hiragana: "これ", romaji: "kore", meaning: "this (near speaker)", type: "pronoun", chapter: 2 },
            { japanese: "それ", hiragana: "それ", romaji: "sore", meaning: "that (near listener)", type: "pronoun", chapter: 2 },
            { japanese: "あれ", hiragana: "あれ", romaji: "are", meaning: "that (far from both)", type: "pronoun", chapter: 2 },
            { japanese: "この", hiragana: "この", romaji: "kono", meaning: "this (modifier)", type: "determiner", chapter: 2 },
            { japanese: "その", hiragana: "その", romaji: "sono", meaning: "that (modifier)", type: "determiner", chapter: 2 },
            { japanese: "あの", hiragana: "あの", romaji: "ano", meaning: "that (modifier)", type: "determiner", chapter: 2 },
            { japanese: "なん", hiragana: "なん", romaji: "nan", meaning: "what", type: "question", chapter: 2 },
            { japanese: "なに", hiragana: "なに", romaji: "nani", meaning: "what", type: "question", chapter: 2 },
            { japanese: "だれ", hiragana: "だれ", romaji: "dare", meaning: "who", type: "question", chapter: 2 },
            { japanese: "どなた", hiragana: "どなた", romaji: "donata", meaning: "who (polite)", type: "question", chapter: 2 }
        ]
    },
    
    group5: {
        title: "学用品 (School Supplies)",
        words: [
            { japanese: "ほん", hiragana: "ほん", romaji: "hon", meaning: "book", type: "noun", chapter: 2 },
            { japanese: "じしょ", hiragana: "じしょ", romaji: "jisho", meaning: "dictionary", type: "noun", chapter: 2 },
            { japanese: "ざっし", hiragana: "ざっし", romaji: "zasshi", meaning: "magazine", type: "noun", chapter: 2 },
            { japanese: "しんぶん", hiragana: "しんぶん", romaji: "shinbun", meaning: "newspaper", type: "noun", chapter: 2 },
            { japanese: "ノート", hiragana: "ノート", romaji: "nooto", meaning: "notebook", type: "noun", chapter: 2 },
            { japanese: "てちょう", hiragana: "てちょう", romaji: "techou", meaning: "notebook/planner", type: "noun", chapter: 2 },
            { japanese: "なまえ", hiragana: "なまえ", romaji: "namae", meaning: "name", type: "noun", chapter: 2 },
            { japanese: "じゅうしょ", hiragana: "じゅうしょ", romaji: "juusho", meaning: "address", type: "noun", chapter: 2 },
            { japanese: "でんわばんごう", hiragana: "でんわばんごう", romaji: "denwa bangou", meaning: "telephone number", type: "noun", chapter: 2 },
            { japanese: "ペン", hiragana: "ペン", romaji: "pen", meaning: "pen", type: "noun", chapter: 2 }
        ]
    },
    
    group6: {
        title: "電子機器 (Electronic Devices)",
        words: [
            { japanese: "テレビ", hiragana: "テレビ", romaji: "terebi", meaning: "television", type: "noun", chapter: 2 },
            { japanese: "ラジオ", hiragana: "ラジオ", romaji: "rajio", meaning: "radio", type: "noun", chapter: 2 },
            { japanese: "カメラ", hiragana: "カメラ", romaji: "kamera", meaning: "camera", type: "noun", chapter: 2 },
            { japanese: "コンピューター", hiragana: "コンピューター", romaji: "konpyuutaa", meaning: "computer", type: "noun", chapter: 2 },
            { japanese: "くるま", hiragana: "くるま", romaji: "kuruma", meaning: "car", type: "noun", chapter: 2 },
            { japanese: "つくえ", hiragana: "つくえ", romaji: "tsukue", meaning: "desk", type: "noun", chapter: 2 },
            { japanese: "いす", hiragana: "いす", romaji: "isu", meaning: "chair", type: "noun", chapter: 2 },
            { japanese: "チョコレート", hiragana: "チョコレート", romaji: "chokoreeto", meaning: "chocolate", type: "noun", chapter: 2 },
            { japanese: "コーヒー", hiragana: "コーヒー", romaji: "koohii", meaning: "coffee", type: "noun", chapter: 2 },
            { japanese: "えいご", hiragana: "えいご", romaji: "eigo", meaning: "English language", type: "noun", chapter: 2 }
        ]
    },
    
    // Chapter 3 - Location & Existence
    group7: {
        title: "場所の表現 (Location Expressions)",
        words: [
            { japanese: "ここ", hiragana: "ここ", romaji: "koko", meaning: "here", type: "pronoun", chapter: 3 },
            { japanese: "そこ", hiragana: "そこ", romaji: "soko", meaning: "there (near you)", type: "pronoun", chapter: 3 },
            { japanese: "あそこ", hiragana: "あそこ", romaji: "asoko", meaning: "over there", type: "pronoun", chapter: 3 },
            { japanese: "どこ", hiragana: "どこ", romaji: "doko", meaning: "where", type: "question", chapter: 3 },
            { japanese: "きょうしつ", hiragana: "きょうしつ", romaji: "kyoushitsu", meaning: "classroom", type: "noun", chapter: 3 },
            { japanese: "しょくどう", hiragana: "しょくどう", romaji: "shokudou", meaning: "cafeteria", type: "noun", chapter: 3 },
            { japanese: "じむしょ", hiragana: "じむしょ", romaji: "jimusho", meaning: "office", type: "noun", chapter: 3 },
            { japanese: "かいぎしつ", hiragana: "かいぎしつ", romaji: "kaigishitsu", meaning: "meeting room", type: "noun", chapter: 3 },
            { japanese: "うけつけ", hiragana: "うけつけ", romaji: "uketsuke", meaning: "reception", type: "noun", chapter: 3 },
            { japanese: "ロビー", hiragana: "ロビー", romaji: "robii", meaning: "lobby", type: "noun", chapter: 3 }
        ]
    },
    
    group8: {
        title: "建物と施設 (Buildings & Facilities)",
        words: [
            { japanese: "がっこう", hiragana: "がっこう", romaji: "gakkou", meaning: "school", type: "noun", chapter: 3 },
            { japanese: "びょういん", hiragana: "びょういん", romaji: "byouin", meaning: "hospital", type: "noun", chapter: 3 },
            { japanese: "ぎんこう", hiragana: "ぎんこう", romaji: "ginkou", meaning: "bank", type: "noun", chapter: 3 },
            { japanese: "ゆうびんきょく", hiragana: "ゆうびんきょく", romaji: "yuubinkyoku", meaning: "post office", type: "noun", chapter: 3 },
            { japanese: "としょかん", hiragana: "としょかん", romaji: "toshokan", meaning: "library", type: "noun", chapter: 3 },
            { japanese: "えき", hiragana: "えき", romaji: "eki", meaning: "station", type: "noun", chapter: 3 },
            { japanese: "くうこう", hiragana: "くうこう", romaji: "kuukou", meaning: "airport", type: "noun", chapter: 3 },
            { japanese: "デパート", hiragana: "デパート", romaji: "depaato", meaning: "department store", type: "noun", chapter: 3 },
            { japanese: "スーパー", hiragana: "スーパー", romaji: "suupaa", meaning: "supermarket", type: "noun", chapter: 3 },
            { japanese: "ホテル", hiragana: "ホテル", romaji: "hoteru", meaning: "hotel", type: "noun", chapter: 3 }
        ]
    },
    
    group9: {
        title: "階と方向 (Floors & Directions)",
        words: [
            { japanese: "なんがい", hiragana: "なんがい", romaji: "nangai", meaning: "what floor", type: "question", chapter: 3 },
            { japanese: "いっかい", hiragana: "いっかい", romaji: "ikkai", meaning: "first floor", type: "noun", chapter: 3 },
            { japanese: "にかい", hiragana: "にかい", romaji: "nikai", meaning: "second floor", type: "noun", chapter: 3 },
            { japanese: "さんがい", hiragana: "さんがい", romaji: "sangai", meaning: "third floor", type: "noun", chapter: 3 },
            { japanese: "ちか", hiragana: "ちか", romaji: "chika", meaning: "basement", type: "noun", chapter: 3 },
            { japanese: "となり", hiragana: "となり", romaji: "tonari", meaning: "next to", type: "noun", chapter: 3 },
            { japanese: "ちかく", hiragana: "ちかく", romaji: "chikaku", meaning: "near", type: "noun", chapter: 3 },
            { japanese: "まえ", hiragana: "まえ", romaji: "mae", meaning: "in front of", type: "noun", chapter: 3 },
            { japanese: "うしろ", hiragana: "うしろ", romaji: "ushiro", meaning: "behind", type: "noun", chapter: 3 },
            { japanese: "みぎ", hiragana: "みぎ", romaji: "migi", meaning: "right", type: "noun", chapter: 3 }
        ]
    },
    
    group10: {
        title: "存在と値段 (Existence & Price)",
        words: [
            { japanese: "あります", hiragana: "あります", romaji: "arimasu", meaning: "there is/are (inanimate)", type: "verb", chapter: 3 },
            { japanese: "います", hiragana: "います", romaji: "imasu", meaning: "there is/are (animate)", type: "verb", chapter: 3 },
            { japanese: "いくら", hiragana: "いくら", romaji: "ikura", meaning: "how much", type: "question", chapter: 3 },
            { japanese: "えん", hiragana: "えん", romaji: "en", meaning: "yen", type: "counter", chapter: 3 },
            { japanese: "ひだり", hiragana: "ひだり", romaji: "hidari", meaning: "left", type: "noun", chapter: 3 },
            { japanese: "でんわ", hiragana: "でんわ", romaji: "denwa", meaning: "telephone", type: "noun", chapter: 3 },
            { japanese: "くつ", hiragana: "くつ", romaji: "kutsu", meaning: "shoes", type: "noun", chapter: 3 },
            { japanese: "ネクタイ", hiragana: "ネクタイ", romaji: "nekutai", meaning: "necktie", type: "noun", chapter: 3 },
            { japanese: "ワイン", hiragana: "ワイン", romaji: "wain", meaning: "wine", type: "noun", chapter: 3 },
            { japanese: "たばこ", hiragana: "たばこ", romaji: "tabako", meaning: "cigarette", type: "noun", chapter: 3 }
        ]
    }
};

// Verb Groups for Minna no Nihongo Chapters 1-3
const minnaVerbGroups = {
    copula: {
        title: "コピュラ動詞 (Copula Verbs)",
        verbs: [
            { japanese: "です", hiragana: "です", romaji: "desu", meaning: "to be (polite)", type: "copula", group: "irregular", chapter: 1 },
            { japanese: "である", hiragana: "である", romaji: "de aru", meaning: "to be (plain)", type: "copula", group: "irregular", chapter: 1 },
            { japanese: "じゃありません", hiragana: "じゃありません", romaji: "ja arimasen", meaning: "is not", type: "copula", group: "irregular", chapter: 1 },
            { japanese: "ではありません", hiragana: "ではありません", romaji: "dewa arimasen", meaning: "is not (formal)", type: "copula", group: "irregular", chapter: 1 }
        ]
    },
    
    existence: {
        title: "存在動詞 (Existence Verbs)",
        verbs: [
            { japanese: "あります", hiragana: "あります", romaji: "arimasu", meaning: "there is/are (inanimate)", type: "existence", group: "group1", chapter: 3 },
            { japanese: "います", hiragana: "います", romaji: "imasu", meaning: "there is/are (animate)", type: "existence", group: "group2", chapter: 3 },
            { japanese: "ありません", hiragana: "ありません", romaji: "arimasen", meaning: "there is not (inanimate)", type: "existence", group: "group1", chapter: 3 },
            { japanese: "いません", hiragana: "いません", romaji: "imasen", meaning: "there is not (animate)", type: "existence", group: "group2", chapter: 3 }
        ]
    },
    
    movement: {
        title: "移動動詞 (Movement Verbs)",
        verbs: [
            { japanese: "きます", hiragana: "きます", romaji: "kimasu", meaning: "to come", type: "movement", group: "irregular", chapter: 1 },
            { japanese: "きました", hiragana: "きました", romaji: "kimashita", meaning: "came", type: "movement", group: "irregular", chapter: 1 },
            { japanese: "きません", hiragana: "きません", romaji: "kimasen", meaning: "does not come", type: "movement", group: "irregular", chapter: 1 },
            { japanese: "きませんでした", hiragana: "きませんでした", romaji: "kimasen deshita", meaning: "did not come", type: "movement", group: "irregular", chapter: 1 }
        ]
    }
};

// Grammar Points for Chapters 1-3
const minnaGrammarPoints = {
    chapter1: {
        title: "第1課の文法 (Chapter 1 Grammar)",
        points: [
            {
                pattern: "Nは Nです",
                explanation: "Basic sentence pattern: [Noun] is [Noun]",
                examples: [
                    "わたしは がくせいです。(I am a student.)",
                    "ミラーさんは アメリカじんです。(Mr. Miller is American.)",
                    "これは ほんです。(This is a book.)"
                ]
            },
            {
                pattern: "Nは Nですか",
                explanation: "Question pattern: Is [Noun] [Noun]?",
                examples: [
                    "あなたは がくせいですか。(Are you a student?)",
                    "ミラーさんは せんせいですか。(Is Mr. Miller a teacher?)"
                ]
            },
            {
                pattern: "はい、そうです / いいえ、ちがいます",
                explanation: "Answering yes/no questions",
                examples: [
                    "はい、そうです。(Yes, that's right.)",
                    "いいえ、ちがいます。(No, that's wrong.)"
                ]
            },
            {
                pattern: "Nも Nです",
                explanation: "Also/too pattern",
                examples: [
                    "わたしも がくせいです。(I am also a student.)",
                    "これも ほんです。(This is also a book.)"
                ]
            }
        ]
    },
    
    chapter2: {
        title: "第2課の文法 (Chapter 2 Grammar)",
        points: [
            {
                pattern: "これ/それ/あれは Nです",
                explanation: "Demonstrative pronouns: this/that is [Noun]",
                examples: [
                    "これは じしょです。(This is a dictionary.)",
                    "それは なんですか。(What is that?)",
                    "あれは わたしの くるまです。(That over there is my car.)"
                ]
            },
            {
                pattern: "この/その/あの Nは",
                explanation: "Demonstrative modifiers: this/that [Noun]",
                examples: [
                    "この ほんは わたしのです。(This book is mine.)",
                    "その ペンは だれのですか。(Whose pen is that?)"
                ]
            },
            {
                pattern: "Nの N",
                explanation: "Possessive particle の",
                examples: [
                    "わたしの ほん (my book)",
                    "にほんの くるま (Japanese car)",
                    "がっこうの せんせい (school teacher)"
                ]
            },
            {
                pattern: "そうですか",
                explanation: "Expression of acknowledgment: I see/Is that so?",
                examples: [
                    "A: これは にほんの くるまです。B: そうですか。"
                ]
            }
        ]
    },
    
    chapter3: {
        title: "第3課の文法 (Chapter 3 Grammar)",
        points: [
            {
                pattern: "ここ/そこ/あそこは Nです",
                explanation: "Location words: here/there is [Place]",
                examples: [
                    "ここは がっこうです。(Here is the school.)",
                    "そこは としょかんですか。(Is there the library?)",
                    "あそこは びょういんです。(Over there is the hospital.)"
                ]
            },
            {
                pattern: "Nは どこですか",
                explanation: "Asking location: Where is [Noun]?",
                examples: [
                    "トイレは どこですか。(Where is the toilet?)",
                    "ぎんこうは どこですか。(Where is the bank?)"
                ]
            },
            {
                pattern: "Nに Nが あります/います",
                explanation: "Existence: There is [Noun] in/at [Place]",
                examples: [
                    "つくえの うえに ほんが あります。(There is a book on the desk.)",
                    "きょうしつに せんせいが います。(There is a teacher in the classroom.)"
                ]
            },
            {
                pattern: "いくらですか",
                explanation: "Asking price: How much is it?",
                examples: [
                    "この ほんは いくらですか。(How much is this book?)",
                    "それは 500えんです。(That is 500 yen.)"
                ]
            }
        ]
    }
};

// Cultural Notes
const culturalNotes = {
    greetings: {
        title: "日本の挨拶 (Japanese Greetings)",
        content: [
            "Japanese greetings change based on time of day and formality level",
            "Bowing is an important part of Japanese greetings",
            "はじめまして is used when meeting someone for the first time",
            "Business cards (名刺/meishi) are exchanged during introductions"
        ]
    },
    
    writingSystems: {
        title: "文字体系 (Writing Systems)",
        content: [
            "Hiragana: Used for native Japanese words and grammar particles",
            "Katakana: Used for foreign loanwords, onomatopoeia, and emphasis",
            "Kanji: Chinese characters used for content words",
            "Mixed usage is common in modern Japanese writing"
        ]
    },
    
    politeness: {
        title: "敬語 (Politeness Levels)",
        content: [
            "です/ます form is polite and safe for beginners",
            "だ/である form is casual and used with close friends",
            "Age, social status, and relationship affect politeness level",
            "When in doubt, use the polite form"
        ]
    }
};

// Quiz Templates
const quizTemplates = {
    vocabulary: {
        recognition: "What does this word mean?",
        translation: "How do you say this in Japanese?",
        usage: "Choose the correct usage:"
    },
    
    grammar: {
        pattern: "Complete the sentence pattern:",
        usage: "Choose the correct grammar:",
        transformation: "Transform this sentence:"
    },
    
    writing: {
        hiragana: "Write this in hiragana:",
        katakana: "Write this in katakana:",
        mixed: "Write using appropriate characters:"
    }
};

// Export all data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        katakanaData,
        katakanaDakutenData,
        katakanaHandakutenData,
        minnaVocabularyGroups,
        minnaVerbGroups,
        minnaGrammarPoints,
        culturalNotes,
        quizTemplates
    };
}