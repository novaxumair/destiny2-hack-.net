/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Destiny 2 Hacks',
	/** Short product label if needed */
	shortName: 'Destiny 2 Hacks',
	/** Canonical origin — no trailing slash */
	url: 'https://destiny2hack.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@destiny2hack.net',
	checkoutUrl: 'https://zadeyo.com/go/UMAIR?to=%2Fproducts%2Fdestiny-2',

	/** Public profiles for Organization sameAs + Twitter cards (edit in Brand Studio). */
	social: {
		twitterSite: '@destiny2hack',
		sameAs: [
			'https://x.com/destiny2hack',
			'https://www.reddit.com/r/destiny2/',
			'https://store.steampowered.com/app/1085660/Destiny_2/',
		],
	} as const,

	/** Game this template instance targets */
	game: 'Destiny 2',
	/** Official game page — linked from the hero image */
	gameUrl: 'https://store.steampowered.com/app/1085660/Destiny_2/',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'BattlEye',

	logo: '/images/destiny2-tricorn-logo.webp',
	logoRaster: '/images/destiny2-tricorn-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Destiny 2 logo',
	defaultOgImage: '/images/destiny2-cheats-hero-1199w.webp',
	heroImage: '/images/destiny2-cheats-hero-1199w.webp',
	/** Looping homepage hero background — poster falls back to heroImage */
	heroVideoUrl: '/images/hero.webm',
	/** Product demo clip — lazy-loaded on homepage; fetched only after play */
	demoVideoUrl: '',
	demoVideoPoster: '/images/destiny2-about-showcase.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — fire aspect: neon cyan + neon pink on dark blue/purple.
	 */
	theme: {
		accent: '#8FDBEE',
		bg: '#121214',
		soft: '#E394E8',
		deep: '#0a0a0c',
		hover: '#E394E8',
		panel: '#1a1a1e',
		elevated: '#222226',
		line: '#2e2e34',
		ink: '#E8F4FC',
		inkHeading: '#FFFFFF',
		inkSecondary: '#A8C8E0',
		inkMuted: '#6B8FA8',
		link: '#8FDBEE',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / meta keywords.
	 * Page-specific targeting lives in src/data/seo-keywords.ts
	 */
	keywords: {
		primary: 'destiny 2 hacks',
		list: [
			'destiny 2 hacks',
			'destiny 2 aimbot',
			'destiny 2 esp',
			'destiny 2 wallhack',
			'destiny 2 no recoil',
			'destiny 2 triggerbot',
			'destiny 2 radar hack',
			'd2 hacks',
			'destiny 2 hack software',
			'destiny 2 mod menu',
			'destiny 2 hacks pc',
			'destiny 2 hacks 2026',
			'destiny 2 crucible hacks',
			'destiny 2 trials hacks',
			'destiny 2 pvp hacks',
			'destiny 2 unlock tool',
			'best destiny 2 hacks',
			'undetected destiny 2 hacks',
			'destiny 2 stream proof',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Destiny 2 Hacks 2026 | ESP, Aimbot & Wallhack',
		homeDescription:
			'Destiny 2 hacks with ESP, aimbot, and wallhack for Crucible, Trials, and PvE on Windows PC. No recoil, triggerbot, radar, and BattlEye maintenance included. From $35/month.',
		featuresTitle: 'Destiny 2 Hacks Features | ESP, Aimbot & Wallhack',
		featuresDescription:
			'Full Destiny 2 hacks feature list — ESP wallhack, aimbot, triggerbot, no recoil, radar overlay, movement hacks, and stream-proof toggles for PC. BattlEye maintenance at destiny2hack.net.',
		storeTitle: 'Destiny 2 Hacks Pricing | $35/mo Lifetime',
		storeDescription:
			'Buy Destiny 2 hacks — $35/month or $150 lifetime. ESP, aimbot, wallhack, no recoil, and radar for Crucible and Trials on PC. Instant digital delivery worldwide.',
		statusTitle: 'Destiny 2 Status | Undetected {antiCheat} Updates',
		statusDescription:
			'Live status after {game} & {antiCheat} patches. Check undetected ESP, aimbot & radar rebuilds on PC before you queue. Status updated at destiny2hack.net.',
		previewTitle: 'Destiny 2 Hacks | ESP, Aimbot & Wallhack Guide',
		previewDescription:
			'Destiny 2 hacks guide — undetected ESP wallhack, aimbot, triggerbot, no recoil, and radar with {antiCheat} rebuilds for Crucible and Trials on PC. Buy from $35 at destiny2hack.net.',
		setupTitle: 'Destiny 2 Hacks Setup | Windows PC Install Guide',
		setupDescription:
			'Install {brand} on PC — activate ESP, aimbot, and no recoil step by step. Setup guide at destiny2hack.net. Check {antiCheat} status before your first Crucible match.',
		supportTitle: 'Destiny 2 Hacks Support | License & Setup Help',
		supportDescription:
			'Support for license delivery, ESP setup & billing on PC. Email {email} with your order ID. Fast help at destiny2hack.net/support before you play.',
		faqTitle: 'Destiny 2 Hacks FAQ | ESP, Aimbot & BattlEye',
		faqDescription:
			'FAQ for Destiny 2 hacks — delivery, setup, Crucible & Trials use, {antiCheat} updates & pricing on PC. Answers at destiny2hack.net before you buy.',
		reviewsTitle: 'Destiny 2 Hacks Reviews | Hacks & Cheats Feedback',
		reviewsDescription:
			'Real buyer reviews for Destiny 2 hacks — ESP, aimbot, no recoil, radar & {antiCheat} maintenance on PC. See license holder feedback at destiny2hack.net.',
		blogTitle: 'Destiny 2 Blog | Guides & Patch Tips | {brand}',
		blogDescription:
			'Destiny 2 guides — Crucible tips, ESP & aimbot notes, Trials meta & {antiCheat} updates for PC. Read patch notes and buyer guides at destiny2hack.net/blog.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and wallhack for PC',
		summary: '{brand} is an undetected {game} hacks package for Windows PC. Includes ESP, aimbot, wallhack, no recoil, triggerbot, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, aimbot, wallhack, and no recoil for Destiny 2 on Windows PC.',
		blogLabel: 'Destiny 2 Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro: '{brand} for Destiny 2 — ESP wallhack, aimbot, triggerbot, no recoil, radar, and {antiCheat} rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro:
			'Real feedback on Destiny 2 hacks and hacks — ESP, aimbot, no recoil, radar, and support from {brand} buyers.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Aimbot',
		chipRadar: 'Radar hack',
		chipUpdates: 'Patch updates',
		navPreview: 'Hacks',
		navFeatures: 'Features',
		navStore: 'Pricing',
		navStatus: 'Updates',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on refresh crawl dates */
		contentLastmod: '2026-09-04',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'Destiny 2 hacks & hacks — what buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/destiny2-screenshot-11.webp',
				title: 'Destiny 2 aimbot with ESP overlay in Crucible',
				caption: 'Destiny 2 aimbot cheat showing ESP boxes and lock-on reticle in PvP',
			},
			{
				src: '/images/destiny2-screenshot-12.webp',
				title: 'Destiny 2 magic bullet aimbot gameplay',
				caption: 'Destiny 2 magic bullet cheat with ESP distance tags on the Moon',
			},
			{
				src: '/images/destiny2-screenshot-13.webp',
				title: 'Destiny 2 god mode and ESP wallhack',
				caption: 'Destiny 2 god mode cheat with neon green ESP skeleton overlays',
			},
			{
				src: '/images/destiny2-screenshot-14.webp',
				title: 'Destiny 2 fly movement hack',
				caption: 'Destiny 2 fly cheat showing free movement in the Ascendant Plane',
			},
			{
				src: '/images/destiny2-screenshot-15.webp',
				title: 'Destiny 2 jump height multiplier',
				caption: 'Destiny 2 movement hack with jump height multiplier in Vex environment',
			},
			{
				src: '/images/destiny2-screenshot-16.webp',
				title: 'Destiny 2 aimbot scope lock-on',
				caption: 'Destiny 2 aimbot with green reticle and skeleton ESP in PvP',
			},
			{
				src: '/images/destiny2-screenshot-17.webp',
				title: 'Destiny 2 ESP and magic bullet overlay',
				caption: 'Destiny 2 ESP wallhack with magic bullet auto-targeting on the Moon',
			},
			{
				src: '/images/destiny2-screenshot-18.webp',
				title: 'Destiny 2 aimbot PvP combat',
				caption: 'Destiny 2 aimbot hack with FOV circle and player ESP in Crucible',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions in Google's preferred range (~140–160 chars). */
export function seoDescription(template: string): string {
	let text = fillBrandTokens(template).trim();
	if (text.length < 140) {
		const pad = text.toLowerCase().includes('destiny2hack.net')
			? ' Windows PC license with BattlEye maintenance after patches.'
			: ' Compare plans and guides at destiny2hack.net.';
		text = `${text.replace(/[.…]+$/, '')}.${pad}`;
	}
	if (text.length <= 160) return text;
	const trimmed = text.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
