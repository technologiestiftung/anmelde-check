import { z } from "zod";

const NationalityDocsSchema = z.object({
	germanIdOrPassportOrChildPassport: z.boolean(),
	germanIdOrPassport: z.boolean(),
	confirmationOfCustodian: z.boolean(),
	euIdOrPassportOrReplacement: z.boolean(),
	nonEuIdOrPassportOrReplacement: z.boolean(),
});

export const NationalitySchema = z.object({
	requiredDocs: NationalityDocsSchema,
	isGerman: z.boolean().nullable(),
	isGermanOver16: z.boolean().nullable(),
	isEuropean: z.boolean().nullable(),
	isNonGermanOver16: z.boolean().nullable(),
	isRefugee: z.boolean().nullable(),
});

export type Nationality = z.infer<typeof NationalitySchema>;

const Nationality = NationalitySchema.extend({
	setIsGerman: z.function().args(z.boolean()).returns(z.void()),
	setIsGermanOver16: z.function().args(z.boolean()).returns(z.void()),
	setIsEuropean: z.function().args(z.boolean()).returns(z.void()),
	setIsNonGermanOver16: z.function().args(z.boolean()).returns(z.void()),
	setIsRefugee: z.function().args(z.boolean()).returns(z.void()),
});

export type NationalityStore = z.infer<typeof Nationality>;
