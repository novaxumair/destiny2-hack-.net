import { brand } from './brand';
import type { PageId } from './i18n/routing';

export type ExternalResource = {
	id: string;
	label: string;
	href: string;
	note?: string;
};

export type GuideCta = {
	label: string;
	href: string;
};

/** Canonical outbound URLs — single source for CTAs, pills, and resource blocks. */
export const externalUrls = {
	steam: brand.gameUrl,
	steamNews: 'https://www.bungie.net/en/Explore/Detail/News/',
	officialSite: 'https://www.narakathegame.com/',
	wiki: 'https://destiny.fandom.com/wiki/Destiny_2',
	steamCommunity: 'https://steamcommunity.com/app/1203220',
} as const;

/** Authoritative third-party guides — cite official game sources for readers and search engines. */
export const externalResources: ExternalResource[] = [
	{
		id: 'steam',
		label: 'Destiny 2 on PC',
		href: externalUrls.steam,
		note: 'Official store page, system requirements, and player reviews.',
	},
	{
		id: 'patch',
		label: 'Destiny 2 patch notes & news',
		href: externalUrls.steamNews,
		note: 'Read official update posts before you change your loadout.',
	},
	{
		id: 'official',
		label: 'Official Destiny 2 website',
		href: externalUrls.officialSite,
		note: 'Game overview from Bungie.',
	},
	{
		id: 'wiki',
		label: 'Destiny 2 Wiki (Fandom)',
		href: externalUrls.wiki,
		note: 'Player stats, maps, and survival mechanics.',
	},
	{
		id: 'community',
		label: 'Destiny 2 Community hub',
		href: externalUrls.steamCommunity,
		note: 'Announcements and community discussions.',
	},
];

/** Compact above-the-fold guide links for blogs and page banners. */
export const featuredGuidePills: GuideCta[] = [
	{ label: 'Destiny 2 on PC', href: externalUrls.steam },
	{ label: 'Official patch notes', href: externalUrls.steamNews },
	{ label: 'Destiny 2 Wiki', href: externalUrls.wiki },
];

/**
 * Secondary banner buttons that should point to official guides — not internal sales pages.
 * Keeps primary Buy CTAs while giving Google clear outbound citations.
 */
export const externalSecondaryByPageId: Partial<Record<PageId, GuideCta>> = {
	features: { label: 'Official patch notes', href: externalUrls.steamNews },
	updates: { label: 'Destiny 2 patch notes', href: externalUrls.steamNews },
	hacks: { label: 'Destiny 2 Wiki', href: externalUrls.wiki },
	'destiny-2-esp': { label: 'Destiny 2 Wiki', href: externalUrls.wiki },
	'destiny-2-aimbot': { label: 'Destiny 2 Wiki', href: externalUrls.wiki },
	radar: { label: 'Destiny 2 Wiki', href: externalUrls.wiki },
	setup: { label: 'Official game site', href: externalUrls.officialSite },
	support: { label: 'Destiny 2 community', href: externalUrls.steamCommunity },
	faq: { label: 'Destiny 2 Wiki', href: externalUrls.wiki },
	undetected: { label: 'Destiny 2 patch notes', href: externalUrls.steamNews },
	wallhack: { label: 'Destiny 2 Wiki', href: externalUrls.wiki },
	battleye: { label: 'Official patch notes', href: externalUrls.steamNews },
	'cheats-2026': { label: 'Destiny 2 on PC', href: externalUrls.steam },
	'cheat-download': { label: 'Official game site', href: externalUrls.officialSite },
	'mod-menu': { label: 'Destiny 2 Wiki', href: externalUrls.wiki },
	'soft-aim': { label: 'Destiny 2 Wiki', href: externalUrls.wiki },
	'best-cheats': { label: 'Destiny 2 community', href: externalUrls.steamCommunity },
	'aimbot-hack': { label: 'Destiny 2 Wiki', href: externalUrls.wiki },
	'esp-hack': { label: 'Destiny 2 Wiki', href: externalUrls.wiki },
	'unlock-all': { label: 'Official game site', href: externalUrls.officialSite },
	pricing: { label: 'Destiny 2 on PC', href: externalUrls.steam },
};

export function getExternalSecondaryCta(pageId: PageId): GuideCta | undefined {
	return externalSecondaryByPageId[pageId];
}

export function isExternalHref(href: string): boolean {
	return href.startsWith('http');
}
