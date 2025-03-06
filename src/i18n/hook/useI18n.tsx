import { useI18nStore } from "../store";

export function useI18n() {
	const language = useI18nStore((state) => state.language);
	const translations = useI18nStore((state) => state.translations);

	return (key: string) => translations[language]?.[key] || "";
}
