#!/usr/bin/env node
/**
 * One-time migration: Naraka Cheats → Destiny 2 Cheats (destiny2hack.net).
 * Run from project root: node scripts/adapt-destiny2.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['naraka-aimbot', 'destiny-2-aimbot'],
	['naraka-esp', 'destiny-2-esp'],
	['naraka-wallhack', 'destiny-2-wallhack'],
	['naraka-radar-hack', 'destiny-2-radar-hack'],
	['undetected-naraka-cheats', 'undetected-destiny-2-cheats'],
	['naraka-cheats-2026', 'destiny-2-cheats-2026'],
	['neac-bypass', 'battleye-bypass'],
	['naraka-cheats', 'destiny-2-cheats'],
	['naraka-cheat-download', 'destiny-2-cheat-download'],
	['naraka-mod-menu', 'destiny-2-mod-menu'],
	['naraka-soft-aim', 'destiny-2-soft-aim'],
	['best-naraka-cheats', 'best-destiny-2-cheats'],
	['naraka-aimbot-hack', 'destiny-2-aimbot-hack'],
	['naraka-esp-hack', 'destiny-2-esp-hack'],
	['naraka-unlock-all', 'destiny-2-unlock-tool'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://narakacheats.net/videos/hero.webm', ''],
	['https://www.narakacheats.org', 'https://destiny2hack.net'],
	['https://narakacheats.org', 'https://destiny2hack.net'],
	['www.narakacheats.org', 'destiny2hack.net'],
	['narakacheats.org', 'destiny2hack.net'],
	['support@narakacheats.org', 'support@destiny2hack.net'],
	['name = "naraka-cheats-org"', 'name = "destiny2hack"'],
	['"name": "naraka-cheats"', '"name": "destiny2hack"'],
	['project-name=narakacheats', 'project-name=destiny2hack'],
	['https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/', 'https://store.steampowered.com/app/1085660/Destiny_2/'],
	['https://store.steampowered.com/app/1203220/news/', 'https://www.bungie.net/en/Explore/Detail/News/'],
	['https://store.steampowered.com/app/1203220', 'https://store.steampowered.com/app/1085660'],
	['https://www.reddit.com/r/NARAKA/', 'https://www.reddit.com/r/destiny2/'],
	['https://x.com/narakacheats', 'https://x.com/destiny2hack'],
	['@narakacheats', '@destiny2hack'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fnaraka-bladepoint-novaxware', 'https://zadeyo.com/go/UMAIR?to=%2Fproducts%2Fdestiny-2'],
	['/products/naraka-bladepoint-novaxware', '/products/destiny-2'],
	['/products/naraka', '/products/destiny-2'],
	['undetected-naraka-cheats', 'undetected-destiny-2-cheats'],
	['best-naraka-cheats', 'best-destiny-2-cheats'],
	['naraka-cheat-download', 'destiny-2-cheat-download'],
	['naraka-cheats-2026', 'destiny-2-cheats-2026'],
	['naraka-radar-hack', 'destiny-2-radar-hack'],
	['naraka-aimbot-hack', 'destiny-2-aimbot-hack'],
	['naraka-esp-hack', 'destiny-2-esp-hack'],
	['naraka-unlock-all', 'destiny-2-unlock-tool'],
	['naraka-soft-aim', 'destiny-2-soft-aim'],
	['naraka-mod-menu', 'destiny-2-mod-menu'],
	['naraka-wallhack', 'destiny-2-wallhack'],
	['naraka-aimbot', 'destiny-2-aimbot'],
	['naraka-esp', 'destiny-2-esp'],
	["'naraka-esp'", "'destiny-2-esp'"],
	['"naraka-esp"', '"destiny-2-esp"'],
	["'naraka-aimbot'", "'destiny-2-aimbot'"],
	['"naraka-aimbot"', '"destiny-2-aimbot"'],
	['naraka-cheats', 'destiny-2-cheats'],
	['naraka-cheat', 'destiny-2-cheat'],
	['narakaImages', 'destiny2Images'],
	["from './naraka'", "from './destiny2'"],
	["from '../data/naraka'", "from '../data/destiny2'"],
	["from '../../data/naraka'", "from '../../data/destiny2'"],
	['fetch-naraka-images', 'fetch-destiny2-images'],
	['fetch-naraka-hero', 'fetch-destiny2-hero'],
	['import-naraka-screenshots', 'import-destiny2-screenshots'],
	['naraka-hack-overlays', 'destiny2-hack-overlays'],
	['fix-naraka-copy', 'fix-destiny2-copy'],
	['fix-naraka-content', 'fix-destiny2-content'],
	['fix-naraka-lexicon', 'fix-destiny2-lexicon'],
	['adapt-naraka', 'adapt-destiny2'],
	['trucos-naraka', 'trucos-destiny-2'],
	['triche-naraka', 'triche-destiny-2'],
	['cheats-naraka', 'cheats-destiny-2'],
	['trucchi-naraka', 'trucchi-destiny-2'],
	['cheaty-naraka', 'cheaty-destiny-2'],
	['chity-naraka', 'chity-destiny-2'],
	['chitov-naraka', 'chitov-destiny-2'],
	['chitiv-naraka', 'chitiv-destiny-2'],
	['cheatow-naraka', 'cheatow-destiny-2'],
	['hile-naraka', 'hile-destiny-2'],
	['naraka-hile', 'destiny-2-hile'],
	['naraka-esp-chity', 'destiny-2-esp-chity'],
	['naraka-aimbot-chity', 'destiny-2-aimbot-chity'],
	['unentdeckte-naraka-cheats', 'unentdeckte-destiny-2-cheats'],
	['cheats-naraka-indetectaveis', 'cheats-destiny-2-indetectaveis'],
	['trucchi-naraka-indetectabili', 'trucchi-destiny-2-indetectabili'],
	['niewykrywalne-cheats-naraka', 'niewykrywalne-cheats-destiny-2'],
	['nedecektiruemye-chity-naraka', 'nedecektiruemye-chity-destiny-2'],
	['tespit-edilemeyen-naraka-hileleri', 'tespit-edilemeyen-destiny-2-hileleri'],
	['nedecektovani-chity-naraka', 'nedecektovani-chity-destiny-2'],
	['cheats-naraka-nedetectabile', 'cheats-destiny-2-nedetectabile'],
	['basta-naraka-cheats', 'basta-destiny-2-cheats'],
	['naraka-cheats-funktionen', 'destiny-2-cheats-funktionen'],
	['naraka-cheats-functies', 'destiny-2-cheats-functies'],
	['caracteristicas-trucos-naraka', 'caracteristicas-trucos-destiny-2'],
	['fonctionnalites-triche-naraka', 'fonctionnalites-triche-destiny-2'],
	['recursos-cheats-naraka', 'recursos-cheats-destiny-2'],
	['heroes & ranked teams', 'guardians & fireteams'],
	['hero markers', 'guardian markers'],
	['hero ESP', 'guardian ESP'],
	['hero tiers', 'loadout tiers'],
	['hero skill markers', 'ability markers'],
	['grapple routes', 'movement routes'],
	['battle royale rounds', 'Crucible matches'],
	['Quick Match', 'Quickplay'],
	['Showdown', 'Trials of Osiris'],
	['ranked matches', 'Competitive matches'],
	['souljade', 'Power level'],
	['melee combat', 'PvP gunfights'],
	['melee combats', 'PvP gunfights'],
	['24 Entertainment', 'Bungie'],
	['Riot Games', 'Bungie'],
	['NarakaCheatsSite', 'Destiny2CheatsSite'],
	['Naraka Intel', 'Destiny 2 Intel'],
	['Naraka Cheats', 'Destiny 2 Cheats'],
	['Naraka Bladepoint', 'Destiny 2'],
	['naraka cheats', 'destiny 2 cheats'],
	['naraka cheat', 'destiny 2 cheat'],
	['naraka hacks', 'destiny 2 hacks'],
	['naraka hack', 'destiny 2 hack'],
	['Naraka ESP', 'Destiny 2 ESP'],
	['Naraka Aimbot', 'Destiny 2 Aimbot'],
	['naraka esp', 'destiny 2 esp'],
	['naraka aimbot', 'destiny 2 aimbot'],
	['naraka wallhack', 'destiny 2 wallhack'],
	['naraka radar', 'destiny 2 radar'],
	['Buy Naraka Cheats', 'Buy Destiny 2 Cheats'],
	['what-are-naraka-cheats', 'what-are-destiny-2-cheats'],
	['are-naraka-cheats-undetected-in-2026', 'are-destiny-2-cheats-undetected-in-2026'],
	['what-is-a-naraka-wallhack', 'what-is-a-destiny-2-wallhack'],
	['does-naraka-cheats-include-radar-hack', 'does-destiny-2-cheats-include-radar-hack'],
	['neac-anti-cheat-and-naraka-cheats', 'battleye-anti-cheat-and-destiny-2-cheats'],
	['buy-undetected-naraka-cheats-windows-pc', 'buy-undetected-destiny-2-cheats-windows-pc'],
	['naraka-soft-aim-review', 'destiny-2-soft-aim-review'],
	['naraka-esp-ranked-review', 'destiny-2-esp-crucible-review'],
	['naraka-cloud-dma-review', 'destiny-2-stream-proof-review'],
	['naraka-cheat-setup-review', 'destiny-2-cheat-setup-review'],
	['naraka-hero-esp-review', 'destiny-2-guardian-esp-review'],
	['naraka-soft-aim-ranked-review', 'destiny-2-aimbot-crucible-review'],
	['naraka-radar-hack-review', 'destiny-2-radar-hack-review'],
	['naraka-neac-update-review', 'destiny-2-battleye-update-review'],
	['naraka-melee-soft-aim-review', 'destiny-2-silent-aim-review'],
	['naraka-screenshot', 'destiny2-screenshot'],
	['naraka-cheats-logo', 'destiny2-cheats-logo'],
	['naraka-cheats-hero', 'destiny2-cheats-hero'],
	['naraka-hero-banner', 'destiny2-hero-banner'],
	['naraka-hero-ghost', 'destiny2-hero-ghost'],
	['naraka-hero-source', 'destiny2-hero-source'],
	['neac-bypass', 'battleye-bypass'],
	['NEAC bypass', 'BattlEye bypass'],
	['NEAC Bypass', 'BattlEye Bypass'],
	['NEAC maintenance', 'BattlEye maintenance'],
	['NEAC rebuilds', 'BattlEye rebuilds'],
	['NEAC update', 'BattlEye update'],
	['NEAC updates', 'BattlEye updates'],
	['NEAC patch', 'BattlEye patch'],
	['NEAC patches', 'BattlEye patches'],
	["'neac'", "'battleye'"],
	['| neac', '| battleye'],
	['neac-anti-cheat', 'battleye-anti-cheat'],
	['NEAC', 'BattlEye'],
	['neac', 'battleye'],
	['in Naraka', 'in Destiny 2'],
	['for Naraka', 'for Destiny 2'],
	['Naraka on', 'Destiny 2 on'],
	['Naraka or', 'Destiny 2 or'],
	["Naraka's", "Destiny 2's"],
	['Naraka ', 'Destiny 2 '],
	['Naraka,', 'Destiny 2,'],
	['Naraka.', 'Destiny 2.'],
	['Naraka', 'Destiny 2'],
	['https://www.easy.ac/', 'https://www.battleye.com/'],
	['https://naraka.fandom.com/wiki/NARAKA:_BLADEPOINT', 'https://destiny.fandom.com/wiki/Destiny_2'],
	['https://naraka.fandom.com', 'https://destiny.fandom.com'],
	['naraka.fandom.com', 'destiny.fandom.com'],
	['zadeyo-logo-full.webp', 'destiny2-logo-full.webp'],
	['zadeyo-logo.webp', 'destiny2-logo.webp'],
	['zadeyo-logo.png', 'destiny2-logo.png'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro', 'tmp']);
const SKIP_FILES = new Set(['adapt-naraka.mjs', 'adapt-destiny2.mjs']);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameNarakaTs() {
	const from = path.join(ROOT, 'src', 'data', 'naraka.ts');
	const to = path.join(ROOT, 'src', 'data', 'destiny2.ts');
	try {
		await rename(from, to);
		console.log('Renamed naraka.ts → destiny2.ts');
	} catch (e) {
		console.warn(`naraka.ts rename: ${e.message}`);
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'destiny-2-aimbot': 'destiny-2-aimbot',
		'destiny-2-esp': 'destiny-2-esp',
		'destiny-2-wallhack': 'wallhack',
		'destiny-2-radar-hack': 'radar',
		'undetected-destiny-2-cheats': 'undetected',
		'destiny-2-cheats-2026': 'cheats-2026',
		'battleye-bypass': 'battleye',
		'destiny-2-cheats': 'hacks',
		'destiny-2-cheat-download': 'cheat-download',
		'destiny-2-mod-menu': 'mod-menu',
		'destiny-2-soft-aim': 'soft-aim',
		'best-destiny-2-cheats': 'best-cheats',
		'destiny-2-aimbot-hack': 'aimbot-hack',
		'destiny-2-esp-hack': 'esp-hack',
		'destiny-2-unlock-tool': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('naraka')) continue;
		const newName = file
			.replace(/naraka-cheats/g, 'destiny2-cheats')
			.replace(/naraka/g, 'destiny2');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Naraka Cheats → Destiny 2 Cheats (destiny2hack.net)...\n');
	await renamePageDirs();
	await renameNarakaTs();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: update brand.ts, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
