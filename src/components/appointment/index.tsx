import React from "react";
import { useI18nStore } from "../../i18n/store";
import { useI18n } from "../../i18n/hook/useI18n";

export function Appointment() {
	const language = useI18nStore((state) => state.language);
	const t = useI18n();

	const options: Intl.DateTimeFormatOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};

	const appointmentQuery = new URL(document.URL).searchParams.get(
		"appointment",
	);
	const appointment = appointmentQuery ? Date.parse(appointmentQuery) : null;

	const dateTimeFormat = new Intl.DateTimeFormat(language, options);

	return (
		<>
			{appointment ? (
				<p>
					<b>{t("your-appointment")}:</b>
					<br />
					{dateTimeFormat.format(appointment)}
					<br className="py-1" />
					<b>{t("address")}</b>:
					<br />
					Schlesische Straße 27A, 10997 Berlin (
					<a
						href="https://www.google.de/maps/place/Schlesische+Str.+27A,+10997+Berlin/@52.4984664,13.4448928,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84e53becc02e7:0x39bee44340592b1!8m2!3d52.4984664!4d13.4474677!16s%2Fg%2F11b_242msd?entry=ttu"
						target="_blank"
						className="text-blue-700 underline visited:text-purple-500"
					>
						{t("plan-route")}
					</a>
					)
				</p>
			) : (
				<p className="print:hidden">
					{t("intro.p2")}
					<br />
					<a
						href="https://service.berlin.de/dienstleistung/120686/"
						target="_blank"
						className="text-blue-700 underline visited:text-purple-500"
					>
						{t("intro.p2.link")}
					</a>
				</p>
			)}
		</>
	);
}
