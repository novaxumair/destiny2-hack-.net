import type { PageId } from './i18n/routing';

/** Primary money keyword — drives {primaryKeyword} tokens sitewide. */
export const primarySeoKeyword = 'destiny 2 hacks';

/**
 * Default meta keywords (fallback when no page-specific set).
 * Ordered by commercial intent + search volume fit for destiny2hack.net.
 */
export const globalSeoKeywords = [
	'destiny 2 hacks',
	'd2 hacks',
	'undetected destiny 2 hacks',
	'destiny 2 hacks 2026',
	'best destiny 2 hacks',
	'destiny 2 esp',
	'destiny 2 wallhack',
	'destiny 2 aimbot',
	'destiny 2 no recoil',
	'destiny 2 triggerbot',
	'destiny 2 radar hack',
	'destiny 2 hacks pc',
	'destiny 2 mod menu',
	'destiny 2 crucible hacks',
	'destiny 2 trials hacks',
	'destiny 2 pvp hacks',
	'destiny 2 unlock tool',
	'destiny 2 stream proof',
] as const;

/** Page-level meta keywords — aligned to canonical URLs and on-page intent. */
export const pageSeoKeywords: Partial<Record<PageId, readonly string[]>> = {
	home: [
		'destiny 2 hacks',
		'destiny 2 hacks 2026',
		'undetected destiny 2 hacks',
		'destiny 2 esp',
		'destiny 2 aimbot',
		'destiny 2 wallhack',
	],
	hacks: [
		'destiny 2 hacks',
		'd2 hacks',
		'destiny 2 hacks pc',
		'undetected destiny 2 hacks',
	],
	'destiny-2-esp': [
		'destiny 2 esp',
		'destiny 2 esp hack',
		'destiny 2 wallhack',
		'destiny 2 player esp',
		'destiny 2 enemy esp',
		'destiny 2 pvp esp',
	],
	wallhack: [
		'destiny 2 wallhack',
		'destiny 2 wall hacks',
		'destiny 2 wallhack hack',
		'destiny 2 player wallhack',
	],
	'destiny-2-aimbot': [
		'destiny 2 aimbot',
		'destiny 2 aimbot hack',
		'destiny 2 smooth aimbot',
		'destiny 2 silent aim',
		'destiny 2 headshot aimbot',
	],
	'aimbot-hack': ['destiny 2 aimbot hack', 'destiny 2 aimbot', 'destiny 2 auto aim', 'destiny 2 magic bullet'],
	'soft-aim': ['destiny 2 aimbot', 'destiny 2 aimbot', 'destiny 2 legit aimbot', 'destiny 2 smooth aimbot'],
	radar: ['destiny 2 radar hack', 'destiny 2 radar overlay', 'destiny 2 map hack', 'destiny 2 live radar'],
	'esp-hack': ['destiny 2 esp hack', 'destiny 2 esp', 'destiny 2 wallhack', 'destiny 2 esp overlay'],
	features: [
		'destiny 2 hack features',
		'destiny 2 esp',
		'destiny 2 aimbot',
		'destiny 2 no recoil',
		'destiny 2 triggerbot',
		'destiny 2 movement hack',
	],
	pricing: [
		'buy destiny 2 hacks',
		'destiny 2 hacks price',
		'destiny 2 hacks monthly',
		'destiny 2 hacks lifetime',
	],
	setup: [
		'destiny 2 hacks setup',
		'destiny 2 hack download',
		'install destiny 2 hacks',
		'destiny 2 hack windows 11',
	],
	'cheat-download': [
		'destiny 2 hack download',
		'destiny 2 hacks download',
		'destiny 2 hack software',
	],
	updates: [
		'undetected destiny 2 hacks',
		'destiny 2 hacks status',
		'destiny 2 hacks latest update',
		'BattlEye update',
	],
	undetected: [
		'undetected destiny 2 hacks',
		'destiny 2 hacks undetected',
		'destiny 2 stream proof',
	],
	battleye: [
		'destiny 2 battleye bypass',
		'battleye bypass destiny 2',
		'destiny 2 anti cheat bypass',
	],
	'cheats-2026': [
		'destiny 2 hacks 2026',
		'destiny 2 aimbot 2026',
		'destiny 2 esp 2026',
	],
	'best-cheats': [
		'best destiny 2 hacks',
		'destiny 2 hack comparison 2026',
	],
	'mod-menu': ['destiny 2 mod menu', 'destiny 2 hack menu', 'destiny 2 hack software'],
	'unlock-all': [
		'destiny 2 unlock tool',
		'destiny 2 unlock all',
		'destiny 2 exotic unlock tool',
	],
	faq: ['destiny 2 hacks faq', 'destiny 2 hack guide', 'destiny 2 hacks pc'],
	support: ['destiny 2 hacks support', 'destiny 2 hack software help'],
};

/** Meta keywords for /reviews/ and individual review pages (English-only routes). */
export const reviewsSeoKeywords = [
	'destiny 2 hacks reviews',
	'destiny 2 hack review',
	'destiny 2 hack review 2026',
	'destiny 2 hacks',
	'destiny 2 esp',
	'destiny 2 aimbot',
	'destiny 2 no recoil',
	'undetected destiny 2 hacks',
] as const;

export function getPageSeoKeywords(pageId?: PageId): string[] {
	if (!pageId) return [...globalSeoKeywords];
	const pageKeywords = pageSeoKeywords[pageId];
	return pageKeywords?.length ? [...pageKeywords] : [...globalSeoKeywords];
}
