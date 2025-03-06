import { useProgressStore } from "../steps/store";
import { useI18n } from "../../i18n/hook/useI18n.tsx";

export function Footer() {
	const currentStep = useProgressStore((state) => state.currentStep);
	const t = useI18n();

	return (
		<footer
			className={`flex py-4 ${currentStep === 0 || currentStep === 16 ? "flex" : "hidden md:flex"} `}
			id="footer"
		>
			<div className="flex w-full flex-wrap justify-start gap-y-4">
				<div className="flex w-full flex-wrap justify-start gap-x-10 gap-y-4 px-6 text-sm sm:justify-center md:gap-x-16 md:px-6">
					<div className="flex flex-col gap-2.5">
						{t("logo.t1")}
						<img
							src="/images/logo-citylab-berlin.svg"
							alt="Logo von CityLab Berlin"
							className="w-32"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col gap-2.5">
						{t("logo.t2")}
						<img
							src="/images/logo-technologiestiftung-berlin-de.svg"
							alt="Logo von Technologiestiftung Berlin"
							className="w-32"
							loading="lazy"
						/>
					</div>
					<div className="flex flex-col gap-2.5">
						{t("logo.t3")}
						<img
							src="/images/logo-senatskanzlei-buergermeister-vertikal.svg"
							alt="Logo von Berlins Regierender Bürgermeister"
							className="w-28"
							loading="lazy"
						/>
					</div>
				</div>

				<div className="flex w-full flex-wrap justify-center gap-x-5 px-5 text-sm">
					<a
						className="flex flex-col gap-3 text-gray-400 underline"
						href="https://www.technologiestiftung-berlin.de/datenschutz"
						target="_blank"
						rel="noopener noreferrer"
					>
						{t("dataPrivacy")}
					</a>
					<a
						className="flex flex-col gap-3 text-gray-400 underline"
						href={t("imprint.link")}
						target="_blank"
						rel="noopener noreferrer"
					>
						{t("imprint")}
					</a>
				</div>
			</div>
		</footer>
	);
}
