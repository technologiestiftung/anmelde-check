import { create } from "zustand";
import { SecondaryResidenceStore } from "./types.ts";
import { getLocalStorage, setLocalStorage } from "./local-storage.ts";
import { useOverviewStore } from "../../overview/store";

export const useOtherResidenceStore = create<SecondaryResidenceStore>(
	(set, get) => ({
		requiredDocs: getLocalStorage().requiredDocs,

		hasOtherResidence: getLocalStorage().hasOtherResidence,
		setHasOtherResidence(hasOtherResidence) {
			const requiredDocs = {
				supplement: false,
			};

			set({
				hasOtherResidence,
				isOtherResidenceAbroad: null,
				isRegisteringForMoreThanThreeMonths: null,
				isRegisteringForMoreThanSixMonths: null,
				requiredDocs,
			});

			setLocalStorage(get());
			useOverviewStore.getState().setRequiredDocs(requiredDocs);
		},

		isOtherResidenceAbroad: getLocalStorage().isOtherResidenceAbroad,
		setIsOtherResidenceAbroad(isOtherResidenceAbroad) {
			const requiredDocs = {
				supplement: false,
			};

			set({
				isOtherResidenceAbroad,
				isRegisteringForMoreThanThreeMonths: null,
				isRegisteringForMoreThanSixMonths: null,
				requiredDocs,
			});

			setLocalStorage(get());
			useOverviewStore.getState().setRequiredDocs(requiredDocs);
		},

		isRegisteringForMoreThanThreeMonths:
			getLocalStorage().isRegisteringForMoreThanThreeMonths,
		setIsRegisteringForMoreThanThreeMonths(
			isRegisteringForMoreThanThreeMonths,
		) {
			const requiredDocs = {
				supplement:
					get().isOtherResidenceAbroad === true &&
					isRegisteringForMoreThanThreeMonths === true,
			};

			set({
				isRegisteringForMoreThanThreeMonths,
				requiredDocs,
			});

			setLocalStorage(get());
			useOverviewStore.getState().setRequiredDocs(requiredDocs);
		},

		isRegisteringForMoreThanSixMonths:
			getLocalStorage().isRegisteringForMoreThanSixMonths,
		setIsRegisteringForMoreThanSixMonths: (
			isRegisteringForMoreThanSixMonths,
		) => {
			const requiredDocs = {
				supplement:
					get().isOtherResidenceAbroad === false &&
					isRegisteringForMoreThanSixMonths === true,
			};

			set({
				isRegisteringForMoreThanSixMonths,
				requiredDocs,
			});

			setLocalStorage(get());
			useOverviewStore.getState().setRequiredDocs(requiredDocs);
		},
	}),
);
