export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Destiny 2 Hacks blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Destiny 2 Hacks Blog | Guides & Patch Tips',
		blogDescription:
			'Destiny 2 guides — battle royale tips, ESP, aimbot notes, movement routes, and BattlEye update coverage. English blog at destiny2hack.net/blog/.',
		blogH1: 'Destiny 2 Hacks Intel',
		blogIntro:
			'Short Destiny 2 guides for Crucible matches and Competitive matches. Pair these tips with Destiny 2 Hacks product pages when you need ESP, aimbot, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Destiny 2 Hacks home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Destiny 2 Hacks 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Destiny 2 Hacks con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Destiny 2 en PC Windows.',
		blogH1: 'Blog Destiny 2 Hacks — Guías globales',
		blogIntro:
			'Guías SEO de trucos Destiny 2 indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento BattlEye en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Destiny 2 relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Destiny 2 Hacks',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Destiny 2 Hacks 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Destiny 2 Hacks : triches indétectables, ESP wallhack, radar et Aimbot pour Destiny 2 sur PC Windows.',
		blogH1: 'Blog Destiny 2 Hacks — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Destiny 2 indétectables, ESP wallhack, radar hack, Aimbot et BattlEye en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Destiny 2 associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Destiny 2 Hacks',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Destiny 2 Hacks Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Destiny 2 Hacks Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Destiny 2 auf Windows PC.',
		blogH1: 'Destiny 2 Hacks Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Destiny 2 Hacks, ESP Wallhack, Radar Hack, Aimbot und BattlEye in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Destiny 2 Guides',
		allPosts: 'Alle Beiträge',
		home: 'Destiny 2 Hacks Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Destiny 2 Hacks 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Destiny 2 Hacks com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Destiny 2 no PC.',
		blogH1: 'Blog Destiny 2 Hacks — Guias globais',
		blogIntro:
			'Guias SEO de cheats Destiny 2 indetectáveis, ESP wallhack, radar hack, Aimbot e BattlEye em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Destiny 2 relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Destiny 2 Hacks',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Destiny 2 Hacks 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Destiny 2 Hacks con guide cheat indetectable, ESP wallhack, radar e Aimbot per Destiny 2 su PC Windows.',
		blogH1: 'Blog Destiny 2 Hacks — Guide globali',
		blogIntro:
			'Guide SEO cheat Destiny 2 indetectable, ESP wallhack, radar hack, Aimbot e BattlEye in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Destiny 2 correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Destiny 2 Hacks',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Destiny 2 Hacks Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Destiny 2 Hacks blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Destiny 2 op Windows PC.',
		blogH1: 'Destiny 2 Hacks Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected destiny 2 hacks, ESP wallhack, radar hack, Aimbot en BattlEye in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Destiny 2 gidsen',
		allPosts: 'Alle posts',
		home: 'Destiny 2 Hacks home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Destiny 2 Hacks 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Destiny 2 Hacks z poradnikami undetected ESP, wallhack, radar i Aimbot dla Destiny 2 na PC.',
		blogH1: 'Blog Destiny 2 Hacks — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Destiny 2, ESP wallhack, radar hack, Aimbot i BattlEye w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Destiny 2',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Destiny 2 Hacks',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Destiny 2 Hacks 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Destiny 2 Hacks: undetected ESP, wallhack, radar и Aimbot для Destiny 2 на Windows PC.',
		blogH1: 'Блог Destiny 2 Hacks — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Destiny 2, ESP wallhack, radar hack, Aimbot и BattlEye на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Destiny 2',
		allPosts: 'Все статьи',
		home: 'Главная Destiny 2 Hacks',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Destiny 2 Hacks Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Destiny 2 Hacks blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Destiny 2 Windows PC.',
		blogH1: 'Destiny 2 Hacks Blog — Küresel rehberler',
		blogIntro:
			'Undetected Destiny 2 hileleri, ESP wallhack, radar hack, Aimbot ve BattlEye SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Destiny 2 rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Destiny 2 Hacks ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Destiny 2 Hacks 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Destiny 2 Hacks: غش undetected وESP wallhack ورadar وAimbot لـ Destiny 2 على Windows PC.',
		blogH1: 'مدونة Destiny 2 Hacks — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Destiny 2 undetected وESP wallhack ورadar hack وAimbot وBattlEye بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Destiny 2 ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Destiny 2 Hacks',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Destiny 2 Hacks ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Destiny 2 Hacksブログ：undetected ESP、wallhack、radar、Aimbotガイド。Destiny 2 Windows PC向け。',
		blogH1: 'Destiny 2 Hacks ブログ — グローバルガイド',
		blogIntro:
			'undetected Destiny 2チート、ESP wallhack、radar hack、Aimbot、BattlEyeのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Destiny 2ガイド',
		allPosts: 'すべての記事',
		home: 'Destiny 2 Hacks ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Destiny 2 Hacks 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Destiny 2 Hacks 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Destiny 2 Windows PC.',
		blogH1: 'Destiny 2 Hacks 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Destiny 2 치트, ESP wallhack, radar hack, Aimbot, BattlEye SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Destiny 2 가이드',
		allPosts: '모든 게시물',
		home: 'Destiny 2 Hacks 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Destiny 2 Hacks 博客 2026 | 22种语言指南',
		blogDescription:
			'Destiny 2 Hacks博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Destiny 2 Windows PC。',
		blogH1: 'Destiny 2 Hacks 博客 — 全球指南',
		blogIntro:
			'undetected Destiny 2作弊、ESP wallhack、radar hack、Aimbot和BattlEye的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Destiny 2指南',
		allPosts: '所有文章',
		home: 'Destiny 2 Hacks 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Destiny 2 Hacks ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Destiny 2 Hacks ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Destiny 2 Windows PC के लिए।',
		blogH1: 'Destiny 2 Hacks ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected destiny 2 hacks, ESP wallhack, radar hack, Aimbot और BattlEye SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Destiny 2 गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Destiny 2 Hacks होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Destiny 2 Hacks 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Destiny 2 Hacks: panduan undetected ESP, wallhack, radar dan Aimbot untuk Destiny 2 di PC Windows.',
		blogH1: 'Blog Destiny 2 Hacks — Panduan global',
		blogIntro:
			'Panduan SEO cheat Destiny 2 undetected, ESP wallhack, radar hack, Aimbot dan BattlEye dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Pandua Destiny 2 terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Destiny 2 Hacks',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Destiny 2 Hacks 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Destiny 2 Hacks: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Destiny 2 บน PC',
		blogH1: 'บล็อก Destiny 2 Hacks — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Destiny 2 undetected, ESP wallhack, radar hack, Aimbot และ BattlEye 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Destiny 2 ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Destiny 2 Hacks',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Destiny 2 Hacks 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Destiny 2 Hacks: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Destiny 2 trên PC.',
		blogH1: 'Blog Destiny 2 Hacks — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Destiny 2 undetected, ESP wallhack, radar hack, Aimbot và BattlEye bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Destiny 2 liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Destiny 2 Hacks',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Destiny 2 Hacks 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Destiny 2 Hacks: undetected ESP, wallhack, radar та Aimbot для Destiny 2 на Windows PC.',
		blogH1: 'Блог Destiny 2 Hacks — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Destiny 2, ESP wallhack, radar hack, Aimbot та BattlEye 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Destiny 2",
		allPosts: 'Усі статті',
		home: 'Головна Destiny 2 Hacks',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Destiny 2 Hacks 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Destiny 2 Hacks: undetected ESP, wallhack, radar a Aimbot pro Destiny 2 na Windows PC.',
		blogH1: 'Blog Destiny 2 Hacks — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected destiny 2 cheaty, ESP wallhack, radar hack, Aimbot a BattlEye ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Destiny 2 průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Destiny 2 Hacks',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Destiny 2 Hacks 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Destiny 2 Hacks: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Destiny 2 pe PC.',
		blogH1: 'Blog Destiny 2 Hacks — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Destiny 2 undetected, ESP wallhack, radar hack, Aimbot și BattlEye în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Destiny 2 related',
		allPosts: 'Toate articolele',
		home: 'Acasă Destiny 2 Hacks',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Destiny 2 Hacks Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Destiny 2 Hacks blogg med undetected ESP, wallhack, radar och Aimbot guider för Destiny 2 på PC.',
		blogH1: 'Destiny 2 Hacks Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected destiny 2 hacks, ESP wallhack, radar hack, Aimbot och BattlEye på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Destiny 2 guider',
		allPosts: 'Alla inlägg',
		home: 'Destiny 2 Hacks hem',
		language: 'Språk',
	},
};
