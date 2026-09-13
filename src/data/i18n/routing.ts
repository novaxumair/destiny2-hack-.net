import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { blogPosts as rawBlogPosts } from '../blog/posts.generated';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

function isBlogPostSlug(slug: string): boolean {
	return rawBlogPosts.some((p) => p.translations.en.slug === slug);
}

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'destiny-2-esp'
	| 'destiny-2-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'battleye'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'destiny-2-esp': '/destiny-2-esp/',
	'destiny-2-aimbot': '/destiny-2-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-destiny-2-cheats/',
	wallhack: '/destiny-2-wallhack/',
	radar: '/destiny-2-radar-hack/',
	'battleye': '/battleye-bypass/',
	'cheats-2026': '/destiny-2-cheats-2026/',
	hacks: '/destiny-2-cheats/',
	'cheat-download': '/destiny-2-cheat-download/',
	'mod-menu': '/destiny-2-mod-menu/',
	'soft-aim': '/destiny-2-soft-aim/',
	'best-cheats': '/best-destiny-2-cheats/',
	'aimbot-hack': '/destiny-2-aimbot-hack/',
	'esp-hack': '/destiny-2-esp-hack/',
	'unlock-all': '/destiny-2-unlock-tool/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'destiny-2-esp': {
		en: 'destiny-2-esp',
		es: 'esp',
		fr: 'esp',
		de: 'esp',
		pt: 'esp',
		it: 'esp',
		nl: 'esp',
		pl: 'esp',
		ru: 'esp',
		tr: 'esp',
		ar: 'esp',
		ja: 'esp',
		ko: 'esp',
		zh: 'esp',
		hi: 'esp',
		id: 'esp',
		th: 'esp',
		vi: 'esp',
		uk: 'esp',
		cs: 'esp',
		ro: 'esp',
		sv: 'esp',
	},
	'destiny-2-aimbot': {
		en: 'destiny-2-aimbot',
		es: 'aimbot',
		fr: 'aimbot',
		de: 'aimbot',
		pt: 'aimbot',
		it: 'aimbot',
		nl: 'aimbot',
		pl: 'aimbot',
		ru: 'aimbot',
		tr: 'aimbot',
		ar: 'aimbot',
		ja: 'aimbot',
		ko: 'aimbot',
		zh: 'aimbot',
		hi: 'aimbot',
		id: 'aimbot',
		th: 'aimbot',
		vi: 'aimbot',
		uk: 'aimbot',
		cs: 'aimbot',
		ro: 'aimbot',
		sv: 'aimbot',
	},
	features: {
		en: 'features',
		es: 'features',
		fr: 'features',
		de: 'features',
		pt: 'features',
		it: 'features',
		nl: 'features',
		pl: 'features',
		ru: 'features',
		tr: 'features',
		ar: 'features',
		ja: 'features',
		ko: 'features',
		zh: 'features',
		hi: 'features',
		id: 'features',
		th: 'features',
		vi: 'features',
		uk: 'features',
		cs: 'features',
		ro: 'features',
		sv: 'features',
	},
	pricing: {
		en: 'pricing',
		es: 'pricing',
		fr: 'pricing',
		de: 'pricing',
		pt: 'pricing',
		it: 'pricing',
		nl: 'pricing',
		pl: 'pricing',
		ru: 'pricing',
		tr: 'pricing',
		ar: 'pricing',
		ja: 'pricing',
		ko: 'pricing',
		zh: 'pricing',
		hi: 'pricing',
		id: 'pricing',
		th: 'pricing',
		vi: 'pricing',
		uk: 'pricing',
		cs: 'pricing',
		ro: 'pricing',
		sv: 'pricing',
	},
	setup: {
		en: 'setup',
		es: 'setup',
		fr: 'setup',
		de: 'setup',
		pt: 'setup',
		it: 'setup',
		nl: 'setup',
		pl: 'setup',
		ru: 'setup',
		tr: 'setup',
		ar: 'setup',
		ja: 'setup',
		ko: 'setup',
		zh: 'setup',
		hi: 'setup',
		id: 'setup',
		th: 'setup',
		vi: 'setup',
		uk: 'setup',
		cs: 'setup',
		ro: 'setup',
		sv: 'setup',
	},
	updates: {
		en: 'updates',
		es: 'updates',
		fr: 'updates',
		de: 'updates',
		pt: 'updates',
		it: 'updates',
		nl: 'updates',
		pl: 'updates',
		ru: 'updates',
		tr: 'updates',
		ar: 'updates',
		ja: 'updates',
		ko: 'updates',
		zh: 'updates',
		hi: 'updates',
		id: 'updates',
		th: 'updates',
		vi: 'updates',
		uk: 'updates',
		cs: 'updates',
		ro: 'updates',
		sv: 'updates',
	},
	faq: {
		en: 'faq',
		es: 'faq',
		fr: 'faq',
		de: 'faq',
		pt: 'faq',
		it: 'faq',
		nl: 'faq',
		pl: 'faq',
		ru: 'faq',
		tr: 'faq',
		ar: 'faq',
		ja: 'faq',
		ko: 'faq',
		zh: 'faq',
		hi: 'faq',
		id: 'faq',
		th: 'faq',
		vi: 'faq',
		uk: 'faq',
		cs: 'faq',
		ro: 'faq',
		sv: 'faq',
	},
	support: {
		en: 'support',
		es: 'support',
		fr: 'support',
		de: 'support',
		pt: 'support',
		it: 'support',
		nl: 'support',
		pl: 'support',
		ru: 'support',
		tr: 'support',
		ar: 'support',
		ja: 'support',
		ko: 'support',
		zh: 'support',
		hi: 'support',
		id: 'support',
		th: 'support',
		vi: 'support',
		uk: 'support',
		cs: 'support',
		ro: 'support',
		sv: 'support',
	},
	undetected: {
		en: 'undetected-destiny-2-cheats',
		es: 'undetected',
		fr: 'undetected',
		de: 'undetected',
		pt: 'undetected',
		it: 'undetected',
		nl: 'undetected',
		pl: 'undetected',
		ru: 'undetected',
		tr: 'undetected',
		ar: 'undetected',
		ja: 'undetected',
		ko: 'undetected',
		zh: 'undetected',
		hi: 'undetected',
		id: 'undetected',
		th: 'undetected',
		vi: 'undetected',
		uk: 'undetected',
		cs: 'undetected',
		ro: 'undetected',
		sv: 'undetected',
	},
	wallhack: {
		en: 'destiny-2-wallhack',
		es: 'wallhack',
		fr: 'wallhack',
		de: 'wallhack',
		pt: 'wallhack',
		it: 'wallhack',
		nl: 'wallhack',
		pl: 'wallhack',
		ru: 'wallhack',
		tr: 'wallhack',
		ar: 'wallhack',
		ja: 'wallhack',
		ko: 'wallhack',
		zh: 'wallhack',
		hi: 'wallhack',
		id: 'wallhack',
		th: 'wallhack',
		vi: 'wallhack',
		uk: 'wallhack',
		cs: 'wallhack',
		ro: 'wallhack',
		sv: 'wallhack',
	},
	radar: {
		en: 'destiny-2-radar-hack',
		es: 'radar',
		fr: 'radar',
		de: 'radar',
		pt: 'radar',
		it: 'radar',
		nl: 'radar',
		pl: 'radar',
		ru: 'radar',
		tr: 'radar',
		ar: 'radar',
		ja: 'radar',
		ko: 'radar',
		zh: 'radar',
		hi: 'radar',
		id: 'radar',
		th: 'radar',
		vi: 'radar',
		uk: 'radar',
		cs: 'radar',
		ro: 'radar',
		sv: 'radar',
	},
	'battleye': {
		en: 'battleye-bypass',
		es: 'battleye',
		fr: 'battleye',
		de: 'battleye',
		pt: 'battleye',
		it: 'battleye',
		nl: 'battleye',
		pl: 'battleye',
		ru: 'battleye',
		tr: 'battleye',
		ar: 'battleye',
		ja: 'battleye',
		ko: 'battleye',
		zh: 'battleye',
		hi: 'battleye',
		id: 'battleye',
		th: 'battleye',
		vi: 'battleye',
		uk: 'battleye',
		cs: 'battleye',
		ro: 'battleye',
		sv: 'battleye',
	},
	'cheats-2026': {
		en: 'destiny-2-cheats-2026',
		es: 'cheats-2026',
		fr: 'cheats-2026',
		de: 'cheats-2026',
		pt: 'cheats-2026',
		it: 'cheats-2026',
		nl: 'cheats-2026',
		pl: 'cheats-2026',
		ru: 'cheats-2026',
		tr: 'cheats-2026',
		ar: 'cheats-2026',
		ja: 'cheats-2026',
		ko: 'cheats-2026',
		zh: 'cheats-2026',
		hi: 'cheats-2026',
		id: 'cheats-2026',
		th: 'cheats-2026',
		vi: 'cheats-2026',
		uk: 'cheats-2026',
		cs: 'cheats-2026',
		ro: 'cheats-2026',
		sv: 'cheats-2026',
	},
	hacks: {
		en: 'destiny-2-cheats',
		es: 'cheats',
		fr: 'cheats',
		de: 'cheats',
		pt: 'cheats',
		it: 'cheats',
		nl: 'cheats',
		pl: 'cheats',
		ru: 'cheats',
		tr: 'cheats',
		ar: 'cheats',
		ja: 'cheats',
		ko: 'cheats',
		zh: 'cheats',
		hi: 'cheats',
		id: 'cheats',
		th: 'cheats',
		vi: 'cheats',
		uk: 'cheats',
		cs: 'cheats',
		ro: 'cheats',
		sv: 'cheats',
	},
	'cheat-download': {
		en: 'destiny-2-cheat-download',
		es: 'download',
		fr: 'download',
		de: 'download',
		pt: 'download',
		it: 'download',
		nl: 'download',
		pl: 'download',
		ru: 'download',
		tr: 'download',
		ar: 'download',
		ja: 'download',
		ko: 'download',
		zh: 'download',
		hi: 'download',
		id: 'download',
		th: 'download',
		vi: 'download',
		uk: 'download',
		cs: 'download',
		ro: 'download',
		sv: 'download',
	},
	'mod-menu': {
		en: 'destiny-2-mod-menu',
		es: 'mod-menu',
		fr: 'mod-menu',
		de: 'mod-menu',
		pt: 'mod-menu',
		it: 'mod-menu',
		nl: 'mod-menu',
		pl: 'mod-menu',
		ru: 'mod-menu',
		tr: 'mod-menu',
		ar: 'mod-menu',
		ja: 'mod-menu',
		ko: 'mod-menu',
		zh: 'mod-menu',
		hi: 'mod-menu',
		id: 'mod-menu',
		th: 'mod-menu',
		vi: 'mod-menu',
		uk: 'mod-menu',
		cs: 'mod-menu',
		ro: 'mod-menu',
		sv: 'mod-menu',
	},
	'soft-aim': {
		en: 'destiny-2-soft-aim',
		es: 'soft-aim',
		fr: 'soft-aim',
		de: 'soft-aim',
		pt: 'soft-aim',
		it: 'soft-aim',
		nl: 'soft-aim',
		pl: 'soft-aim',
		ru: 'soft-aim',
		tr: 'soft-aim',
		ar: 'soft-aim',
		ja: 'soft-aim',
		ko: 'soft-aim',
		zh: 'soft-aim',
		hi: 'soft-aim',
		id: 'soft-aim',
		th: 'soft-aim',
		vi: 'soft-aim',
		uk: 'soft-aim',
		cs: 'soft-aim',
		ro: 'soft-aim',
		sv: 'soft-aim',
	},
	'best-cheats': {
		en: 'best-destiny-2-cheats',
		es: 'best',
		fr: 'best',
		de: 'best',
		pt: 'best',
		it: 'best',
		nl: 'best',
		pl: 'best',
		ru: 'best',
		tr: 'best',
		ar: 'best',
		ja: 'best',
		ko: 'best',
		zh: 'best',
		hi: 'best',
		id: 'best',
		th: 'best',
		vi: 'best',
		uk: 'best',
		cs: 'best',
		ro: 'best',
		sv: 'best',
	},
	'aimbot-hack': {
		en: 'destiny-2-aimbot-hack',
		es: 'aimbot-hack',
		fr: 'aimbot-hack',
		de: 'aimbot-hack',
		pt: 'aimbot-hack',
		it: 'aimbot-hack',
		nl: 'aimbot-hack',
		pl: 'aimbot-hack',
		ru: 'aimbot-hack',
		tr: 'aimbot-hack',
		ar: 'aimbot-hack',
		ja: 'aimbot-hack',
		ko: 'aimbot-hack',
		zh: 'aimbot-hack',
		hi: 'aimbot-hack',
		id: 'aimbot-hack',
		th: 'aimbot-hack',
		vi: 'aimbot-hack',
		uk: 'aimbot-hack',
		cs: 'aimbot-hack',
		ro: 'aimbot-hack',
		sv: 'aimbot-hack',
	},
	'esp-hack': {
		en: 'destiny-2-esp-hack',
		es: 'esp-hack',
		fr: 'esp-hack',
		de: 'esp-hack',
		pt: 'esp-hack',
		it: 'esp-hack',
		nl: 'esp-hack',
		pl: 'esp-hack',
		ru: 'esp-hack',
		tr: 'esp-hack',
		ar: 'esp-hack',
		ja: 'esp-hack',
		ko: 'esp-hack',
		zh: 'esp-hack',
		hi: 'esp-hack',
		id: 'esp-hack',
		th: 'esp-hack',
		vi: 'esp-hack',
		uk: 'esp-hack',
		cs: 'esp-hack',
		ro: 'esp-hack',
		sv: 'esp-hack',
	},
	'unlock-all': {
		en: 'destiny-2-unlock-tool',
		es: 'unlock',
		fr: 'unlock',
		de: 'unlock',
		pt: 'unlock',
		it: 'unlock',
		nl: 'unlock',
		pl: 'unlock',
		ru: 'unlock',
		tr: 'unlock',
		ar: 'unlock',
		ja: 'unlock',
		ko: 'unlock',
		zh: 'unlock',
		hi: 'unlock',
		id: 'unlock',
		th: 'unlock',
		vi: 'unlock',
		uk: 'unlock',
		cs: 'unlock',
		ro: 'unlock',
		sv: 'unlock',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'privacy',
		fr: 'privacy',
		de: 'privacy',
		pt: 'privacy',
		it: 'privacy',
		nl: 'privacy',
		pl: 'privacy',
		ru: 'privacy',
		tr: 'privacy',
		ar: 'privacy',
		ja: 'privacy',
		ko: 'privacy',
		zh: 'privacy',
		hi: 'privacy',
		id: 'privacy',
		th: 'privacy',
		vi: 'privacy',
		uk: 'privacy',
		cs: 'privacy',
		ro: 'privacy',
		sv: 'privacy',
	},
	refund: {
		en: 'refund-policy',
		es: 'refund',
		fr: 'refund',
		de: 'refund',
		pt: 'refund',
		it: 'refund',
		nl: 'refund',
		pl: 'refund',
		ru: 'refund',
		tr: 'refund',
		ar: 'refund',
		ja: 'refund',
		ko: 'refund',
		zh: 'refund',
		hi: 'refund',
		id: 'refund',
		th: 'refund',
		vi: 'refund',
		uk: 'refund',
		cs: 'refund',
		ro: 'refund',
		sv: 'refund',
	},
	terms: {
		en: 'terms',
		es: 'terms',
		fr: 'terms',
		de: 'terms',
		pt: 'terms',
		it: 'terms',
		nl: 'terms',
		pl: 'terms',
		ru: 'terms',
		tr: 'terms',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'terms',
		cs: 'terms',
		ro: 'terms',
		sv: 'terms',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	if (withSlash === '/destiny-2-cheats/' || withSlash === '/destiny-2-cheats/') {
		return getLocalizedPath('hacks', locale);
	}
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
	isReviewsIndex?: boolean;
	reviewSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (rest.length === 1 && isBlogPostSlug(rest[0])) {
		return { locale, blogSlug: rest[0] };
	}

	if (rest[0] === 'reviews') {
		if (rest.length === 1) {
			return { locale: defaultLocale, isReviewsIndex: true };
		}
		return { locale: defaultLocale, reviewSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.isReviewsIndex) {
		return '/reviews/';
	}
	if (context.reviewSlug) {
		return `/reviews/${context.reviewSlug}/`;
	}
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('destiny-2-aimbot', locale), pageId: 'destiny-2-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('destiny-2-esp', locale), pageId: 'destiny-2-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
