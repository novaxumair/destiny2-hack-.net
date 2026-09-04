#!/usr/bin/env node
/**
 * Generates public/locales/{locale}/translation.json for all 22 locales.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES } from './i18n-data/constants.mjs';
import { allUiStrings } from './i18n-data/ui-strings.mjs';
import { buildLocaleOverlay } from './i18n-data/locale-overlays.mjs';
import { FAQ_I18N } from './i18n-data/faq-i18n.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_FILE = path.join(ROOT, 'public', 'locales', 'en', 'translation.json');
const ES_FILE = path.join(ROOT, 'public', 'locales', 'es', 'translation.json');

function deepMerge(base, overlay) {
	const out = structuredClone(base);
	for (const [key, value] of Object.entries(overlay)) {
		if (value && typeof value === 'object' && !Array.isArray(value)) {
			out[key] = deepMerge(out[key] ?? {}, value);
		} else if (value !== undefined) {
			out[key] = value;
		}
	}
	return out;
}

function flattenExternalResources(ext) {
	if (!ext) return {};
	const { title, lede, pillsTitle, pillsLabel, steam, patch, official, wiki, community, ...rest } = ext;
	return {
		title,
		lede,
		pillsTitle,
		pillsLabel,
		steam,
		patch,
		official,
		wiki,
		community,
		...rest,
	};
}

function buildFaqOverlay(locale, enFaq) {
	const map = FAQ_I18N[locale];
	if (!map) return {};
	return { items: map };
}

/** English FAQ seed for translation.json */
const EN_FAQ_ITEMS = {
	'what-are-destiny-2-cheats': {
		q: 'What is Destiny 2 Cheats?',
		a: 'Destiny 2 Cheats is an undetected destiny 2 cheats package for Destiny 2 on Windows PC. It includes ESP wallhack, 2D radar, and aimbot controls, with BattlEye maintenance and setup support.',
	},
	'are-destiny-2-cheats-undetected-in-2026': {
		q: 'Are destiny 2 cheats undetected in 2026?',
		a: 'Destiny 2 Cheats is maintained for Destiny 2 with rebuilds after BattlEye and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
	},
	'solo-farmer-and-raider-sessions': {
		q: 'Does this work in Crucible matches and Competitive matches?',
		a: 'Yes. ESP, radar, and aimbot are built for Destiny 2 match flow — reading enemy heroes, tracking loot and soul jades, and staying aware near POIs and combat zones in Quickplay and Ranked.',
	},
	'esp-wallhack-radar-or-aimbot': {
		q: 'What is included — ESP, wallhack, radar, or Aimbot?',
		a: 'Destiny 2 Cheats bundles ESP wallhack, guardian markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
	},
	'how-are-licenses-delivered': {
		q: 'How are licenses delivered?',
		a: 'After payment is confirmed, Destiny 2 Cheats license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
	},
	'where-to-check-updates': {
		q: 'Where do I check updates after a Destiny 2 or BattlEye patch?',
		a: 'Maintenance notes are posted on the Status page when a Destiny 2 or BattlEye update affects the package. That is the fastest place to confirm whether a new Destiny 2 Cheats build is live.',
	},
	'how-to-contact-support': {
		q: 'How do I contact support?',
		a: 'Use the Support page or email support@destiny2hack.net. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
	},
	'what-is-a-destiny-2-wallhack': {
		q: 'What is a Destiny 2 wallhack?',
		a: 'A Destiny 2 wallhack is an ESP overlay that shows enemy heroes through terrain. Destiny 2 Cheats includes distance readouts, grapple and ult cues, and toggleable categories.',
	},
	'does-destiny-2-cheats-include-radar-hack': {
		q: 'Does Destiny 2 Cheats include a radar hack?',
		a: 'Yes. Destiny 2 Cheats includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and combat zones.',
	},
	'battleye-anti-cheat-and-destiny-2-cheats': {
		q: 'How does BattlEye affect destiny 2 cheats?',
		a: 'BattlEye monitors Destiny 2 on Windows PC. Destiny 2 Cheats posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
	},
	'buy-undetected-destiny-2-cheats-windows-pc': {
		q: 'Can I buy undetected Destiny 2 cheats for Windows PC?',
		a: 'Yes — Destiny 2 Cheats sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
	},
	'how-much-do-destiny-2-cheats-cost': {
		q: 'How much do destiny 2 cheats cost in 2026?',
		a: 'Destiny 2 Cheats is $35 per month or $150 lifetime USD on Windows PC. Both plans include ESP wallhack, 2D radar, soft aim, and BattlEye maintenance rebuilds. See Pricing for the latest plan details before checkout.',
	},
	'what-is-destiny-2-esp-hack': {
		q: 'What is a Destiny 2 ESP hack?',
		a: 'A Destiny 2 ESP hack is a visibility overlay that shows enemy heroes, weapons, and loot through walls. Destiny 2 Cheats ESP includes player boxes, distance tags, grapple and ult cues, and toggleable categories for Quickplay and Ranked.',
	},
	'what-is-destiny-2-aimbot-hack': {
		q: 'What is a Destiny 2 aimbot hack?',
		a: 'A Destiny 2 aimbot hack provides aim assist with configurable FOV, smoothing, and bone priority. Destiny 2 Cheats uses soft aim profiles designed to feel natural in team fights and duels — tune settings in the mod menu before Ranked queues.',
	},
	'how-to-install-destiny-2-cheats': {
		q: 'How do I install destiny 2 cheats on Windows PC?',
		a: 'After checkout, follow the Setup guide: download the loader, disable conflicting overlays, launch Destiny 2 Cheats, and enable ESP, radar, or aimbot toggles in the mod menu. Most buyers finish first launch in under 15 minutes. Email support@destiny2hack.net if activation fails.',
	},
	'best-destiny-2-cheats-in-2026': {
		q: 'What are the best destiny 2 cheats in 2026?',
		a: 'Top destiny 2 cheats in 2026 combine undetected ESP, soft aim, 2D radar, and fast BattlEye maintenance after patches. Destiny 2 Cheats bundles all three in one license with status notes, setup support, and monthly or lifetime pricing — compare Features and Reviews before you buy.',
	},
	'monthly-vs-lifetime-destiny-2-cheats': {
		q: 'Should I buy monthly or lifetime destiny 2 cheats?',
		a: 'Choose monthly ($35) if you want a lower entry cost or only play a few seasons. Choose lifetime ($150) if you plan long-term Destiny 2 play and want one payment for ESP, radar, aimbot, and future maintenance rebuilds. Both plans ship the same feature set.',
	},
	'destiny-2-cheats-windows-11': {
		q: 'Do destiny 2 cheats work on Windows 11?',
		a: 'Yes. Destiny 2 Cheats supports Windows 10 and Windows 11 on PC. Use a clean install path from the Setup guide, keep BattlEye status green on the Updates page, and avoid running outdated builds after major patches.',
	},
	'what-is-destiny-2-soft-aim': {
		q: 'What is Destiny 2 soft aim?',
		a: 'Destiny 2 soft aim gently guides aim toward targets inside a set FOV instead of snapping instantly. Destiny 2 Cheats lets you adjust smoothing, bone priority, and per-weapon-type profiles so assist feels controlled in Quickplay and Ranked.',
	},
	'free-destiny-2-cheat-download': {
		q: 'Is there a free Destiny 2 hack download?',
		a: 'Destiny 2 Cheats is a paid license — there is no official free download. Avoid random “free destiny 2 cheat” sites; they often ship malware or detected loaders. Compare monthly and lifetime plans on Pricing for legitimate ESP, radar, and aimbot access with support.',
	},
	'naraka-battleye-bypass': {
		q: 'How does BattlEye bypass work for destiny 2 cheats?',
		a: 'There is no permanent BattlEye bypass. Destiny 2 Cheats is maintained with rebuilds after Destiny 2 and BattlEye patches — check the Updates page before you queue. Responsible settings and loading the latest build matter more than any “bypass” claim.',
	},
	'destiny-2-cheats-for-ranked': {
		q: 'Do destiny 2 cheats work in ranked competitive?',
		a: 'Yes. ESP, radar, and soft aim are built for Ranked and Quickplay Destiny 2 on Windows PC. Use conservative overlay settings, read maintenance notes after patches, and confirm undetected status on the Updates page before competitive queues.',
	},
	'what-is-destiny-2-mod-menu': {
		q: 'What is a Destiny 2 mod menu?',
		a: 'A Destiny 2 mod menu is an in-game overlay to toggle ESP wallhack, radar, aimbot, and visual settings without alt-tabbing. Destiny 2 Cheats ships a lightweight mod menu for Windows PC — see Features for the full toggle list.',
	},
	'external-vs-internal-destiny-2-cheats': {
		q: 'What is the difference between external and internal destiny 2 cheats?',
		a: 'External hacks read game memory from outside the client; internal hooks run inside the process. Destiny 2 Cheats is built as an external-style package for easier setup on Windows PC, bundling ESP, radar, and soft aim with BattlEye maintenance after patches.',
	},
	'how-long-destiny-2-cheat-setup-takes': {
		q: 'How long does destiny 2 cheats setup take?',
		a: 'Most buyers finish Destiny 2 Cheats setup in 10–20 minutes on Windows PC: install the loader, activate the license, and enable ESP or aimbot in the mod menu. If Windows Defender or another AV blocks the loader, follow Setup troubleshooting or email support@destiny2hack.net with your order ID.',
	},
	'does-destiny-2-cheats-include-triggerbot': {
		q: 'Does Destiny 2 Cheats include triggerbot?',
		a: 'Destiny 2 Cheats focuses on ESP wallhack, 2D radar, and soft aim profiles. Triggerbot is not advertised as a standalone module — review the Features page for the current toggle list before checkout.',
	},
};

FAQ_I18N.en = EN_FAQ_ITEMS;

async function main() {
	const en = JSON.parse(await readFile(EN_FILE, 'utf8'));
	en.faq = { items: EN_FAQ_ITEMS };
	en.media = {
		demoVideoTitle: 'Destiny 2 Cheats ESP, aimbot and radar demo',
		playVideo: 'Play video',
	};
	const enUi = allUiStrings.en;
	en.hero = {
		...enUi.hero,
		title: enUi.hero.title,
		priceFrom: en.hero?.priceFrom ?? 'from',
		imageAlt: en.hero?.imageAlt ?? '{{brand}} — Destiny 2 ESP and aimbot overlay',
		chipEsp: en.hero?.chipEsp ?? 'ESP / wallhack',
		chipAim: en.hero?.chipAim ?? 'Soft aim',
		chipRadar: en.hero?.chipRadar ?? '2D radar',
		chipUpdates: en.hero?.chipUpdates ?? 'Patch updates',
	};
	en.nav = { ...en.nav, ...enUi.nav, preview: enUi.nav.hacks, store: enUi.nav.pricing, status: enUi.nav.updates };
	en.externalResources = {
		title: 'Official game guides & resources',
		lede: 'We link to trusted third-party sources so you can verify patch notes, player stats, and map info outside our site.',
		pillsTitle: 'Official guides',
		pillsLabel: 'Official Destiny 2 guides',
		steam: { label: 'Destiny 2 on PC', note: 'Official store page, system requirements, and player reviews.' },
		patch: { label: 'Destiny 2 patch notes & news', note: 'Read official update posts before you change your loadout.' },
		official: { label: 'Official Destiny 2 website', note: 'Game overview from Bungie.' },
		wiki: { label: 'Destiny 2 Wiki (Fandom)', note: 'Player stats, maps, and hero abilities.' },
		community: { label: 'Destiny 2 community hub', note: 'Announcements and community discussions.' },
	};
	en.internalLinks = {
		relatedLede: 'Explore more Destiny 2 Cheats guides — the same topics covered on other cheat sites, mapped to our canonical pages.',
		topicsTitle: 'Product guides',
		topicsLabel: 'Product topic guides',
		topicsLede: 'Jump to the main Destiny 2 Cheats pages for ESP, aimbot, radar, setup, and status.',
		overview: 'Destiny 2 Cheats overview',
		esp: 'ESP & wallhack',
		aimbot: 'Aimbot & soft aim',
		radar: 'Radar hack',
		features: 'Full feature list',
		pricing: 'Store & pricing',
		setup: 'Setup guide',
		status: 'Live status',
		faq: 'FAQ',
		support: 'Support',
		blog: 'Blog',
		reviews: 'Buyer reviews',
		hacks: 'Destiny 2 Cheats pillar',
		undetected: 'Undetected status',
	};
	en.images = { ...en.images, ...enUi.images };
	en.gallery = {
		eyebrow: 'Destiny 2 Cheats',
		title: 'Destiny 2 Cheats gallery',
		subtitle: 'Destiny 2 Cheats visuals — ESP, wallhack, aimbot, and radar for Destiny 2 on PC.',
		lead: 'Destiny 2 Cheats helps you spot enemy heroes, loot, and high-traffic POIs with ESP, aimbot, and radar in one license.',
		highlightEspTitle: 'Destiny 2 Cheats ESP',
		highlightEspCopy: 'See enemy heroes through walls with Destiny 2 Cheats ESP and wallhack overlays.',
		highlightRadarTitle: 'Destiny 2 Cheats radar',
		highlightRadarCopy: 'Track nearby threats with Destiny 2 Cheats radar before you push or rotate.',
		highlightAimbotTitle: 'Destiny 2 Cheats aimbot',
		highlightAimbotCopy: 'Use soft aim and aimbot controls tuned for Destiny 2 matches on Windows PC.',
		updatesLabel: 'Destiny 2 Cheats updates',
		updatesShort: 'Updates',
	};
	en.home = {
		...en.home,
		aboutTitle: 'undetected cheats for Destiny 2',
		aboutP1:
			'Destiny 2 Cheats is an undetected destiny 2 cheats package for Destiny 2 on Windows PC. One license includes ESP wallhack, soft aim, and 2D radar, with BattlEye rebuilds after game patches. Check Status before you queue.',
		aboutP2Before: 'Start with the',
		aboutPillar: 'Destiny 2 cheats guide',
		aboutP2Mid: ', ',
		aboutEsp: 'ESP guide',
		aboutAimbot: 'aimbot controls',
		aboutP2Or: ', or ',
		aboutUndetected: 'undetected status',
		aboutP2After: " if you're still comparing tools.",
		demoVideoCaption: 'Destiny 2 Cheats — ESP, aimbot & radar in match',
		volumeLabel: 'Volume',
		seekLabel: 'Video progress',
		muteVideo: 'Mute video',
		unmuteVideo: 'Unmute video',
	};
	en.common = {
		...en.common,
		share: 'Share',
		shareX: 'Share on X',
		shareReddit: 'Share on Reddit',
		shareFacebook: 'Share on Facebook',
		privacy: 'Privacy policy',
		terms: 'Terms of use',
		refundPolicy: 'Refund policy',
		featureList: 'Feature list',
		buyerReviewsNav: 'Buyer reviews',
	};
	en.categoryRow = {
		...en.categoryRow,
		hacks: 'Cheats',
		wallhack: 'Wallhack',
		undetected: 'Undetected',
		setup: 'Setup',
		blog: 'Blog',
	};
	en.homeSeo = {
		...en.homeSeo,
		eyebrow: 'Guides',
		title: 'Browse by category',
		lede: 'Quick links to features, status, store, and help.',
		catFeatures: 'Features',
		catFeaturesHint: "What's included",
		catStatus: 'Updates',
		catStatusHint: 'Before you play',
		catStore: 'Pricing',
		catStoreHint: 'Buy & plans',
		catHelp: 'FAQ',
		catHelpHint: 'Need a hand?',
		linkAllFeatures: 'All features',
		linkEsp: 'ESP',
		linkAimbot: 'Aimbot',
		linkRadar: 'Radar',
		linkLiveStatus: 'Live status',
		linkUndetected: 'Undetected',
		linkSetup: 'Setup',
		linkPlans: 'Plans',
		linkReviews: 'Reviews',
		linkFinalsCheats: 'Destiny 2 Cheats',
		linkFaq: 'FAQ',
		linkSupport: 'Support',
		linkSetupGuide: 'Setup guide',
		linkBlog: 'Blog',
		linkRefunds: 'Refunds',
		faqEyebrow: 'FAQ',
		faqTitle: 'Before you buy',
		faqLede: "Delivery, detection status, and what's included.",
		allAnswers: 'All answers',
		openFullPage: 'Open full page',
	};
	en.reviews = {
		...(en.reviews ?? {}),
		eyebrow: 'Destiny 2 Cheats',
		homeTitle: 'Destiny 2 Cheats reviews',
		subtitle: 'Recent feedback from Destiny 2 Cheats buyers',
		buyerReviews: '{{count}} Destiny 2 Cheats buyer reviews',
		averageAria: '{{rating}} average from {{count}} Destiny 2 Cheats buyer reviews',
		readAll: 'Read all Destiny 2 Cheats reviews →',
	};
	en.blog = {
		...(en.blog ?? {}),
		blogTitle: 'Destiny 2 Cheats Blog | Guides & Patch Tips',
		blogDescription:
			'Destiny 2 guides — battle royale tips, ESP, aimbot notes, movement routes, and BattlEye update coverage. English blog at destiny2hack.net/blog/.',
		blogH1: 'Destiny 2 Cheats Intel',
		blogIntro:
			'Actionable Destiny 2 guides for ranked and Quickplay sessions — meta breakdowns, movement routes, loadout tiers, and pro warmup routines. Pair these tips with our Destiny 2 Cheats pages for ESP, soft aim, and radar when you need in-match tools.',
	};

	let es;
	try {
		es = JSON.parse(await readFile(ES_FILE, 'utf8'));
		es.faq = { items: FAQ_I18N.es };
		es.home = {
			...(es.home ?? {}),
			aboutTitle: 'cheats indetectables para Destiny 2',
		};
	} catch {
		es = en;
	}

	for (const locale of LOCALES) {
		const dir = path.join(ROOT, 'public', 'locales', locale);
		await mkdir(dir, { recursive: true });

		let translation = en;
		if (locale === 'es') {
			translation = deepMerge(en, es);
		} else if (locale !== 'en') {
			const ui = allUiStrings[locale];
			const overlay = buildLocaleOverlay(locale, ui);
			const faqOverlay = buildFaqOverlay(locale);
			translation = deepMerge(en, {
				...overlay,
				externalResources: flattenExternalResources(overlay.externalResources),
				faq: faqOverlay,
			});
		}

		const ui = allUiStrings[locale];
		if (ui?.nav?.hacks) {
			translation.nav = {
				...translation.nav,
				hacks: ui.nav.hacks,
				preview: ui.nav.hacks,
			};
		}

		const out = path.join(dir, 'translation.json');
		await writeFile(out, `${JSON.stringify(translation, null, 2)}\n`, 'utf8');
		console.log('✓', out);
	}

	// Refresh canonical EN with faq/media keys
	await writeFile(EN_FILE, `${JSON.stringify(en, null, 2)}\n`, 'utf8');
	console.log(`Generated ${LOCALES.length} locale translation files.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
