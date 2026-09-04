#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Destiny 2 source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['destiny-2-esp', 'destiny-2-esp'],
	['destiny-2-aimbot', 'destiny-2-aimbot'],
	["'battleye'", "'battleye'"],
	['battleye-bypass', 'battleye-bypass'],
	['undetected-destiny-2-cheats', 'undetected-destiny-2-cheats'],
	['destiny-2-wallhack', 'destiny-2-wallhack'],
	['destiny-2-radar-hack', 'destiny-2-radar-hack'],
	['destiny-2-cheats-2026', 'destiny-2-cheats-2026'],
	['destiny-2-cheats', 'destiny-2-cheats'],
	['the-rust', 'rust'],
	['Destiny 2's, 'Destiny 2's],
	['Destiny 2's, 'Destiny 2's],
	['Destiny 2 Cheats', 'Destiny 2 Cheats'],
	['destiny 2 cheats', 'destiny 2 cheats'],
	['destiny 2 cheat', 'destiny 2 cheat'],
	['Destiny 2 ESP', 'Destiny 2 ESP'],
	['Destiny 2 Aimbot', 'Destiny 2 Aimbot'],
	['destiny 2 wallhack', 'Destiny 2 wallhack'],
	['destiny 2 radar', 'Destiny 2 radar'],
	['Destiny 2 PvP gunfightss', 'Destiny 2 PvP gunfightss'],
	['Destiny 2 combat', 'Destiny 2 combat'],
	['Destiny 2 patches', 'Destiny 2 patches'],
	['Destiny 2 updates', 'Destiny 2 updates'],
	['Destiny 2 setup', 'Destiny 2 setup'],
	['Destiny 2 license', 'Destiny 2 license'],
	['Destiny 2 licenses', 'Destiny 2 licenses'],
	['Destiny 2 matches', 'Destiny 2 matches'],
	['in Destiny 2', 'in Destiny 2'],
	['for Destiny 2', 'for Destiny 2'],
	['Destiny 2 on', 'Destiny 2 on'],
	['Destiny 2 or', 'Destiny 2 or'],
	['Destiny 2\'s', 'Destiny 2\'s'],
	['Destiny 2 ', 'Destiny 2 '],
	['BattlEye', 'BattlEye'],
	['BattlEye maintenance', 'BattlEye maintenance'],
	['BattlEye bypass', 'BattlEye bypass'],
	['BattlEye Bypass', 'BattlEye Bypass'],
	['BattlEye', 'BattlEye'],
	['battleye', 'battleye'],
	['support@destiny2hack.net', 'support@destiny2hack.net'],
	['maps, zones, and combat points', 'maps, zones, and combat points'],
	['maps, zones and combat points', 'maps, zones and combat points'],
	['raid fights', 'raid fights'],
	['raid fight', 'raid fight'],
	['match rounds', 'match rounds'],
	['extract', 'extract'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['raid timer', 'raid timer'],
	['Crucible matches and Competitive matches', 'Crucible matches and Competitive matches'],
	['Crucible matches and Competitive matches', 'Crucible matches and Competitive matches'],
	['guardians & fireteams', 'guardians & fireteams'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Destiny 2 combat pace'],
	['COD', 'Destiny 2's],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Destiny 2 Cheats',
	game: 'Destiny 2's,
	checkout: 'Zadeyo',
	eac: 'BattlEye',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'maps, zones, and combat points'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
