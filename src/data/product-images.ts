import { siteConfig } from './site';

/** User-provided screenshots for destiny2hack.net */
export const PRODUCT_SCREENSHOT_SOURCES = [
	'/images/destiny2-screenshot-11.webp',
	'/images/destiny2-screenshot-12.webp',
	'/images/destiny2-screenshot-13.webp',
	'/images/destiny2-screenshot-14.webp',
	'/images/destiny2-screenshot-15.webp',
	'/images/destiny2-screenshot-16.webp',
	'/images/destiny2-screenshot-17.webp',
] as const;

export const PRODUCT_SCREENSHOT_COUNT = PRODUCT_SCREENSHOT_SOURCES.length;

export type ProductScreenshotMeta = {
	id: number;
	src: string;
	url: string;
	sourceUrl: string;
	alt: string;
	title: string;
	caption: string;
};

const alts: Record<number, { alt: string; title: string; caption: string }> = {
	1: {
		alt: 'Destiny 2 aimbot cheat with ESP boxes and lock-on reticle in Crucible PvP',
		title: 'Destiny 2 aimbot with ESP overlay',
		caption: 'Destiny 2 aimbot showing green ESP skeleton and FOV circle in PvP',
	},
	2: {
		alt: 'Destiny 2 magic bullet aimbot with ESP distance tags on the Moon',
		title: 'Destiny 2 magic bullet aimbot gameplay',
		caption: 'Destiny 2 magic bullet cheat with pink ESP markers in K1 Logistics',
	},
	3: {
		alt: 'Destiny 2 god mode cheat with neon green ESP skeleton overlays',
		title: 'Destiny 2 god mode and ESP wallhack',
		caption: 'Destiny 2 god mode with ESP boxes showing enemy positions through walls',
	},
	4: {
		alt: 'Destiny 2 fly movement hack showing free movement in the Ascendant Plane',
		title: 'Destiny 2 fly movement hack',
		caption: 'Destiny 2 fly cheat enabling free map movement in purple Ascendant realm',
	},
	5: {
		alt: 'Destiny 2 jump height multiplier cheat in Vex environment with neon pink streaks',
		title: 'Destiny 2 jump height multiplier',
		caption: 'Destiny 2 movement hack with jump height multiplier in Vex zone',
	},
	6: {
		alt: 'Destiny 2 aimbot scope lock-on with skeleton ESP in PvP hallway',
		title: 'Destiny 2 aimbot scope lock-on',
		caption: 'Destiny 2 aimbot with green reticle and player ESP in Crucible',
	},
	7: {
		alt: 'Destiny 2 ESP wallhack with magic bullet auto-targeting on the Moon',
		title: 'Destiny 2 ESP and magic bullet overlay',
		caption: 'Destiny 2 ESP wallhack with magic bullet and distance readouts on the Moon',
	},
};

export function screenshotSrc(n: number): string {
	const id = ((n - 1) % PRODUCT_SCREENSHOT_COUNT) + 1;
	return `/images/destiny2-screenshot-${String(id + 10).padStart(2, '0')}.webp`;
}

export function absoluteScreenshotUrl(n: number): string {
	return new URL(screenshotSrc(n), siteConfig.url).href;
}

export function getProductScreenshot(n: number): ProductScreenshotMeta {
	const id = ((n - 1) % PRODUCT_SCREENSHOT_COUNT) + 1;
	const fileNum = id + 10;
	const src = `/images/destiny2-screenshot-${String(fileNum).padStart(2, '0')}.webp`;
	const meta = alts[id];
	return {
		id,
		src,
		url: new URL(src, siteConfig.url).href,
		sourceUrl: PRODUCT_SCREENSHOT_SOURCES[id - 1],
		alt: meta.alt,
		title: meta.title,
		caption: meta.caption,
	};
}

export const productScreenshots = Array.from({ length: PRODUCT_SCREENSHOT_COUNT }, (_, i) =>
	getProductScreenshot(i + 1),
);

/** JSON-LD ImageObject nodes for gallery / sitemap parity. */
export function screenshotImageObjects(limit = PRODUCT_SCREENSHOT_COUNT) {
	return productScreenshots.slice(0, limit).map((shot) => ({
		'@type': 'ImageObject' as const,
		'@id': `${shot.url}#image`,
		url: shot.url,
		contentUrl: shot.url,
		name: shot.title,
		description: shot.caption,
		thumbnailUrl: shot.url,
	}));
}
