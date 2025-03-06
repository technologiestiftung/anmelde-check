export function SecondaryButton({
	type,
	onClick,
	label,
}: {
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: () => void;
	label: string;
}) {
	return (
		<button
			className="flex items-center border-2 border-black hover:bg-gray-100"
			type={type}
			onClick={onClick}
		>
			<div className="ltr:pl-4 rtl:pr-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="16"
					width="14"
					viewBox="0 0 448 512"
					strokeWidth={1.5}
					className="scale-125 transform ltr:rotate-180 rtl:rotate-0"
					fill="currentColor"
				>
					<div
						dangerouslySetInnerHTML={{
							__html:
								" <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> ",
						}}
					/>
					<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
				</svg>
			</div>

			<span className="py-2 ltr:pl-3 ltr:pr-4 rtl:pl-4 rtl:pr-3">{label}</span>
		</button>
	);
}
