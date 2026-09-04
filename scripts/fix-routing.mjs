#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clea Destiny 2 source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['destiny-2-esp', 'destiny-2-esp'],
	['destiny-2-aimbot', 'destiny-2-aimbot'],
	['battleye', 'battleye'],
	['undetected-destiny-2-cheats', 'undetected-destiny-2-cheats'],
	['destiny-2-wallhack', 'destiny-2-wallhack'],
	['destiny-2-radar-hack', 'destiny-2-radar-hack'],
	['destiny-2-cheats-2026', 'destiny-2-cheats-2026'],
	['battleye-bypass', 'battleye-bypass'],
	['destiny2hack.net', 'destiny2hack.net'],
	['trucos-destiny-2', 'trucos-destiny-2'],
	['triche-destiny-2', 'triche-destiny-2'],
	['destiny-2-cheats', 'destiny-2-cheats'],
	['cheats-destiny-2', 'cheats-destiny-2'],
	['trucchi-destiny-2', 'trucchi-destiny-2'],
	['cheaty-destiny-2', 'cheaty-destiny-2'],
	['chity-destiny-2', 'chity-destiny-2'],
	['chitov-destiny-2', 'chitov-destiny-2'],
	['chitiv-destiny-2', 'chitiv-destiny-2'],
	['cheatow-destiny-2', 'cheatow-destiny-2'],
	['hile-destiny-2', 'hile-destiny-2'],
	['destiny-2-hile', 'destiny-2-hile'],
	['destiny-2-esp-chity', 'destiny-2-esp-chity'],
	['destiny-2-aimbot-chity', 'destiny-2-aimbot-chity'],
	['unentdeckte-destiny-2-cheats', 'unentdeckte-destiny-2-cheats'],
	['cheats-destiny-2-indetectaveis', 'cheats-destiny-2-indetectaveis'],
	['trucchi-destiny-2-indetectabili', 'trucchi-destiny-2-indetectabili'],
	['niewykrywalne-cheats-destiny-2', 'niewykrywalne-cheats-destiny-2'],
	['nedecektiruemye-chity-destiny-2', 'nedecektiruemye-chity-destiny-2'],
	['tespit-edilemeyen-destiny-2-hileleri', 'tespit-edilemeyen-destiny-2-hileleri'],
	['nedecektovani-chity-destiny-2', 'nedecektovani-chity-destiny-2'],
	['cheats-destiny-2-nedetectabile', 'cheats-destiny-2-nedetectabile'],
	['basta-destiny-2-cheats', 'basta-destiny-2-cheats'],
	['battleye-bypass-trucos-destiny-2', 'battleye-bypass-trucos-destiny-2'],
	['battleye-bypass-triche-destiny-2', 'battleye-bypass-triche-destiny-2'],
	['battleye-bypass-hacks-valorant', 'battleye-bypass-hacks-valorant'],
	['battleye-bypass-chity-destiny-2', 'battleye-bypass-chity-destiny-2'],
	['battleye-bypass-rust', 'battleye-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'battleye': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich destiny-2-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/the-destiny-2-cheats-hero.webp',
	'destiny-2-esp': '/images/the-destiny-2-cheats-esp-wallhack.webp',
	'destiny-2-aimbot': '/images/the-destiny-2-cheats-aimbot-combat.webp',
	features: '/images/destiny-2-cheats-package.webp',
	pricing: '/images/destiny-2-cheats-cover.webp',
	setup: '/images/rust-loadout-builder.webp',
	updates: '/images/rust-header-art.webp',
	faq: '/images/rust-pack-fight.webp',
	support: '/images/destiny-2-cheats-package.webp',
	undetected: '/images/rust-survival-combat.webp',
	wallhack: '/images/the-destiny-2-cheats-esp-wallhack.webp',
	radar: '/images/rust-player-esp.webp',
	'battleye': '/images/rust-reboot-van-fight.webp',
	'cheats-2026': '/images/the-destiny-2-cheats-hero.webp',
	privacy: '/images/the-destiny-2-cheats-aimbot-combat.webp',
	refund: '/images/destiny-2-cheats-cover.webp',
	terms: '/images/destiny-2-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'destiny-2-esp', 'destiny-2-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'battleye',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'destiny-2-esp' | 'destiny-2-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'battleye' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'raidFight');
	content = content.replace(/alMazrah/g, 'raidMap');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
