#!/usr/bin/env node
/** Clean remaining Naraka/Bladepoint references after adapt-destiny2.mjs */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const REPLACEMENTS = [
	[/naraka bladepoint hacks/gi, 'destiny 2 hacks'],
	[/naraka bladepoint cheats/gi, 'destiny 2 cheats'],
	[/naraka bladepoint hack/gi, 'destiny 2 hack'],
	[/naraka bladepoint cheat/gi, 'destiny 2 cheat'],
	[/naraka bladepoint/gi, 'Destiny 2'],
	[/naraka soft aim/gi, 'destiny 2 soft aim'],
	[/naraka mod menu/gi, 'destiny 2 mod menu'],
	[/naraka 2d radar/gi, 'destiny 2 radar'],
	[/naraka battleye bypass/gi, 'destiny 2 battleye bypass'],
	[/battleye bypass naraka/gi, 'battleye bypass destiny 2'],
	[/naraka anti cheat bypass/gi, 'destiny 2 anti cheat bypass'],
	[/hwid spoofer naraka/gi, 'hwid spoofer destiny 2'],
	[/naraka external cheat/gi, 'destiny 2 external cheat'],
	[/soft aim naraka/gi, 'soft aim destiny 2'],
	[/https:\/\/www\.naraka\.com\/en\//g, 'https://www.battleye.com/'],
	[/enemy heroes/gi, 'enemy guardians'],
	[/hero markers/gi, 'guardian markers'],
	[/hero esp/gi, 'guardian esp'],
	[/hero tiers/gi, 'loadout meta'],
	[/2D radar/g, 'radar overlay'],
	[/2d radar/g, 'radar overlay'],
	[/soft aim/gi, 'aimbot'],
	[/Soft aim/g, 'Aimbot'],
	[/glowing red neon logo/gi, 'glowing neon cyan and pink fire aspect'],
	[/Trials of Osiris/g, 'Trials'],
	[/Quickplay/g, 'Quick Play'],
	['"naraka" "submit a guest post"', '"destiny 2" "submit a guest post"'],
	[/meilleures-triches-naraka/g, 'meilleures-triches-destiny-2'],
	[/vanlifenaraka/gi, 'vanlifed2'],
	[/xKrypt0_Naraka/g, 'xKrypt0_D2'],
];

const TARGET_DIRS = ['src', 'public/locales', 'scripts/i18n-data', 'functions'];
const EXT = new Set(['.ts', '.tsx', '.astro', '.json', '.mjs', '.css', '.txt', '.md']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const e of entries) {
		if (['node_modules', 'dist', '.git'].includes(e.name)) continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

async function main() {
	let changed = 0;
	for (const dir of TARGET_DIRS) {
		const files = await walk(path.join(ROOT, dir));
		for (const file of files) {
			if (!EXT.has(path.extname(file))) continue;
			if (file.includes('adapt-destiny2') || file.includes('adapt-naraka')) continue;
			const orig = await readFile(file, 'utf8');
			let text = orig;
			for (const [from, to] of REPLACEMENTS) {
				text = text.replace(from, to);
			}
			if (text !== orig) {
				await writeFile(file, text, 'utf8');
				changed++;
			}
		}
	}
	console.log(`Fixed ${changed} files`);
}

main();
