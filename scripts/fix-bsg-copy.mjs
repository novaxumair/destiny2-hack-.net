#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Bungie'"],
	['Activision\u2019', "Bungie'"],
	['Activision services', 'Bungie services'],
	['Activision service', 'Bungie service'],
	['Activision platform', 'Bungie platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Bungie bans'],
	['Activision security', 'BattlEye security'],
	['Activision Status', 'Destiny 2 on PC'],
	['Activision Destiny 2's, 'Destiny 2's],
	['Activision Support', 'Destiny 2 on PC'],
	['Activision', 'Bungie'],
	['EAC guide', 'BattlEye guide'],
	['undetected EAC notes', 'undetected BattlEye notes'],
	['status.epicgames.com', 'store.steampowered.com/app/376210/The_Isle'],
	['www.epicgames.com/rust', 'store.steampowered.com/app/376210/The_Isle'],
	['www.rust.com/official server', 'store.steampowered.com/app/376210/The_Isle'],
	['https://www.rust.com/', 'https://store.steampowered.com/app/1085660/Destiny_2/'],
	['Destiny 2.com', 'Destiny 2's],
	['Destiny 2 Competitive', 'Destiny 2's],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
