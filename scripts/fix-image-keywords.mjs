#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'destiny 2 cheats', espWallhack: 'destiny 2 cheats wallhack', aimbotCombat: 'destiny 2 cheats aimbot', squadFight: 'destiny 2 cheats', playerEsp: 'destiny 2 cheats esp', headerArt: 'destiny 2 cheats aimbot', hacksPackage: 'destiny 2 cheats radar', matchFight: 'destiny 2 cheats aimbot', battleRoyale: 'destiny 2 cheats', matchMap: 'destiny 2 cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', hacksPackage: '[^']+', matchFight: '[^']+', battleRoyale: '[^']+', matchMap: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Destiny 2 ESP player tags hack'", "imageAlt: 'destiny 2 cheats esp'"],
	["imageAlt: 'Destiny 2 ESP radar hack'", "imageAlt: 'destiny 2 cheats radar'"],
	["imageAlt: 'Destiny 2 Aimbot sniper kill'", "imageAlt: 'destiny 2 cheats aimbot'"],
	["imageAlt: 'Destiny 2 Aimbot skeleton targeting'", "imageAlt: 'destiny 2 cheats aimbot'"],
	["imageAlt: 'destiny 2 cheats ADS combat'", "imageAlt: 'destiny 2 cheats'"],
	["imageAlt: 'destiny 2 cheats setup PC activation'", "imageAlt: 'destiny 2 cheats'"],
	["imageAlt: 'destiny 2 cheats updates BattlEye maintenance'", "imageAlt: 'destiny 2 cheats'"],
	["imageAlt: 'destiny 2 cheats FAQ ESP aimbot'", "imageAlt: 'destiny 2 cheats'"],
	["imageAlt: 'destiny 2 cheats support license help'", "imageAlt: 'destiny 2 cheats'"],
	["imageAlt: 'Undetected destiny 2 cheats ESP wallhack'", "imageAlt: 'undetected destiny 2 cheats'"],
	["imageAlt: 'thefinals wallhack skeleton ESP'", "imageAlt: 'destiny 2 cheats wallhack'"],
	["imageAlt: 'BattlEye bypass rust ESP aimbot'", "imageAlt: 'destiny 2 cheats eac'"],
	["imageAlt: 'destiny 2 cheats 2026 ESP aimbot'", "imageAlt: 'destiny 2 cheats'"],
	["imageAlt: 'destiny 2 cheats combat aimbot'", "imageAlt: 'destiny 2 cheats'"],
	["imageAlt: 'destiny 2 cheat download ESP aimbot'", "imageAlt: 'destiny 2 cheats download'"],
	["imageAlt: 'Destiny 2 mod menu ESP aimbot'", "imageAlt: 'destiny 2 cheats mod menu'"],
	["imageAlt: 'Destiny 2 soft aim aimbot settings'", "imageAlt: 'destiny 2 cheats soft aim'"],
	["imageAlt: 'Best destiny 2 cheats 2026 ESP'", "imageAlt: 'best destiny 2 cheats'"],
	["imageAlt: 'Destiny 2 Aimbot hack combat'", "imageAlt: 'destiny 2 cheats aimbot'"],
	["imageAlt: 'Destiny 2 ESP hack wallhack'", "imageAlt: 'destiny 2 cheats esp'"],
	["imageAlt: 'Destiny 2 unlock all items ESP aimbot guide'", "imageAlt: 'destiny 2 cheats'"],
	["imageAlt: 'destiny 2 cheats privacy policy'", "imageAlt: 'destiny 2 cheats'"],
	["imageAlt: 'destiny 2 cheats refund policy'", "imageAlt: 'destiny 2 cheats'"],
	["imageAlt: 'destiny 2 cheats terms of use'", "imageAlt: 'destiny 2 cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Destiny 2 ${meta.altKeyword}`")
	.join("imageAlt: 'destiny 2 cheats'")
	.split("galleryTitle: `Destiny 2 Cheats ${topicName}`")
	.join("galleryTitle: 'destiny 2 cheats'")
	.split("imageAlt: `destiny 2 cheats ${kind} policy`")
	.join("imageAlt: 'destiny 2 cheats'")
	.split("galleryTitle: `Destiny 2 Cheats ${kind} resources`")
	.join("galleryTitle: 'destiny 2 cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
