import { useFirstRegistrationStore } from "./store";
import { RadioInput } from "../../radio-input";
import { useProgressStore } from "../../steps/store";
import { PrimaryButton } from "../../buttons/primary-button";
import { SecondaryButton } from "../../buttons/secondary-button";
import { InfoButton } from "../../buttons/info-button";
import { useTimeout } from "../../../hooks/useTimeout";
import { useI18n } from "../../../i18n/hook/useI18n";

export function IsFirstRegistration() {
	const isFirstRegistration = useFirstRegistrationStore(
		(state) => state.isFirstRegistration,
	);
	const setIsFirstRegistration = useFirstRegistrationStore(
		(state) => state.setIsFirstRegistration,
	);

	const isValid = isFirstRegistration !== null;

	const goToPreviousStep = useProgressStore((state) => state.goToPreviousStep);
	const goToNextStep = useProgressStore((state) => state.goToNextStep);

	const t = useI18n();

	const options = ["yes", "no"];

	const { isOver } = useTimeout();

	const arePointerEventsDisabled = !isOver;

	return (
		<form
			className="flex h-80 w-full flex-col gap-12 lg:h-96"
			onSubmit={(e) => {
				e.preventDefault();
				goToNextStep();
			}}
		>
			<div className="flex flex-col gap-4">
				<div className="flex w-full justify-between gap-3">
					<p>{t("first-registration.q1")}</p>
					<div
						className="tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right"
						data-tip={t("first-registration.q1.tooltip")}
					>
						<InfoButton />
					</div>
				</div>
				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "first-registration.q1.radio";
						const isChecked =
							(option === "yes" && isFirstRegistration === true) ||
							(option === "no" && isFirstRegistration === false);
						const onChange = () => setIsFirstRegistration(option === "yes");
						const label = t(option);

						return (
							<RadioInput
								key={option}
								name={name}
								label={label}
								isChecked={isChecked}
								onChange={onChange}
							/>
						);
					})}
				</div>
			</div>

			<div className="flex w-full flex-row-reverse items-end justify-between">
				<div
					className={`${
						!isValid
							? `tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right before:w-[9rem] ${arePointerEventsDisabled ? "pointer-events-none" : ""}`
							: undefined
					}`}
					data-tip={!isValid ? t("button.next.tooltip") : undefined}
				>
					<PrimaryButton
						label={t("button.next")}
						type="submit"
						disabled={!isValid}
					/>
				</div>

				<SecondaryButton label={t("button.back")} onClick={goToPreviousStep} />
			</div>
		</form>
	);
}
