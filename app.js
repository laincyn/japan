// --- [ DATA STRUCTURE ] ---
const DATA = {
  hiragana: [
    { glyph: 'あ', romaji: 'a' }, { glyph: 'い', romaji: 'i' }, { glyph: 'う', romaji: 'u' }, { glyph: 'え', romaji: 'e' }, { glyph: 'お', romaji: 'o' },
    { glyph: 'か', romaji: 'ka' }, { glyph: 'き', romaji: 'ki' }, { glyph: 'く', romaji: 'ku' }, { glyph: 'け', romaji: 'ke' }, { glyph: 'こ', romaji: 'ko' },
    { glyph: 'さ', romaji: 'sa' }, { glyph: 'し', romaji: 'shi' }, { glyph: 'す', romaji: 'su' }, { glyph: 'せ', romaji: 'se' }, { glyph: 'そ', romaji: 'so' },
    { glyph: 'た', romaji: 'ta' }, { glyph: 'ち', romaji: 'chi' }, { glyph: 'つ', romaji: 'tsu' }, { glyph: 'て', romaji: 'te' }, { glyph: 'と', romaji: 'to' },
    { glyph: 'な', romaji: 'na' }, { glyph: 'に', 'romaji': 'ni' }, { glyph: 'ぬ', romaji: 'nu' }, { glyph: 'ね', romaji: 'ne' }, { glyph: 'の', romaji: 'no' },
    { glyph: 'は', romaji: 'ha' }, { glyph: 'ひ', romaji: 'hi' }, { glyph: 'ふ', romaji: 'fu' }, { glyph: 'へ', romaji: 'he' }, { glyph: 'ほ', romaji: 'ho' },
    { glyph: 'ま', romaji: 'ma' }, { glyph: 'み', romaji: 'mi' }, { glyph: 'む', romaji: 'mu' }, { glyph: 'め', romaji: 'me' }, { glyph: 'も', romaji: 'mo' },
    { glyph: 'や', romaji: 'ya' }, { glyph: 'ゆ', romaji: 'yu' }, { glyph: 'よ', romaji: 'yo' },
    { glyph: 'ら', romaji: 'ra' }, { glyph: 'り', romaji: 'ri' }, { glyph: 'る', romaji: 'ru' }, { glyph: 'れ', romaji: 're' }, { glyph: 'ろ', romaji: 'ro' },
    { glyph: 'わ', romaji: 'wa' }, { glyph: 'を', romaji: 'wo' }, { glyph: 'ん', romaji: 'n' },
    { glyph: 'が', romaji: 'ga' }, { glyph: 'ぎ', romaji: 'gi' }, { glyph: 'ぐ', romaji: 'gu' }, { glyph: 'げ', romaji: 'ge' }, { glyph: 'ご', romaji: 'go' },
    { glyph: 'ざ', romaji: 'za' }, { glyph: 'じ', romaji: 'ji' }, { glyph: 'ず', romaji: 'zu' }, { glyph: 'ぜ', romaji: 'ze' }, { glyph: 'ぞ', romaji: 'zo' },
    { glyph: 'だ', romaji: 'da' }, { glyph: 'ぢ', romaji: 'ji' }, { glyph: 'づ', romaji: 'zu' }, { glyph: 'で', romaji: 'de' }, { glyph: 'ど', romaji: 'do' },
    { glyph: 'ば', romaji: 'ba' }, { glyph: 'び', romaji: 'bi' }, { glyph: 'ぶ', romaji: 'bu' }, { glyph: 'べ', romaji: 'be' }, { glyph: 'ぼ', romaji: 'bo' },
    { glyph: 'ぱ', romaji: 'pa' }, { glyph: 'ぴ', romaji: 'pi' }, { glyph: 'ぷ', romaji: 'pu' }, { glyph: 'ぺ', romaji: 'pe' }, { glyph: 'ぽ', romaji: 'po' }
  ],
  katakana: [
    { glyph: 'ア', romaji: 'a' }, { glyph: 'イ', romaji: 'i' }, { glyph: 'ウ', romaji: 'u' }, { glyph: 'エ', romaji: 'e' }, { glyph: 'オ', romaji: 'o' },
    { glyph: 'カ', romaji: 'ka' }, { glyph: 'キ', romaji: 'ki' }, { glyph: 'ク', romaji: 'ku' }, { glyph: 'ケ', romaji: 'ke' }, { glyph: 'コ', romaji: 'ko' },
    { glyph: 'サ', romaji: 'sa' }, { glyph: 'シ', romaji: 'shi' }, { glyph: 'ス', romaji: 'su' }, { glyph: 'セ', romaji: 'se' }, { glyph: 'ソ', romaji: 'so' },
    { glyph: 'タ', romaji: 'ta' }, { glyph: 'チ', romaji: 'chi' }, { glyph: 'ツ', romaji: 'tsu' }, { glyph: 'テ', romaji: 'te' }, { glyph: 'ト', romaji: 'to' },
    { glyph: 'ナ', romaji: 'na' }, { glyph: 'ニ', romaji: 'ni' }, { glyph: 'ヌ', romaji: 'nu' }, { glyph: 'ネ', romaji: 'ne' }, { glyph: 'ノ', romaji: 'no' },
    { glyph: 'ハ', romaji: 'ha' }, { glyph: 'ヒ', romaji: 'hi' }, { glyph: 'フ', romaji: 'fu' }, { glyph: 'ヘ', romaji: 'he' }, { glyph: 'ホ', romaji: 'ho' },
    { glyph: 'マ', romaji: 'ma' }, { glyph: 'ミ', romaji: 'mi' }, { glyph: 'ム', romaji: 'mu' }, { glyph: 'メ', romaji: 'me' }, { glyph: 'モ', romaji: 'mo' },
    { glyph: 'ヤ', romaji: 'ya' }, { glyph: 'ユ', romaji: 'yu' }, { glyph: 'ヨ', romaji: 'yo' },
    { glyph: 'ラ', romaji: 'ra' }, { glyph: 'リ', romaji: 'ri' }, { glyph: 'ル', romaji: 'ru' }, { glyph: 'レ', romaji: 're' }, { glyph: 'ロ', romaji: 'ro' },
    { glyph: 'ワ', romaji: 'wa' }, { glyph: 'ヲ', romaji: 'wo' }, { glyph: 'ン', romaji: 'n' },
    { glyph: 'ガ', romaji: 'ga' }, { glyph: 'ギ', romaji: 'gi' }, { glyph: 'グ', romaji: 'gu' }, { glyph: 'ゲ', romaji: 'ge' }, { glyph: 'ゴ', romaji: 'go' },
    { glyph: 'ザ', romaji: 'za' }, { glyph: 'ジ', romaji: 'ji' }, { glyph: 'ズ', romaji: 'zu' }, { glyph: 'ゼ', romaji: 'ze' }, { glyph: 'ゾ', romaji: 'zo' },
    { glyph: 'ダ', romaji: 'da' }, { glyph: 'ヂ', romaji: 'ji' }, { glyph: 'ヅ', romaji: 'zu' }, { glyph: 'デ', romaji: 'de' }, { glyph: 'ド', romaji: 'do' },
    { glyph: 'バ', romaji: 'ba' }, { glyph: 'ビ', romaji: 'bi' }, { glyph: 'ブ', romaji: 'bu' }, { glyph: 'ベ', romaji: 'be' }, { glyph: 'ボ', romaji: 'bo' },
    { glyph: 'パ', romaji: 'pa' }, { glyph: 'ピ', romaji: 'pi' }, { glyph: 'プ', romaji: 'pu' }, { glyph: 'ペ', romaji: 'pe' }, { glyph: 'ポ', romaji: 'po' }
  ],
  kanji: [
    { glyph: '一', meaning: 'One', readings: ['いち', 'ひと'], romajiReadings: ['ichi', 'hito'] },
    { glyph: '二', meaning: 'Two', readings: ['に', 'ふた'], romajiReadings: ['ni', 'futa'] },
    { glyph: '三', meaning: 'Three', readings: ['さん', 'みっ'], romajiReadings: ['san', 'mit'] },
    { glyph: '四', meaning: 'Four', readings: ['し', 'よん', 'よ'], romajiReadings: ['shi', 'yon', 'yo'] },
    { glyph: '五', meaning: 'Five', readings: ['ご', 'いつ'], romajiReadings: ['go', 'itsu'] },
    { glyph: '六', meaning: 'Six', readings: ['ろく', 'むっ'], romajiReadings: ['roku', 'mut'] },
    { glyph: '七', meaning: 'Seven', readings: ['しち', 'なな'], romajiReadings: ['shichi', 'nana'] },
    { glyph: '八', meaning: 'Eight', readings: ['はち', 'やっ'], romajiReadings: ['hachi', 'yat'] },
    { glyph: '九', meaning: 'Nine', readings: ['きゅう', 'ここの'], romajiReadings: ['kyuu', 'kokono'] },
    { glyph: '十', meaning: 'Ten', readings: ['じゅう', 'とお'], romajiReadings: ['juu', 'too'] },
    { glyph: '人', meaning: 'Person', readings: ['じん', 'にん', 'ひと'], romajiReadings: ['jin', 'nin', 'hito'] },
    { glyph: '今', meaning: 'Now', readings: ['こん', 'いま'], romajiReadings: ['kon', 'ima'] },
    { glyph: '日', meaning: 'Sun/Day', readings: ['にち', 'じつ', 'ひ'], romajiReadings: ['nichi', 'jitsu', 'hi'] },
    { glyph: '月', meaning: 'Moon/Month', readings: ['げつ', 'つき'], romajiReadings: ['getsu', 'tsuki'] },
    { glyph: '火', meaning: 'Fire', readings: ['か', 'ひ'], romajiReadings: ['ka', 'hi'] },
    { glyph: '水', meaning: 'Water', readings: ['すい', 'みず'], romajiReadings: ['sui', 'mizu'] },
    { glyph: '木', meaning: 'Tree/Wood', readings: ['もく', 'き'], romajiReadings: ['moku', 'ki'] },
    { glyph: '金', meaning: 'Gold/Money', readings: ['きん', 'かね'], romajiReadings: ['kin', 'kane'] },
    { glyph: '土', meaning: 'Earth/Soil', readings: ['ど', 'つち'], romajiReadings: ['do', 'tsuchi'] },
    { glyph: '曜', meaning: 'Weekday', readings: ['よう'], romajiReadings: ['you'] },
    { glyph: '本', meaning: 'Book/Origin', readings: ['ほん', 'もと'], romajiReadings: ['hon', 'moto'] },
    { glyph: '語', meaning: 'Language/Word', readings: ['ご', 'かた'], romajiReadings: ['go', 'kata'] },
    { glyph: '学', meaning: 'Study/Learning', readings: ['がく', 'まな'], romajiReadings: ['gaku', 'mana'] },
    { glyph: '生', meaning: 'Life/Birth', readings: ['せい', 'い', 'う'], romajiReadings: ['sei', 'i', 'u'] },
    { glyph: '先', meaning: 'Previous/Ahead', readings: ['せん', 'さき'], romajiReadings: ['sen', 'saki'] },
    { glyph: '名', meaning: 'Name', readings: ['めい', 'な'], romajiReadings: ['mei', 'na'] },
    { glyph: '前', meaning: 'Before/Front', readings: ['ぜん', 'まえ'], romajiReadings: ['zen', 'mae'] },
    { glyph: '後', meaning: 'After/Behind', readings: ['ご', 'あと', 'うし'], romajiReadings: ['go', 'ato', 'ushi'] },
    { glyph: '上', meaning: 'Up/Above', readings: ['じょう', 'うえ', 'あ'], romajiReadings: ['jou', 'ue', 'a'] },
    { glyph: '下', meaning: 'Down/Below', readings: ['か', 'した', 'さ'], romajiReadings: ['ka', 'shita', 'sa'] },
    { glyph: '中', meaning: 'Middle/Inside', readings: ['ちゅう', 'なか'], romajiReadings: ['chuu', 'naka'] },
    { glyph: '外', meaning: 'Outside', readings: ['がい', 'そと'], romajiReadings: ['gai', 'soto'] },
    { glyph: '大', meaning: 'Large/Big', readings: ['だい', 'おお'], romajiReadings: ['dai', 'oo'] },
    { glyph: '小', meaning: 'Small', readings: ['しょう', 'ちい', 'こ'], romajiReadings: ['shou', 'chii', 'ko'] },
    { glyph: '円', meaning: 'Yen/Circle', readings: ['えん', 'まる'], romajiReadings: ['en', 'maru'] },
    { glyph: '高', meaning: 'Tall/Expensive', readings: ['こう', 'たか'], romajiReadings: ['kou', 'taka'] },
    { glyph: '安', meaning: 'Cheap/Peace', readings: ['あん', 'やす'], romajiReadings: ['an', 'yasu'] },
    { glyph: '新', meaning: 'New', readings: ['しん', 'あたら'], romajiReadings: ['shin', 'atara'] },
    { glyph: '古', meaning: 'Old', readings: ['こ', 'ふる'], romajiReadings: ['ko', 'furu'] },
    { glyph: '長', meaning: 'Long/Leader', readings: ['ちょう', 'なが'], romajiReadings: ['chou', 'naga'] },
    { glyph: '山', meaning: 'Mountain', readings: ['さん', 'やま'], romajiReadings: ['san', 'yama'] },
    { glyph: '川', meaning: 'River', readings: ['せん', 'かわ'], romajiReadings: ['sen', 'kawa'] },
    { glyph: '田', meaning: 'Rice field', readings: ['でん', 'た'], romajiReadings: ['den', 'ta'] },
    { glyph: '車', meaning: 'Car/Vehicle', readings: ['しゃ', 'くるま'], romajiReadings: ['sha', 'kuruma'] },
    { glyph: '門', meaning: 'Gate', readings: ['もん', 'かど'], romajiReadings: ['mon', 'kado'] },
    { glyph: '聞', meaning: 'Hear/Ask', readings: ['ぶん', 'き'], romajiReadings: ['bun', 'ki'] },
    { glyph: '言', meaning: 'Say/Word', readings: ['ごん', 'こと'], romajiReadings: ['gon', 'koto'] },
    { glyph: '話', meaning: 'Speak/Talk', readings: ['わ', 'はなし'], romajiReadings: ['wa', 'hanashi'] },
    { glyph: '立', meaning: 'Stand', readings: ['りつ', 'た'], romajiReadings: ['ritsu', 'ta'] },
    { glyph: '見', meaning: 'See', readings: ['けん', 'み'], romajiReadings: ['ken', 'mi'] },
    { glyph: '行', meaning: 'Go/Line', readings: ['こう', 'い', 'ゆ'], romajiReadings: ['kou', 'i', 'yu'] },
    { glyph: '来', meaning: 'Come/Next', readings: ['らい', 'く', 'き'], romajiReadings: ['rai', 'ku', 'ki'] },
    { glyph: '出', meaning: 'Go out', readings: ['しゅつ', 'で', 'だ'], romajiReadings: ['shutsu', 'de', 'da'] },
    { glyph: '入', meaning: 'Enter', readings: ['にゅう', 'はい', 'い'], romajiReadings: ['nyuu', 'hai', 'i'] },
    { glyph: '分', meaning: 'Minute/Divide', readings: ['ぶん', 'わ'], romajiReadings: ['bun', 'wa'] },
    { glyph: '午', meaning: 'Noon', readings: ['ご'], romajiReadings: ['go'] },
    { glyph: '後', meaning: 'After/Later', readings: ['ご', 'あと'], romajiReadings: ['go', 'ato'] },
    { glyph: '東', meaning: 'East', readings: ['とう', 'ひがし'], romajiReadings: ['tou', 'higashi'] },
    { glyph: '西', meaning: 'West', readings: ['せい', 'にし'], romajiReadings: ['sei', 'nishi'] },
    { glyph: '南', meaning: 'South', readings: ['なん', 'みなみ'], romajiReadings: ['nan', 'minami'] },
    { glyph: '北', meaning: 'North', readings: ['ほく', 'きた'], romajiReadings: ['hoku', 'kita'] },
    { glyph: '京', meaning: 'Capital', readings: ['きょう'], romajiReadings: ['kyou'] },
    { glyph: '会', meaning: 'Meet/Association', readings: ['かい', 'あ'], romajiReadings: ['kai', 'a'] },
    { glyph: '社', meaning: 'Company', readings: ['しゃ'], romajiReadings: ['sha'] },
    { glyph: '店', meaning: 'Shop', readings: ['てん', 'みせ'], romajiReadings: ['ten', 'mise'] },
    { glyph: '駅', meaning: 'Station', readings: ['えき'], romajiReadings: ['eki'] },
    { glyph: '花', meaning: 'Flower', readings: ['か', 'はな'], romajiReadings: ['ka', 'hana'] },
    { glyph: '空', meaning: 'Sky/Empty', readings: ['くう', 'そら', 'あ'], romajiReadings: ['kuu', 'sora', 'a'] },
    { glyph: '白', meaning: 'White', readings: ['はく', 'しろ'], romajiReadings: ['haku', 'shiro'] },
    { glyph: '青', meaning: 'Blue', readings: ['せい', 'あお'], romajiReadings: ['sei', 'ao'] },
    { glyph: '赤', 'meaning': 'Red', readings: ['せき', 'あか'], romajiReadings: ['seki', 'aka'] },
    { glyph: '食', meaning: 'Eat/Food', readings: ['しょく', 'た'], romajiReadings: ['shoku', 'ta'] },
    { glyph: '飲', meaning: 'Drink', readings: ['いん', 'の'], romajiReadings: ['in', 'no'] },
    { glyph: '休', meaning: 'Rest', readings: ['きゅう', 'やす'], romajiReadings: ['kyuu', 'yasu'] },
    { glyph: '時', meaning: 'Time/Hour', readings: ['じ', 'とき'], romajiReadings: ['ji', 'toki'] },
    { glyph: '間', meaning: 'Interval/Between', readings: ['かん', 'あいだ'], romajiReadings: ['kan', 'aida'] },
    { glyph: '半', meaning: 'Half', readings: ['はん'], romajiReadings: ['han'] },
    { glyph: '毎', meaning: 'Every', readings: ['まい'], romajiReadings: ['mai'] },
    { glyph: '父', meaning: 'Father', readings: ['ふ', 'ちち'], romajiReadings: ['fu', 'chichi'] },
    { glyph: '母', meaning: 'Mother', readings: ['ぼ', 'はは'], romajiReadings: ['bo', 'haha'] },
    { glyph: '友', meaning: 'Friend', readings: ['ゆう', 'とも'], romajiReadings: ['yuu', 'tomo'] },
    { glyph: '力', meaning: 'Power', readings: ['りょく', 'ちから'], romajiReadings: ['ryoku', 'chikara'] },
    { glyph: '男', meaning: 'Man/Male', readings: ['だん', 'おとこ'], romajiReadings: ['dan', 'otoko'] },
    { glyph: '女', meaning: 'Woman/Female', readings: ['じょ', 'おんな'], romajiReadings: ['jo', 'onna'] },
    { glyph: '子', meaning: 'Child', readings: ['し', 'こ'], romajiReadings: ['shi', 'ko'] },
    { glyph: '道', meaning: 'Road/Way', readings: ['どう', 'みち'], romajiReadings: ['dou', 'michi'] },
    { glyph: '私', meaning: 'I/Private', readings: ['し', 'わたし'], romajiReadings: ['shi', 'watashi'] },
    { glyph: '室', meaning: 'Room', readings: ['しつ'], romajiReadings: ['shitsu'] },
    { glyph: '家', meaning: 'House', readings: ['か', 'いえ'], romajiReadings: ['ka', 'ie'] },
    { glyph: '町', meaning: 'Town', readings: ['ちょう', 'まち'], romajiReadings: ['chou', 'machi'] },
    { glyph: '村', meaning: 'Village', readings: ['そん', 'むら'], romajiReadings: ['son', 'mura'] },
    { glyph: '林', meaning: 'Woods', readings: ['りん', 'はやし'], romajiReadings: ['rin', 'hayashi'] },
    { glyph: '森', meaning: 'Forest', readings: ['しん', 'もり'], romajiReadings: ['shin', 'mori'] },
    { glyph: '空', meaning: 'Sky', readings: ['くう', 'そら'], romajiReadings: ['kuu', 'sora'] },
    { glyph: '電', meaning: 'Electricity', readings: ['でん'], romajiReadings: ['den'] },
    { glyph: '語', meaning: 'Word/Language', readings: ['ご'], romajiReadings: ['go'] },
    { glyph: '校', meaning: 'School', readings: ['こう'], romajiReadings: ['kou'] },
    { glyph: '天', meaning: 'Heaven', readings: ['てん'], romajiReadings: ['ten'] },
    { glyph: '気', meaning: 'Spirit/Air', readings: ['き', 'け'], romajiReadings: ['ki', 'ke'] },
    { glyph: '雨', meaning: 'Rain', readings: ['う', 'あめ'], romajiReadings: ['u', 'ame'] },
    { glyph: '多', meaning: 'Many', readings: ['た', 'おお'], romajiReadings: ['ta', 'oo'] },
    { glyph: '少', meaning: 'Few/Little', readings: ['しょう', 'すく', 'すこ'], romajiReadings: ['shou', 'suku', 'suko'] },
    { glyph: '言', meaning: 'Say', readings: ['げん', 'い'], romajiReadings: ['gen', 'i'] },
    { glyph: '読', meaning: 'Read', readings: ['どく', 'よ'], romajiReadings: ['doku', 'yo'] },
    { glyph: '書', meaning: 'Write/Book', readings: ['しょ', 'か'], romajiReadings: ['sho', 'ka'] },
    { glyph: '話', meaning: 'Talk', readings: ['わ', 'はな'], romajiReadings: ['wa', 'hana'] },
    { glyph: '近', meaning: 'Near', readings: ['きん', 'ちか'], romajiReadings: ['kin', 'chika'] },
    { glyph: '遠', meaning: 'Far', readings: ['えん', 'とお'], romajiReadings: ['en', 'too'] },
    { glyph: '早', meaning: 'Early', readings: ['そう', 'はや'], romajiReadings: ['sou', 'haya'] },
    { glyph: '明', meaning: 'Bright/Next', readings: ['めい', 'あかり', 'あ'], romajiReadings: ['mei', 'akari', 'a'] },
    { glyph: '暗', meaning: 'Dark', readings: ['あん', 'くら'], romajiReadings: ['an', 'kura'] },
    { glyph: '病', meaning: 'Sick', readings: ['びょう'], romajiReadings: ['byou'] },
    { glyph: '院', meaning: 'Institution', readings: ['いん'], romajiReadings: ['in'] },
    { glyph: '銀', meaning: 'Silver', readings: ['ぎん'], romajiReadings: ['gin'] },
    { glyph: '部', meaning: 'Part/Club', readings: ['ぶ'], romajiReadings: ['bu'] },
    { glyph: '屋', meaning: 'Roof/Shop', readings: ['おく', 'や'], romajiReadings: ['oku', 'ya'] },
    { glyph: '教', meaning: 'Teach', readings: ['きょう', 'おし'], romajiReadings: ['kyou', 'oshi'] },
    { glyph: '化', meaning: 'Change', readings: ['か', 'ば'], romajiReadings: ['ka', 'ba'] },
    { glyph: '界', meaning: 'World', readings: ['かい'], romajiReadings: ['kai'] },
    { glyph: '地', meaning: 'Ground', readings: ['ち', 'じ'], romajiReadings: ['chi', 'ji'] },
    { glyph: '鉄', meaning: 'Iron', readings: ['てつ'], romajiReadings: ['tetsu'] },
    { glyph: '送', meaning: 'Send', readings: ['そう', 'おく'], romajiReadings: ['sou', 'oku'] },
    { glyph: '洗', meaning: 'Wash', readings: ['せん', 'あら'], romajiReadings: ['sen', 'ara'] },
    { glyph: '運', meaning: 'Carry/Luck', readings: ['うん', 'はこ'], romajiReadings: ['un', 'hako'] },
    { glyph: '動', meaning: 'Move', readings: ['どう', 'うご'], romajiReadings: ['dou', 'ugo'] },
    { glyph: '止', meaning: 'Stop', readings: ['し', 'と'], romajiReadings: ['shi', 'to'] },
    { glyph: '切', meaning: 'Cut', readings: ['せつ', 'き'], romajiReadings: ['setsu', 'ki'] },
    { glyph: '色', meaning: 'Color', readings: ['しょく', 'いろ'], romajiReadings: ['shoku', 'iro'] },
    { glyph: '図', meaning: 'Drawing/Plan', readings: ['ず', 'と'], romajiReadings: ['zu', 'to'] },
    { glyph: '画', meaning: 'Picture/Stroke', readings: ['が', 'かく'], romajiReadings: ['ga', 'kaku'] },
    { glyph: '音', meaning: 'Sound', readings: ['おん', 'ね', 'おと'], romajiReadings: ['on', 'ne', 'oto'] },
    { glyph: '楽', meaning: 'Comfort/Music', readings: ['がく', 'たの'], romajiReadings: ['gaku', 'tano'] },
    { glyph: '歌', meaning: 'Song/Sing', readings: ['か', 'うた'], romajiReadings: ['ka', 'uta'] },
    { glyph: '旅', meaning: 'Travel', readings: ['りょ', 'たび'], romajiReadings: ['ryo', 'tabi'] },
    { glyph: '宿', meaning: 'Lodge/Inn', readings: ['しゅく', 'やど'], romajiReadings: ['shuku', 'yado'] },
    { glyph: '題', meaning: 'Topic/Title', readings: ['だい'], romajiReadings: ['dai'] },
    { glyph: '紙', meaning: 'Paper', readings: ['し', 'かみ'], romajiReadings: ['shi', 'kami'] },
    { glyph: '物', meaning: 'Thing', readings: ['ぶつ', 'もの'], romajiReadings: ['butsu', 'mono'] },
    { glyph: '事', meaning: 'Matter/Affair', readings: ['じ', 'こと'], romajiReadings: ['ji', 'koto'] },
    { glyph: '用', meaning: 'Use', readings: ['よう', 'もち'], romajiReadings: ['you', 'mochi'] },
    { glyph: '何', meaning: 'What', readings: ['か', 'なに', 'なん'], romajiReadings: ['ka', 'nani', 'nan'] },
    { glyph: '作', meaning: 'Make', readings: ['さく', 'つく'], romajiReadings: ['saku', 'tsuku'] },
    { glyph: '試', meaning: 'Test', readings: ['し', 'こころ'], romajiReadings: ['shi', 'kokoro'] },
    { glyph: '験', meaning: 'Test', readings: ['けん'], romajiReadings: ['ken'] },
    { glyph: '品', meaning: 'Goods', readings: ['ひん', 'しな'], romajiReadings: ['hin', 'shina'] },
    { glyph: '待', meaning: 'Wait', readings: ['たい', 'ま'], romajiReadings: ['tai', 'ma'] },
    { glyph: '持', meaning: 'Hold/Have', readings: ['じ', 'も'], romajiReadings: ['ji', 'mo'] },
    { glyph: '終', meaning: 'End', readings: ['しゅう', 'お'], romajiReadings: ['shuu', 'o'] },
    { glyph: '始', meaning: 'Start', readings: ['し', 'はじ'], romajiReadings: ['shi', 'haji'] },
    { glyph: '住', meaning: 'Live', readings: ['じゅう', 'す'], romajiReadings: ['juu', 'su'] },
    { glyph: '去', meaning: 'Past/Leave', readings: ['きょ', 'さ'], romajiReadings: ['kyo', 'sa'] },
    { glyph: '曜', meaning: 'Day of week', readings: ['よう'], romajiReadings: ['you'] },
    { glyph: '計', meaning: 'Plan/Measure', readings: ['けい', 'はか'], romajiReadings: ['kei', 'haka'] },
    { glyph: '度', meaning: 'Degree/Time', readings: ['ど', 'たび'], romajiReadings: ['do', 'tabi'] },
    { glyph: '主', meaning: 'Master/Main', readings: ['しゅ', 'ぬし'], romajiReadings: ['shu', 'nushi'] },
    { glyph: '発', meaning: 'Depart/Emit', readings: ['はつ', 'ほつ'], romajiReadings: ['hatsu', 'hotsu'] },
    { glyph: '表', meaning: 'Surface/Express', readings: ['ひょう', 'おもて', 'あらわ'], romajiReadings: ['hyou', 'omote', 'arawa'] },
    { glyph: '者', meaning: 'Person', readings: ['しゃ', 'もの'], romajiReadings: ['sha', 'mono'] },
    { glyph: '正', meaning: 'Correct', readings: ['せい', 'ただ'], romajiReadings: ['sei', 'tada'] },
    { glyph: '和', meaning: 'Peace/Harmony', readings: ['わ', 'やわ'], romajiReadings: ['wa', 'yawa'] },
    { glyph: '洋', meaning: 'Ocean/Western', readings: ['よう'], romajiReadings: ['you'] },
    { glyph: '室', meaning: 'Room', readings: ['しつ'], romajiReadings: ['shitsu'] },
    { glyph: '港', meaning: 'Harbor', readings: ['こう', 'みなと'], romajiReadings: ['kou', 'minato'] },
    { glyph: '園', meaning: 'Garden', readings: ['えん', 'その'], romajiReadings: ['en', 'sono'] },
    { glyph: '線', meaning: 'Line', readings: ['せん'], romajiReadings: ['sen'] },
    { glyph: '色', meaning: 'Color', readings: ['しょく', 'いろ'], romajiReadings: ['shoku', 'iro'] },
    { glyph: '戸', meaning: 'Door', readings: ['こ', 'と'], romajiReadings: ['ko', 'to'] },
    { glyph: '部', meaning: 'Part', readings: ['ぶ'], romajiReadings: ['bu'] },
    { glyph: '世', meaning: 'World/Generation', readings: ['せい', 'よ'], romajiReadings: ['sei', 'yo'] },
    { glyph: '界', meaning: 'World', readings: ['かい'], romajiReadings: ['kai'] },
    { glyph: '度', meaning: 'Degree/Time', readings: ['ど'], romajiReadings: ['do'] },
    { glyph: '科', meaning: 'Branch/Course', readings: ['か'], romajiReadings: ['ka'] },
    { glyph: '番', meaning: 'Number', readings: ['ばん'], romajiReadings: ['ban'] },
    { glyph: '号', meaning: 'Number', readings: ['ごう'], romajiReadings: ['gou'] },
    { glyph: '公', meaning: 'Public', readings: ['こう'], romajiReadings: ['kou'] },
    { glyph: '園', meaning: 'Park', readings: ['えん'], romajiReadings: ['en'] },
    { glyph: '美', meaning: 'Beauty', readings: ['び', 'うつく'], romajiReadings: ['bi', 'utsuku'] },
    { glyph: '術', meaning: 'Art/Skill', readings: ['じゅつ'], romajiReadings: ['jutsu'] },
    { glyph: '病', meaning: 'Sick', readings: ['びょう'], romajiReadings: ['byou'] },
    { glyph: '院', meaning: 'Institution', readings: ['いん'], romajiReadings: ['in'] },
    { glyph: '薬', meaning: 'Medicine', readings: ['やく', 'くすり'], romajiReadings: ['yaku', 'kusuri'] },
    { glyph: '化', meaning: 'Change', readings: ['か'], romajiReadings: ['ka'] },
    { glyph: '物', meaning: 'Thing', readings: ['ぶつ', 'もの'], romajiReadings: ['butsu', 'mono'] },
    { glyph: '理', meaning: 'Logic/Reason', readings: ['り'], romajiReadings: ['ri'] },
    { glyph: '図', meaning: 'Drawing/Plan', readings: ['ず', 'と'], romajiReadings: ['zu', 'to'] },
    { glyph: '館', meaning: 'Hall/Building', readings: ['かん'], romajiReadings: ['kan'] },
    { glyph: '道', meaning: 'Road/Way', readings: ['どう', 'みち'], romajiReadings: ['dou', 'michi'] },
    { glyph: '場', meaning: 'Place', readings: ['じょう', 'ば'], romajiReadings: ['jou', 'ba'] },
    { glyph: '通', meaning: 'Pass/Traffic', readings: ['つう', 'とお'], romajiReadings: ['tsuu', 'too'] },
    { glyph: '歩', meaning: 'Walk', readings: ['ほ', 'ある'], romajiReadings: ['ho', 'aru'] },
    { glyph: '走', meaning: 'Run', readings: ['そう', 'はし'], romajiReadings: ['sou', 'hashi'] },
    { glyph: '乗', meaning: 'Ride', readings: ['じょう', 'の'], romajiReadings: ['jou', 'no'] },
    { glyph: '転', meaning: 'Roll', readings: ['てん', 'ころ'], romajiReadings: ['ten', 'koro'] },
    { glyph: '住', meaning: 'Live', readings: ['じゅう', 'す'], romajiReadings: ['juu', 'su'] },
    { glyph: '所', meaning: 'Place', readings: ['しょ', 'ところ'], romajiReadings: ['sho', 'tokoro'] },
    { glyph: '区', meaning: 'Ward/District', readings: ['く'], romajiReadings: ['ku'] },
    { glyph: '府', meaning: 'Government', readings: ['ふ'], romajiReadings: ['fu'] },
    { glyph: '都', meaning: 'Capital/Tokyo', readings: ['と', 'みやこ'], romajiReadings: ['to', 'miyako'] },
    { glyph: '県', meaning: 'Prefecture', readings: ['けん'], romajiReadings: ['ken'] },
    { glyph: '海', meaning: 'Sea/Ocean', readings: ['かい', 'うみ'], romajiReadings: ['kai', 'umi'] },
    { glyph: '島', meaning: 'Island', readings: ['とう', 'しま'], romajiReadings: ['tou', 'shima'] },
    { glyph: '国', meaning: 'Country', readings: ['こく', 'くに'], romajiReadings: ['koku', 'kuni'] },
    { glyph: '外', meaning: 'Outside', readings: ['がい', 'そと'], romajiReadings: ['gai', 'soto'] },
    { glyph: '回', meaning: 'Times/Rotate', readings: ['かい', 'まわ'], romajiReadings: ['kai', 'mawa'] }
  ].slice(0, 200),
  words: [
    { glyph: 'こんにちは', romaji: 'kon-ni-chi-wa', meaning: 'Hello/Good day' },
    { glyph: 'ありがとう', romaji: 'a-ri-ga-tō', meaning: 'Thank you' },
    { glyph: 'さようなら', romaji: 'sa-yō-na-ra', meaning: 'Goodbye' },
    { glyph: 'おはよう', romaji: 'o-ha-yō', meaning: 'Good morning' },
    { glyph: 'すみません', romaji: 'su-mi-ma-sen', meaning: 'Excuse me/Sorry' },
    { glyph: 'はい', romaji: 'ha-i', meaning: 'Yes' },
    { glyph: 'いいえ', romaji: 'ī-e', meaning: 'No' },
    { glyph: 'おねがいします', romaji: 'o-ne-ga-i-shi-ma-su', meaning: 'Please' },
    { glyph: 'どうぞ', romaji: 'dō-zo', meaning: 'Go ahead/Please (offer)' },
    { glyph: 'いただきます', romaji: 'i-ta-da-ki-ma-su', meaning: 'I humbly receive (before eating)' },
    { glyph: 'ごちそうさま', romaji: 'go-chi-sō-sa-ma', meaning: 'Thanks for the meal (after eating)' },
    { glyph: 'おつかれさま', romaji: 'o-tsu-ka-re-sa-ma', meaning: 'Good work/You must be tired' },
    { glyph: 'ごめんなさい', romaji: 'go-men-na-sa-i', meaning: 'I am sorry' },
    { glyph: 'ただいま', romaji: 'ta-da-i-ma', meaning: 'I\'m home' },
    { glyph: 'おかえりなさい', romaji: 'o-ka-e-ri-na-sa-i', meaning: 'Welcome home' },
    { glyph: 'いってきます', romaji: 'it-te-ki-ma-su', meaning: 'I\'m going (and coming back)' },
    { glyph: 'いってらっしゃい', romaji: 'it-te-ras-sha-i', meaning: 'Please go and come back' },
    { glyph: 'げんき', romaji: 'gen-ki', meaning: 'Healthy/Energy' },
    { glyph: 'だいじょうぶ', romaji: 'da-i-jō-bu', meaning: 'All right/Okay' },
    { glyph: 'おいしい', romaji: 'o-i-shī', meaning: 'Delicious' },
    { glyph: 'まずい', romaji: 'ma-zu-i', meaning: 'Bad tasting' },
    { glyph: 'きれい', romaji: 'ki-re-i', meaning: 'Beautiful/Clean' },
    { glyph: 'きたない', romaji: 'ki-ta-na-i', meaning: 'Dirty' },
    { glyph: 'たかい', romaji: 'ta-ka-i', meaning: 'Expensive/Tall' },
    { glyph: 'やすい', romaji: 'ya-su-i', meaning: 'Cheap' },
    { glyph: 'おおきい', romaji: 'ō-ki-i', meaning: 'Big' },
    { glyph: 'ちいさい', romaji: 'chī-sa-i', meaning: 'Small' },
    { glyph: 'あつい', romaji: 'a-tsu-i', meaning: 'Hot (object/weather)' },
    { glyph: 'さむい', romaji: 'sa-mu-i', meaning: 'Cold (weather)' },
    { glyph: 'つめたい', romaji: 'tsu-me-ta-i', meaning: 'Cold (object)' },
    { glyph: 'あたたかい', romaji: 'a-ta-ta-ka-i', meaning: 'Warm' },
    { glyph: 'つよい', romaji: 'tsu-yo-i', meaning: 'Strong' },
    { glyph: 'よわい', romaji: 'yo-wa-i', meaning: 'Weak' },
    { glyph: 'はやい', romaji: 'ha-ya-i', meaning: 'Fast/Early' },
    { glyph: 'おそい', romaji: 'o-so-i', meaning: 'Slow/Late' },
    { glyph: 'たのしい', romaji: 'ta-no-shī', meaning: 'Fun/Enjoyable' },
    { glyph: 'つまらない', romaji: 'tsu-ma-ra-na-i', meaning: 'Boring' },
    { glyph: 'むずかしい', romaji: 'mu-zu-ka-shī', meaning: 'Difficult' },
    { glyph: 'やさしい', romaji: 'ya-sa-shī', meaning: 'Easy/Kind' },
    { glyph: 'うれしい', romaji: 'u-re-shī', meaning: 'Happy' },
    { glyph: 'かなしい', romaji: 'ka-na-shī', meaning: 'Sad' },
    { glyph: 'おもしろい', romaji: 'o-mo-shi-ro-i', meaning: 'Interesting' },
    { glyph: 'つまらない', romaji: 'tsu-ma-ra-na-i', meaning: 'Boring' },
    { glyph: 'あたらしい', romaji: 'a-ta-ra-shī', meaning: 'New' },
    { glyph: 'ふるい', romaji: 'fu-ru-i', meaning: 'Old' },
    { glyph: 'ひろい', romaji: 'hi-ro-i', meaning: 'Wide/Spacious' },
    { glyph: 'せまい', romaji: 'se-ma-i', meaning: 'Narrow/Small' },
    { glyph: 'いい', romaji: 'ī', meaning: 'Good' },
    { glyph: 'わるい', romaji: 'wa-ru-i', meaning: 'Bad' },
    { glyph: 'ひと', romaji: 'hi-to', meaning: 'Person' },
    { glyph: 'せんせい', romaji: 'sen-se-i', meaning: 'Teacher' },
    { glyph: 'がくせい', romaji: 'ga-ku-se-i', meaning: 'Student' },
    { glyph: 'かいしゃ', romaji: 'ka-i-sha', meaning: 'Company' },
    { glyph: 'しごと', romaji: 'shi-go-to', meaning: 'Job/Work' },
    { glyph: 'ともだち', romaji: 'to-mo-da-chi', meaning: 'Friend' },
    { glyph: 'かぞく', romaji: 'ka-zo-ku', meaning: 'Family' },
    { glyph: 'おかね', romaji: 'o-ka-ne', meaning: 'Money' },
    { glyph: 'いえ', romaji: 'i-e', meaning: 'House/Home' },
    { glyph: 'へや', romaji: 'he-ya', meaning: 'Room' },
    { glyph: 'ごはん', romaji: 'go-han', meaning: 'Meal/Cooked rice' },
    { glyph: 'みず', romaji: 'mi-zu', meaning: 'Water' },
    { glyph: 'おちゃ', romaji: 'o-cha', meaning: 'Tea' },
    { glyph: 'さかな', romaji: 'sa-ka-na', meaning: 'Fish' },
    { glyph: 'にく', romaji: 'ni-ku', meaning: 'Meat' },
    { glyph: 'やさい', romaji: 'ya-sa-i', meaning: 'Vegetable' },
    { glyph: 'くだもの', romaji: 'ku-da-mo-no', meaning: 'Fruit' },
    { glyph: 'パン', romaji: 'pan', meaning: 'Bread' },
    { glyph: 'ぎゅうにゅう', romaji: 'gyū-nyū', meaning: 'Milk' },
    { glyph: 'おさけ', romaji: 'o-sa-ke', meaning: 'Alcohol/Sake' },
    { glyph: 'えき', romaji: 'e-ki', meaning: 'Station' },
    { glyph: 'ぎんこう', romaji: 'gin-kō', meaning: 'Bank' },
    { glyph: 'びょういん', romaji: 'byō-in', meaning: 'Hospital' },
    { glyph: 'がっこう', romaji: 'gak-kō', meaning: 'School' },
    { glyph: 'なん', romaji: 'nan', meaning: 'What' },
    { glyph: 'だれ', romaji: 'da-re', meaning: 'Who' },
    { glyph: 'いつ', romaji: 'i-tsu', meaning: 'When' },
    { glyph: 'どこ', romaji: 'do-ko', meaning: 'Where' },
    { glyph: 'どう', romaji: 'dō', meaning: 'How' },
    { glyph: 'なぜ', romaji: 'na-ze', meaning: 'Why' },
    { glyph: 'いぬ', romaji: 'i-nu', meaning: 'Dog' },
    { glyph: 'ねこ', romaji: 'ne-ko', meaning: 'Cat' },
    { glyph: 'とり', romaji: 'to-ri', meaning: 'Bird' },
    { glyph: 'さる', romaji: 'sa-ru', meaning: 'Monkey' },
    { glyph: 'ぞう', romaji: 'zō', meaning: 'Elephant' },
    { glyph: 'さくら', romaji: 'sa-ku-ra', meaning: 'Cherry blossom' },
    { glyph: 'やま', romaji: 'ya-ma', meaning: 'Mountain' },
    { glyph: 'かわ', romaji: 'ka-wa', meaning: 'River' },
    { glyph: 'うみ', romaji: 'u-mi', meaning: 'Sea/Ocean' },
    { glyph: 'そら', romaji: 'so-ra', meaning: 'Sky' },
    { glyph: 'たいよう', romaji: 'ta-i-yō', meaning: 'Sun' },
    { glyph: 'つき', romaji: 'tsu-ki', meaning: 'Moon' },
    { glyph: 'ほし', romaji: 'ho-shi', meaning: 'Star' },
    { glyph: 'あめ', romaji: 'a-me', meaning: 'Rain' },
    { glyph: 'ゆき', romaji: 'yu-ki', meaning: 'Snow' },
    { glyph: 'かぜ', romaji: 'ka-ze', meaning: 'Wind' },
    { glyph: 'たべます', romaji: 'ta-be-ma-su', meaning: 'Eat' },
    { glyph: 'のみます', romaji: 'no-mi-ma-su', meaning: 'Drink' },
    { glyph: 'かいます', romaji: 'ka-i-ma-su', meaning: 'Buy' },
    { glyph: 'よみます', romaji: 'yo-mi-ma-su', meaning: 'Read' },
    { glyph: 'かきます', romaji: 'ka-ki-ma-su', meaning: 'Write' },
    { glyph: 'はなします', romaji: 'ha-na-shi-ma-su', meaning: 'Speak/Talk' },
    { glyph: 'ききます', romaji: 'ki-ki-ma-su', meaning: 'Listen/Hear/Ask' },
    { glyph: 'みます', romaji: 'mi-ma-su', meaning: 'See/Watch' },
    { glyph: 'いきます', romaji: 'i-ki-ma-su', meaning: 'Go' },
    { glyph: 'きます', romaji: 'ki-ma-su', meaning: 'Come' },
    { glyph: 'かえります', romaji: 'ka-e-ri-ma-su', meaning: 'Return/Go home' },
    { glyph: 'ねます', romaji: 'ne-ma-su', meaning: 'Sleep' },
    { glyph: 'おきます', romaji: 'o-ki-ma-su', meaning: 'Wake up' },
    { glyph: 'べんきょうします', romaji: 'ben-kyō-shi-ma-su', meaning: 'Study' },
    { glyph: 'しゅくだい', romaji: 'shu-ku-da-i', meaning: 'Homework' },
    { glyph: 'おんがく', romaji: 'on-ga-ku', meaning: 'Music' },
    { glyph: 'えいが', romaji: 'e-i-ga', meaning: 'Movie' },
    { glyph: 'テレビ', romaji: 'te-re-bi', meaning: 'Television' },
    { glyph: 'ほん', romaji: 'hon', meaning: 'Book' },
    { glyph: 'ざっし', romaji: 'zas-shi', meaning: 'Magazine' },
    { glyph: 'しんぶん', romaji: 'shin-bun', meaning: 'Newspaper' },
    { glyph: 'かぎ', romaji: 'ka-gi', meaning: 'Key' },
    { glyph: 'かばん', romaji: 'ka-ban', meaning: 'Bag' },
    { glyph: 'とけい', romaji: 'to-ke-i', meaning: 'Clock/Watch' },
    { glyph: 'くるま', romaji: 'ku-ru-ma', meaning: 'Car' },
    { glyph: 'じてんしゃ', romaji: 'ji-ten-sha', meaning: 'Bicycle' },
    { glyph: 'バス', romaji: 'ba-su', meaning: 'Bus' },
    { glyph: 'ひこうき', romaji: 'hi-kō-ki', meaning: 'Airplane' },
    { glyph: 'でんしゃ', romaji: 'den-sha', meaning: 'Train' },
    { glyph: 'ちかてつ', romaji: 'chi-ka-te-tsu', meaning: 'Subway' },
    { glyph: 'ふね', romaji: 'fu-ne', meaning: 'Ship' },
    { glyph: 'あさ', romaji: 'a-sa', meaning: 'Morning' },
    { glyph: 'ひる', romaji: 'hi-ru', meaning: 'Daytime/Noon' },
    { glyph: 'ゆうがた', romaji: 'yū-ga-ta', meaning: 'Evening' },
    { glyph: 'ばん', romaji: 'ban', meaning: 'Night' },
    { glyph: 'いま', romaji: 'i-ma', meaning: 'Now' },
    { glyph: 'きのう', romaji: 'ki-nō', meaning: 'Yesterday' },
    { glyph: 'きょう', romaji: 'kyō', meaning: 'Today' },
    { glyph: 'あした', romaji: 'a-shi-ta', meaning: 'Tomorrow' },
    { glyph: 'せんしゅう', romaji: 'sen-shū', meaning: 'Last week' },
    { glyph: 'こんしゅう', romaji: 'kon-shū', meaning: 'This week' },
    { glyph: 'らいしゅう', romaji: 'ra-i-shū', meaning: 'Next week' },
    { glyph: 'せんげつ', romaji: 'sen-getsu', meaning: 'Last month' },
    { glyph: 'こんげつ', romaji: 'kon-getsu', meaning: 'This month' },
    { glyph: 'らいげつ', romaji: 'ra-i-getsu', meaning: 'Next month' },
    { glyph: 'きょねん', romaji: 'kyo-nen', meaning: 'Last year' },
    { glyph: 'ことし', romaji: 'ko-to-shi', meaning: 'This year' },
    { glyph: 'らいねん', romaji: 'ra-i-nen', meaning: 'Next year' },
    { glyph: 'たんじょうび', romaji: 'tan-jō-bi', meaning: 'Birthday' },
    { glyph: 'しゅうまつ', romaji: 'shū-matsu', meaning: 'Weekend' },
    { glyph: 'きゅうじつ', romaji: 'kyū-jitsu', meaning: 'Holiday' },
    { glyph: 'てんき', romaji: 'ten-ki', meaning: 'Weather' },
    { glyph: 'あたたかい', romaji: 'a-ta-ta-ka-i', meaning: 'Warm' },
    { glyph: 'すずしい', romaji: 'su-zu-shī', meaning: 'Cool' },
    { glyph: 'あつい', romaji: 'a-tsu-i', meaning: 'Hot' },
    { glyph: 'さむい', romaji: 'sa-mu-i', meaning: 'Cold' },
    { glyph: 'はれ', romaji: 'ha-re', meaning: 'Fine/Clear weather' },
    { glyph: 'くもり', romaji: 'ku-mo-ri', meaning: 'Cloudy' },
    { glyph: 'あめ', romaji: 'a-me', meaning: 'Rain' },
    { glyph: 'ゆき', romaji: 'yu-ki', meaning: 'Snow' },
    { glyph: 'おてら', romaji: 'o-te-ra', meaning: 'Temple' },
    { glyph: 'じんじゃ', romaji: 'jin-ja', meaning: 'Shrine' },
    { glyph: 'くうこう', romaji: 'kū-kō', meaning: 'Airport' },
    { glyph: 'こうえん', romaji: 'kō-en', meaning: 'Park' },
    { glyph: 'しんせつ', romaji: 'shin-se-tsu', meaning: 'Kind' },
    { glyph: 'りょうり', romaji: 'ryō-ri', meaning: 'Cooking' },
    { glyph: 'うんどう', romaji: 'un-dō', meaning: 'Exercise' },
    { glyph: 'かいもの', romaji: 'ka-i-mo-no', meaning: 'Shopping' },
    { glyph: 'りょこう', romaji: 'ryo-kō', meaning: 'Travel' },
    { glyph: 'せいかつ', romaji: 'se-i-ka-tsu', meaning: 'Life/Living' }
  ].slice(0, 200) // Ensure exactly 200 words
};

// --- [ UTILITY FUNCTIONS ] ---
const D = document;
const TIMEOUT_DELAY = 600;

function getRandomInt(max) { return Math.floor(Math.random() * max); }
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- [ SOUND ENGINEERING MODULE ] ---
const SOUNDS = {
    click: D.getElementById('sound-click'),
    correct: D.getElementById('sound-correct'),
    wrong: D.getElementById('sound-wrong')
};

function playSound(type) {
    const audio = SOUNDS[type];
    if (audio) {
        // Stop and rewind before playing to allow rapid playback
        audio.currentTime = 0;
        audio.play().catch(e => {
            console.warn(`Could not play ${type} sound:`, e.message);
        });
    }
}

// --- [ ELEMENT AND STATE MANAGEMENT ] ---
const ELEMENTS = {
    // Score & Timer
    scoreCorrect: D.getElementById('score-correct'),
    scoreTotal: D.getElementById('score-total'),
    scorePercent: D.getElementById('score-percent'),
    timerDisplay: D.getElementById('timer-display'),
    // Practice View
    modeSelector: D.getElementById('mode-selector'),
    modeButtons: D.querySelectorAll('.mode-button'),
    targetGlyph: D.getElementById('target-glyph'),
    answerOptions: D.getElementById('answer-options'),
    feedbackMessage: D.getElementById('feedback-message'),
    btnStart: D.getElementById('btn-start'),
    btnStop: D.getElementById('btn-stop'),
    btnNext: D.getElementById('btn-next'),
    btnReset: D.getElementById('btn-reset'),
    timeLimit: D.getElementById('time-limit'),
    numOptions: D.getElementById('num-options'),
    romajiToggle: D.getElementById('romaji-toggle'),
    // View Management
    tabPractice: D.getElementById('tab-practice'),
    tabDictionary: D.getElementById('tab-dictionary'),
    practiceView: D.getElementById('practice-view'),
    dictionaryView: D.getElementById('dictionary-view'),
    // Dictionary View
    dictSearchInput: D.getElementById('dict-search-input'),
    dictFilterButtons: D.getElementById('dict-filter-buttons'),
    dictResultsContainer: D.getElementById('dict-results-container'),
    filterButtons: D.querySelectorAll('.filter-button')
};

let appState = {
    view: 'practice',
    mode: 'hiragana',
    score: { correct: 0, total: 0 },
    currentQuestion: null,
    isRunning: false,
    timeRemaining: 0,
    timerInterval: null,
    isProcessing: false,
    weakItems: JSON.parse(localStorage.getItem('weakItems') || '{}')
};

let dictionaryState = {
    currentFilter: 'all',
    // Combine all data into a single array, adding a 'type' property for filtering/searching
    allData: [
        ...DATA.hiragana.map(item => ({...item, type: 'hiragana', meaning: item.romaji})),
        ...DATA.katakana.map(item => ({...item, type: 'katakana', meaning: item.romaji})),
        ...DATA.kanji.map(item => ({...item, type: 'kanji'})),
        ...DATA.words.map(item => ({...item, type: 'words'}))
    ]
};

function saveState() {
    localStorage.setItem('weakItems', JSON.stringify(appState.weakItems));
}

// --- [ VIEW MANAGEMENT ] ---
function switchView(viewName) {
    if (appState.isRunning) {
        stopSession();
    }
    appState.view = viewName;

    // 1. Toggle Active Class on Tabs
    ELEMENTS.tabPractice.classList.toggle('active', viewName === 'practice');
    ELEMENTS.tabDictionary.classList.toggle('active', viewName === 'dictionary');
    ELEMENTS.tabPractice.setAttribute('aria-selected', viewName === 'practice');
    ELEMENTS.tabDictionary.setAttribute('aria-selected', viewName === 'dictionary');

    // 2. Toggle Visibility of Views
    ELEMENTS.practiceView.classList.toggle('hidden', viewName !== 'practice');
    ELEMENTS.dictionaryView.classList.toggle('hidden', viewName !== 'dictionary');

    // 3. Special initialization for dictionary
    if (viewName === 'dictionary') {
        renderDictionary();
        ELEMENTS.dictSearchInput.focus();
    }
}


// --- [ PRACTICE MODE (QUIZ) LOGIC ] ---

function getAnswerProperty() {
    if (appState.mode === 'hiragana' || appState.mode === 'katakana') return 'Romaji';
    if (appState.mode === 'kanji') return 'Meaning';
    if (appState.mode === 'words') return 'Meaning';
    return 'Answer';
}

function renderScore() {
    ELEMENTS.scoreCorrect.textContent = appState.score.correct;
    ELEMENTS.scoreTotal.textContent = appState.score.total;
    const percent = appState.score.total > 0 ? ((appState.score.correct / appState.score.total) * 100).toFixed(0) : 100;
    ELEMENTS.scorePercent.textContent = `${percent}%`;
    saveState();
}

function getItemSet() {
    // Default set
    const baseSet = DATA[appState.mode];

    // Simple priority queue logic using weakItems for review
    const priorityItems = baseSet.filter(item => {
        const key = item.glyph;
        const score = appState.weakItems[key] || 1;
        return score > 0.5; // Items with a score > 0.5 are considered 'weak'
    });

    // 30% chance to draw a weak item if available
    if (priorityItems.length > 0 && Math.random() < 0.3) {
        return priorityItems;
    }

    // Otherwise, use the full set
    return baseSet;
}

function generateQuestion() {
    appState.isProcessing = true;
    const itemSet = getItemSet();

    // 1. Select Target Item
    const targetItem = itemSet[getRandomInt(itemSet.length)];
    appState.currentQuestion = targetItem;

    // 2. Determine Correct Answer Value
    let correctAnswerValue;
    if (appState.mode === 'hiragana' || appState.mode === 'katakana') {
        correctAnswerValue = targetItem.romaji;
    } else if (appState.mode === 'kanji') {
        // For Kanji, quiz the MEANING
        correctAnswerValue = targetItem.meaning;
    } else if (appState.mode === 'words') {
        // For Words, quiz the MEANING
        correctAnswerValue = targetItem.meaning;
    }
    appState.currentQuestion.correctAnswer = correctAnswerValue;

    // 3. Create Unique Answer Options
    const numOptions = parseInt(ELEMENTS.numOptions.value);
    let uniqueAnswers = [...new Set(itemSet.map(item => {
        if (appState.mode === 'hiragana' || appState.mode === 'katakana') return item.romaji;
        if (appState.mode === 'kanji') return item.meaning;
        if (appState.mode === 'words') return item.meaning;
    }))];

    let choices = [correctAnswerValue];

    while (choices.length < numOptions) {
        const randomAnswer = uniqueAnswers[getRandomInt(uniqueAnswers.length)];
        if (!choices.includes(randomAnswer)) {
            choices.push(randomAnswer);
        }
    }

    appState.currentQuestion.choices = shuffleArray(choices);
    renderQuestion(targetItem, choices);
    appState.isProcessing = false;
}

function renderQuestion(targetItem, choices) {
    ELEMENTS.targetGlyph.textContent = targetItem.glyph;
    let hintText = '';
    const isRomajiToggleChecked = ELEMENTS.romajiToggle.checked;

    if (isRomajiToggleChecked) {
        if (appState.mode === 'hiragana' || appState.mode === 'katakana' || appState.mode === 'words') {
            hintText = targetItem.romaji;
        } else if (appState.mode === 'kanji') {
            // Display furigana/readings and romaji readings
            const furigana = targetItem.readings.join(', ');
            const romaji = targetItem.romajiReadings.join(', ');
            hintText = `${furigana} (${romaji})`;
        }
    }

    ELEMENTS.feedbackMessage.textContent = hintText;
    ELEMENTS.feedbackMessage.style.color = 'var(--color-text-secondary)';

    // Set Aria Label based on the target and visibility of hint
    const questionAriaLabel = `What is the ${getAnswerProperty()} for ${targetItem.glyph}?`;
    ELEMENTS.targetGlyph.setAttribute('aria-label', questionAriaLabel);

    ELEMENTS.answerOptions.innerHTML = '';
    D.documentElement.style.setProperty('--num-options', choices.length);

    choices.forEach((choice, index) => {
        const button = D.createElement('button');
        button.className = 'answer-button';
        button.textContent = choice;
        button.setAttribute('data-answer', choice);
        button.setAttribute('id', `choice-${index + 1}`); // For keyboard shortcuts
        button.setAttribute('aria-label', `${getAnswerProperty()}: ${choice}. Option ${index + 1}`);
        ELEMENTS.answerOptions.appendChild(button);
    });
}

function updateScore(isCorrect) {
    appState.score.total++;
    if (isCorrect) {
        appState.score.correct++;
        // Stronger item => decrease score (closer to 0)
        if (appState.currentQuestion) {
            const glyph = appState.currentQuestion.glyph;
            appState.weakItems[glyph] = (appState.weakItems[glyph] || 1) * 0.9;
        }
    } else {
        // Weaker item => increase score (closer to 1)
        if (appState.currentQuestion) {
            const glyph = appState.currentQuestion.glyph;
            appState.weakItems[glyph] = Math.min(1, (appState.weakItems[glyph] || 0.5) + 0.1);
        }
    }
    renderScore();
    saveState();
}

function checkAnswer(selectedAnswer) {
    if (appState.isProcessing) return;
    appState.isProcessing = true;
    const isCorrect = selectedAnswer === appState.currentQuestion.correctAnswer;
    const buttons = D.querySelectorAll('.answer-button');
    let correctButton = null;

    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.getAttribute('data-answer') === appState.currentQuestion.correctAnswer) {
            correctButton = btn;
            btn.classList.add('correct');
        } else if (btn.getAttribute('data-answer') === selectedAnswer) {
            btn.classList.add('wrong');
        }
    });

    if (isCorrect) {
        playSound('correct');
        ELEMENTS.feedbackMessage.textContent = 'Correct! Great job!';
        ELEMENTS.feedbackMessage.style.color = 'var(--color-correct)';
    } else {
        playSound('wrong');
        let correctDisplay = appState.currentQuestion.correctAnswer;
        if (appState.mode === 'hiragana' || appState.mode === 'katakana') {
            correctDisplay = `${correctDisplay} (${appState.currentQuestion.romaji})`;
        } else if (appState.mode === 'kanji') {
            const furigana = appState.currentQuestion.readings.join(', ');
            const romaji = appState.currentQuestion.romajiReadings.join(', ');
            correctDisplay = `${correctDisplay} (${furigana} / ${romaji})`;
        }
        ELEMENTS.feedbackMessage.textContent = `Wrong! Correct: ${correctDisplay}`;
        ELEMENTS.feedbackMessage.style.color = 'var(--color-wrong)';
    }

    updateScore(isCorrect);

    // After a delay, move to the next question
    setTimeout(() => {
        if (appState.isRunning) {
            nextQuestion();
        } else {
            resetQuestionUI();
        }
    }, TIMEOUT_DELAY);
}

function nextQuestion() {
    if (!appState.isRunning && appState.score.total > 0 && ELEMENTS.btnNext.disabled === false) {
        // Manual 'Next'
        playSound('click');
    } else if (!appState.isRunning) {
        return;
    }
    resetQuestionUI();
    generateQuestion();
}

function resetQuestionUI() {
    ELEMENTS.feedbackMessage.textContent = '';
    ELEMENTS.feedbackMessage.style.color = 'var(--color-text-secondary)';
    ELEMENTS.answerOptions.innerHTML = '';
    appState.currentQuestion = null;

    if (!appState.isRunning) {
        const currentMode = appState.mode.charAt(0).toUpperCase() + appState.mode.slice(1);
        ELEMENTS.targetGlyph.textContent = `Practice ${currentMode}`;
        ELEMENTS.targetGlyph.removeAttribute('aria-label');
        ELEMENTS.feedbackMessage.textContent = ELEMENTS.romajiToggle.checked ? 'Hint feature active.' : '';
    } else {
        // Clear old buttons/styles while question is generating
    }

    const buttons = D.querySelectorAll('.answer-button');
    buttons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct', 'wrong');
    });
    appState.isProcessing = false;
}

function handleAnswerClick(e) {
    if (e.target.classList.contains('answer-button')) {
        playSound('click');
        checkAnswer(e.target.getAttribute('data-answer'));
    }
}

function handleModeChange(e) {
    const newMode = e.target.getAttribute('data-mode');
    if (newMode && newMode !== appState.mode) {
        playSound('click');
        appState.mode = newMode;
        ELEMENTS.modeButtons.forEach(btn => {
            btn.setAttribute('aria-pressed', btn.getAttribute('data-mode') === newMode);
        });
        resetQuestionUI();
        if (appState.isRunning) {
            stopSession();
            startSession();
        }
    }
}

function startSession() {
    playSound('click');
    appState.isRunning = true;
    appState.timeRemaining = parseInt(ELEMENTS.timeLimit.value) || Infinity;

    // UI Updates
    ELEMENTS.btnStart.disabled = true;
    ELEMENTS.btnStop.disabled = false;
    ELEMENTS.btnNext.disabled = true;
    ELEMENTS.modeButtons.forEach(btn => btn.disabled = true);
    ELEMENTS.timeLimit.disabled = true;
    ELEMENTS.numOptions.disabled = true;

    if (appState.timeRemaining !== Infinity) {
        ELEMENTS.timerDisplay.textContent = `${appState.timeRemaining}s`;
        appState.timerInterval = setInterval(updateTimer, 1000);
    } else {
        ELEMENTS.timerDisplay.textContent = '∞s';
    }

    generateQuestion();
}

function stopSession() {
    playSound('click');
    appState.isRunning = false;
    clearInterval(appState.timerInterval);
    appState.timerInterval = null;

    // UI Updates
    ELEMENTS.btnStart.disabled = false;
    ELEMENTS.btnStop.disabled = true;
    ELEMENTS.btnNext.disabled = false;
    ELEMENTS.modeButtons.forEach(btn => btn.disabled = false);
    ELEMENTS.timeLimit.disabled = false;
    ELEMENTS.numOptions.disabled = false;

    if (appState.timeRemaining !== Infinity) {
        ELEMENTS.timerDisplay.textContent = 'STOPPED';
    }

    resetQuestionUI();
}

function updateTimer() {
    appState.timeRemaining--;
    ELEMENTS.timerDisplay.textContent = `${appState.timeRemaining}s`;

    if (appState.timeRemaining <= 0) {
        clearInterval(appState.timerInterval);
        ELEMENTS.timerDisplay.textContent = 'TIME UP!';
        stopSession();
    }
}

function handleReset() {
    playSound('click');
    stopSession();
    appState.score = { correct: 0, total: 0 };
    appState.weakItems = {}; // Also reset the learning data
    localStorage.removeItem('weakItems');
    renderScore();
    const initialTimeLimit = ELEMENTS.timeLimit.value;
    ELEMENTS.timerDisplay.textContent = initialTimeLimit > 0 ? `${initialTimeLimit}s` : '∞s';
    ELEMENTS.targetGlyph.textContent = 'Select mode & Click Start';
}

// --- [ DICTIONARY MODULE ] ---

function renderDictionary(data = dictionaryState.allData) {
    const container = ELEMENTS.dictResultsContainer;
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = '<p class="initial-message">No results found. Try a different search term or filter.</p>';
        return;
    }

    const fragment = D.createDocumentFragment();

    data.forEach(item => {
        const card = D.createElement('div');
        card.className = 'dict-card';
        card.setAttribute('data-type', item.type);
        card.setAttribute('title', item.meaning); // Tooltip for quick view

        // Glyph
        const glyph = D.createElement('div');
        glyph.className = 'dict-glyph';
        glyph.textContent = item.glyph;
        card.appendChild(glyph);

        // Readings/Romaji (Combined for Kanji)
        if (item.type === 'kanji') {
            const readingsContainer = D.createElement('div');
            readingsContainer.className = 'dict-readings-container';

            // Furigana (Hiragana/Katakana readings)
            const furigana = D.createElement('div');
            furigana.className = 'dict-readings';
            furigana.textContent = item.readings.join('・');
            readingsContainer.appendChild(furigana);

            // Romaji Readings (New feature addition)
            const romaji = D.createElement('div');
            romaji.className = 'dict-romaji-readings';
            romaji.textContent = `(${item.romajiReadings.join('・')})`;
            readingsContainer.appendChild(romaji);

            card.appendChild(readingsContainer);

        } else if (item.romaji) {
            // Romaji for Kana/Words
            const romaji = D.createElement('div');
            romaji.className = 'dict-romaji';
            romaji.textContent = item.romaji.split('-').join('');
            card.appendChild(romaji);
        }

        // Meaning
        const meaning = D.createElement('div');
        meaning.className = 'dict-meaning';
        meaning.textContent = item.meaning;
        card.appendChild(meaning);

        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}

function filterAndSearchDictionary() {
    const searchTerm = ELEMENTS.dictSearchInput.value.toLowerCase().trim();
    const filterType = dictionaryState.currentFilter;

    let filteredData = dictionaryState.allData;

    // 1. Filter by Type
    if (filterType !== 'all') {
        filteredData = filteredData.filter(item => item.type === filterType);
    }

    // 2. Search by Term
    if (searchTerm.length > 0) {
        filteredData = filteredData.filter(item => {
            const matchesGlyph = item.glyph.toLowerCase().includes(searchTerm);
            const matchesMeaning = item.meaning.toLowerCase().includes(searchTerm);
            const matchesRomaji = item.romaji ? item.romaji.toLowerCase().replace(/-/g, '').includes(searchTerm) : false;
            
            let matchesReadings = false;
            if (item.readings) {
                matchesReadings = item.readings.some(r => r.includes(searchTerm));
            }
            if (item.romajiReadings) {
                matchesReadings = matchesReadings || item.romajiReadings.some(r => r.toLowerCase().includes(searchTerm));
            }

            return matchesGlyph || matchesMeaning || matchesRomaji || matchesReadings;
        });
    }

    renderDictionary(filteredData);
}

function handleDictFilterClick(e) {
    const button = e.target.closest('.filter-button');
    if (!button) return;

    playSound('click');
    const newFilter = button.getAttribute('data-filter');

    if (dictionaryState.currentFilter === newFilter) return;

    // Update active button state
    ELEMENTS.filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    dictionaryState.currentFilter = newFilter;
    filterAndSearchDictionary();
}

// --- [ INITIALIZATION & EVENT LISTENERS ] ---
function initialize() {
    // Practice Mode Listeners
    ELEMENTS.modeSelector.addEventListener('click', handleModeChange);
    ELEMENTS.answerOptions.addEventListener('click', handleAnswerClick);
    ELEMENTS.btnStart.addEventListener('click', startSession);
    ELEMENTS.btnStop.addEventListener('click', stopSession);
    ELEMENTS.btnNext.addEventListener('click', nextQuestion);
    ELEMENTS.btnReset.addEventListener('click', handleReset);
    D.addEventListener('keydown', handleKeyboard);

    // View Listeners
    ELEMENTS.tabPractice.addEventListener('click', () => { playSound('click'); switchView('practice'); });
    ELEMENTS.tabDictionary.addEventListener('click', () => { playSound('click'); switchView('dictionary'); });

    // Dictionary Listeners
    ELEMENTS.dictSearchInput.addEventListener('input', filterAndSearchDictionary);
    ELEMENTS.dictFilterButtons.addEventListener('click', handleDictFilterClick);

    // Config Listeners
    ELEMENTS.timeLimit.addEventListener('change', (e) => {
        playSound('click');
        if (!appState.isRunning) {
            const value = e.target.value;
            ELEMENTS.timerDisplay.textContent = value > 0 ? `${value}s` : '∞s';
        }
    });
    ELEMENTS.numOptions.addEventListener('change', () => playSound('click'));

    ELEMENTS.romajiToggle.addEventListener('change', () => {
        playSound('click');
        if (appState.currentQuestion) {
            // Re-render question to apply new hint visibility
            renderQuestion(appState.currentQuestion, appState.currentQuestion.choices);
        } else if (!appState.isRunning) {
            // Update hint text when not running but toggle is flipped
            resetQuestionUI();
        }
    });

    // Initial Setup
    renderScore();
    D.getElementById(`mode-${appState.mode}`).setAttribute('aria-pressed', 'true');
    ELEMENTS.targetGlyph.textContent = 'Select mode & Click Start';

    // Set initial timer display based on default selection
    const initialTimeLimit = ELEMENTS.timeLimit.value;
    ELEMENTS.timerDisplay.textContent = initialTimeLimit > 0 ? `${initialTimeLimit}s` : '∞s';
}

function handleKeyboard(e) {
    if (appState.isProcessing || appState.view !== 'practice') return;

    // Number keys 1-4 for answers
    if (e.key >= '1' && e.key <= ELEMENTS.numOptions.value) {
        e.preventDefault(); // Prevent 1-4 from triggering other browser actions
        const button = D.getElementById(`choice-${e.key}`);
        if (button && appState.isRunning && !button.disabled) {
            button.focus();
            checkAnswer(button.getAttribute('data-answer'));
        }
    } else if (e.key === ' ' || e.key === 'ArrowRight') {
        // Space/Right Arrow for Next Question (when stopped)
        if (!appState.isRunning && ELEMENTS.btnNext.disabled === false) {
            e.preventDefault();
            nextQuestion();
        }
    }
}

// Kick off the application
initialize();