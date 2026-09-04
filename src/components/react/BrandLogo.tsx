type Props = {
	/** Accessible label when the logo is decorative inside a named link */
	alt?: string;
	className?: string;
};

/** Destiny 2 tricorn mark. */
export default function BrandLogo({ alt = 'Destiny 2 logo', className }: Props) {
	return (
		<img
			className={className}
			src="/images/destiny2-tricorn-mark.webp"
			srcSet="/images/destiny2-tricorn-mark.webp 128w, /images/destiny2-tricorn-logo.webp 512w"
			sizes="40px"
			width={40}
			height={40}
			alt={alt}
			decoding="async"
			fetchPriority="high"
		/>
	);
}
