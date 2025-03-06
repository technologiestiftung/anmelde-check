import { create } from "zustand";
import { NationalityStore } from "./types.ts";
import { getLocalStorage, setLocalStorage } from "./local-storage.ts";
import { useOverviewStore } from "../../overview/store";

export const useNationalityStore = create<NationalityStore>((set, get) => ({
	requiredDocs: getLocalStorage().requiredDocs,

	isGerman: getLocalStorage().isGerman,
	setIsGerman(isGerman) {
		const requiredDocs = {
			germanIdOrPassportOrChildPassport: false,
			germanIdOrPassport: false,
			euIdOrPassportOrReplacement: false,
			nonEuIdOrPassportOrReplacement: false,
			confirmationOfCustodian: false,
		};

		set({
			isGerman,
			isGermanOver16: null,
			isEuropean: null,
			isRefugee: null,
			isNonGermanOver16: null,
			requiredDocs,
		});

		setLocalStorage(get());
		useOverviewStore.getState().setRequiredDocs(requiredDocs);
	},

	isGermanOver16: getLocalStorage().isGermanOver16,
	setIsGermanOver16(isGermanOver16) {
		const requiredDocs = {
			germanIdOrPassportOrChildPassport: !isGermanOver16,
			germanIdOrPassport: isGermanOver16,
			euIdOrPassportOrReplacement: false,
			nonEuIdOrPassportOrReplacement: false,
			confirmationOfCustodian: !isGermanOver16,
		};

		set({
			isGermanOver16,
			requiredDocs,
		});

		setLocalStorage(get());
		useOverviewStore.getState().setRequiredDocs(requiredDocs);
	},

	isEuropean: getLocalStorage().isEuropean,
	setIsEuropean(isEuropean) {
		const requiredDocs = {
			...get().requiredDocs,
			euIdOrPassportOrReplacement: isEuropean,
			nonEuIdOrPassportOrReplacement: !isEuropean,
		};

		set({
			isEuropean,
			requiredDocs,
		});

		setLocalStorage(get());
		useOverviewStore.getState().setRequiredDocs(requiredDocs);
	},

	isNonGermanOver16: getLocalStorage().isNonGermanOver16,
	setIsNonGermanOver16(isNonGermanOver16: boolean) {
		const requiredDocs = {
			...get().requiredDocs,
			confirmationOfCustodian: !isNonGermanOver16,
		};

		set({
			isNonGermanOver16,
			requiredDocs,
		});

		setLocalStorage(get());
		useOverviewStore.getState().setRequiredDocs(requiredDocs);
	},

	isRefugee: getLocalStorage().isRefugee,
	setIsRefugee(isRefugee) {
		set({ isRefugee });

		setLocalStorage(get());
	},
}));
