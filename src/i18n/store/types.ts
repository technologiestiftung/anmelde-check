import { z } from "zod";

export enum availableLanguagesEnum {
	"ar" = "ar",
	"de" = "de",
	"en" = "en",
	"es" = "es",
	"fr" = "fr",
	"tr" = "tr",
	"ru" = "ru",
}

export const availableLanguagesSchema = z.nativeEnum(availableLanguagesEnum);

export type AvailableLanguages = z.infer<typeof availableLanguagesSchema>;

export const i18nSchema = z.object({ language: availableLanguagesSchema });

export type i18n = z.infer<typeof i18nSchema>;

const _i18nStoreSchema = i18nSchema.extend({
	setLanguage: z.function().args(availableLanguagesSchema).returns(z.void()),
	translations: z.record(
		z.string(),
		z.record(z.string(), z.string()).optional(),
	),
	setTranslations: z
		.function()
		.args(availableLanguagesSchema, z.record(z.string()))
		.returns(z.void()),
});

export type i18nStore = z.infer<typeof _i18nStoreSchema>;
