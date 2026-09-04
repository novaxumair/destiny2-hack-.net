/**
 * Near-duplicate pageIds → stronger pillars (301 in production via Worker + path-redirects).
 *
 * Long-tail URLs (/destiny-2-wallhack/, /destiny-2-mod-menu/, /destiny-2-cheat-download/, etc.)
 * stay on 301 — not thin indexable stubs — to consolidate link equity on pillar pages
 * and avoid SERP cannibalization against /destiny-2-esp/, /destiny-2-aimbot/, /, and /destiny-2-cheats/.
 */
export const cannibalRedirectTargets = {
	'mod-menu': 'home',
	'unlock-all': 'home',
	'aimbot-hack': 'destiny-2-aimbot',
	'soft-aim': 'destiny-2-aimbot',
	'esp-hack': 'destiny-2-esp',
	wallhack: 'destiny-2-esp',
	'cheat-download': 'setup',
} as const;

export type CannibalPageId = keyof typeof cannibalRedirectTargets;

export const cannibalPageIds = Object.keys(cannibalRedirectTargets) as CannibalPageId[];

export function isCannibalPageId(pageId: string): pageId is CannibalPageId {
	return pageId in cannibalRedirectTargets;
}

export function getCannibalTargetId(pageId: string): string {
	return (cannibalRedirectTargets as Record<string, string>)[pageId] ?? pageId;
}
