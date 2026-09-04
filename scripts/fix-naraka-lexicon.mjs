#!/usr/bin/env node
/**
 * Final-pass Destiny 2 lexicon cleanup — removes leftover Valorant/Vanguard strings.
 * Run: node scripts/fix-destiny2-lexicon.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'tmp', '.astro', 'valorant-hacks-org']);

/** Ordered — specific patterns first. */
const REPLACEMENTS = [
	['valorant vanguard bypass', 'naraka battleye bypass'],
	['valorant soft aim', 'naraka soft aim'],
	['valorant mod menu', 'naraka mod menu'],
	['valorant external hack', 'naraka external cheat'],
	['valorant 2d radar', 'naraka 2d radar'],
	['soft aim valorant', 'soft aim naraka'],
	['vanguard bypass valorant', 'battleye bypass naraka'],
	['valorant anti cheat bypass', 'naraka anti cheat bypass'],
	['hwid spoofer valorant', 'hwid spoofer naraka'],
	['vanguard update', 'BattlEye update'],
	['vanguard undetected', 'BattlEye undetected'],
	['Vanguard Safe', 'BattlEye Safe'],
	['Vanguard maintenance', 'BattlEye maintenance'],
	['Vanguard rebuilds', 'BattlEye rebuilds'],
	['Vanguard patches', 'BattlEye patches'],
	['Vanguard and Destiny 2', 'BattlEye and Destiny 2'],
	['Vanguard or Destiny 2', 'BattlEye or Destiny 2'],
	['Vanguard', 'BattlEye'],
	['vanguard', 'battleye'],
	['vanlifevalorant', 'vanlifenaraka'],
	['vanLifeValorant', 'vanLifeDestiny 2'],
	['valo hack', 'destiny 2 cheat'],
	['valo cheats', 'destiny 2 cheats'],
	['valorant-patch-notes', 'naraka-patch-notes'],
	['valorant-cosmetics', 'naraka-cosmetics'],
	['valorant-weapon-tier-list', 'naraka-weapon-tier-list'],
	['valorant-loot-run', 'naraka-loot-run'],
	['valorant-competitive-meta', 'naraka-competitive-meta'],
	['valorant-cashout-routes', 'naraka-loot-routes'],
	['valorant-pro-settings', 'naraka-pro-settings'],
	['valorant-warmup-routine', 'naraka-warmup-routine'],
	['free-valorant-hack-download', 'free-destiny-2-cheat-download'],
	['how-long-valorant-hack-setup-takes', 'how-long-destiny-2-cheat-setup-takes'],
	['agent tiers', 'loadout tiers'],
	['agents and abilities', 'heroes and weapons'],
	['agents &', 'heroes &'],
	['agent ESP', 'guardian ESP'],
	['agent markers', 'guardian markers'],
	['internalLinks.vanguard', 'internalLinks.battleye'],
	['Destiny 2 hacks', 'Destiny 2 cheats'],
	['destiny 2 hacks', 'destiny 2 cheats'],
	['destiny 2 hack', 'destiny 2 cheat'],
	['{game} hacks', '{game} cheats'],
	['Hacks FAQ', 'Cheats FAQ'],
	['navPreview: \'Hacks\'', "navPreview: 'Cheats'"],
	["navPreview: 'Hacks'", "navPreview: 'Cheats'"],
	['/products/valorant', '/products/destiny-2'],
	['valo/valo cheats', 'naraka/destiny 2 cheats'],
	['antiCheat: \'Vanguard\'', "antiCheat: 'BattlEye'"],
	['sitemap-meta.ts', 'sitemap-meta.ts'], // noop anchor
];

function walk(dir, files = []) {
	for (const name of readdirSync(dir)) {
		if (SKIP_DIRS.has(name)) continue;
		const full = path.join(dir, name);
		if (statSync(full).isDirectory()) walk(full, files);
		else files.push(full);
	}
	return files;
}

const TEXT_EXT = /\.(ts|tsx|js|mjs|astro|css|json|toml|txt|md|mdc)$/i;
let changed = 0;

for (const file of walk(ROOT)) {
	if (!TEXT_EXT.test(file)) continue;
	if (path.basename(file) === 'fix-destiny2-lexicon.mjs') continue;
	if (path.basename(file) === 'adapt-destiny2.mjs') continue;
	if (path.basename(file) === 'adapt-valorant.mjs') continue;
	let text = readFileSync(file, 'utf8');
	const original = text;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		text = text.split(from).join(to);
	}
	if (text !== original) {
		writeFileSync(file, text, 'utf8');
		changed++;
	}
}

console.log(`fix-destiny2-lexicon: ${changed} file(s) updated`);
