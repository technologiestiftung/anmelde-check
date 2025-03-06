import { useProgressStore } from "../../steps/store";
import { Appointment } from "../../appointment";
import { PrimaryButton } from "../../buttons/primary-button";
import { useI18n } from "../../../i18n/hook/useI18n";
import { useSaveIntroPageViewInSessionStorage } from "./hooks/use-save-intro-page-view-in-session-storage.tsx";

export function Intro() {
	const goToNextStep = useProgressStore((state) => state.goToNextStep);
	const t = useI18n();

	useSaveIntroPageViewInSessionStorage();

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					goToNextStep();
				}}
				className="flex w-full flex-col gap-9"
			>
				<div className="flex flex-col gap-4">
					<p>{t("intro.p1")}</p>

					<Appointment />
				</div>
				<div className="flex w-full justify-end">
					<PrimaryButton label={t("button.next")} type="submit" />
				</div>
			</form>
		</>
	);
}
