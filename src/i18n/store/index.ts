import { create } from "zustand";
import { AvailableLanguages, i18nStore } from "./types.ts";
import { getLocalStorage, setLocalStorage } from "./local-storage.ts";
import de from "../translations/de.json" assert { type: "json" };
import { trackInteraction } from "../../components/feedback/matomo.ts";

export const useI18nStore = create<i18nStore>((set, get) => ({
	language: getLocalStorage().language,

	async setLanguage(language: AvailableLanguages) {
		trackInteraction({
			eventAction: "language-select interaction",
			eventName: `changed language to ${language} (from ${get().language})`,
		});

		set({ language });
		setLocalStorage(get());
		document.documentElement.lang = language;

		if (!get().translations[language]) {
			const module = await import(`../translations/${language}.json`);

			get().setTranslations(language, module.default);
		}

		document.documentElement.dir = get().translations[language]?.dir ?? "ltr";
	},

	translations: {
		de,
		en: undefined,
		ar: undefined,
		es: undefined,
		fr: undefined,
		tr: undefined,
		ru: undefined,
	},
	setTranslations(
		language: AvailableLanguages,
		translations: Record<string, string>,
	) {
		set((state) => ({
			translations: { ...state.translations, [language]: translations },
		}));

		if (translations.dir) {
			document.documentElement.dir = translations.dir;
		}
	},
}));
