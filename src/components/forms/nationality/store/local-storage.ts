import { Nationality, NationalitySchema } from "./types.ts";

const NATIONALITY_KEY = "nationality";

export function getLocalStorage(): Nationality {
	const foundItemJson = localStorage.getItem(NATIONALITY_KEY);

	if (!foundItemJson) {
		return {
			isGerman: null,
			isGermanOver16: null,
			isEuropean: null,
			isRefugee: null,
			isNonGermanOver16: null,
			requiredDocs: {
				germanIdOrPassportOrChildPassport: false,
				confirmationOfCustodian: false,
				germanIdOrPassport: false,
				euIdOrPassportOrReplacement: false,
				nonEuIdOrPassportOrReplacement: false,
			},
		};
	}

	try {
		const foundItemObject = JSON.parse(foundItemJson);

		return NationalitySchema.parse(foundItemObject);
	} catch (e) {
		console.error(e);
	}

	return {
		isGerman: null,
		isGermanOver16: null,
		isEuropean: null,
		isRefugee: null,
		isNonGermanOver16: null,
		requiredDocs: {
			germanIdOrPassportOrChildPassport: false,
			confirmationOfCustodian: false,
			germanIdOrPassport: false,
			euIdOrPassportOrReplacement: false,
			nonEuIdOrPassportOrReplacement: false,
		},
	};
}

export function setLocalStorage(value: Nationality) {
	localStorage.setItem(NATIONALITY_KEY, JSON.stringify(value));
}
