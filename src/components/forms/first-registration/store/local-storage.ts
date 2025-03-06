import { FirstRegistration, FirstRegistrationSchema } from "./types";

const FIRST_REGISTRATION_KEY = "first-registration";

export function getLocalStorage(): FirstRegistration {
	const foundItemJson = localStorage.getItem(FIRST_REGISTRATION_KEY);

	if (!foundItemJson) {
		return {
			isFirstRegistration: null,
			isMarried: null,
			isRegisteringSpouse: null,
			hasChild: null,
			isRegisteringChild: null,
			isRegisteringMoreThanTwo: null,
			requiredDocs: {
				birthCertificate: false,
				marriageCertificate: false,
				idDocumentForSpouse: false,
				childBirthCertificate: false,
				custodyDeclaration: false,
				guardianConsent: false,
				idDocumentForChild: false,
				additionalRegistrationForm: false,
			},
		};
	}

	try {
		const foundItemObject = JSON.parse(foundItemJson);

		return FirstRegistrationSchema.parse(foundItemObject);
	} catch (e) {
		console.error(e);
	}

	return {
		isFirstRegistration: null,
		isMarried: null,
		isRegisteringSpouse: null,
		hasChild: null,
		isRegisteringChild: null,
		isRegisteringMoreThanTwo: null,
		requiredDocs: {
			birthCertificate: false,
			marriageCertificate: false,
			idDocumentForSpouse: false,
			childBirthCertificate: false,
			custodyDeclaration: false,
			guardianConsent: false,
			idDocumentForChild: false,
			additionalRegistrationForm: false,
		},
	};
}

export function setLocalStorage(value: FirstRegistration) {
	localStorage.setItem(FIRST_REGISTRATION_KEY, JSON.stringify(value));
}
