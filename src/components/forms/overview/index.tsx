import { useOverviewStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { DocumentCheckbox } from "./document-checkbox.tsx";
import { Appointment } from "../../appointment";
import { SecondaryButton } from "../../buttons/secondary-button";
import { useI18n } from "../../../i18n/hook/useI18n.tsx";
import { trackInteraction } from "../../feedback/matomo.ts";
import { useTrackGoalChecklistConversion } from "./hooks/use-track-goal-checklist-conversion.tsx";

export function Overview() {
	const requiredDocs = useOverviewStore((state) => state.docs);
	const goToPreviousStep = useProgressStore((state) => state.goToPreviousStep);

	const t = useI18n();

	const documents = [
		...Array.from(
			Object.entries(requiredDocs).filter(([, value]) => value !== null),
		),
	];

	useTrackGoalChecklistConversion();

	return (
		<div className="flex h-full flex-col gap-4">
			<Appointment />

			<h2 className="flex w-full items-center justify-between gap-3 font-bold">
				{t("overview.title")}
			</h2>

			<p dangerouslySetInnerHTML={{ __html: t("overview.text") }} />

			<ul className="flex flex-col gap-2">
				{documents.map(([key, value]) => (
					<DocumentCheckbox key={key} id={key} value={value} />
				))}
			</ul>

			<div className="flex h-full w-full flex-row-reverse items-end justify-between print:hidden">
				<button
					onClick={() => {
						const originalTitle = document.title;
						document.title = "Dokumenten-Checkliste-Bürgeramt";
						trackInteraction({
							eventAction: "button click",
							eventName: "print document checklist",
						});
						window.print();
						document.title = originalTitle;
					}}
					className="flex items-center gap-1 border-2 border-blue-950 bg-blue-950 text-white hover:border-blue-900 hover:bg-blue-900 print:hidden"
				>
					<span className="py-2 ltr:pl-4 rtl:pr-4">{t("print")}</span>
					<div className="py-2 ltr:pl-3 ltr:pr-4 rtl:pl-4 rtl:pr-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="h-6 w-6 text-black text-inherit"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
							/>
						</svg>
					</div>
				</button>

				<SecondaryButton label={t("button.back")} onClick={goToPreviousStep} />
			</div>
		</div>
	);
}
