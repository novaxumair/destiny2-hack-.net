/** Shared constants for i18n content generation. */

export const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr',
	'ar', 'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

export const PAGE_IDS = [
	'home', 'destiny-2-esp', 'destiny-2-aimbot', 'features', 'pricing', 'setup',
	'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'battleye',
	'cheats-2026', 'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all', 'privacy', 'refund', 'terms',
];

/** Hero image per page — unique screenshot per page where possible. */
export const HERO_IMAGES = {
	home: '/images/destiny2-cheats-hero-1199w.webp',
	'destiny-2-esp': '/images/destiny2-screenshot-11.webp',
	'destiny-2-aimbot': '/images/destiny2-screenshot-16.webp',
	features: '/images/destiny2-screenshot-13.webp',
	pricing: '/images/destiny2-screenshot-12.webp',
	setup: '/images/destiny2-screenshot-17.webp',
	updates: '/images/destiny2-screenshot-15.webp',
	faq: '/images/destiny2-screenshot-14.webp',
	support: '/images/destiny2-screenshot-12.webp',
	undetected: '/images/destiny2-screenshot-13.webp',
	wallhack: '/images/destiny2-screenshot-11.webp',
	radar: '/images/destiny2-screenshot-17.webp',
	battleye: '/images/destiny2-screenshot-15.webp',
	'cheats-2026': '/images/destiny2-screenshot-16.webp',
	hacks: '/images/destiny2-cheats-hero-1199w.webp',
	'cheat-download': '/images/destiny2-screenshot-12.webp',
	'mod-menu': '/images/destiny2-screenshot-13.webp',
	'soft-aim': '/images/destiny2-screenshot-16.webp',
	'best-cheats': '/images/destiny2-screenshot-11.webp',
	'aimbot-hack': '/images/destiny2-screenshot-16.webp',
	'esp-hack': '/images/destiny2-screenshot-11.webp',
	'unlock-all': '/images/destiny2-screenshot-14.webp',
	privacy: '/images/destiny2-screenshot-12.webp',
	refund: '/images/destiny2-screenshot-12.webp',
	terms: '/images/destiny2-screenshot-12.webp',
};

export const TS_HEADER = `import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
\ttitle: string;
\tdescription: string;
\th1: string;
\tintro: string;
\timageAlt: string;
\tgalleryTitle: string;
\theroImage: string;
\tsections: PageSection[];
\tctaPrimary: string;
\tctaSecondary?: string;
\tctaSecondaryHref?: string;
};
export type LocaleUi = {
\tnav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
\thero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
\ttrust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
\tproduct: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
\treviews: { title: string; subtitle: string; outOf: string; countLabel: string };
\tcommon: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
\tfooter: { explore: string; help: string; tagline: string };
\timages: {
\t\thero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
\t\theaderArt: string; hacksPackage: string; matchFight: string; battleRoyale: string; matchMap: string;
\t};
};
export type PageId = 'home' | 'destiny-2-esp' | 'destiny-2-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';
`;

/** Clamp meta strings to SEO limits without ugly ellipsis. */
export function clampTitle(s) {
	if (s.length <= 60) return s;
	const trimmed = s.slice(0, 60);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 45 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 60);
}

export function clampDesc(s) {
	let text = s.trim();
	const MIN = 140;
	const MAX = 160;
	if (text.length < MIN) {
		const pad = text.toLowerCase().includes('destiny2hack.net')
			? ' Windows PC license with BattlEye maintenance after patches.'
			: ' Compare plans and guides at destiny2hack.net.';
		text = `${text.replace(/[.…]+$/, '')}.${pad}`;
	}
	if (text.length <= MAX) return text;
	const trimmed = text.slice(0, MAX);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, MAX);
}

/** Remove order from meta title/description strings only. */
export function stripResellerFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*secure checkout\.?/gi, '.')
		.replace(/\s*[—–-]\s*secure checkout\.?/gi, '.')
		.replace(/\s*[—–-]\s*secure checkout\.?/gi, '.')
		.replace(/\s*with secure checkout\.?/gi, '.')
		.replace(/\s*via secure checkout\.?/gi, '.')
		.replace(/\s*Checkout secure checkout\.?/gi, '')
		.replace(/\s*secure checkout,?\s*/gi, ' ')
		.replace(/\s*order delivery\.?/gi, ' instant digital delivery.')
		.replace(/\s*and order delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant order Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on secure checkout/g, 'Buy Destiny 2 Cheats')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

/** Build a page section. Pass 2+ paragraph strings; optional trailing string[] becomes list. */
export function section(h2, ...args) {
	let list;
	const paragraphs = [...args];
	if (paragraphs.length && Array.isArray(paragraphs[paragraphs.length - 1])) {
		list = paragraphs.pop();
	}
	if (paragraphs.length < 2) {
		throw new Error(`section "${h2}" needs at least 2 paragraphs`);
	}
	const sec = { h2, paragraphs };
	if (list?.length) sec.list = list;
	return sec;
}

/** Authoritative external citation helpers (open in new tab). */
export const EXT = {
	activision:
		'<a href="https://store.steampowered.com/app/1085660/Destiny_2/" target="_blank" rel="noopener noreferrer">Destiny 2</a>',
	rust:
		'<a href="https://store.steampowered.com/app/1085660/Destiny_2/" target="_blank" rel="noopener noreferrer">Destiny 2</a>',
	finals:
		'<a href="https://store.steampowered.com/app/1085660/Destiny_2/" target="_blank" rel="noopener noreferrer">Destiny 2</a>',
	naraka:
		'<a href="https://store.steampowered.com/app/1085660/Destiny_2/" target="_blank" rel="noopener noreferrer">Destiny 2</a>',
	valorant:
		'<a href="https://store.steampowered.com/app/1085660/Destiny_2/" target="_blank" rel="noopener noreferrer">Destiny 2</a>',
	status:
		'<a href="https://store.steampowered.com/app/1085660/Destiny_2/" target="_blank" rel="noopener noreferrer">Destiny 2 on Steam</a>',
	eac:
		'<a href="https://www.battleye.com/" target="_blank" rel="noopener noreferrer">BattlEye</a>',
	battleye:
		'<a href="https://www.battleye.com/" target="_blank" rel="noopener noreferrer">BattlEye</a>',
	bungie:
		'<a href="https://www.bungie.net/" target="_blank" rel="noopener noreferrer">Bungie</a>',
};
