import { availableLanguagesEnum, i18n, i18nSchema } from "./types.ts";
import { t } from "../translations";

const I18N_KEY = "i18n";

export function getLocalStorage(): i18n {
  const foundItemJson = localStorage.getItem(I18N_KEY);

  if (!foundItemJson) {
    return {
      language: availableLanguagesEnum.de,
    };
  }

  try {
    const foundItemObject = JSON.parse(foundItemJson);

    const { language } = i18nSchema.parse(foundItemObject);

    document.documentElement.lang = language;
    document.documentElement.dir = t("dir", language);

    return {
      language,
    };
  } catch (e) {
    console.error(e);
  }

  // override unparseable local storage
  setLocalStorage({ language: availableLanguagesEnum.de });

  return {
    language: availableLanguagesEnum.de,
  };
}

export function setLocalStorage(value: i18n) {
  localStorage.setItem(I18N_KEY, JSON.stringify(value));
}
