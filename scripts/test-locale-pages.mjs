#!/usr/bin/env node
/** Headless test: verify key components exist for all locales using correct localized paths. */
import { LOCALES } from './i18n-data/constants.mjs';

// Dynamic import of routing - use built dist preview
const BASE = process.env.BASE_URL || 'http://localhost:4321';

// Localized path slugs from routing.ts (pageId -> locale -> slug segment)
const SLUGS = {
	features: { en: 'features', es: 'funciones', fr: 'fonctions', de: 'features', pt: 'recursos', it: 'funzioni', nl: 'functies', pl: 'funkcje', ru: 'funkcii', tr: 'ozellikler', ar: 'destiny-2-cheats-features', ja: 'destiny-2-cheats-features', ko: 'destiny-2-cheats-features', zh: 'destiny-2-cheats-features', hi: 'destiny-2-cheats-features', id: 'destiny-2-cheats-features', th: 'destiny-2-cheats-features', vi: 'destiny-2-cheats-features', uk: 'funktsiyi', cs: 'funkce', ro: 'functii', sv: 'funktioner' },
	pricing: { en: 'pricing', es: 'precios', fr: 'tarifs', de: 'preise', pt: 'precos', it: 'prezzi', nl: 'prijzen', pl: 'cennik', ru: 'tseny', tr: 'fiyatlar', ar: 'destiny-2-cheats-pricing', ja: 'destiny-2-cheats-pricing', ko: 'destiny-2-cheats-pricing', zh: 'destiny-2-cheats-pricing', hi: 'destiny-2-cheats-pricing', id: 'destiny-2-cheats-pricing', th: 'destiny-2-cheats-pricing', vi: 'destiny-2-cheats-pricing', uk: 'tsiny', cs: 'ceny', ro: 'preturi', sv: 'priser' },
	faq: { en: 'faq', es: 'faq', fr: 'faq', de: 'faq', pt: 'faq', it: 'faq', nl: 'faq', pl: 'faq', ru: 'faq', tr: 'sss', ar: 'faq', ja: 'faq', ko: 'faq', zh: 'faq', hi: 'faq', id: 'faq', th: 'faq', vi: 'faq', uk: 'faq', cs: 'faq', ro: 'faq', sv: 'faq' },
	hacks: { en: 'destiny-2-cheats', es: 'hacks-trucos-destiny-2', fr: 'hacks-triche-destiny-2', de: 'destiny-2-cheats', pt: 'cheats-destiny-2', it: 'hacks-trucchi-destiny-2', nl: 'destiny-2-cheats', pl: 'hacks-cheatow-destiny-2', ru: 'destiny-2-cheats', tr: 'destiny-2-hile-hacks', ar: 'destiny-2-cheats', ja: 'destiny-2-cheats', ko: 'destiny-2-cheats', zh: 'destiny-2-cheats', hi: 'destiny-2-cheats', id: 'destiny-2-cheats', th: 'destiny-2-cheats', vi: 'destiny-2-cheats', uk: 'destiny-2-cheats', cs: 'destiny-2-cheats', ro: 'cheats-destiny-2', sv: 'destiny-2-cheats' },
};

function pagePath(locale, pageId) {
	const slug = SLUGS[pageId]?.[locale] ?? pageId;
	if (locale === 'en') return `/${slug}/`;
	return `/${locale}/${slug}/`;
}

async function fetchHtml(path) {
	const url = `${BASE}${path}`;
	const res = await fetch(url);
	if (!res.ok) throw new Error(`${url} → ${res.status}`);
	return res.text();
}

let failed = 0;

for (const locale of LOCALES) {
	// Home
	try {
		const homePath = locale === 'en' ? '/' : `/${locale}/`;
		const html = await fetchHtml(homePath);
		const sections = (html.match(/class="card-panel/g) || []).length;
		if (sections < 1) { console.error(`FAIL ${homePath}: few sections`); failed++; }
		if (!html.includes('price-card') && !html.includes('price-grid')) { console.error(`FAIL ${homePath}: no pricing`); failed++; }
	} catch (e) { console.error(`FAIL ${locale} home: ${e.message}`); failed++; }

	for (const pageId of ['features', 'pricing', 'faq', 'hacks']) {
		const path = pagePath(locale, pageId);
		try {
			const html = await fetchHtml(path);
			const sections = (html.match(/class="card-panel/g) || []).length;
			const enSections = pageId === 'features' ? 5 : pageId === 'hacks' ? 5 : pageId === 'pricing' ? 3 : pageId === 'faq' ? 3 : 2;
			if (sections < enSections) {
				console.error(`FAIL ${path}: ${sections} sections (expected >=${enSections})`);
				failed++;
			}
			if (pageId === 'pricing' && !html.includes('price-card')) {
				console.error(`FAIL ${path}: missing price-card`);
				failed++;
			}
			if (pageId === 'faq' && !html.includes('faq-index')) {
				console.error(`FAIL ${path}: missing faq-index`);
				failed++;
			}
		} catch (e) {
			console.error(`FAIL ${path}: ${e.message}`);
			failed++;
		}
	}
}

if (failed) {
	console.error(`\n${failed} test(s) failed`);
	process.exit(1);
}
console.log(`\nAll ${LOCALES.length} locales passed section/component checks on ${BASE}`);
