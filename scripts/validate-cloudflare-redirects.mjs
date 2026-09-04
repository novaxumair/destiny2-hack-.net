#!/usr/bin/env node
/**
 * Guardrail: Cloudflare Workers static assets allow max 100 dynamic _redirects rules.
 * All production redirects live in src/worker.ts + functions/*.json — keep _redirects empty.
 */
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REDIRECTS = path.join(ROOT, 'public/_redirects');
const DIST_REDIRECTS = path.join(ROOT, 'dist/_redirects');
const MAX_RULES = 0;

function countRules(text) {
	let rules = 0;
	for (const line of text.split(/\r?\n/)) {
		const t = line.trim();
		if (!t || t.startsWith('#')) continue;
		rules += 1;
	}
	return rules;
}

function validateFile(label, filePath) {
	if (!existsSync(filePath)) return;
	const text = readFileSync(filePath, 'utf8');
	const rules = countRules(text);
	if (rules > MAX_RULES) {
		console.error(`✗ ${label}: ${rules} redirect rules (max ${MAX_RULES} for Cloudflare safety)`);
		process.exit(1);
	}
	if (/\*\s|\s\*\/|\/\*/.test(text)) {
		console.error(`✗ ${label}: splat rules are not allowed — use src/worker.ts instead`);
		process.exit(1);
	}
	console.log(`✓ ${label}: ${rules} redirect rule(s) (within Cloudflare limit)`);
}

validateFile('public/_redirects', REDIRECTS);
if (existsSync(path.join(ROOT, 'dist'))) {
	validateFile('dist/_redirects', DIST_REDIRECTS);
}

function validateRedirectMaps() {
	const pathRedirects = JSON.parse(readFileSync(path.join(ROOT, 'functions/path-redirects.json'), 'utf8'));
	const cannibalRedirects = JSON.parse(readFileSync(path.join(ROOT, 'functions/cannibal-redirects.json'), 'utf8'));
	const loops = [];
	for (const [from, to] of Object.entries({ ...pathRedirects, ...cannibalRedirects })) {
		if (from === to) loops.push(from);
	}
	if (loops.length > 0) {
		console.error(`✗ redirect maps contain ${loops.length} self-loop(s): ${loops.slice(0, 5).join(', ')}`);
		process.exit(1);
	}
	console.log('✓ redirect maps: no self-loops');
}

validateRedirectMaps();
