import { Intro } from "../forms/intro";
import { Overview } from "../forms/overview";
import { useProgressStore } from "./store";
import {
	IsFirstRegistration,
	HasChild,
	IsMarried,
	IsRegisteringSpouse,
	IsRegisteringChild,
	IsRegisteringMoreThanTwo,
} from "../forms/first-registration";
import {
	IsGerman,
	IsGermanOver16,
	IsEuropean,
	IsNonGermanOver16,
	IsRefugee,
} from "../forms/nationality";
import {
	HasOtherResidence,
	IsOtherResidenceAbroad,
	IsRegisteringForMoreThanThreeMonths,
	IsRegisteringForMoreThanSixMonths,
} from "../forms/other-residence";

export function Steps() {
	const currentStep = useProgressStore((state) => state.currentStep);

	const steps = [
		<Intro />,
		<IsFirstRegistration />,
		<IsMarried />,
		<IsRegisteringSpouse />,
		<HasChild />,
		<IsRegisteringChild />,
		<IsRegisteringMoreThanTwo />,
		<IsGerman />,
		<IsGermanOver16 />,
		<IsEuropean />,
		<IsNonGermanOver16 />,
		<IsRefugee />,
		<HasOtherResidence />,
		<IsOtherResidenceAbroad />,
		<IsRegisteringForMoreThanThreeMonths />,
		<IsRegisteringForMoreThanSixMonths />,
		<Overview />,
	];

	return (
		<div
			className={`flex h-full flex-col gap-4 sm:w-[560px] lg:text-lg 2xl:w-[750px] print:w-full ${
				currentStep < 16 && "pt-4 lg:pt-12"
			}`}
		>
			{steps[currentStep]}
		</div>
	);
}
