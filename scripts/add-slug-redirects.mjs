#!/usr/bin/env node
/**
 * Adds 301 redirects for old blog and guide slugs after shortening.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PATH_REDIRECTS = path.join(ROOT, 'functions/path-redirects.json');

const BLOG_OLD_TO_NEW = {
	'naraka-patch-notes-guide': 'patch-notes',
	'naraka-cosmetics-guide': 'cosmetics',
	'naraka-weapon-tier-list': 'weapon-tier',
	'naraka-loot-run-strategies': 'loot-runs',
	'naraka-competitive-meta-guide': 'meta',
	'naraka-loot-routes-guide': 'loot-routes',
	'naraka-pro-settings-guide': 'pro-settings',
	'naraka-warmup-routine': 'warmup',
	'destiny-2-cheats-complete-guide-2026': 'cheats-guide',
	'destiny-2-cheats-buyers-guide': 'buyers-guide',
	'destiny-2-cheats-2026-whats-new': 'whats-new',
	'destiny-2-aimbot-settings-guide': 'aimbot-settings',
	'destiny-2-esp-wallhack-explained': 'esp-guide',
	'undetected-destiny-2-cheats-eac': 'undetected-cheats',
	'destiny-2-cheats-vs-cheatvault-comparison': 'vs-cheatvault',
	'elitefn-vs-destiny-2-cheats-two-week-test': 'vs-elitefn',
	'destiny-2-cheats-vs-ghostware-features-pricing': 'vs-ghostware',
	'rust-patch-notes-guide': 'patch-notes',
	'rust-skin-leaks-guide': 'cosmetics',
	'rust-player-tier-list': 'weapon-tier',
	'rust-farming-run-aggressive-strategies': 'loot-runs',
	'rust-competitive-meta-guide': 'meta',
	'rust-loot-routes-guide': 'loot-routes',
	'rust-pro-settings-guide': 'pro-settings',
	'rust-warmup-maps-ranked': 'warmup',
};

function slugify(text) {
	return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function hostname(url) {
	return new URL(url).hostname.replace(/^www\./, '').toLowerCase();
}

function classifyGame(host) {
	const h = host;
	if (h.includes('tarkov') || h.includes('eft')) return 'Escape from Tarkov';
	if (h.includes('fortnite')) return 'Fortnite';
	if (h.includes('destiny')) return 'Destiny 2';
	if (h.includes('warzone')) return 'Call of Duty: Warzone';
	if (h.includes('marvelrival')) return 'Marvel Rivals';
	if (h.includes('valorant') || h.includes('valo')) return 'Valorant';
	if (h.includes('rust')) return 'Rust';
	if (h.includes('thefinal')) return 'The Finals';
	if (h.includes('naraka')) return 'Naraka: Bladepoint';
	return 'PC Gaming';
}

function addRedirect(redirects, from, to) {
	if (from === to || redirects[from]) return 0;
	redirects[from] = to;
	return 1;
}

const redirects = JSON.parse(readFileSync(PATH_REDIRECTS, 'utf8'));
let added = 0;

for (const [oldSlug, newSlug] of Object.entries(BLOG_OLD_TO_NEW)) {
	added += addRedirect(redirects, `/blog/${oldSlug}/`, `/${newSlug}/`);
	added += addRedirect(redirects, `/blog/${oldSlug}`, `/${newSlug}/`);
	// Update existing naraka/rust redirects that pointed to old /blog/naraka-* paths
	for (const [key, val] of Object.entries({ ...redirects })) {
		if (val === `/blog/${oldSlug}/` || val === `/blog/${oldSlug}`) {
			redirects[key] = `/${newSlug}/`;
		}
	}
}

const urlList = (await readFile(path.join(ROOT, 'scripts/guides-url-list.txt'), 'utf8')).trim().split(/\s+/);
for (const url of urlList) {
	try {
		const host = hostname(url);
		const game = classifyGame(host);
		const oldSlug = `${slugify(game)}-${host.replace(/\./g, '-')}-guide`;
		const shortHost = host.replace(/\.(com|net|org|io|gg|co)$/, '').replace(/\./g, '-');
		const newSlug = `${slugify(game)}-${shortHost}-cheats`;
		if (oldSlug !== newSlug) {
			added += addRedirect(redirects, `/guides/${oldSlug}/`, `/guides/${newSlug}/`);
			added += addRedirect(redirects, `/guides/${oldSlug}`, `/guides/${newSlug}/`);
		}
	} catch {
		// skip
	}
}

writeFileSync(PATH_REDIRECTS, `${JSON.stringify(redirects, null, 2)}\n`);
console.log(`Added/updated ${added} slug redirect entries`);
