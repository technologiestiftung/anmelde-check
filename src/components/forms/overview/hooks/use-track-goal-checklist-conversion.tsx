import { useEffect } from "react";
import { trackInteraction } from "../../../feedback/matomo.ts";
import { useI18nStore } from "../../../../i18n/store";

export function useTrackGoalChecklistConversion() {
	const { language } = useI18nStore();

	useEffect(() => {
		if (sessionStorage.getItem("has-seen-intro-page-view") !== "true") {
			return;
		}

		trackInteraction({
			eventAction: "page-view",
			eventName: `conversion-intro-checklist (language: ${language})`,
		});
	}, []);
}
