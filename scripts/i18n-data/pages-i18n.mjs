import { HERO_IMAGES, clampTitle, clampDesc, section, stripResellerFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';
import { FOCUS_I18N } from './focus-i18n.mjs';
import { LEGAL_I18N } from './legal-i18n.mjs';

/** Page-specific translated meta for home across locales. */
export const PAGE_META_HOME = {
	es: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Destiny 2 indetectables para Destiny 2 en PC. ESP wallhack, radar hack y Aimbot con mantenimiento BattlEye. Entrega digital instantánea.', h1: 'cheats indetectables para Destiny 2', intro: 'Paquete undetected para Destiny 2 en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento BattlEye tras cada parche.', imageAlt: 'Destiny 2 ESP — etiquetas de jugador hack', gallery: 'Galería Destiny 2 Hacks — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Destiny 2 Hacks en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y Quick Play sessions.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Destiny 2 indétectables pour Destiny 2 sur PC. ESP wallhack, radar hack et Aimbot avec maintenance BattlEye. Livraison numérique instantanée.', h1: 'triches indétectables pour Destiny 2', intro: 'Pack undetected pour Destiny 2 sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance BattlEye après chaque patch.', imageAlt: 'Destiny 2 ESP — tags joueur hack', gallery: 'Galerie Destiny 2 Hacks — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Destiny 2 Hacks en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les équipes ennemies en BR et Quick Play sessions.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Destiny 2 Hacks für Destiny 2 auf PC. ESP Wallhack, Radar Hack und Aimbot mit BattlEye-Wartung. Sofortige digitale Lieferung.', h1: 'undetected Cheats für Destiny 2', intro: 'Undetected Windows PC Paket für Destiny 2: ESP Wallhack, Radar und Aimbot mit BattlEye-Wartung nach jedem Patch.', imageAlt: 'Destiny 2 ESP — Spieler-Tags Hack', gallery: 'Destiny 2 Hacks Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Destiny 2 Hacks 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und Quick Play sessions zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Destiny 2 indetectáveis para Destiny 2 no PC. ESP wallhack, radar hack e Aimbot com manutenção BattlEye. Entrega digital instantánea.', h1: 'cheats indetectáveis para Destiny 2', intro: 'Pacote undetected para Destiny 2 no Windows PC: ESP wallhack, radar e Aimbot com manutenção BattlEye após cada patch.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'Galeria Destiny 2 Hacks — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Destiny 2 Hacks em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler equipes inimigos em BR e Quick Play sessions.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Destiny 2 indetectable per Destiny 2 su PC. ESP wallhack, radar hack e Aimbot con manutenzione BattlEye. Consegna digitale istantanea.', h1: 'cheat indetectable per Destiny 2', intro: 'Pacchetto undetected per Destiny 2 su PC Windows: ESP wallhack, radar e Aimbot con manutenzione BattlEye dopo ogni patch.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'Galleria Destiny 2 Hacks — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Destiny 2 Hacks nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e Quick Play sessions.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected destiny 2 hacks voor Destiny 2 op PC. ESP wallhack, radar hack en Aimbot met BattlEye-onderhoud. Directe digitale levering.', h1: 'undetected cheats voor Destiny 2', intro: 'Undetected Windows PC pakket voor Destiny 2: ESP wallhack, radar en Aimbot met BattlEye-onderhoud na elke patch.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'Destiny 2 Hacks galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Destiny 2 Hacks in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en Quick Play sessions.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Destiny 2 dla Destiny 2 na PC. ESP wallhack, radar hack i Aimbot z konserwacją BattlEye. Natychmiastowa dostawa cyfrowa.', h1: 'undetected cheaty dla Destiny 2', intro: 'Pakiet undetected dla Destiny 2 na Windows PC: ESP wallhack, radar i Aimbot z konserwacją BattlEye po każdym patchu.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'Galeria Destiny 2 Hacks — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Destiny 2 Hacks w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i Quick Play sessions.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Destiny 2 для Destiny 2 на PC. ESP wallhack, radar hack и Aimbot с обслуживанием BattlEye. Мгновенная цифровая доставка.', h1: 'undetected читы для Destiny 2', intro: 'Undetected пакет для Destiny 2 на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием BattlEye после патчей.', imageAlt: 'Destiny 2 ESP — теги игроков hack', gallery: 'Галерея Destiny 2 Hacks — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Destiny 2 Hacks в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и Quick Play sessions.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack ve Aimbot', desc: 'Destiny 2 için undetected hileler. ESP wallhack, radar hack ve Aimbot — BattlEye bakımı. Anında dijital teslimat.', h1: 'Destiny 2 için undetected hileler', intro: 'Destiny 2 Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — BattlEye bakımı dahil.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'Destiny 2 Hacks galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Destiny 2 Hacks', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve Quick Play sessions\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Destiny 2 Hacks 2026 | ESP وWallhack وAimbot', desc: 'غش Destiny 2 undetected لـ Destiny 2 على PC. ESP wallhack ورadar hack وAimbot مع صيانة BattlEye. تسليم رقمي فوري.', h1: 'غش غير مكتشف لـ Destiny 2', intro: 'حزمة undetected لـ Destiny 2 على Windows PC: ESP wallhack ورadar وAimbot مع صيانة BattlEye.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'معرض Destiny 2 Hacks — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Destiny 2 Hacks في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وQuick Play sessions.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Destiny 2 Hacks 2026 | ESP・Wallhack・Aimbot', desc: 'Destiny 2向けundetectedチート。ESP wallhack、radar hack、Aimbot、BattlEyeメンテナンス。即時デジタル配信。', h1: 'Destiny 2向けundetectedチート', intro: 'Destiny 2 Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、BattlEyeメンテナンス付き。', imageAlt: 'destiny 2 hacks guardian ESP aimbot wallhack', gallery: 'Destiny 2 Hacksギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にDestiny 2 Hacksを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとQuick Play sessionsで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack, Aimbot', desc: 'Destiny 2 undetected 치트. ESP wallhack, radar hack, Aimbot, BattlEye 유지보수. 즉시 디지털 배송.', h1: 'Destiny 2용 undetected 치트', intro: 'Destiny 2 Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, BattlEye 유지보수 포함.', imageAlt: 'destiny 2 hacks guardian ESP aimbot wallhack', gallery: 'Destiny 2 Hacks 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Destiny 2 Hacks를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 Quick Play sessions에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Destiny 2 Hacks 2026 | ESP、Wallhack、Aimbot', desc: 'Destiny 2 undetected作弊。ESP wallhack、radar hack、Aimbot、BattlEye维护。即时数字交付。', h1: 'Destiny 2的undetected外挂', intro: 'Destiny 2 Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含BattlEye维护。', imageAlt: 'destiny 2 hacks guardian ESP aimbot wallhack', gallery: 'Destiny 2 Hacks图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Destiny 2 Hacks的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和Quick Play sessions中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack और Aimbot', desc: 'Destiny 2 undetected hacks. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. Instant digital delivery.', h1: 'Destiny 2 ke liye undetected cheats', intro: 'Destiny 2 Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, BattlEye maintenance सहित.', imageAlt: 'destiny 2 hacks guardian ESP aimbot wallhack', gallery: 'Destiny 2 Hacks gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Destiny 2 Hacks क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और Quick Play sessions में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Destiny 2 undetected untuk Destiny 2 di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan BattlEye. Pengiriman digital instan.', h1: 'cheat undetected untuk Destiny 2', intro: 'Paket undetected Destiny 2 di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan BattlEye.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'Galeri Destiny 2 Hacks — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Destiny 2 Hacks di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan Quick Play sessions.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Destiny 2 undetected สำหรับ Destiny 2 บน PC. ESP wallhack, radar hack, Aimbot, BattlEye maintenance. จัดส่งดิจิทัลทันที.', h1: 'cheat undetected สำหรับ Destiny 2', intro: 'แพ็ก undetected สำหรับ Destiny 2 บน Windows PC: ESP wallhack, radar, Aimbot พร้อม BattlEye maintenance', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'แกลเลอรี Destiny 2 Hacks — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Destiny 2 Hacks ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ Quick Play sessions', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Destiny 2 undetected cho Destiny 2 trên PC. ESP wallhack, radar hack, Aimbot, bảo trì BattlEye. Giao hàng kỹ thuật số tức thì.', h1: 'cheat undetected cho Destiny 2', intro: 'Gói undetected Destiny 2 trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì BattlEye.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'Thư viện Destiny 2 Hacks — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Destiny 2 Hacks 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và Quick Play sessions.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Destiny 2 для Destiny 2 на PC. ESP wallhack, radar hack, Aimbot, обслуговування BattlEye. Мгновенная цифровая доставка.', h1: 'undetected чіти для Destiny 2', intro: 'Undetected пакет для Destiny 2 на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням BattlEye.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'Галерея Destiny 2 Hacks — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Destiny 2 Hacks у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і Quick Play sessions.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected destiny 2 cheaty pro Destiny 2 na PC. ESP wallhack, radar hack, Aimbot, údržba BattlEye. Okamžité digitální doručení.', h1: 'undetected cheaty pro Destiny 2', intro: 'Undetected balíček pro Destiny 2 na Windows PC: ESP wallhack, radar, Aimbot s údržbou BattlEye.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'Galerie Destiny 2 Hacks — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Destiny 2 Hacks v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a Quick Play sessions.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Destiny 2 undetected pentru Destiny 2 pe PC. ESP wallhack, radar hack, Aimbot, mentenanță BattlEye. Livrare digitală instantă.', h1: 'cheat-uri undetected pentru Destiny 2', intro: 'Pachet undetected Destiny 2 pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță BattlEye.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'Galerie Destiny 2 Hacks — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Destiny 2 Hacks în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și Quick Play sessions.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Destiny 2 Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected destiny 2 hacks för Destiny 2 på PC. ESP wallhack, radar hack, Aimbot, BattlEye-underhåll. Omedelbar digital leverans.', h1: 'undetected cheats för Destiny 2', intro: 'Undetected paket för Destiny 2 på Windows PC: ESP wallhack, radar, Aimbot med BattlEye-underhåll.', imageAlt: 'Destiny 2 ESP player tags hack', gallery: 'Destiny 2 Hacks galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Destiny 2 Hacks 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och Quick Play sessions.', topicB: 'En licens istället för separata verktyg.' },
};

export function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripResellerFromMeta(m.title)),
		description: clampDesc(stripResellerFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
export const PAGE_META_TAILS = {
	'destiny-2-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, guardian markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'destiny-2-aimbot': { suffix: 'aimbot Controls', focus: 'aimbot, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, aimbot, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Live Status Log', focus: 'BattlEye patch status and rebuild notes', altKeyword: 'updates BattlEye maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, aimbot, delivery, and BattlEye questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'BattlEye Safe Status', focus: 'undetected maintenance after BattlEye patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: 'radar overlay cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	battleye: { suffix: 'Patch Maintenance', focus: 'how BattlEye updates are handled for Destiny 2 hacks', altKeyword: 'BattlEye bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 destiny 2 hacks checklist before checkout', altKeyword: 'hacks 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'Destiny 2 Hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and aimbot toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth aimbot settings for Windows PC', altKeyword: 'aimbot aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying destiny 2 hacks', altKeyword: 'best hacks ESP aimbot' },
	'aimbot-hack': { suffix: 'aimbot Assist', focus: 'undetected Aimbot hack assist for Destiny 2', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all items ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
export const SUFFIX_I18N = {
	es: {
		'destiny-2-esp': 'Cajas de jugador y wallhack',
		'destiny-2-aimbot': 'Controles aimbot',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro de estado',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		battleye: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes aimbot',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia aimbot',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'destiny-2-esp': 'Boîtes joueur et wallhack',
		'destiny-2-aimbot': 'Contrôles aimbot',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal de statut',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		battleye: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages aimbot',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance aimbot',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'destiny-2-esp': 'Spielerboxen & Wallhack',
		'destiny-2-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Wartungsprotokoll',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		battleye: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'destiny-2-esp': 'Caixas de jogador e wallhack',
		'destiny-2-aimbot': 'Controles aimbot',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro de estado',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		battleye: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes aimbot',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência aimbot',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'destiny-2-esp': 'Box giocatore e wallhack',
		'destiny-2-aimbot': 'Controlli aimbot',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		battleye: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni aimbot',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist aimbot',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'destiny-2-esp': 'Боксы игроков и wallhack',
		'destiny-2-aimbot': 'Управление aimbot',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал обновлений',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		battleye: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки aimbot',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'aimbot ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Destiny 2 Hacks', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const focus = FOCUS_I18N[locale]?.[pageKey] ?? meta.focus;
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripResellerFromMeta(titleBase)),
		description: clampDesc(
			stripResellerFromMeta(
				`${topicName} for Destiny 2 ranked & Trials on Windows PC — ${focus}. ${p.delivery}. ${p.undetected}. Official destiny 2 hacks at destiny2hack.net.`,
			),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Destiny 2 Hacks screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

export const TOPIC_NAMES = {
	'destiny-2-esp': { en: 'Destiny 2 ESP', es: 'ESP Destiny 2', fr: 'ESP Destiny 2', de: 'Destiny 2 ESP', pt: 'ESP Destiny 2', it: 'ESP Destiny 2', nl: 'Destiny 2 ESP', pl: 'ESP Destiny 2', ru: 'ESP Destiny 2', tr: 'Destiny 2 ESP', ar: 'ESP Destiny 2', ja: 'Destiny 2 ESP', ko: 'Destiny 2 ESP', zh: 'Destiny 2 ESP', hi: 'Destiny 2 ESP', id: 'ESP Destiny 2', th: 'Destiny 2 ESP', vi: 'ESP Destiny 2', uk: 'ESP Destiny 2', cs: 'Destiny 2 ESP', ro: 'ESP Destiny 2', sv: 'Destiny 2 ESP' },
	'destiny-2-aimbot': { en: 'Destiny 2 Aimbot', es: 'Aimbot Destiny 2', fr: 'Aimbot Destiny 2', de: 'Destiny 2 Aimbot', pt: 'Aimbot Destiny 2', it: 'Aimbot Destiny 2', nl: 'Destiny 2 Aimbot', pl: 'Aimbot Destiny 2', ru: 'Aimbot Destiny 2', tr: 'Destiny 2 Aimbot', ar: 'Aimbot Destiny 2', ja: 'Destiny 2 Aimbot', ko: 'Destiny 2 Aimbot', zh: 'Destiny 2 Aimbot', hi: 'Destiny 2 Aimbot', id: 'Aimbot Destiny 2', th: 'Destiny 2 Aimbot', vi: 'Aimbot Destiny 2', uk: 'Aimbot Destiny 2', cs: 'Destiny 2 Aimbot', ro: 'Aimbot Destiny 2', sv: 'Destiny 2 Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Destiny 2 Wallhack', es: 'Destiny 2 Wallhack', fr: 'Destiny 2 Wallhack', de: 'Destiny 2 Wallhack', pt: 'Destiny 2 Wallhack', it: 'Destiny 2 Wallhack', nl: 'Destiny 2 Wallhack', pl: 'Destiny 2 Wallhack', ru: 'Destiny 2 Wallhack', tr: 'Destiny 2 Wallhack', ar: 'Destiny 2 Wallhack', ja: 'Destiny 2 Wallhack', ko: 'Destiny 2 Wallhack', zh: 'Destiny 2 Wallhack', hi: 'Destiny 2 Wallhack', id: 'Destiny 2 Wallhack', th: 'Destiny 2 Wallhack', vi: 'Destiny 2 Wallhack', uk: 'Destiny 2 Wallhack', cs: 'Destiny 2 Wallhack', ro: 'Destiny 2 Wallhack', sv: 'Destiny 2 Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	battleye: { en: 'BattlEye Bypass', es: 'Bypass BattlEye', fr: 'Bypass BattlEye', de: 'BattlEye Bypass', pt: 'Bypass BattlEye', it: 'Bypass BattlEye', nl: 'BattlEye Bypass', pl: 'Bypass BattlEye', ru: 'Bypass BattlEye', tr: 'BattlEye bypass', ar: 'Bypass BattlEye', ja: 'BattlEye Bypass', ko: 'BattlEye Bypass', zh: 'BattlEye Bypass', hi: 'BattlEye Bypass', id: 'Bypass BattlEye', th: 'BattlEye Bypass', vi: 'Bypass BattlEye', uk: 'Bypass BattlEye', cs: 'BattlEye Bypass', ro: 'Bypass BattlEye', sv: 'BattlEye Bypass' },
	'cheats-2026': { en: 'Destiny 2 Hacks 2026', es: 'Trucos Destiny 2 2026', fr: 'Triches Destiny 2 2026', de: 'Destiny 2 Hacks 2026', pt: 'Cheats Destiny 2 2026', it: 'Cheat Destiny 2 2026', nl: 'Destiny 2 Hacks 2026', pl: 'Cheaty Destiny 2 2026', ru: 'Читы Destiny 2 2026', tr: 'Destiny 2 Hileleri 2026', ar: 'غش Destiny 2 2026', ja: 'Destiny 2 Hacks 2026', ko: 'Destiny 2 Hacks 2026', zh: 'Destiny 2作弊 2026', hi: 'Destiny 2 Hacks 2026', id: 'Cheat Destiny 2 2026', th: 'Destiny 2 Hacks 2026', vi: 'Cheat Destiny 2 2026', uk: 'Чіти Destiny 2 2026', cs: 'destiny 2 cheaty 2026', ro: 'Cheats Destiny 2 2026', sv: 'Destiny 2 Hacks 2026' },
	hacks: { en: 'Destiny 2 Hacks', es: 'Trucos Destiny 2', fr: 'Triches Destiny 2', de: 'Destiny 2 Hacks', pt: 'Cheats Destiny 2', it: 'Cheat Destiny 2', nl: 'Destiny 2 Hacks', pl: 'Cheaty Destiny 2', ru: 'Читы Destiny 2', tr: 'Destiny 2 Hileleri', ar: 'غش Destiny 2', ja: 'Destiny 2 Hacks', ko: 'Destiny 2 Hacks', zh: 'Destiny 2作弊', hi: 'Destiny 2 Hacks', id: 'Cheat Destiny 2', th: 'Destiny 2 Hacks', vi: 'Cheat Destiny 2', uk: 'Чіти Destiny 2', cs: 'destiny 2 cheaty', ro: 'Cheats Destiny 2', sv: 'Destiny 2 Hacks' },
	'cheat-download': { en: 'Destiny 2 Cheat Download', es: 'Descarga Destiny 2 Hacks', fr: 'Téléchargement Destiny 2 Hacks', de: 'Destiny 2 Cheat Download', pt: 'Download Destiny 2 Hacks', it: 'Download Destiny 2 Hacks', nl: 'Destiny 2 Cheat Download', pl: 'Pobieranie Destiny 2 Hacks', ru: 'Скачать Destiny 2 Hacks', tr: 'Destiny 2 Hile İndir', ar: 'تحميل Destiny 2 Hacks', ja: 'Destiny 2 Cheat Download', ko: 'Destiny 2 Cheat Download', zh: 'Destiny 2作弊下载', hi: 'Destiny 2 Cheat Download', id: 'Download Cheat Destiny 2', th: 'ดาวน์โหลด Destiny 2 Hacks', vi: 'Tải Cheat Destiny 2', uk: 'Завантаження Destiny 2 Hacks', cs: 'Stáhnout Destiny 2 Hacks', ro: 'Descărcare Destiny 2 Hacks', sv: 'Destiny 2 Cheat Download' },
	'mod-menu': { en: 'Destiny 2 Mod Menu', es: 'Menú mod Destiny 2', fr: 'Menu mod Destiny 2', de: 'Destiny 2 Mod-Menü', pt: 'Menu mod Destiny 2', it: 'Mod menu Destiny 2', nl: 'Destiny 2 Mod Menu', pl: 'Mod menu Destiny 2', ru: 'Мод-меню Destiny 2', tr: 'Destiny 2 Mod Menü', ar: 'قائمة مود Destiny 2', ja: 'Destiny 2 Mod Menu', ko: 'Destiny 2 모드 메뉴', zh: 'Destiny 2修改菜单', hi: 'Destiny 2 Mod Menu', id: 'Menu mod Destiny 2', th: 'เมนูมอด Destiny 2', vi: 'Mod menu Destiny 2', uk: 'Мод-меню Destiny 2', cs: 'Destiny 2 mod menu', ro: 'Meniu mod Destiny 2', sv: 'Destiny 2 Mod-meny' },
	'soft-aim': { en: 'Destiny 2 aimbot', es: 'aimbot Destiny 2', fr: 'aimbot Destiny 2', de: 'Destiny 2 aimbot', pt: 'aimbot Destiny 2', it: 'aimbot Destiny 2', nl: 'Destiny 2 aimbot', pl: 'aimbot Destiny 2', ru: 'aimbot Destiny 2', tr: 'Destiny 2 aimbot', ar: 'aimbot Destiny 2', ja: 'Destiny 2 aimbot', ko: 'Destiny 2 aimbot', zh: 'Destiny 2 aimbot', hi: 'Destiny 2 aimbot', id: 'aimbot Destiny 2', th: 'Destiny 2 aimbot', vi: 'aimbot Destiny 2', uk: 'aimbot Destiny 2', cs: 'Destiny 2 aimbot', ro: 'aimbot Destiny 2', sv: 'Destiny 2 aimbot' },
	'best-cheats': { en: 'Best Destiny 2 Hacks', es: 'Mejores trucos Destiny 2', fr: 'Meilleures triches Destiny 2', de: 'Beste Destiny 2 Hacks', pt: 'Melhores cheats Destiny 2', it: 'Migliori cheat Destiny 2', nl: 'Beste Destiny 2 Hacks', pl: 'Najlepsze cheaty Destiny 2', ru: 'Лучшие читы Destiny 2', tr: 'En İyi Destiny 2 Hileleri', ar: 'أفضل غش Destiny 2', ja: '最強Destiny 2チート', ko: '최고의 Destiny 2 치트', zh: '最佳Destiny 2作弊', hi: 'सर्वश्रेष्ठ Destiny 2 Hacks', id: 'Cheat Destiny 2 terbaik', th: 'Cheat Destiny 2 ที่ดีที่สุด', vi: 'Cheat Destiny 2 tốt nhất', uk: 'Найкращі чіти Destiny 2', cs: 'Nejlepší destiny 2 cheaty', ro: 'Cele mai bune cheats Destiny 2', sv: 'Bästa Destiny 2 Hacks' },
	'aimbot-hack': { en: 'Destiny 2 Aimbot Hack', es: 'Hack aimbot Destiny 2', fr: 'Hack aimbot Destiny 2', de: 'Destiny 2 Aimbot Hack', pt: 'Hack aimbot Destiny 2', it: 'Hack aimbot Destiny 2', nl: 'Destiny 2 Aimbot Hack', pl: 'Hack aimbot Destiny 2', ru: 'Хак aimbot Destiny 2', tr: 'Destiny 2 Aimbot Hilesi', ar: 'هاك Aimbot Destiny 2', ja: 'Destiny 2 Aimbot Hack', ko: 'Destiny 2 에임봇 핵', zh: 'Destiny 2自瞄外挂', hi: 'Destiny 2 Aimbot Hack', id: 'Hack aimbot Destiny 2', th: 'Hack Aimbot Destiny 2', vi: 'Hack aimbot Destiny 2', uk: 'Хак aimbot Destiny 2', cs: 'Destiny 2 Aimbot hack', ro: 'Hack aimbot Destiny 2', sv: 'Destiny 2 Aimbot Hack' },
	'esp-hack': { en: 'Destiny 2 ESP Hack', es: 'Hack ESP Destiny 2', fr: 'Hack ESP Destiny 2', de: 'Destiny 2 ESP Hack', pt: 'Hack ESP Destiny 2', it: 'Hack ESP Destiny 2', nl: 'Destiny 2 ESP Hack', pl: 'Hack ESP Destiny 2', ru: 'Хак ESP Destiny 2', tr: 'Destiny 2 ESP Hilesi', ar: 'هاك ESP Destiny 2', ja: 'Destiny 2 ESP Hack', ko: 'Destiny 2 ESP 핵', zh: 'Destiny 2 ESP外挂', hi: 'Destiny 2 ESP Hack', id: 'Hack ESP Destiny 2', th: 'Hack ESP Destiny 2', vi: 'Hack ESP Destiny 2', uk: 'Хак ESP Destiny 2', cs: 'Destiny 2 ESP hack', ro: 'Hack ESP Destiny 2', sv: 'Destiny 2 ESP Hack' },
	'unlock-all': { en: 'Destiny 2 Unlock All', es: 'Unlock all Destiny 2', fr: 'Unlock all Destiny 2', de: 'Destiny 2 Unlock All', pt: 'Unlock all Destiny 2', it: 'Unlock all Destiny 2', nl: 'Destiny 2 Unlock All', pl: 'Unlock all Destiny 2', ru: 'Unlock all Destiny 2', tr: 'Destiny 2 Unlock All', ar: 'Unlock all Destiny 2', ja: 'Destiny 2 Unlock All', ko: 'Destiny 2 Unlock All', zh: 'Destiny 2 Unlock All', hi: 'Destiny 2 Unlock All', id: 'Unlock all Destiny 2', th: 'Destiny 2 Unlock All', vi: 'Unlock all Destiny 2', uk: 'Unlock all Destiny 2', cs: 'Destiny 2 Unlock All', ro: 'Unlock all Destiny 2', sv: 'Destiny 2 Unlock All' },
};

export const CTA2_HREF = {
	'destiny-2-esp': '/destiny-2-cheats/',
	'destiny-2-aimbot': '/destiny-2-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/destiny-2-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/destiny-2-cheats/',
	wallhack: '/destiny-2-esp/',
	radar: '/destiny-2-esp/',
	battleye: '/updates/',
	'cheats-2026': '/destiny-2-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/destiny-2-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/destiny-2-aimbot/',
	'esp-hack': '/destiny-2-esp/',
	'unlock-all': '/features/',
};

export function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	const L = LEGAL_I18N[locale];
	const pageCopy = L?.[kind] ?? {};
	const h2 = pageCopy.h2 ?? ['Information we collect', 'How we use data', 'Your rights'];
	return {
		title: clampTitle(stripResellerFromMeta(`${h1} | Destiny 2 Hacks`)),
		description: clampDesc(stripResellerFromMeta(`${h1} ${L?.descFor ?? 'for Destiny 2 Hacks — ESP wallhack, Aimbot'}, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} ${L?.introTopic ?? 'for destiny2hack.net and Destiny 2 licenses.'}`),
		imageAlt: 'Destiny 2 Hacks',
		galleryTitle: 'Destiny 2 Hacks',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: L?.emailSupport ?? 'Email support',
		ctaSecondary:
			kind === 'privacy'
				? L?.readTerms ?? 'Read terms'
				: L?.readPrivacy ?? 'Read privacy',
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				h2[0],
				p.s1(L?.sec1p1 ?? 'Contact email, order references, and basic site security data.'),
				kind === 'privacy'
					? L?.privacy?.sec1p2 ?? 'Payment details are processed by secure checkout — not stored on destiny2hack.net.'
					: p.s2(),
			),
			section(
				h2[1],
				p.s1(L?.privacy?.sec2p1 ?? 'Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms'
					? L?.terms?.sec2p2 ?? 'Using cheats may violate Bungie terms — you assume all ban risk.'
					: p.s3(),
			),
			section(h2[2], p.legal(), `${L?.emailLabel ?? 'Email:'} support@destiny2hack.net`),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
