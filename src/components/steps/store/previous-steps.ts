import { useFirstRegistrationStore } from "../../forms/first-registration/store";
import { useNationalityStore } from "../../forms/nationality/store";
import { useOtherResidenceStore } from "../../forms/other-residence/store";
import { useProgressStore } from "./index.ts";

export function handleHasChildPreviousStep() {
	if (useFirstRegistrationStore.getState().isMarried === false) {
		useProgressStore.getState().goTo("isMarried");
		return;
	}

	useProgressStore.getState().goTo("isRegisteringSpouse");
}

export function handleIsGermanPreviousStep() {
	if (
		useFirstRegistrationStore.getState().isRegisteringSpouse === false &&
		useFirstRegistrationStore.getState().isRegisteringChild === true
	) {
		useProgressStore.getState().goTo("isRegisteringMoreThanTwo");
		return;
	}

	if (useFirstRegistrationStore.getState().hasChild === false) {
		useProgressStore.getState().goTo("hasChild");
		return;
	}

	useProgressStore.getState().goTo("isRegisteringChild");
}
export function handleIsEuropeanPreviousStep() {
	useProgressStore.getState().goTo("isGerman");
}
export function handleHasOtherResidencePreviousStep() {
	if (useNationalityStore.getState().isGerman === true) {
		useProgressStore.getState().goTo("isGermanUnder16");
		return;
	}

	useProgressStore.getState().goTo("isRefugee");
}

export function handleIsRegisteringForMoreThanSixMonthsPreviousStep() {
	useProgressStore.getState().goTo("isOtherResidenceAbroad");
}

export function handleOverviewPreviousStep() {
	if (useOtherResidenceStore.getState().hasOtherResidence === false) {
		useProgressStore.getState().goTo("hasOtherResidence");
		return;
	}

	if (
		useOtherResidenceStore.getState().hasOtherResidence === true &&
		useOtherResidenceStore.getState().isOtherResidenceAbroad === true
	) {
		useProgressStore.getState().goTo("isRegisteringForMoreThanThreeMonths");
		return;
	}

	useProgressStore.getState().goTo("isRegisteringForMoreThanSixMonths");
}
