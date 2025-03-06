import { z } from "zod";

const FirstRegistrationDocsSchema = z.object({
	birthCertificate: z.boolean(),
	marriageCertificate: z.boolean(),
	idDocumentForSpouse: z.boolean(),
	childBirthCertificate: z.boolean(),
	custodyDeclaration: z.boolean(),
	idDocumentForChild: z.boolean(),
	guardianConsent: z.boolean(),
	additionalRegistrationForm: z.boolean(),
});

export const FirstRegistrationSchema = z.object({
	requiredDocs: FirstRegistrationDocsSchema,
	isFirstRegistration: z.boolean().nullable(),
	isMarried: z.boolean().nullable(),
	isRegisteringSpouse: z.boolean().nullable(),
	hasChild: z.boolean().nullable(),
	isRegisteringChild: z.boolean().nullable(),
	isRegisteringMoreThanTwo: z.boolean().nullable(),
});

export type FirstRegistration = z.infer<typeof FirstRegistrationSchema>;

const _FirstRegistrationStoreSchema = FirstRegistrationSchema.extend({
	setIsFirstRegistration: z.function().args(z.boolean()).returns(z.void()),
	setIsMarried: z.function().args(z.boolean()).returns(z.void()),
	setHasChild: z.function().args(z.boolean()).returns(z.void()),
	setIsRegisteringSpouse: z.function().args(z.boolean()).returns(z.void()),
	setIsRegisteringChild: z.function().args(z.boolean()).returns(z.void()),
	setIsRegisteringMoreThanTwo: z.function().args(z.boolean()).returns(z.void()),
});

export type FirstRegistrationStore = z.infer<
	typeof _FirstRegistrationStoreSchema
>;
