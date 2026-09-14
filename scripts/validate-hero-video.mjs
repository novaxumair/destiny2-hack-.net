#!/usr/bin/env node
/** Fail build if homepage hero video asset is missing from dist. */
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const brandSrc = readFileSync(join(root, 'src/data/brand.ts'), 'utf8');
const match = brandSrc.match(/heroVideoUrl:\s*'([^']+)'/);
const heroVideoUrl = match?.[1]?.trim() || '';

if (!heroVideoUrl) {
	console.log('[validate-hero-video] No heroVideoUrl configured — skip');
	process.exit(0);
}

const distPath = join(root, 'dist', heroVideoUrl.replace(/^\//, ''));
if (!existsSync(distPath)) {
	console.error(`[validate-hero-video] Missing hero video at dist${heroVideoUrl}`);
	process.exit(1);
}

console.log(`[validate-hero-video] OK — dist${heroVideoUrl}`);
