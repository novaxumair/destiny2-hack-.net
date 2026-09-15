/**
 * Mobile nav toggle — works before Astro/React islands hydrate.
 * Toggles `.is-open` on `[data-nav]` headers; React must not control that class.
 */
(function () {
	const DESKTOP_MQ = '(min-width: 1025px)';

	function headerFrom(node) {
		return node instanceof Element ? node.closest('[data-nav]') : null;
	}

	function setOpen(header, open) {
		if (!(header instanceof HTMLElement)) return;
		header.classList.toggle('is-open', open);
		const btn = header.querySelector('.site-menu');
		if (btn instanceof HTMLButtonElement) {
			btn.setAttribute('aria-expanded', open ? 'true' : 'false');
			const openLabel = btn.getAttribute('data-label-open') || 'Open menu';
			const closeLabel = btn.getAttribute('data-label-close') || 'Close menu';
			btn.setAttribute('aria-label', open ? closeLabel : openLabel);
		}
		document.body.classList.toggle('nav-lock', open);
	}

	function toggle(header) {
		if (!(header instanceof HTMLElement)) return;
		setOpen(header, !header.classList.contains('is-open'));
	}

	function closeAll() {
		document.querySelectorAll('[data-nav].is-open').forEach((header) => setOpen(header, false));
	}

	document.addEventListener(
		'click',
		(event) => {
			const target = event.target;
			if (!(target instanceof Element)) return;

			const menuBtn = target.closest('.site-menu');
			if (menuBtn) {
				const header = headerFrom(menuBtn);
				if (header) {
					event.preventDefault();
					toggle(header);
				}
				return;
			}

			if (target.closest('[data-nav-close]')) {
				const header = headerFrom(target);
				if (header) setOpen(header, false);
			}
		},
		true,
	);

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') closeAll();
	});

	window.addEventListener('resize', () => {
		if (window.matchMedia(DESKTOP_MQ).matches) closeAll();
	});

	document.addEventListener('astro:page-load', closeAll);
})();
