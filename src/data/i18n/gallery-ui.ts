import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Destiny 2 Hacks gallery',
		subtitle: 'Simple destiny 2 hacks visuals — ESP, wallhack, aimbot, and radar for Destiny 2 on PC.',
		lead: 'Destiny 2 Hacks helps you spot players, agents, abilities, and bomb sites with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'destiny 2 hacks esp', copy: 'See players through walls with destiny 2 hacks esp and wallhack overlays.' },
			{ title: 'destiny 2 hacks radar', copy: 'Track nearby threats with destiny 2 hacks radar before you push or rotate.' },
			{ title: 'destiny 2 hacks aimbot', copy: 'Use aimbot and aimbot controls tuned for Destiny 2 matches on Windows PC.' },
		],
		updatesLabel: 'destiny 2 hacks updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Galería Destiny 2',
		subtitle: 'Visuales de Destiny 2 con loadouts, peleas de equipo y combate match — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Destiny 2 Hacks está pensado para el loop competitivo de Destiny 2: leer el mapa, rastrear escuadrones enemigos, lootear y ganar rondas.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de equipo en mapas y movement routes para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Destiny 2', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Galerie Destiny 2',
		subtitle: 'Visuels Destiny 2 — loadouts, combats d\'équipe et match — avec ESP, radar et Aimbot.',
		lead: 'Destiny 2 Hacks suit la boucle competitivo de Destiny 2 : lire la carte, suivre les équipes, loot et gagner les rounds.',
		highlights: [
			{ title: 'ESP players & équipes', copy: 'Repérez les players ennemis sur cartes et movement routes pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Destiny 2', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Destiny 2 Galerie',
		subtitle: 'Destiny 2-Bilder zu Loadouts, Squad-Kämpfen und match — mit ESP, Radar und Aimbot.',
		lead: 'Destiny 2 Hacks passt zur Raid-Schleife von Destiny 2: Karte lesen, Gegner tracken, looten und matches überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Karten und movement routes für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Destiny 2 Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Destiny 2 Hacks Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Galeria Destiny 2',
		subtitle: 'Visuais de Destiny 2 com loadouts, combates de esquadrão e match — com ESP, radar e Aimbot.',
		lead: 'Destiny 2 Hacks segue o loop BR do Destiny 2: ler o mapa, rastrear equipes, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e equipes', copy: 'Detecte players inimigos em mappe e movement routes para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Destiny 2', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Galleria Destiny 2',
		subtitle: 'Immagini Destiny 2 — loadout, scontri di squadra e match — con ESP, radar e Aimbot.',
		lead: 'Destiny 2 Hacks è pensato per il loop BR di Destiny 2: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su mappe e movement routes per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Destiny 2', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Destiny 2 galerij',
		subtitle: 'Destiny 2-beelden van loadouts, squadgevechten en match — met ESP, radar en Aimbot.',
		lead: 'Destiny 2 Hacks volgt de match-loop va Destiny 2: kaart lezen, vijandelijke squads volgen, jagen en combat zones overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op mappe en movement routes voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Destiny 2 Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Destiny 2 Hacks updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Galeria Destiny 2',
		subtitle: 'Grafiki Destiny 2 — loadouty, walki drużynowe i match — z ESP, radar i Aimbot.',
		lead: 'Destiny 2 Hacks pasuje do pętli BR Destiny 2: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na mapy i movement routes dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Destiny 2', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Галерея Destiny 2',
		subtitle: 'Визуалы Destiny 2 — лоадауты, бои отрядов и match — с ESP, радаром и Aimbot.',
		lead: 'Destiny 2 Hacks создан для рейд-циклу Destiny 2: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на карты и movement routes для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Destiny 2', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Destiny 2 galerisi',
		subtitle: 'Loadout, takım savaşları ve match görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Destiny 2 Hacks, Destiny 2 BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'haritalar ve movement routes\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Destiny 2 Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Destiny 2 Hacks güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'معرض Destiny 2',
		subtitle: 'صور Destiny 2 — loadouts ومعارك الفرق وsession — مع ESP ورادار وAimbot.',
		lead: 'Destiny 2 Hacks مبني لحلقة BR في Destiny 2: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على خرائط وmovement routes لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Destiny 2', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Destiny 2 ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのDestiny 2ビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Destiny 2 HacksはDestiny 2のBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'マップとmovement routesで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Destiny 2エイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Destiny 2 Hacks更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Destiny 2 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Destiny 2 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Destiny 2 Hacks는 Destiny 2 survival loop용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: '맵과 movement routes에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Destiny 2 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Destiny 2 Hacks 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Destiny 2 图库',
		subtitle: 'Destiny 2 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Destiny 2 Hacks 为 Destiny 2 match loop设计：读图、追踪敌方小队、搜刮并在 base survival。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 地图和 movement routes 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Destiny 2 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Destiny 2 Hacks 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Destiny 2 गैलरी',
		subtitle: 'Loadout, team fights और match visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Destiny 2 Hacks Destiny 2 match loop के लिए: map पढ़ें, enemy squads track करें, loot करें और base survival करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'मैप और movement routes पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Destiny 2 Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Destiny 2 Hacks updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Galeri Destiny 2',
		subtitle: 'Visual Destiny 2 — loadout, pertempuran squad, dan match — dengan ESP, radar, dan Aimbot.',
		lead: 'Destiny 2 Hacks untuk loop BR Destiny 2: baca peta, lacak squad musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di peta dan movement routes untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Destiny 2', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'แกลเลอรี Destiny 2',
		subtitle: 'ภาพ Destiny 2 — loadout การต่อสู้ทีม และ match — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Destiny 2 Hacks สำหรับลูป BR ของ Destiny 2: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน แผนที่และ movement routes เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Destiny 2', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Thư viện Destiny 2',
		subtitle: 'Hình ảnh Destiny 2 — loadout, chiến đấu squad và match — với ESP, radar và Aimbot.',
		lead: 'Destiny 2 Hacks cho vòng BR Destiny 2: đọc bản đồ, theo dõi squad địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên bản đồ và movement routes để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Destiny 2', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Галерея Destiny 2',
		subtitle: 'Візуали Destiny 2 — loadout, бої загонів і match — з ESP, радаром і Aimbot.',
		lead: 'Destiny 2 Hacks для рейд-циклу Destiny 2: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Map і movement routes для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Destiny 2', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Galerie Destiny 2',
		subtitle: 'Destiny 2 vizuály — loadouty, squad souboje a match — s ESP, radarem a Aimbot.',
		lead: 'Destiny 2 Hacks pro BR smyčku Destiny 2: číst mapu, sledovat nepřátelské squady, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na mapy a movement routes pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Destiny 2', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Galerie Destiny 2',
		subtitle: 'Vizualuri Destiny 2 — loadout, lupte de squad și match — cu ESP, radar și Aimbot.',
		lead: 'Destiny 2 Hacks pentru bucla BR Destiny 2: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Map și movement routes pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Destiny 2', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Destiny 2 Hacks',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Destiny 2 Hacks',
		title: 'Destiny 2 galleri',
		subtitle: 'Destiny 2-bilder — loadouts, squadstrider och match — med ESP, radar och Aimbot.',
		lead: 'Destiny 2 Hacks för Destiny 2:s match-loop: läs kartan, spåra fiendesquads, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på kartor och movement routes för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Destiny 2 Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Destiny 2 Hacks uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
