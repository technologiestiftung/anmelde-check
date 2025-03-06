import { useEffect } from "react";
import { trackInteraction } from "../../../feedback/matomo.ts";
import { useI18nStore } from "../../../../i18n/store";

export function useSaveIntroPageViewInSessionStorage() {
	const { language } = useI18nStore();

	useEffect(() => {
		saveIntroPageViewInSessionStorage();

		trackInteraction({
			eventAction: "page-view",
			eventName: `intro-page-view (language: ${language})`,
		});
	}, []);
}

function saveIntroPageViewInSessionStorage() {
	sessionStorage.setItem("has-seen-intro-page-view", "true");
}
