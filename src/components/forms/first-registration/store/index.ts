import { create } from "zustand";
import { FirstRegistrationStore } from "./types";
import { getLocalStorage, setLocalStorage } from "./local-storage";
import { useOverviewStore } from "../../overview/store";

export const useFirstRegistrationStore = create<FirstRegistrationStore>(
	(set, get) => ({
		requiredDocs: getLocalStorage().requiredDocs,

		isFirstRegistration: getLocalStorage().isFirstRegistration,
		setIsFirstRegistration(isFirstRegistration) {
			const requiredDocs = {
				birthCertificate: isFirstRegistration,
				marriageCertificate: false,
				idDocumentForSpouse: false,
				childBirthCertificate: false,
				custodyDeclaration: false,
				idDocumentForChild: false,
				guardianConsent: false,
				additionalRegistrationForm: false,
			};

			set({
				isFirstRegistration,
				isMarried: null,
				isRegisteringSpouse: null,
				hasChild: null,
				isRegisteringChild: null,
				isRegisteringMoreThanTwo: null,
				requiredDocs,
			});

			setLocalStorage(get());
			useOverviewStore.getState().setRequiredDocs(requiredDocs);
		},

		isMarried: getLocalStorage().isFirstRegistration,
		setIsMarried(isMarried) {
			const requiredDocs = {
				...get().requiredDocs,
				marriageCertificate: isMarried,
				idDocumentForSpouse: false,
				childBirthCertificate: false,
				custodyDeclaration: false,
				idDocumentForChild: false,
				guardianConsent: false,
				additionalRegistrationForm: false,
			};

			set({
				isMarried,
				isRegisteringSpouse: null,
				hasChild: null,
				isRegisteringChild: null,
				isRegisteringMoreThanTwo: null,
				requiredDocs,
			});

			setLocalStorage(get());
			useOverviewStore.getState().setRequiredDocs(requiredDocs);
		},

		isRegisteringSpouse: getLocalStorage().isRegisteringSpouse,
		setIsRegisteringSpouse: (isRegisteringSpouse) => {
			const requiredDocs = {
				...get().requiredDocs,
				idDocumentForSpouse: isRegisteringSpouse,
				childBirthCertificate: false,
				custodyDeclaration: false,
				idDocumentForChild: false,
				guardianConsent: false,
				additionalRegistrationForm: false,
			};

			set({
				isRegisteringSpouse: isRegisteringSpouse,
				hasChild: null,
				isRegisteringChild: null,
				isRegisteringMoreThanTwo: null,
				requiredDocs,
			});

			setLocalStorage(get());
			useOverviewStore.getState().setRequiredDocs(requiredDocs);
		},

		hasChild: getLocalStorage().hasChild,
		setHasChild(hasChild) {
			const requiredDocs = {
				...get().requiredDocs,
				childBirthCertificate: hasChild,
				custodyDeclaration: hasChild,
				idDocumentForChild: false,
				guardianConsent: false,
				additionalRegistrationForm: false,
			};

			set({
				hasChild,
				isRegisteringChild: null,
				isRegisteringMoreThanTwo: null,
				requiredDocs,
			});

			setLocalStorage(get());
			useOverviewStore.getState().setRequiredDocs(requiredDocs);
		},

		isRegisteringChild: getLocalStorage().isRegisteringChild,
		setIsRegisteringChild: (isRegisteringChild) => {
			const needsAdditionalRegistrationForm =
				!!get().isRegisteringSpouse && isRegisteringChild;
			const requiredDocs = {
				...get().requiredDocs,
				idDocumentForChild: isRegisteringChild,
				guardianConsent: isRegisteringChild,
				additionalRegistrationForm: needsAdditionalRegistrationForm,
			};

			const isRegisteringMoreThanTwo = needsAdditionalRegistrationForm || null;
			set({
				isRegisteringChild,
				isRegisteringMoreThanTwo,
				requiredDocs,
			});

			setLocalStorage(get());
			useOverviewStore.getState().setRequiredDocs(requiredDocs);
		},

		isRegisteringMoreThanTwo: getLocalStorage().isRegisteringMoreThanTwo,
		setIsRegisteringMoreThanTwo: (isRegisteringMoreThanTwo) => {
			const requiredDocs = {
				...get().requiredDocs,
				additionalRegistrationForm: isRegisteringMoreThanTwo,
			};

			set({
				isRegisteringMoreThanTwo,
				requiredDocs,
			});

			setLocalStorage(get());
			useOverviewStore.getState().setRequiredDocs(requiredDocs);
		},
	}),
);
