type Props = {
	/** Accessible label when the logo is decorative inside a named link */
	alt?: string;
	className?: string;
};

/** NC monogram mark — Destiny 2 Cheats. */
export default function BrandLogo({ alt = 'Destiny 2 Cheats logo', className }: Props) {
	return (
		<img
			className={className}
			src="/images/destiny-2-cheats-logo-mark.webp"
			srcSet="/images/destiny-2-cheats-logo-mark.webp 128w, /images/destiny-2-cheats-logo.webp 512w"
			sizes="40px"
			width={40}
			height={40}
			alt={alt}
			decoding="async"
			fetchPriority="high"
		/>
	);
}
