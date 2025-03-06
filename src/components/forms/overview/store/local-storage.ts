import { OverviewDocsSchema, OverviewDocs } from "./types.ts";

const OVERVIEW_KEY = "overview";

export function getLocalStorage(): OverviewDocs {
	const foundItemJson = localStorage.getItem(OVERVIEW_KEY);

	if (!foundItemJson) {
		return {
			registrationForm: false,
			movingInConfirmation: false,

			birthCertificate: null,
			marriageCertificate: null,

			idDocumentForSpouse: null,
			childBirthCertificate: null,
			custodyDeclaration: null,
			idDocumentForChild: null,
			guardianConsent: null,
			additionalRegistrationForm: null,

			germanIdOrPassportOrChildPassport: null,
			germanIdOrPassport: null,
			confirmationOfCustodian: null,
			euIdOrPassportOrReplacement: null,
			nonEuIdOrPassportOrReplacement: null,

			supplement: null,
		};
	}

	try {
		const foundItemObject = JSON.parse(foundItemJson);

		return OverviewDocsSchema.parse(foundItemObject);
	} catch (e) {
		console.error(e);
	}

	return {
		registrationForm: false,
		movingInConfirmation: false,

		birthCertificate: null,
		marriageCertificate: null,

		idDocumentForSpouse: null,
		childBirthCertificate: null,
		custodyDeclaration: null,
		idDocumentForChild: null,
		guardianConsent: null,
		additionalRegistrationForm: null,

		germanIdOrPassportOrChildPassport: null,
		germanIdOrPassport: null,
		confirmationOfCustodian: null,
		euIdOrPassportOrReplacement: null,
		nonEuIdOrPassportOrReplacement: null,

		supplement: null,
	};
}

export function setLocalStorage(value: OverviewDocs) {
	localStorage.setItem(OVERVIEW_KEY, JSON.stringify(value));
}
