export function VerticalSidebarImage() {
	return (
		<div className="flex h-full w-full items-center justify-center">
			<picture className="h-full">
				<source
					media="(min-width:1000px)"
					srcSet="/images/fernsehturm_alpha_paperplane.png"
				/>
				<img
					src="/images/fernsehturm_alpha_paperplane_slim.png"
					alt="Flowers"
					className="h-full object-cover ltr:scale-x-100 rtl:-scale-x-100"
					loading="lazy"
				/>
			</picture>
		</div>
	);
}
