import { OtherResidence, OtherResidenceSchema } from "./types.ts";

const OTHER_RESIDENCES_KEY = "other-residences";

export function getLocalStorage(): OtherResidence {
	const foundItemJson = localStorage.getItem(OTHER_RESIDENCES_KEY);

	if (!foundItemJson) {
		return {
			hasOtherResidence: null,
			isOtherResidenceAbroad: null,
			isRegisteringForMoreThanThreeMonths: null,
			isRegisteringForMoreThanSixMonths: null,
			requiredDocs: {
				supplement: false,
			},
		};
	}

	try {
		const foundItemObject = JSON.parse(foundItemJson);

		return OtherResidenceSchema.parse(foundItemObject);
	} catch (e) {
		console.error(e);
	}

	return {
		hasOtherResidence: null,
		isOtherResidenceAbroad: null,
		isRegisteringForMoreThanThreeMonths: null,
		isRegisteringForMoreThanSixMonths: null,
		requiredDocs: {
			supplement: false,
		},
	};
}

export function setLocalStorage(value: OtherResidence) {
	localStorage.setItem(OTHER_RESIDENCES_KEY, JSON.stringify(value));
}
