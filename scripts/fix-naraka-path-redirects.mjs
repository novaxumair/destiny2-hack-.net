#!/usr/bin/env node
/**
 * Fix path-redirects.json: rewrite valorant destinations → naraka and add legacy valorant → naraka 301s.
 * Run: node scripts/fix-naraka-path-redirects.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PATH_REDIRECTS = path.join(ROOT, 'functions/path-redirects.json');

const SLUG_MAP = [
	['valorant-hacks', 'destiny-2-cheats'],
	['valorant-esp', 'destiny-2-esp'],
	['valorant-aimbot', 'destiny-2-aimbot'],
	['valorant-wallhack', 'destiny-2-wallhack'],
	['valorant-radar-hack', 'destiny-2-radar-hack'],
	['valorant-soft-aim', 'destiny-2-soft-aim'],
	['valorant-mod-menu', 'destiny-2-mod-menu'],
	['valorant-cheat-download', 'destiny-2-cheat-download'],
	['valorant-aimbot-hack', 'destiny-2-aimbot-hack'],
	['valorant-esp-hack', 'destiny-2-esp-hack'],
	['valorant-unlock-all', 'destiny-2-unlock-tool'],
	['undetected-valorant-hacks', 'undetected-destiny-2-cheats'],
	['best-valorant-hacks', 'best-destiny-2-cheats'],
	['valorant-hacks-2026', 'destiny-2-cheats-2026'],
	['battleye-bypass', 'battleye-bypass'],
	['valorant-cheats', 'destiny-2-cheats'],
	['valorant-cheat', 'destiny-2-cheat'],
	['hacks-valorant', 'cheats-destiny-2'],
	['valorant', 'naraka'],
];

function rewritePath(p) {
	let out = p;
	for (const [from, to] of SLUG_MAP) {
		out = out.split(from).join(to);
	}
	return out;
}

function addPair(map, from, to) {
	if (!from || !to || from === to) return;
	map[from] = to;
	const noSlash = from.replace(/\/$/, '');
	if (noSlash !== from) map[noSlash] = to;
}

const raw = JSON.parse(await readFile(PATH_REDIRECTS, 'utf8'));
const fixed = {};

for (const [key, value] of Object.entries(raw)) {
	const newKey = rewritePath(key);
	const newValue = rewritePath(value);
	addPair(fixed, newKey, newValue);
}

// Legacy valorant EN paths → naraka
const EN_REDIRECTS = [
	['/valorant-hacks', '/destiny-2-cheats/'],
	['/valorant-esp', '/destiny-2-esp/'],
	['/valorant-aimbot', '/destiny-2-aimbot/'],
	['/valorant-wallhack', '/destiny-2-wallhack/'],
	['/valorant-radar-hack', '/destiny-2-radar-hack/'],
	['/valorant-soft-aim', '/destiny-2-soft-aim/'],
	['/valorant-mod-menu', '/destiny-2-mod-menu/'],
	['/valorant-cheat-download', '/destiny-2-cheat-download/'],
	['/valorant-aimbot-hack', '/destiny-2-aimbot-hack/'],
	['/valorant-esp-hack', '/destiny-2-esp-hack/'],
	['/valorant-unlock-all', '/destiny-2-unlock-tool/'],
	['/undetected-valorant-hacks', '/undetected-destiny-2-cheats/'],
	['/best-valorant-hacks', '/best-destiny-2-cheats/'],
	['/valorant-hacks-2026', '/destiny-2-cheats-2026/'],
	['/battleye-bypass', '/battleye-bypass/'],
	['/valorant-cheats', '/destiny-2-cheats/'],
];

for (const [from, to] of EN_REDIRECTS) {
	addPair(fixed, from, to);
	addPair(fixed, `${from}/`, to);
}

await writeFile(PATH_REDIRECTS, `${JSON.stringify(fixed, null, 2)}\n`);
console.log(`fix-naraka-path-redirects: ${Object.keys(fixed).length} redirect entries`);
