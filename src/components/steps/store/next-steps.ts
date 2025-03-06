import { useFirstRegistrationStore } from "../../forms/first-registration/store";
import { useNationalityStore } from "../../forms/nationality/store";
import { useOtherResidenceStore } from "../../forms/other-residence/store";
import { useProgressStore } from "./index.ts";

export function handleIsMarriedNextStep() {
	if (useFirstRegistrationStore.getState().isMarried === false) {
		useProgressStore.getState().goTo("hasChild");
		return;
	}

	useProgressStore.getState().goTo("isRegisteringSpouse");
}

export function handleHasChildNextStep() {
	if (useFirstRegistrationStore.getState().hasChild === false) {
		useProgressStore.getState().goTo("isGerman");
		return;
	}

	useProgressStore.getState().goTo("isRegisteringChild");
}

export function handleIsRegisteringChildNextStep() {
	if (
		(useFirstRegistrationStore.getState().isMarried === false ||
			useFirstRegistrationStore.getState().isRegisteringSpouse === false) &&
		useFirstRegistrationStore.getState().isRegisteringChild === true
	) {
		useProgressStore.getState().goTo("isRegisteringMoreThanTwo");
		return;
	}

	useProgressStore.getState().goTo("isGerman");
}

export function handleIsGermanNextStep() {
	if (useNationalityStore.getState().isGerman === false) {
		useProgressStore.getState().goTo("isEuropean");
		return;
	}

	useProgressStore.getState().goTo("isGermanUnder16");
}

export function handleIsGermanUnder16NextStep() {
	useProgressStore.getState().goTo("hasOtherResidence");
}

export function handleHasOtherResidenceNextStep() {
	if (useOtherResidenceStore.getState().hasOtherResidence === false) {
		useProgressStore.getState().goTo("overview");
		return;
	}

	useProgressStore.getState().goTo("isOtherResidenceAbroad");
}

export function handleIsOtherResidenceAbroadNextStep() {
	if (useOtherResidenceStore.getState().isOtherResidenceAbroad === true) {
		useProgressStore.getState().goTo("isRegisteringForMoreThanThreeMonths");
		return;
	}

	useProgressStore.getState().goTo("isRegisteringForMoreThanSixMonths");
}

export function handleIsRegisteringForMoreThanThreeMonthsNextStep() {
	useProgressStore.getState().goTo("overview");
}
