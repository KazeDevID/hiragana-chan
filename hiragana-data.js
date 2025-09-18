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

// Data Dakuten (゛) - Voiced sounds
const dakutenData = [
    // G sounds
    { char: 'が', romaji: 'ga', meaning: 'Konsonan G + A (dakuten)', strokes: ['が'], examples: ['がっこう (gakkou) - sekolah', 'がいこく (gaikoku) - luar negeri'] },
    { char: 'ぎ', romaji: 'gi', meaning: 'Konsonan G + I (dakuten)', strokes: ['ぎ'], examples: ['ぎんこう (ginkou) - bank', 'ぎゅうにゅう (gyuunyuu) - susu'] },
    { char: 'ぐ', romaji: 'gu', meaning: 'Konsonan G + U (dakuten)', strokes: ['ぐ'], examples: ['ぐあい (guai) - kondisi', 'ぐんじん (gunjin) - tentara'] },
    { char: 'げ', romaji: 'ge', meaning: 'Konsonan G + E (dakuten)', strokes: ['げ'], examples: ['げんき (genki) - sehat/semangat', 'げつようび (getsuyoubi) - hari Senin'] },
    { char: 'ご', romaji: 'go', meaning: 'Konsonan G + O (dakuten)', strokes: ['ご'], examples: ['ごはん (gohan) - nasi/makanan', 'ごご (gogo) - sore'] },
    
    // Z sounds
    { char: 'ざ', romaji: 'za', meaning: 'Konsonan Z + A (dakuten)', strokes: ['ざ'], examples: ['ざっし (zasshi) - majalah', 'ざいりょう (zairyou) - bahan'] },
    { char: 'じ', romaji: 'ji', meaning: 'Konsonan Z + I (dakuten)', strokes: ['じ'], examples: ['じかん (jikan) - waktu', 'じしん (jishin) - gempa bumi'] },
    { char: 'ず', romaji: 'zu', meaning: 'Konsonan Z + U (dakuten)', strokes: ['ず'], examples: ['ずっと (zutto) - terus-menerus', 'ずいぶん (zuibun) - cukup'] },
    { char: 'ぜ', romaji: 'ze', meaning: 'Konsonan Z + E (dakuten)', strokes: ['ぜ'], examples: ['ぜんぶ (zenbu) - semua', 'ぜったい (zettai) - pasti'] },
    { char: 'ぞ', romaji: 'zo', meaning: 'Konsonan Z + O (dakuten)', strokes: ['ぞ'], examples: ['ぞう (zou) - gajah', 'ぞんじる (zonjiru) - mengetahui'] },
    
    // D sounds
    { char: 'だ', romaji: 'da', meaning: 'Konsonan D + A (dakuten)', strokes: ['だ'], examples: ['だいがく (daigaku) - universitas', 'だれ (dare) - siapa'] },
    { char: 'ぢ', romaji: 'ji', meaning: 'Konsonan D + I (dakuten)', strokes: ['ぢ'], examples: ['はなぢ (hanaji) - mimisan', 'ちぢむ (chijimu) - menyusut'] },
    { char: 'づ', romaji: 'zu', meaning: 'Konsonan D + U (dakuten)', strokes: ['づ'], examples: ['つづく (tsuzuku) - berlanjut', 'みづ (mizu) - air (kuno)'] },
    { char: 'で', romaji: 'de', meaning: 'Konsonan D + E (dakuten)', strokes: ['で'], examples: ['でんわ (denwa) - telepon', 'でんしゃ (densha) - kereta'] },
    { char: 'ど', romaji: 'do', meaning: 'Konsonan D + O (dakuten)', strokes: ['ど'], examples: ['どこ (doko) - dimana', 'どうぶつ (doubutsu) - hewan'] },
    
    // B sounds
    { char: 'ば', romaji: 'ba', meaning: 'Konsonan B + A (dakuten)', strokes: ['ば'], examples: ['ばんごはん (bangohan) - makan malam', 'ばす (basu) - bus'] },
    { char: 'び', romaji: 'bi', meaning: 'Konsonan B + I (dakuten)', strokes: ['び'], examples: ['びょういん (byouin) - rumah sakit', 'びじん (bijin) - wanita cantik'] },
    { char: 'ぶ', romaji: 'bu', meaning: 'Konsonan B + U (dakuten)', strokes: ['ぶ'], examples: ['ぶた (buta) - babi', 'ぶんか (bunka) - budaya'] },
    { char: 'べ', romaji: 'be', meaning: 'Konsonan B + E (dakuten)', strokes: ['べ'], examples: ['べんきょう (benkyou) - belajar', 'べつ (betsu) - berbeda'] },
    { char: 'ぼ', romaji: 'bo', meaning: 'Konsonan B + O (dakuten)', strokes: ['ぼ'], examples: ['ぼく (boku) - saya (laki-laki)', 'ぼうし (boushi) - topi'] }
];

// Data Handakuten (゜) - Semi-voiced sounds
const handakutenData = [
    { char: 'ぱ', romaji: 'pa', meaning: 'Konsonan P + A (handakuten)', strokes: ['ぱ'], examples: ['ぱん (pan) - roti', 'ぱーてぃー (paatii) - pesta'] },
    { char: 'ぴ', romaji: 'pi', meaning: 'Konsonan P + I (handakuten)', strokes: ['ぴ'], examples: ['ぴあの (piano) - piano', 'ぴんく (pinku) - pink'] },
    { char: 'ぷ', romaji: 'pu', meaning: 'Konsonan P + U (handakuten)', strokes: ['ぷ'], examples: ['ぷーる (puuru) - kolam renang', 'ぷれぜんと (purezento) - hadiah'] },
    { char: 'ぺ', romaji: 'pe', meaning: 'Konsonan P + E (handakuten)', strokes: ['ぺ'], examples: ['ぺん (pen) - pulpen', 'ぺっと (petto) - hewan peliharaan'] },
    { char: 'ぽ', romaji: 'po', meaning: 'Konsonan P + O (handakuten)', strokes: ['ぽ'], examples: ['ぽすと (posuto) - pos', 'ぽけっと (poketto) - saku'] }
];

// Data Kombinasi (ya, yu, yo combinations)
const combinationData = [
    // K combinations
    { char: 'きゃ', romaji: 'kya', meaning: 'Kombinasi KI + YA', strokes: ['きゃ'], examples: ['きゃく (kyaku) - tamu', 'きゃべつ (kyabetsu) - kubis'] },
    { char: 'きゅ', romaji: 'kyu', meaning: 'Kombinasi KI + YU', strokes: ['きゅ'], examples: ['きゅう (kyuu) - sembilan', 'きゅうり (kyuuri) - mentimun'] },
    { char: 'きょ', romaji: 'kyo', meaning: 'Kombinasi KI + YO', strokes: ['きょ'], examples: ['きょう (kyou) - hari ini', 'きょうしつ (kyoushitsu) - ruang kelas'] },
    
    // S combinations
    { char: 'しゃ', romaji: 'sha', meaning: 'Kombinasi SHI + YA', strokes: ['しゃ'], examples: ['しゃしん (shashin) - foto', 'しゃかい (shakai) - masyarakat'] },
    { char: 'しゅ', romaji: 'shu', meaning: 'Kombinasi SHI + YU', strokes: ['しゅ'], examples: ['しゅくだい (shukudai) - PR', 'しゅみ (shumi) - hobi'] },
    { char: 'しょ', romaji: 'sho', meaning: 'Kombinasi SHI + YO', strokes: ['しょ'], examples: ['しょくじ (shokuji) - makan', 'しょうがっこう (shougakkou) - SD'] },
    
    // T combinations
    { char: 'ちゃ', romaji: 'cha', meaning: 'Kombinasi CHI + YA', strokes: ['ちゃ'], examples: ['ちゃ (cha) - teh', 'ちゃいろ (chairo) - coklat'] },
    { char: 'ちゅ', romaji: 'chu', meaning: 'Kombinasi CHI + YU', strokes: ['ちゅ'], examples: ['ちゅうい (chuui) - perhatian', 'ちゅうがっこう (chuugakkou) - SMP'] },
    { char: 'ちょ', romaji: 'cho', meaning: 'Kombinasi CHI + YO', strokes: ['ちょ'], examples: ['ちょっと (chotto) - sedikit', 'ちょうど (choudo) - tepat'] },
    
    // N combinations
    { char: 'にゃ', romaji: 'nya', meaning: 'Kombinasi NI + YA', strokes: ['にゃ'], examples: ['にゃんこ (nyanko) - kucing (imut)', 'にゃー (nyaa) - meong'] },
    { char: 'にゅ', romaji: 'nyu', meaning: 'Kombinasi NI + YU', strokes: ['にゅ'], examples: ['にゅうがく (nyuugaku) - masuk sekolah', 'にゅーす (nyuusu) - berita'] },
    { char: 'にょ', romaji: 'nyo', meaning: 'Kombinasi NI + YO', strokes: ['にょ'], examples: ['にょうぼう (nyoubou) - istri', 'にょろにょろ (nyoronyoro) - bergelombang'] },
    
    // H combinations
    { char: 'ひゃ', romaji: 'hya', meaning: 'Kombinasi HI + YA', strokes: ['ひゃ'], examples: ['ひゃく (hyaku) - seratus', 'ひゃっか (hyakka) - serba ada'] },
    { char: 'ひゅ', romaji: 'hyu', meaning: 'Kombinasi HI + YU', strokes: ['ひゅ'], examples: ['ひゅーず (hyuuzu) - sekering', 'ひゅうひゅう (hyuuhyuu) - suara angin'] },
    { char: 'ひょ', romaji: 'hyo', meaning: 'Kombinasi HI + YO', strokes: ['ひょ'], examples: ['ひょう (hyou) - es/hujan es', 'ひょうげん (hyougen) - ekspresi'] },
    
    // M combinations
    { char: 'みゃ', romaji: 'mya', meaning: 'Kombinasi MI + YA', strokes: ['みゃ'], examples: ['みゃく (myaku) - nadi', 'みゃー (myaa) - meong'] },
    { char: 'みゅ', romaji: 'myu', meaning: 'Kombinasi MI + YU', strokes: ['みゅ'], examples: ['みゅーじっく (myuujikku) - musik', 'みゅーじあむ (myuujiamu) - museum'] },
    { char: 'みょ', romaji: 'myo', meaning: 'Kombinasi MI + YO', strokes: ['みょ'], examples: ['みょうじ (myouji) - nama keluarga', 'みょうばん (myouban) - tawas'] },
    
    // R combinations
    { char: 'りゃ', romaji: 'rya', meaning: 'Kombinasi RI + YA', strokes: ['りゃ'], examples: ['りゃく (ryaku) - singkatan', 'りゃくご (ryakugo) - singkatan'] },
    { char: 'りゅ', romaji: 'ryu', meaning: 'Kombinasi RI + YU', strokes: ['りゅ'], examples: ['りゅう (ryuu) - naga', 'りゅうがく (ryuugaku) - belajar di luar negeri'] },
    { char: 'りょ', romaji: 'ryo', meaning: 'Kombinasi RI + YO', strokes: ['りょ'], examples: ['りょうり (ryouri) - masakan', 'りょこう (ryokou) - perjalanan'] },
    
    // G combinations (dakuten)
    { char: 'ぎゃ', romaji: 'gya', meaning: 'Kombinasi GI + YA (dakuten)', strokes: ['ぎゃ'], examples: ['ぎゃく (gyaku) - sebaliknya', 'ぎゃんぶる (gyanburu) - judi'] },
    { char: 'ぎゅ', romaji: 'gyu', meaning: 'Kombinasi GI + YU (dakuten)', strokes: ['ぎゅ'], examples: ['ぎゅうにく (gyuuniku) - daging sapi', 'ぎゅっと (gyutto) - erat'] },
    { char: 'ぎょ', romaji: 'gyo', meaning: 'Kombinasi GI + YO (dakuten)', strokes: ['ぎょ'], examples: ['ぎょうざ (gyouza) - dumpling', 'ぎょぎょう (gyogyou) - perikanan'] },
    
    // J combinations (dakuten)
    { char: 'じゃ', romaji: 'ja', meaning: 'Kombinasi JI + YA (dakuten)', strokes: ['じゃ'], examples: ['じゃがいも (jagaimo) - kentang', 'じゃんぷ (janpu) - lompat'] },
    { char: 'じゅ', romaji: 'ju', meaning: 'Kombinasi JI + YU (dakuten)', strokes: ['じゅ'], examples: ['じゅぎょう (jugyou) - pelajaran', 'じゅーす (juusu) - jus'] },
    { char: 'じょ', romaji: 'jo', meaning: 'Kombinasi JI + YO (dakuten)', strokes: ['じょ'], examples: ['じょうず (jouzu) - pandai', 'じょせい (josei) - wanita'] },
    
    // B combinations (dakuten)
    { char: 'びゃ', romaji: 'bya', meaning: 'Kombinasi BI + YA (dakuten)', strokes: ['びゃ'], examples: ['びゃくや (byakuya) - malam putih', 'びゃー (byaa) - suara kucing'] },
    { char: 'びゅ', romaji: 'byu', meaning: 'Kombinasi BI + YU (dakuten)', strokes: ['びゅ'], examples: ['びゅーてぃー (byuutii) - kecantikan', 'びゅんびゅん (byunbyun) - cepat'] },
    { char: 'びょ', romaji: 'byo', meaning: 'Kombinasi BI + YO (dakuten)', strokes: ['びょ'], examples: ['びょうき (byouki) - sakit', 'びょういん (byouin) - rumah sakit'] },
    
    // P combinations (handakuten)
    { char: 'ぴゃ', romaji: 'pya', meaning: 'Kombinasi PI + YA (handakuten)', strokes: ['ぴゃ'], examples: ['ぴゃー (pyaa) - suara', 'ぴゃんぴゃん (pyanpyan) - bunyi'] },
    { char: 'ぴゅ', romaji: 'pyu', meaning: 'Kombinasi PI + YU (handakuten)', strokes: ['ぴゅ'], examples: ['ぴゅー (pyuu) - suara angin', 'ぴゅあ (pyua) - murni'] },
    { char: 'ぴょ', romaji: 'pyo', meaning: 'Kombinasi PI + YO (handakuten)', strokes: ['ぴょ'], examples: ['ぴょん (pyon) - lompat', 'ぴょんぴょん (pyonpyon) - melompat-lompat'] }
];

// Gabungkan semua data hiragana
const allHiraganaData = [...hiraganaData, ...dakutenData, ...handakutenData, ...combinationData];

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
   // { hiragana: 'はは', romaji: 'haha', meaning: 'ibu', example: 'わたしの はは (watashi no haha) - ibu saya' },
   { hiragana: 'はかる', romaji: 'hakaru', meaning: 'mengukur', example: 'ハイカルは たいせいを はかる (Haikal wa taisei wo hakaru) - Haikal mengukur tinggi' },
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
    { hiragana: 'わたし', romaji: 'watashi', meaning: 'saya', example: 'わたしは がくせいです (watashi wa gakusei desu) - saya adalah pelajar' },
    
    // Tambahan kosakata dengan dakuten, handakuten, dan kombinasi
    { hiragana: 'がっこう', romaji: 'gakkou', meaning: 'sekolah', example: 'がっこうに いきます (gakkou ni ikimasu) - pergi ke sekolah' },
    { hiragana: 'じかん', romaji: 'jikan', meaning: 'waktu', example: 'じかんが ありません (jikan ga arimasen) - tidak ada waktu' },
    { hiragana: 'でんわ', romaji: 'denwa', meaning: 'telepon', example: 'でんわを かけます (denwa wo kakemasu) - menelepon' },
    { hiragana: 'ばんごはん', romaji: 'bangohan', meaning: 'makan malam', example: 'ばんごはんを たべます (bangohan wo tabemasu) - makan malam' },
    { hiragana: 'ぱん', romaji: 'pan', meaning: 'roti', example: 'あさ ぱんを たべます (asa pan wo tabemasu) - makan roti di pagi hari' },
    { hiragana: 'しゃしん', romaji: 'shashin', meaning: 'foto', example: 'きれいな しゃしん (kirei na shashin) - foto yang indah' },
    { hiragana: 'ちゃ', romaji: 'cha', meaning: 'teh', example: 'あつい ちゃ (atsui cha) - teh panas' },
    { hiragana: 'りょうり', romaji: 'ryouri', meaning: 'masakan', example: 'にほんの りょうり (nihon no ryouri) - masakan Jepang' },
    { hiragana: 'びょういん', romaji: 'byouin', meaning: 'rumah sakit', example: 'びょういんに いきます (byouin ni ikimasu) - pergi ke rumah sakit' },
    { hiragana: 'じゃがいも', romaji: 'jagaimo', meaning: 'kentang', example: 'じゃがいもを かいます (jagaimo wo kaimasu) - membeli kentang' }
];