#!/usr/bin/env node
/**
 * Shortens localized URL slugs — replaces entire localizedSlugs export.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const PATH_REDIRECTS = path.join(ROOT, 'functions/path-redirects.json');

const LOCALES = [
	'en', 'es', 'fr', 'de', 'pt', 'it', 'nl', 'pl', 'ru', 'tr', 'ar',
	'ja', 'ko', 'zh', 'hi', 'id', 'th', 'vi', 'uk', 'cs', 'ro', 'sv',
];

/** English slug stays as-is; non-EN locales get short slug. */
const EN_SLUGS = {
	home: '',
	'destiny-2-esp': 'destiny-2-esp',
	'destiny-2-aimbot': 'destiny-2-aimbot',
	features: 'features',
	pricing: 'pricing',
	setup: 'setup',
	updates: 'updates',
	faq: 'faq',
	support: 'support',
	undetected: 'undetected-destiny-2-cheats',
	wallhack: 'destiny-2-wallhack',
	radar: 'destiny-2-radar-hack',
	battleye: 'battleye-bypass',
	'cheats-2026': 'destiny-2-cheats-2026',
	hacks: 'destiny-2-cheats',
	'cheat-download': 'destiny-2-cheat-download',
	'mod-menu': 'destiny-2-mod-menu',
	'soft-aim': 'destiny-2-soft-aim',
	'best-cheats': 'best-destiny-2-cheats',
	'aimbot-hack': 'destiny-2-aimbot-hack',
	'esp-hack': 'destiny-2-esp-hack',
	'unlock-all': 'destiny-2-unlock-tool',
	privacy: 'privacy-policy',
	refund: 'refund-policy',
	terms: 'terms',
};

const SHORT = {
	'destiny-2-esp': 'esp',
	'destiny-2-aimbot': 'aimbot',
	features: 'features',
	pricing: 'pricing',
	setup: 'setup',
	updates: 'updates',
	faq: 'faq',
	support: 'support',
	undetected: 'undetected',
	wallhack: 'wallhack',
	radar: 'radar',
	battleye: 'battleye',
	'cheats-2026': 'cheats-2026',
	hacks: 'cheats',
	'cheat-download': 'download',
	'mod-menu': 'mod-menu',
	'soft-aim': 'soft-aim',
	'best-cheats': 'best',
	'aimbot-hack': 'aimbot-hack',
	'esp-hack': 'esp-hack',
	'unlock-all': 'unlock',
	privacy: 'privacy',
	refund: 'refund',
	terms: 'terms',
};

const QUOTED_KEYS = new Set([
	'destiny-2-esp', 'destiny-2-aimbot', 'battleye', 'cheats-2026',
	'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
]);

function formatKey(pageId) {
	return QUOTED_KEYS.has(pageId) ? `'${pageId}'` : pageId;
}

function extractSlugBlock(src, pageId) {
	const slice = src.slice(src.indexOf('export const localizedSlugs'));
	const keys = [formatKey(pageId), `'${pageId}'`, pageId];
	let blockStart = -1;
	for (const key of keys) {
		blockStart = slice.indexOf(`${key}: {`);
		if (blockStart !== -1) break;
	}
	if (blockStart === -1) throw new Error(`Missing block: ${pageId}`);
	let depth = 0;
	const matchedKey = slice.slice(blockStart, slice.indexOf(': {', blockStart));
	let i = blockStart + matchedKey.length + 3;
	for (; i < slice.length; i++) {
		if (slice[i] === '{') depth++;
		if (slice[i] === '}') {
			depth--;
			if (depth === 0) break;
		}
	}
	let end = i + 1;
	if (slice[end] === ',') end++;
	const block = slice.slice(blockStart, end);
	const slugs = {};
	for (const row of block.matchAll(/(\w+):\s*'([^']*)'/g)) {
		slugs[row[1]] = row[2];
	}
	return { slugs, absStart: src.indexOf('export const localizedSlugs') + blockStart, absEnd: src.indexOf('export const localizedSlugs') + end };
}

function formatBlock(pageId, slugs) {
	const key = formatKey(pageId);
	const lines = LOCALES.map((l) => `\t\t${l}: '${slugs[l]}',`).join('\n');
	return `\t${key}: {\n${lines}\n\t},`;
}

let routing = readFileSync(ROUTING, 'utf8');
const redirects = JSON.parse(readFileSync(PATH_REDIRECTS, 'utf8'));
let redirectCount = 0;

// Collect old slugs first
const oldByPage = {};
for (const pageId of Object.keys(EN_SLUGS)) {
	oldByPage[pageId] = extractSlugBlock(routing, pageId).slugs;
}

// Build new localizedSlugs section
const newBlocks = Object.keys(EN_SLUGS).map((pageId) => {
	const slugs = {};
	for (const locale of LOCALES) {
		slugs[locale] = locale === 'en' ? EN_SLUGS[pageId] : (SHORT[pageId] ?? EN_SLUGS[pageId]);
	}
	return formatBlock(pageId, slugs);
});

const startMarker = 'export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {';
const endMarker = '\n};\n\nexport const pageIds';
const startIdx = routing.indexOf(startMarker);
const endIdx = routing.indexOf(endMarker);
if (startIdx === -1 || endIdx === -1) throw new Error('Could not find localizedSlugs boundaries');

routing = routing.slice(0, startIdx) + startMarker + '\n' + newBlocks.join('\n') + endMarker + routing.slice(endIdx + endMarker.length);

for (const pageId of Object.keys(EN_SLUGS)) {
	const shortSlug = SHORT[pageId] ?? EN_SLUGS[pageId];
	for (const locale of LOCALES) {
		if (locale === 'en') continue;
		const oldSlug = oldByPage[pageId][locale];
		if (!oldSlug || oldSlug === shortSlug) continue;
		const oldPath = `/${locale}/${oldSlug}/`;
		const newPath = `/${locale}/${shortSlug}/`;
		if (!redirects[oldPath]) {
			redirects[oldPath] = newPath;
			redirects[`/${locale}/${oldSlug}`] = newPath;
			redirectCount += 2;
		}
	}
}

writeFileSync(ROUTING, routing);
writeFileSync(PATH_REDIRECTS, `${JSON.stringify(redirects, null, 2)}\n`);
console.log(`Replaced localizedSlugs with short slugs`);
console.log(`Added ${redirectCount} locale redirect entries`);
