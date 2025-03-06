import { z } from "zod";

export const OverviewDocsSchema = z.object({
	registrationForm: z.boolean().nullable(),
	movingInConfirmation: z.boolean().nullable(),

	birthCertificate: z.boolean().nullable(),
	marriageCertificate: z.boolean().nullable(),

	idDocumentForSpouse: z.boolean().nullable(),
	childBirthCertificate: z.boolean().nullable(),
	custodyDeclaration: z.boolean().nullable(),
	idDocumentForChild: z.boolean().nullable(),
	guardianConsent: z.boolean().nullable(),
	additionalRegistrationForm: z.boolean().nullable(),

	germanIdOrPassportOrChildPassport: z.boolean().nullable(),
	germanIdOrPassport: z.boolean().nullable(),
	confirmationOfCustodian: z.boolean().nullable(),
	euIdOrPassportOrReplacement: z.boolean().nullable(),
	nonEuIdOrPassportOrReplacement: z.boolean().nullable(),

	supplement: z.boolean().nullable(),
});

export type OverviewDocs = z.infer<typeof OverviewDocsSchema>;

const _OverviewStoreSchema = z.object({
	docs: OverviewDocsSchema,
	isParticlesReady: z.boolean(),
	isParticlesRequested: z.boolean(),
	loadParticles: z.function(),
	requestConfetti: z.function(),
	setRequiredDocs: z
		.function()
		.args(OverviewDocsSchema.partial())
		.returns(z.void()),
	setDocs: z.function().args(OverviewDocsSchema.partial()).returns(z.void()),
});

export type OverviewStore = z.infer<typeof _OverviewStoreSchema>;
