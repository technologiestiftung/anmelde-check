import { z } from "zod";
export const StepsSchema = z.object({
	intro: z.number(),
	isFirstRegistration: z.number(),
	isMarried: z.number(),
	isRegisteringSpouse: z.number(),
	hasChild: z.number(),
	isRegisteringChild: z.number(),
	isRegisteringMoreThanTwo: z.number(),
	isGerman: z.number(),
	isGermanUnder16: z.number(),
	isEuropean: z.number(),
	isEuropeanUnder16: z.number(),
	isRefugee: z.number(),
	hasOtherResidence: z.number(),
	isOtherResidenceAbroad: z.number(),
	isRegisteringForMoreThanThreeMonths: z.number(),
	isRegisteringForMoreThanSixMonths: z.number(),
	overview: z.number(),
});

export type Steps = z.infer<typeof StepsSchema>;

export type StepsKeys = keyof Steps;

export const ProgressSchema = z.object({ currentStep: z.number() });

export type Progress = z.infer<typeof ProgressSchema>;

const _ProgressStoreSchema = ProgressSchema.extend({
	maxSteps: z.number(),
	setCurrentStep: z.function().args(z.number()),
	goTo: z.function().args(StepsSchema.keyof()),
	goToNextStep: z.function(),
	goToPreviousStep: z.function(),
	goToStart: z.function(),
});

export type ProgressStore = z.infer<typeof _ProgressStoreSchema>;
