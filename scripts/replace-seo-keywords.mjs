#!/usr/bin/env node
/**
 * Replace destiny 2 cheats SEO keyword phrases with destiny 2 hacks variants.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Longest-first to avoid partial replacements. */
const REPLACEMENTS = [
	['undetected destiny 2 cheats', 'undetected destiny 2 hacks'],
	['Undetected destiny 2 cheats', 'Undetected destiny 2 hacks'],
	['best destiny 2 cheats', 'best destiny 2 hacks'],
	['Best destiny 2 cheats', 'Best destiny 2 hacks'],
	['destiny 2 cheats 2026', 'destiny 2 hacks 2026'],
	['destiny 2 cheats pc', 'destiny 2 hacks pc'],
	['destiny 2 crucible cheats', 'destiny 2 crucible hacks'],
	['destiny 2 trials cheats', 'destiny 2 trials hacks'],
	['destiny 2 pvp cheats', 'destiny 2 pvp hacks'],
	['buy destiny 2 cheats', 'buy destiny 2 hacks'],
	['Buy destiny 2 cheats', 'Buy destiny 2 hacks'],
	['destiny 2 cheats comparison', 'destiny 2 hacks comparison'],
	['budget destiny 2 cheats', 'budget destiny 2 hacks'],
	['destiny 2 cheats reviews', 'destiny 2 hacks reviews'],
	['destiny 2 cheats support', 'destiny 2 hacks support'],
	['destiny 2 cheats status', 'destiny 2 hacks status'],
	['destiny 2 cheats undetected', 'destiny 2 hacks undetected'],
	['destiny 2 cheats setup', 'destiny 2 hacks setup'],
	['destiny 2 cheats download', 'destiny 2 hacks download'],
	['destiny 2 cheats price', 'destiny 2 hacks price'],
	['destiny 2 cheats monthly', 'destiny 2 hacks monthly'],
	['destiny 2 cheats lifetime', 'destiny 2 hacks lifetime'],
	['destiny 2 cheats faq', 'destiny 2 hacks faq'],
	['destiny 2 cheat comparison', 'destiny 2 hack comparison'],
	['destiny 2 cheat download', 'destiny 2 hack download'],
	['destiny 2 cheat features', 'destiny 2 hack features'],
	['destiny 2 cheat guide', 'destiny 2 hack guide'],
	['destiny 2 cheat menu', 'destiny 2 hack menu'],
	['destiny 2 cheat software', 'destiny 2 hack software'],
	['destiny 2 cheat review', 'destiny 2 hack review'],
	['install destiny 2 cheats', 'install destiny 2 hacks'],
	['destiny 2 cheats', 'destiny 2 hacks'],
	['Destiny 2 cheats', 'Destiny 2 hacks'],
	['d2 cheats', 'd2 hacks'],
];

function applyReplacements(text) {
	let out = text;
	for (const [from, to] of REPLACEMENTS) {
		out = out.split(from).join(to);
	}
	return out;
}

function walk(dir, exts, files = []) {
	for (const name of readdirSync(dir)) {
		const full = path.join(dir, name);
		if (statSync(full).isDirectory()) {
			if (name === 'node_modules' || name === 'dist' || name === '.git') continue;
			walk(full, exts, files);
		} else if (exts.some((e) => name.endsWith(e))) {
			files.push(full);
		}
	}
	return files;
}

const targets = [
	path.join(ROOT, 'src/data'),
	path.join(ROOT, 'scripts/i18n-data'),
	path.join(ROOT, 'scripts/generate-blog-posts.mjs'),
	path.join(ROOT, 'public/locales/en/translation.json'),
];

let changed = 0;
for (const target of targets) {
	const files = statSync(target).isDirectory()
		? walk(target, ['.ts', '.mjs', '.json'])
		: [target];
	for (const file of files) {
		if (file.includes('path-redirects') || file.includes('routing.ts')) continue;
		const before = readFileSync(file, 'utf8');
		const after = applyReplacements(before);
		if (after !== before) {
			writeFileSync(file, after);
			changed++;
			console.log('updated:', path.relative(ROOT, file));
		}
	}
}

console.log(`Done — ${changed} files updated`);
