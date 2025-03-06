import { ProgressSchema, Progress } from "./types.ts";

const PROGRESS_KEY = "progress";

export function getLocalStorage(): Progress {
	const foundItemJson = localStorage.getItem(PROGRESS_KEY);

	if (!foundItemJson) {
		return {
			currentStep: 0,
		};
	}

	try {
		const foundItemObject = JSON.parse(foundItemJson);

		return ProgressSchema.parse(foundItemObject);
	} catch (e) {
		console.error(e);
	}

	return {
		currentStep: 0,
	};
}

export function setLocalStorage(value: Progress) {
	localStorage.setItem(PROGRESS_KEY, JSON.stringify(value));
}
