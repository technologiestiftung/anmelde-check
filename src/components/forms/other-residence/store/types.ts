import { z } from "zod";

const OtherResidenceDocsSchema = z.object({ supplement: z.boolean() });

export const OtherResidenceSchema = z.object({
	requiredDocs: OtherResidenceDocsSchema,
	hasOtherResidence: z.boolean().nullable(),
	isOtherResidenceAbroad: z.boolean().nullable(),
	isRegisteringForMoreThanThreeMonths: z.boolean().nullable(),
	isRegisteringForMoreThanSixMonths: z.boolean().nullable(),
});

export type OtherResidence = z.infer<typeof OtherResidenceSchema>;

const _OtherResidenceStoreSchema = OtherResidenceSchema.extend({
	setHasOtherResidence: z.function().args(z.boolean()).returns(z.void()),
	setIsOtherResidenceAbroad: z.function().args(z.boolean()).returns(z.void()),
	setIsRegisteringForMoreThanThreeMonths: z
		.function()
		.args(z.boolean())
		.returns(z.void()),
	setIsRegisteringForMoreThanSixMonths: z
		.function()
		.args(z.boolean())
		.returns(z.void()),
});

export type OtherResidenceStore = z.infer<typeof _OtherResidenceStoreSchema>;
