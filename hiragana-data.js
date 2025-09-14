// Data Hiragana lengkap dengan informasi pembelajaran
const hiraganaData = [
    // Baris A
    { char: 'あ', romaji: 'a', meaning: 'Suara vokal "a"', strokes: ['あ'], examples: ['あさ (asa) - pagi', 'あき (aki) - musim gugur'] },
    { char: 'い', romaji: 'i', meaning: 'Suara vokal "i"', strokes: ['い'], examples: ['いえ (ie) - rumah', 'いぬ (inu) - anjing'] },
    { char: 'う', romaji: 'u', meaning: 'Suara vokal "u"', strokes: ['う'], examples: ['うみ (umi) - laut', 'うし (ushi) - sapi'] },
    { char: 'え', romaji: 'e', meaning: 'Suara vokal "e"', strokes: ['え'], examples: ['えき (eki) - stasiun', 'えび (ebi) - udang'] },
    { char: 'お', romaji: 'o', meaning: 'Suara vokal "o"', strokes: ['お'], examples: ['おはよう (ohayou) - selamat pagi', 'おちゃ (ocha) - teh'] },
    
    // Baris K
    { char: 'か', romaji: 'ka', meaning: 'Konsonan K + A', strokes: ['か'], examples: ['かぞく (kazoku) - keluarga', 'かわ (kawa) - sungai'] },
    { char: 'き', romaji: 'ki', meaning: 'Konsonan K + I', strokes: ['き'], examples: ['きのう (kinou) - kemarin', 'きれい (kirei) - cantik'] },
    { char: 'く', romaji: 'ku', meaning: 'Konsonan K + U', strokes: ['く'], examples: ['くるま (kuruma) - mobil', 'くち (kuchi) - mulut'] },
    { char: 'け', romaji: 'ke', meaning: 'Konsonan K + E', strokes: ['け'], examples: ['けさ (kesa) - pagi ini', 'けしき (keshiki) - pemandangan'] },
    { char: 'こ', romaji: 'ko', meaning: 'Konsonan K + O', strokes: ['こ'], examples: ['こども (kodomo) - anak', 'こんにちは (konnichiwa) - selamat siang'] },
    
    // Baris S
    { char: 'さ', romaji: 'sa', meaning: 'Konsonan S + A', strokes: ['さ'], examples: ['さかな (sakana) - ikan', 'さくら (sakura) - bunga sakura'] },
    { char: 'し', romaji: 'shi', meaning: 'Konsonan S + I', strokes: ['し'], examples: ['しお (shio) - garam', 'しんぶん (shinbun) - koran'] },
    { char: 'す', romaji: 'su', meaning: 'Konsonan S + U', strokes: ['す'], examples: ['すし (sushi) - sushi', 'すいか (suika) - semangka'] },
    { char: 'せ', romaji: 'se', meaning: 'Konsonan S + E', strokes: ['せ'], examples: ['せんせい (sensei) - guru', 'せかい (sekai) - dunia'] },
    { char: 'そ', romaji: 'so', meaning: 'Konsonan S + O', strokes: ['そ'], examples: ['そら (sora) - langit', 'そば (soba) - mi soba'] },
    
    // Baris T
    { char: 'た', romaji: 'ta', meaning: 'Konsonan T + A', strokes: ['た'], examples: ['たべもの (tabemono) - makanan', 'たまご (tamago) - telur'] },
    { char: 'ち', romaji: 'chi', meaning: 'Konsonan T + I', strokes: ['ち'], examples: ['ちち (chichi) - ayah', 'ちいさい (chiisai) - kecil'] },
    { char: 'つ', romaji: 'tsu', meaning: 'Konsonan T + U', strokes: ['つ'], examples: ['つき (tsuki) - bulan', 'つめたい (tsumetai) - dingin'] },
    { char: 'て', romaji: 'te', meaning: 'Konsonan T + E', strokes: ['て'], examples: ['て (te) - tangan', 'てがみ (tegami) - surat'] },
    { char: 'と', romaji: 'to', meaning: 'Konsonan T + O', strokes: ['と'], examples: ['とけい (tokei) - jam', 'ともだち (tomodachi) - teman'] },
    
    // Baris N
    { char: 'な', romaji: 'na', meaning: 'Konsonan N + A', strokes: ['な'], examples: ['なまえ (namae) - nama', 'なつ (natsu) - musim panas'] },
    { char: 'に', romaji: 'ni', meaning: 'Konsonan N + I', strokes: ['に'], examples: ['にほん (nihon) - Jepang', 'にく (niku) - daging'] },
    { char: 'ぬ', romaji: 'nu', meaning: 'Konsonan N + U', strokes: ['ぬ'], examples: ['ぬる (nuru) - hangat', 'ぬの (nuno) - kain'] },
    { char: 'ね', romaji: 'ne', meaning: 'Konsonan N + E', strokes: ['ね'], examples: ['ねこ (neko) - kucing', 'ねる (neru) - tidur'] },
    { char: 'の', romaji: 'no', meaning: 'Konsonan N + O', strokes: ['の'], examples: ['のむ (nomu) - minum', 'のり (nori) - rumput laut'] },
    
    // Baris H
    { char: 'は', romaji: 'ha', meaning: 'Konsonan H + A', strokes: ['は'], examples: ['はは (haha) - ibu', 'はな (hana) - bunga/hidung'] },
    { char: 'ひ', romaji: 'hi', meaning: 'Konsonan H + I', strokes: ['ひ'], examples: ['ひ (hi) - api', 'ひと (hito) - orang'] },
    { char: 'ふ', romaji: 'fu', meaning: 'Konsonan H + U', strokes: ['ふ'], examples: ['ふゆ (fuyu) - musim dingin', 'ふね (fune) - kapal'] },
    { char: 'へ', romaji: 'he', meaning: 'Konsonan H + E', strokes: ['へ'], examples: ['へや (heya) - kamar', 'へび (hebi) - ular'] },
    { char: 'ほ', romaji: 'ho', meaning: 'Konsonan H + O', strokes: ['ほ'], examples: ['ほん (hon) - buku', 'ほし (hoshi) - bintang'] },
    
    // Baris M
    { char: 'ま', romaji: 'ma', meaning: 'Konsonan M + A', strokes: ['ま'], examples: ['まち (machi) - kota', 'まど (mado) - jendela'] },
    { char: 'み', romaji: 'mi', meaning: 'Konsonan M + I', strokes: ['み'], examples: ['みず (mizu) - air', 'みせ (mise) - toko'] },
    { char: 'む', romaji: 'mu', meaning: 'Konsonan M + U', strokes: ['む'], examples: ['むし (mushi) - serangga', 'むずかしい (muzukashii) - sulit'] },
    { char: 'め', romaji: 'me', meaning: 'Konsonan M + E', strokes: ['め'], examples: ['め (me) - mata', 'めがね (megane) - kacamata'] },
    { char: 'も', romaji: 'mo', meaning: 'Konsonan M + O', strokes: ['も'], examples: ['もの (mono) - benda', 'もり (mori) - hutan'] },
    
    // Baris Y
    { char: 'や', romaji: 'ya', meaning: 'Konsonan Y + A', strokes: ['や'], examples: ['やま (yama) - gunung', 'やさい (yasai) - sayuran'] },
    { char: 'ゆ', romaji: 'yu', meaning: 'Konsonan Y + U', strokes: ['ゆ'], examples: ['ゆき (yuki) - salju', 'ゆめ (yume) - mimpi'] },
    { char: 'よ', romaji: 'yo', meaning: 'Konsonan Y + O', strokes: ['よ'], examples: ['よる (yoru) - malam', 'よん (yon) - empat'] },
    
    // Baris R
    { char: 'ら', romaji: 'ra', meaning: 'Konsonan R + A', strokes: ['ら'], examples: ['らいねん (rainen) - tahun depan', 'らくだ (rakuda) - unta'] },
    { char: 'り', romaji: 'ri', meaning: 'Konsonan R + I', strokes: ['り'], examples: ['りんご (ringo) - apel', 'りょうり (ryouri) - masakan'] },
    { char: 'る', romaji: 'ru', meaning: 'Konsonan R + U', strokes: ['る'], examples: ['るす (rusu) - tidak ada di rumah', 'るいじ (ruiji) - luigi'] },
    { char: 'れ', romaji: 're', meaning: 'Konsonan R + E', strokes: ['れ'], examples: ['れい (rei) - nol', 'れきし (rekishi) - sejarah'] },
    { char: 'ろ', romaji: 'ro', meaning: 'Konsonan R + O', strokes: ['ろ'], examples: ['ろく (roku) - enam', 'ろうそく (rousoku) - lilin'] },
    
    // Baris W dan N
    { char: 'わ', romaji: 'wa', meaning: 'Konsonan W + A', strokes: ['わ'], examples: ['わたし (watashi) - saya', 'わかる (wakaru) - mengerti'] },
    { char: 'ゐ', romaji: 'wi', meaning: 'Konsonan W + I (kuno)', strokes: ['ゐ'], examples: ['Karakter kuno, jarang digunakan'] },
    { char: 'ゑ', romaji: 'we', meaning: 'Konsonan W + E (kuno)', strokes: ['ゑ'], examples: ['Karakter kuno, jarang digunakan'] },
    { char: 'を', romaji: 'wo/o', meaning: 'Partikel objek', strokes: ['を'], examples: ['りんごを (ringo wo) - apel (objek)', 'ほんを (hon wo) - buku (objek)'] },
    { char: 'ん', romaji: 'n', meaning: 'Konsonan N tunggal', strokes: ['ん'], examples: ['にほん (nihon) - Jepang', 'さんぽ (sanpo) - jalan-jalan'] }
];

// Data kosakata untuk latihan
const vocabularyData = [
    { hiragana: 'あさ', romaji: 'asa', meaning: 'pagi', example: 'あさごはん (asagohan) - sarapan' },
    { hiragana: 'いえ', romaji: 'ie', meaning: 'rumah', example: 'わたしのいえ (watashi no ie) - rumah saya' },
    { hiragana: 'うみ', romaji: 'umi', meaning: 'laut', example: 'うみがきれい (umi ga kirei) - laut itu indah' },
    { hiragana: 'えき', romaji: 'eki', meaning: 'stasiun', example: 'とうきょうえき (toukyou eki) - stasiun Tokyo' },
    { hiragana: 'おちゃ', romaji: 'ocha', meaning: 'teh', example: 'あつい おちゃ (atsui ocha) - teh panas' },
    { hiragana: 'かぞく', romaji: 'kazoku', meaning: 'keluarga', example: 'おおきい かぞく (ookii kazoku) - keluarga besar' },
    { hiragana: 'きのう', romaji: 'kinou', meaning: 'kemarin', example: 'きのう がっこうに いきました (kinou gakkou ni ikimashita) - kemarin pergi ke sekolah' },
    { hiragana: 'くるま', romaji: 'kuruma', meaning: 'mobil', example: 'あたらしい くるま (atarashii kuruma) - mobil baru' },
    { hiragana: 'けさ', romaji: 'kesa', meaning: 'pagi ini', example: 'けさ はやく おきました (kesa hayaku okimashita) - pagi ini bangun pagi' },
    { hiragana: 'こども', romaji: 'kodomo', meaning: 'anak', example: 'ちいさい こども (chiisai kodomo) - anak kecil' },
    { hiragana: 'さかな', romaji: 'sakana', meaning: 'ikan', example: 'おいしい さかな (oishii sakana) - ikan yang lezat' },
    { hiragana: 'しんぶん', romaji: 'shinbun', meaning: 'koran', example: 'あさの しんぶん (asa no shinbun) - koran pagi' },
    { hiragana: 'すし', romaji: 'sushi', meaning: 'sushi', example: 'にほんの すし (nihon no sushi) - sushi Jepang' },
    { hiragana: 'せんせい', romaji: 'sensei', meaning: 'guru', example: 'やさしい せんせい (yasashii sensei) - guru yang baik hati' },
    { hiragana: 'そら', romaji: 'sora', meaning: 'langit', example: 'あおい そら (aoi sora) - langit biru' },
    { hiragana: 'たまご', romaji: 'tamago', meaning: 'telur', example: 'ゆでたまご (yudetamago) - telur rebus' },
    { hiragana: 'ちち', romaji: 'chichi', meaning: 'ayah', example: 'わたしの ちち (watashi no chichi) - ayah saya' },
    { hiragana: 'つき', romaji: 'tsuki', meaning: 'bulan', example: 'まるい つき (marui tsuki) - bulan bulat' },
    { hiragana: 'てがみ', romaji: 'tegami', meaning: 'surat', example: 'ともだちから てがみ (tomodachi kara tegami) - surat dari teman' },
    { hiragana: 'ともだち', romaji: 'tomodachi', meaning: 'teman', example: 'いい ともだち (ii tomodachi) - teman baik' },
    { hiragana: 'なまえ', romaji: 'namae', meaning: 'nama', example: 'あなたの なまえは？ (anata no namae wa?) - siapa nama Anda?' },
    { hiragana: 'にほん', romaji: 'nihon', meaning: 'Jepang', example: 'にほんご (nihongo) - bahasa Jepang' },
    { hiragana: 'ねこ', romaji: 'neko', meaning: 'kucing', example: 'かわいい ねこ (kawaii neko) - kucing lucu' },
    { hiragana: 'のむ', romaji: 'nomu', meaning: 'minum', example: 'みずを のむ (mizu wo nomu) - minum air' },
    { hiragana: 'はは', romaji: 'haha', meaning: 'ibu', example: 'わたしの はは (watashi no haha) - ibu saya' },
    { hiragana: 'ひと', romaji: 'hito', meaning: 'orang', example: 'やさしい ひと (yasashii hito) - orang baik' },
    { hiragana: 'ふゆ', romaji: 'fuyu', meaning: 'musim dingin', example: 'さむい ふゆ (samui fuyu) - musim dingin yang dingin' },
    { hiragana: 'へや', romaji: 'heya', meaning: 'kamar', example: 'わたしの へや (watashi no heya) - kamar saya' },
    { hiragana: 'ほん', romaji: 'hon', meaning: 'buku', example: 'おもしろい ほん (omoshiroi hon) - buku menarik' },
    { hiragana: 'まち', romaji: 'machi', meaning: 'kota', example: 'おおきい まち (ookii machi) - kota besar' },
    { hiragana: 'みず', romaji: 'mizu', meaning: 'air', example: 'つめたい みず (tsumetai mizu) - air dingin' },
    { hiragana: 'めがね', romaji: 'megane', meaning: 'kacamata', example: 'あたらしい めがね (atarashii megane) - kacamata baru' },
    { hiragana: 'やま', romaji: 'yama', meaning: 'gunung', example: 'たかい やま (takai yama) - gunung tinggi' },
    { hiragana: 'ゆき', romaji: 'yuki', meaning: 'salju', example: 'しろい ゆき (shiroi yuki) - salju putih' },
    { hiragana: 'よる', romaji: 'yoru', meaning: 'malam', example: 'しずかな よる (shizukana yoru) - malam yang tenang' },
    { hiragana: 'りんご', romaji: 'ringo', meaning: 'apel', example: 'あかい りんご (akai ringo) - apel merah' },
    { hiragana: 'るす', romaji: 'rusu', meaning: 'tidak ada di rumah', example: 'かれは るすです (kare wa rusu desu) - dia tidak ada di rumah' },
    { hiragana: 'れきし', romaji: 'rekishi', meaning: 'sejarah', example: 'にほんの れきし (nihon no rekishi) - sejarah Jepang' },
    { hiragana: 'ろく', romaji: 'roku', meaning: 'enam', example: 'ろくじ (rokuji) - jam enam' },
    { hiragana: 'わたし', romaji: 'watashi', meaning: 'saya', example: 'わたしは がくせいです (watashi wa gakusei desu) - saya adalah pelajar' }
];