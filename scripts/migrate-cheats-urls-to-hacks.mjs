#!/usr/bin/env node
/**
 * Migrate URL slugs from destiny-2-cheats → destiny-2-cheats (paths + sitemaps).
 * Generates 301 redirects in functions/path-redirects.json from old routing slugs.
 * Run: node scripts/migrate-cheats-urls-to-hacks.mjs
 */
import { readFile, writeFile, readdir, rename, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const PATH_REDIRECTS = path.join(ROOT, 'functions/path-redirects.json');

const SKIP_DIRS = new Set([
	'node_modules',
	'dist',
	'.git',
	'tmp',
	'.astro',
	'the-finals-cheats-org',
	'destiny-2-cheats-org-audit',
]);
const SKIP_FILES = new Set(['package-lock.json', 'migrate-cheats-urls-to-hacks.mjs']);

/** Ordered — longest / most specific first. Image asset names are excluded via guard. */
const SLUG_REPLACEMENTS = [
	['undetected-destiny-2-cheats-eac', 'undetected-destiny-2-cheats-eac'],
	['undetected-destiny-2-cheats', 'undetected-destiny-2-cheats'],
	['unentdeckte-destiny-2-cheats', 'unentdeckte-destiny-2-cheats'],
	['buy-undetected-destiny-2-cheats-windows-pc', 'buy-undetected-destiny-2-cheats-windows-pc'],
	['battleye-anti-cheat-and-destiny-2-cheats', 'battleye-anti-cheat-and-destiny-2-cheats'],
	['are-destiny-2-cheats-undetected-in-2026', 'are-destiny-2-cheats-undetected-in-2026'],
	['what-are-destiny-2-cheats', 'what-are-destiny-2-cheats'],
	['does-destiny-2-cheats-include-radar-hack', 'does-destiny-2-cheats-include-radar-hack'],
	['destiny-2-cheats-vs-ghostware-features-pricing', 'destiny-2-cheats-vs-ghostware-features-pricing'],
	['destiny-2-cheats-vs-cheatvault-comparison', 'destiny-2-cheats-vs-cheatvault-comparison'],
	['elitefn-vs-destiny-2-cheats-two-week-test', 'elitefn-vs-destiny-2-cheats-two-week-test'],
	['destiny-2-cheats-complete-guide-2026', 'destiny-2-cheats-complete-guide-2026'],
	['destiny-2-cheats-2026-whats-new', 'destiny-2-cheats-2026-whats-new'],
	['destiny-2-cheats-buyers-guide', 'destiny-2-cheats-buyers-guide'],
	['best-destiny-2-cheats', 'best-destiny-2-cheats'],
	['beste-destiny-2-cheats', 'beste-destiny-2-cheats'],
	['basta-destiny-2-cheats', 'basta-destiny-2-cheats'],
	['nejlepsi-destiny-2-cheats', 'nejlepsi-destiny-2-cheats'],
	['destiny-2-cheats-2026', 'destiny-2-cheats-2026'],
	['destiny-2-cheats-funktionen', 'destiny-2-cheats-funktionen'],
	['destiny-2-cheats-functies', 'destiny-2-cheats-functies'],
	['destiny-2-cheats-funkce', 'destiny-2-cheats-funkce'],
	['destiny-2-cheats-funktioner', 'destiny-2-cheats-funktioner'],
	['destiny-2-cheats-features', 'destiny-2-cheats-features'],
	['destiny-2-cheats-preise', 'destiny-2-cheats-preise'],
	['destiny-2-cheats-prijzen', 'destiny-2-cheats-prijzen'],
	['destiny-2-cheats-priser', 'destiny-2-cheats-priser'],
	['destiny-2-cheats-pricing', 'destiny-2-cheats-pricing'],
	['destiny-2-cheats-ceny', 'destiny-2-cheats-ceny'],
	['destiny-2-cheats-installation', 'destiny-2-cheats-installation'],
	['destiny-2-cheats-installatie', 'destiny-2-cheats-installatie'],
	['destiny-2-cheats-instalace', 'destiny-2-cheats-instalace'],
	['destiny-2-cheats-setup', 'destiny-2-cheats-setup'],
	['destiny-2-cheats-updates', 'destiny-2-cheats-updates'],
	['destiny-2-cheats-uppdateringar', 'destiny-2-cheats-uppdateringar'],
	['destiny-2-cheats-aktualizace', 'destiny-2-cheats-aktualizace'],
	['destiny-2-cheats-faq', 'destiny-2-cheats-faq'],
	['destiny-2-cheats-support', 'destiny-2-cheats-support'],
	['destiny-2-cheats-podpora', 'destiny-2-cheats-podpora'],
	['niewykrywalne-cheats-destiny-2', 'niewykrywalne-cheats-destiny-2'],
	['najlepsze-cheats-destiny-2', 'najlepsze-hacks-valorant'],
	['melhores-cheats-destiny-2', 'melhores-hacks-valorant'],
	['cele-mai-bune-cheats-destiny-2', 'cele-mai-bune-hacks-valorant'],
	['cheats-destiny-2-indetectaveis', 'cheats-destiny-2-indetectaveis'],
	['cheats-destiny-2-nedetectabile', 'cheats-destiny-2-nedetectabile'],
	['cheats-destiny-2-2026', 'hacks-valorant-2026'],
	['hacks-cheats-destiny-2', 'hacks-valorant'],
	['faq-cheats-destiny-2', 'faq-hacks-valorant'],
	['functii-cheats-destiny-2', 'functii-hacks-valorant'],
	['preturi-cheats-destiny-2', 'preturi-hacks-valorant'],
	['actualizari-cheats-destiny-2', 'actualizari-hacks-valorant'],
	['instalare-cheats-destiny-2', 'instalare-hacks-valorant'],
	['suport-cheats-destiny-2', 'suport-hacks-valorant'],
	['recursos-cheats-destiny-2', 'recursos-cheats-destiny-2'],
	['precos-cheats-destiny-2', 'precos-hacks-valorant'],
	['atualizacoes-cheats-destiny-2', 'atualizacoes-hacks-valorant'],
	['instalacao-cheats-destiny-2', 'instalacao-hacks-valorant'],
	['suporte-cheats-destiny-2', 'suporte-hacks-valorant'],
	['download-cheats-destiny-2', 'download-hacks-valorant'],
	['menu-mod-cheats-destiny-2', 'menu-mod-hacks-valorant'],
	['meniu-mod-cheats-destiny-2', 'meniu-mod-hacks-valorant'],
	['soft-aim-cheats-destiny-2', 'soft-aim-hacks-valorant'],
	['aimbot-hack-cheats-destiny-2', 'aimbot-hack-hacks-valorant'],
	['esp-hack-cheats-destiny-2', 'esp-hack-hacks-valorant'],
	['unlock-all-cheats-destiny-2', 'unlock-all-hacks-valorant'],
	['wallhack-cheats-destiny-2', 'wallhack-hacks-valorant'],
	['radar-hack-cheats-destiny-2', 'radar-hack-hacks-valorant'],
	['descarcare-cheats-destiny-2', 'descarcare-hacks-valorant'],
	['cheats-destiny-2-esp', 'hacks-destiny-2-esp'],
	['cheats-destiny-2-aimbot', 'hacks-destiny-2-aimbot'],
	['battleye-bypass-cheats', 'battleye-bypass-hacks'],
	['/destiny-2-cheats/', '/destiny-2-cheats/'],
	['/destiny-2-cheats', '/destiny-2-cheats'],
	["'destiny-2-cheats'", "'destiny-2-cheats'"],
	['"destiny-2-cheats"', '"destiny-2-cheats"'],
];

const IMAGE_ASSET_PREFIX = '/images/destiny-2-cheats';

function applySlugReplacements(text) {
	let out = text;
	for (const [from, to] of SLUG_REPLACEMENTS) {
		if (!out.includes(from)) continue;
		out = out
			.split('\n')
			.map((line) => {
				// Never rewrite static image asset filenames.
				if (line.includes('/images/destiny-2-cheats')) {
					return line;
				}
				return line.split(from).join(to);
			})
			.join('\n');
	}
	return out;
}

function parseEnglishPaths(src) {
	const block = src.match(/export const englishPaths[\s\S]*?=\s*\{([\s\S]*?)\n\};/);
	if (!block) throw new Error('englishPaths block not found');
	/** @type {Record<string, string>} */
	const paths = {};
	for (const row of block[1].matchAll(/\t(?:'([^']+)'|(\w+)):\s*'([^']*)',/g)) {
		paths[row[1] ?? row[2]] = row[3];
	}
	return paths;
}

function parseLocalizedSlugs(src) {
	const localized = src.slice(src.indexOf('export const localizedSlugs'));
	/** @type {Record<string, Record<string, string>>} */
	const slugs = {};
	for (const block of localized.matchAll(/\t(?:'([^']+)'|(\w+)):\s*\{([\s\S]*?)\n\t\},/g)) {
		const pageId = block[1] ?? block[2];
		slugs[pageId] = {};
		for (const row of block[3].matchAll(/\t(\w+):\s*'([^']*)',/g)) {
			slugs[pageId][row[1]] = row[2];
		}
	}
	return slugs;
}

function localePath(locale, slug) {
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

function addRedirectPair(map, fromPath, toPath) {
	if (!fromPath || !toPath || fromPath === toPath) return;
	map[fromPath] = toPath;
	const noSlash = fromPath.replace(/\/$/, '');
	if (noSlash !== fromPath) map[noSlash] = toPath;
}

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function shouldProcess(file) {
	const rel = path.relative(ROOT, file);
	if (SKIP_FILES.has(path.basename(file))) return false;
	if (rel.startsWith('public/images/')) return false;
	if (/\.(png|jpg|jpeg|webp|gif|ico|woff2?|mp4)$/i.test(file)) return false;
	return true;
}

const DIR_RENAMES = [
	['src/pages/destiny-2-cheats', 'src/pages/destiny-2-cheats'],
	['src/pages/best-destiny-2-cheats', 'src/pages/best-destiny-2-cheats'],
	['src/pages/undetected-destiny-2-cheats', 'src/pages/undetected-destiny-2-cheats'],
	['src/pages/destiny-2-cheats-2026', 'src/pages/destiny-2-cheats-2026'],
];

// --- Parse routing before migration ---
const routingBefore = await readFile(ROUTING, 'utf8');
const englishBefore = parseEnglishPaths(routingBefore);
const slugsBefore = parseLocalizedSlugs(routingBefore);

// --- Apply text replacements across repo ---
let changed = 0;
const files = await walk(ROOT);
for (const file of files) {
	if (!shouldProcess(file)) continue;
	const original = await readFile(file, 'utf8');
	const updated = applySlugReplacements(original);
	if (updated !== original) {
		await writeFile(file, updated, 'utf8');
		changed++;
	}
}

// Fix duplicate check in routing.ts
let routing = await readFile(ROUTING, 'utf8');
routing = routing.replace(
	"if (withSlash === '/destiny-2-cheats/' || withSlash === '/destiny-2-cheats/')",
	"if (withSlash === '/destiny-2-cheats/' || withSlash === '/destiny-2-cheats/')",
);
await writeFile(ROUTING, routing, 'utf8');

// --- Rename page directories ---
for (const [fromRel, toRel] of DIR_RENAMES) {
	const from = path.join(ROOT, fromRel);
	const to = path.join(ROOT, toRel);
	try {
		await access(from);
		await rename(from, to);
		console.log(`renamed ${fromRel} → ${toRel}`);
	} catch {
		// already migrated
	}
}

// --- Build redirects from slug diff ---
const routingAfter = await readFile(ROUTING, 'utf8');
const englishAfter = parseEnglishPaths(routingAfter);
const slugsAfter = parseLocalizedSlugs(routingAfter);

const existingRedirects = JSON.parse(await readFile(PATH_REDIRECTS, 'utf8'));
const newRedirects = { ...existingRedirects };

for (const [pageId, oldPath] of Object.entries(englishBefore)) {
	const newPath = englishAfter[pageId];
	if (oldPath && newPath && oldPath !== newPath) {
		addRedirectPair(newRedirects, oldPath.replace(/\/$/, ''), newPath);
		addRedirectPair(newRedirects, oldPath, newPath);
	}
}

for (const [pageId, localeMap] of Object.entries(slugsBefore)) {
	const afterMap = slugsAfter[pageId] ?? {};
	for (const [locale, oldSlug] of Object.entries(localeMap)) {
		const newSlug = afterMap[locale];
		if (oldSlug === newSlug) continue;
		const from = localePath(locale, oldSlug);
		const to = localePath(locale, newSlug);
		addRedirectPair(newRedirects, from, to);
	}
}

await writeFile(PATH_REDIRECTS, `${JSON.stringify(newRedirects, null, 2)}\n`);

console.log(`\nmigrate-cheats-urls-to-hacks: ${changed} file(s) updated`);
console.log(
	`Added/updated ${Object.keys(newRedirects).length - Object.keys(existingRedirects).length} redirect entries in path-redirects.json`,
);
