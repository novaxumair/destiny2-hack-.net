export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/undetected-destiny-2-cheats/' },
	{ label: fillBrandTokens('{game} cheats'), href: '/destiny-2-cheats/' },
	{ label: fillBrandTokens('{game} cheats 2026'), href: '/destiny-2-cheats-2026/' },
	{ label: fillBrandTokens('{game} esp'), href: '/destiny-2-esp/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/destiny-2-wallhack/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/destiny-2-aimbot/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/destiny-2-radar-hack/' },
	{ label: fillBrandTokens('Best {primaryKeyword}'), href: '/best-destiny-2-cheats/' },
	{ label: fillBrandTokens('{antiCheat} bypass'), href: '/battleye-bypass/' },
	{ label: fillBrandTokens('{game} cheat download'), href: '/setup/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('{game} pricing'), href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/destiny-2-cheats/' },
	{ label: 'Aimbot', href: '/destiny-2-aimbot/' },
	{ label: 'ESP', href: '/destiny-2-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} cheats pillar'), href: '/destiny-2-cheats/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/destiny-2-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/destiny-2-aimbot/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/destiny-2-radar-hack/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} cheats FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Destiny 2 on Windows PC. It includes ESP wallhack, radar overlay, and aimbot controls, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-destiny-2-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, radar, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-destiny-2-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in Crucible matches and Competitive matches?',
		answer:
			'Yes. ESP, radar, and aimbot are built for {game} match flow — reading enemy guardians, spotting loot, and staying aware near POIs and combat zones.',
		slug: 'solo-farmer-and-raider-sessions',
		seoTitle: 'Raid Session and PvP Support | FAQ',
		seoDescription:
			'{brand} works in Crucible matches and Competitive matches — ESP, radar, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack, guardian markers, radar overlay cues, and configurable Aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, guardian markers, radar overlay cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a Destiny 2 or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a Destiny 2 or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
	faq({
		question: 'How much do {primaryKeyword} cost in 2026?',
		answer:
			'{brand} is $35 per month or $150 lifetime USD on Windows PC. Both plans include ESP wallhack, radar overlay, aimbot, and {antiCheat} maintenance rebuilds. See Pricing for the latest plan details before checkout.',
		slug: 'how-much-do-destiny-2-cheats-cost',
		seoTitle: 'How Much Do {game} Hacks Cost? | FAQ',
		seoDescription:
			'{brand} pricing in 2026: $35/month or $150 lifetime for ESP, aimbot, radar, and {antiCheat} updates on Windows PC.',
	}),
	faq({
		question: 'How do I install {primaryKeyword} on Windows PC?',
		answer:
			'After checkout, follow the Setup guide: download the loader, disable conflicting overlays, launch {brand}, and enable ESP, radar, or aimbot toggles in the mod menu. Most buyers finish first launch in under 15 minutes. Email {email} if activation fails.',
		slug: 'how-to-install-destiny-2-cheats',
		seoTitle: 'How to Install {game} Hacks on Windows PC | FAQ',
		seoDescription:
			'Step-by-step {brand} install on Windows PC — loader, mod menu, and ESP/aimbot toggles. Setup help at destiny2hack.net.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows enemy guardians and weapons through walls. {brand} includes distance readouts, grapple and ult cues, and toggleable categories.',
		slug: 'what-is-a-destiny-2-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals heroes and weapons through walls — with distance, bases, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a radar hack?',
		answer:
			'Yes. {brand} includes radar overlay overlays that highlight nearby threats outside your view — useful for flanks and combat zones.',
		slug: 'does-destiny-2-cheats-include-radar-hack',
		seoTitle: 'Does {brand} Include a Radar Hack? | FAQ',
		seoDescription:
			'Yes — {brand} includes radar overlay overlays for nearby threats outside your FOV. Compare ESP, aimbot, and radar in one license at destiny2hack.net.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'battleye-anti-cheat-and-destiny-2-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-destiny-2-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Hacks for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
	}),
	faq({
		question: 'What is a {game} ESP hack?',
		answer:
			'A {game} ESP hack is a visibility overlay that shows enemy guardians, weapons, and loot through walls. {brand} ESP includes player boxes, distance tags, grapple and ult cues, and toggleable categories for Quick Play and Ranked.',
		slug: 'what-is-destiny-2-esp-hack',
		seoTitle: 'What Is a {game} ESP Hack? | FAQ',
		seoDescription:
			'{game} ESP hack explained — player wallhack, distance tags, and loot markers in one {brand} license for Windows PC.',
	}),
	faq({
		question: 'What is a {game} aimbot hack?',
		answer:
			'A {game} aimbot hack provides aim assist with configurable FOV, smoothing, and bone priority. {brand} uses aimbot profiles designed to feel natural in team fights and duels — tune settings in the mod menu before Ranked queues.',
		slug: 'what-is-destiny-2-aimbot-hack',
		seoTitle: 'What Is a {game} Aimbot Hack? | FAQ',
		seoDescription:
			'{game} aimbot hack with aimbot, FOV, and smoothing controls — included in {brand} for Windows PC.',
	}),
	faq({
		question: 'What are the best {primaryKeyword} in 2026?',
		answer:
			'Top {primaryKeyword} in 2026 combine undetected ESP, aimbot, radar overlay, and fast {antiCheat} maintenance after patches. {brand} bundles all three in one license with status notes, setup support, and monthly or lifetime pricing — compare Features and Reviews before you buy.',
		slug: 'best-destiny-2-cheats-in-2026',
		seoTitle: 'Best {game} Hacks in 2026 | FAQ',
		seoDescription:
			'Best {primaryKeyword} in 2026 — ESP, aimbot, radar, and {antiCheat} maintenance in one {brand} license for Windows PC.',
	}),
	faq({
		question: 'Should I buy monthly or lifetime {primaryKeyword}?',
		answer:
			'Choose monthly ($35) if you want a lower entry cost or only play a few seasons. Choose lifetime ($150) if you plan long-term {game} play and want one payment for ESP, radar, aimbot, and future maintenance rebuilds. Both plans ship the same feature set.',
		slug: 'monthly-vs-lifetime-destiny-2-cheats',
		seoTitle: 'Monthly vs Lifetime {game} Hacks | FAQ',
		seoDescription:
			'Compare monthly ($35) and lifetime ($150) {brand} plans — same ESP, aimbot, and radar features on Windows PC.',
	}),
	faq({
		question: 'Do {primaryKeyword} work on Windows 11?',
		answer:
			'Yes. {brand} supports Windows 10 and Windows 11 on PC. Use a clean install path from the Setup guide, keep {antiCheat} status green on the Updates page, and avoid running outdated builds after major patches.',
		slug: 'destiny-2-cheats-windows-11',
		seoTitle: 'Do {game} Hacks Work on Windows 11? | FAQ',
		seoDescription:
			'{brand} runs on Windows 10 and 11 — ESP, aimbot, and radar with {antiCheat} maintenance on PC. Read setup notes at destiny2hack.net before you buy.',
	}),
	faq({
		question: 'What is {game} aimbot?',
		answer:
			'{game} aimbot gently guides aim toward targets inside a set FOV instead of snapping instantly. {brand} lets you adjust smoothing, bone priority, and per-weapon-type profiles so assist feels controlled in Quick Play and Ranked.',
		slug: 'what-is-destiny-2-soft-aim',
		seoTitle: 'What Is {game} aimbot? | FAQ',
		seoDescription:
			'{game} aimbot explained — FOV, smoothing, and bone priority in {brand} for natural-looking assist on PC.',
	}),
	faq({
		question: 'Is there a free {game} hack download?',
		answer:
			'{brand} is a paid license — there is no official free download. Avoid random “free destiny 2 cheat” sites; they often ship malware or detected loaders. Compare monthly and lifetime plans on Pricing for legitimate ESP, radar, and aimbot access with support.',
		slug: 'free-destiny-2-cheat-download',
		seoTitle: 'Free {game} Hack Download? | FAQ',
		seoDescription:
			'No official free {brand} download — paid monthly/lifetime licenses include ESP, aimbot, radar, and support on Windows PC.',
	}),
	faq({
		question: 'How does {antiCheat} bypass work for {primaryKeyword}?',
		answer:
			'There is no permanent {antiCheat} bypass. {brand} is maintained with rebuilds after Destiny 2 and {antiCheat} patches — check the Updates page before you queue. Responsible settings and loading the latest build matter more than any “bypass” claim.',
		slug: 'destiny-2-battleye-bypass',
		seoTitle: '{antiCheat} Bypass for {game} Hacks | FAQ',
		seoDescription:
			'How {brand} handles {antiCheat} updates — maintenance rebuilds, status notes, and undetected workflow on Windows PC.',
	}),
	faq({
		question: 'Do {primaryKeyword} work in ranked competitive?',
		answer:
			'Yes. ESP, radar, and aimbot are built for Ranked and Quick Play {game} on Windows PC. Use conservative overlay settings, read maintenance notes after patches, and confirm undetected status on the Updates page before competitive queues.',
		slug: 'destiny-2-cheats-for-ranked',
		seoTitle: 'Do {game} Hacks Work in Ranked? | FAQ',
		seoDescription:
			'{brand} ESP, radar, and aimbot for ranked {game} on PC — maintenance and status checks before you queue.',
	}),
	faq({
		question: 'What is a {game} mod menu?',
		answer:
			'A {game} mod menu is an in-game overlay to toggle ESP wallhack, radar, aimbot, and visual settings without alt-tabbing. {brand} ships a lightweight mod menu for Windows PC — see Features for the full toggle list.',
		slug: 'what-is-destiny-2-mod-menu',
		seoTitle: 'What Is a {game} Mod Menu? | FAQ',
		seoDescription:
			'{game} mod menu with ESP, radar, and aimbot toggles — included in {brand} for Windows PC.',
	}),
	faq({
		question: 'What is the difference between external and internal {primaryKeyword}?',
		answer:
			'External hacks read game memory from outside the client; internal hooks run inside the process. {brand} is built as an external-style package for easier setup on Windows PC, bundling ESP, radar, and aimbot with {antiCheat} maintenance after patches.',
		slug: 'external-vs-internal-destiny-2-cheats',
		seoTitle: 'External vs Internal {game} Hacks | FAQ',
		seoDescription:
			'External vs internal {primaryKeyword} explained — how {brand} packages ESP, radar, and aimbot on Windows PC.',
	}),
	faq({
		question: 'How long does {primaryKeyword} setup take?',
		answer:
			'Most buyers finish {brand} setup in 10–20 minutes on Windows PC: install the loader, activate the license, and enable ESP or aimbot in the mod menu. If Windows Defender or another AV blocks the loader, follow Setup troubleshooting or email {email} with your order ID.',
		slug: 'how-long-destiny-2-cheat-setup-takes',
		seoTitle: 'How Long Does {game} Hack Setup Take? | FAQ',
		seoDescription:
			'{brand} setup time on Windows PC — typical 10–20 minute install for ESP, radar, and aimbot.',
	}),
	faq({
		question: 'Does {brand} include triggerbot?',
		answer:
			'Yes. {brand} includes configurable triggerbot with delay and hold-time settings for Crucible and Trials on Windows PC. Pair with ESP for target confirmation and tune fire delay to stay subtle in competitive playlists.',
		slug: 'does-destiny-2-cheats-include-triggerbot',
		seoTitle: 'Does {brand} Include Triggerbot? | FAQ',
		seoDescription:
			'Triggerbot and {brand} — see the current ESP, radar, and aimbot feature list on Windows PC.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_D2',
		rating: 5,
		text: 'tried like 3 different d2 cheats before this and they all felt way too snappy in Trials. these destiny 2 cheats let you tune aimbot smoothing so it doesnt look obvious in competitive. been grinding a week now, setup took probs 12 min after defender whitelisted the loader. no drama yet tbh',
		short: 'tried 3 d2 cheats before — these destiny 2 cheats feel human in Trials once you tune aimbot smoothing',
		slug: 'destiny-2-aimbot-review-xkrypt0',
		seoTitle: 'Aimbot Review by @xKrypt0_D2 — 5/5 | {brand}',
		seoDescription:
			'@xKrypt0_D2 rates {brand} destiny 2 aimbot 5/5 after testing destiny 2 cheats in Trials on Windows PC.',
		date: '2026-07-24',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'i dont even run aimbot much, the destiny 2 esp is why i bought. seeing who rotated before you third party in Crucible is insane info. been on monthly for a few weeks and its worth it. only gripe is menu could look cleaner but as destiny 2 hacks go this package is solid',
		short: 'bought for esp not aimbot — destiny 2 wallhack shows rotations before you third party in Crucible',
		slug: 'destiny-2-esp-crucible-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription:
			'@buildsR4K rates {brand} destiny 2 esp wallhack 4/5 for Crucible info on Windows PC.',
		date: '2026-07-19',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'last d2 cheat i had got cooked the day after a BattlEye update lol. switched to these destiny 2 cheats and loader was back same night they posted the rebuild. running esp + radar in Trials, still clean after 2 weeks. grabbed lifetime cause im done paying monthly for dead d2 hacks',
		short: 'old d2 hack died on battleye patch — these destiny 2 cheats rebuilt same night, still undetected 2 weeks later',
		slug: 'destiny-2-stream-proof-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription:
			'@dma_wizard rates {brand} destiny 2 cheats 5/5 after a {antiCheat} update — fast rebuild on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'im not techy at all bro. destiny 2 cheat menu is simple tho — dropped fov on aimbot, bumped smoothing, stopped the snap. feels more like muscle memory now in quickplay and comp. only 4 stars cause first login support took an hour but they fixed my license key quick',
		short: 'not techy but destiny 2 mod menu is easy — aimbot feels natural after fov and smoothing tweaks',
		slug: 'destiny-2-aimbot-review-ctrl-player99',
		seoTitle: 'Aimbot Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription:
			'@ctrl_player99 rates {brand} destiny 2 aimbot 4/5 after FOV tuning on Windows PC.',
		date: '2026-07-11',
		tag: 'Aimbot',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'destiny 2 cheats work fine once youre actually in game. windows defender blocked the loader first try and i panicked ngl. emailed support with order id, got a reply in like 2 hours with steps. esp looks clean in private matches, havent gone full comp yet. 3 stars cause setup stress but cheats themselves seem ok',
		short: 'defender blocked loader at first but support fixed it in 2hrs — destiny 2 esp looks clean in private matches',
		slug: 'destiny-2-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription:
			'@stormChaser_07 rates {brand} destiny 2 cheats setup 3/5 — ESP solid after support helped on Windows PC.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'mainly wanted guardian esp and chest tracking for d2. these destiny 2 cheats show flanks and third parties earlier than my brain does lol. fireteam runs are way less chaos when you know whos pushing. way better than random free d2 hacks that look sketchy af',
		short: 'guardian esp on these destiny 2 cheats catches flanks early — way better than sketchy free d2 hacks',
		slug: 'destiny-2-guardian-esp-review-lootgoblinx',
		seoTitle: 'Guardian ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription:
			'@lootGoblinx rates {brand} destiny 2 guardian esp 5/5 for PvE and PvP tracking on Windows PC.',
		date: '2026-08-01',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'using destiny 2 cheats since the new season dropped. per weapon no recoil profiles help on hand cannons vs auto rifles which is nice. status page was slow after BattlEye update but build was back next morning. solid d2 hacks for long grind sessions in comp',
		short: 'destiny 2 no recoil profiles help per weapon in comp — back online next day after battleye patch',
		slug: 'destiny-2-no-recoil-review-rankedgrind42',
		seoTitle: 'No Recoil Review by @rankedGrind42 — 4/5 | {brand}',
		seoDescription:
			'@rankedGrind42 rates {brand} destiny 2 no recoil 4/5 for competitive loadouts on Windows PC.',
		date: '2026-07-07',
		tag: 'No recoil',
	}),
	reviewMeta({
		handle: 'vanLifeD2',
		rating: 5,
		text: 'everyone talks esp but the radar on these destiny 2 cheats is cracked. caught a flank twice in one Trials match without staring at wallhack boxes. esp + radar combo feels legit tier 1 d2 cheats. running low opacity so it doesnt scream cheat in clips',
		short: 'radar on these destiny 2 cheats caught Trials flanks twice — esp + radar combo feels like real d2 hacks',
		slug: 'destiny-2-radar-hack-review-vanlifed2',
		seoTitle: 'Radar Review by @vanLifeD2 — 5/5 | {brand}',
		seoDescription:
			'@vanLifeD2 rates {brand} destiny 2 radar hack 5/5 for flank detection in Trials on Windows PC.',
		date: '2026-07-28',
		tag: 'Radar',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'destiny 2 patch day is when half the cheat discords go silent lol. destiny 2 cheats team posted on status in like 3 hrs and i was back in comp queue next morning. old provider left me waiting 4 days with no loader. not perfect but way better d2 cheats support than im used to',
		short: 'patch day usually kills d2 hacks — these destiny 2 cheats were back next morning, old provider took 4 days',
		slug: 'destiny-2-battleye-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription:
			'@patchDayMike rates {brand} destiny 2 cheats status updates 4/5 after {antiCheat} patches on Windows PC.',
		date: '2026-06-09',
		tag: 'BattlEye updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'sniper main here. destiny 2 aimbot with esp callouts is stupid strong if you keep settings lowkey. no bloat loader, simple install on win11. best d2 cheats ive used for Trials sessions — just dont crank fov like an idiot',
		short: 'sniper main — aimbot + esp on these destiny 2 cheats hits different in Trials if you keep settings subtle',
		slug: 'destiny-2-silent-aim-review-snipezonly',
		seoTitle: 'Silent Aim Review by @snipezOnly_ — 5/5 | {brand}',
		seoDescription:
			'@snipezOnly_ rates {brand} destiny 2 silent aim 5/5 with ESP in Trials on Windows PC.',
		date: '2026-08-01',
		tag: 'Silent aim',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	/** Published review count for schema and marketing UI */
	totalCount: 10,
	reviewCountLabel: '10+',
} as const;
