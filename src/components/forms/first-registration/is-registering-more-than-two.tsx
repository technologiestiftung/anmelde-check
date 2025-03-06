import { useFirstRegistrationStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { RadioInput } from "../../radio-input";
import { InfoButton } from "../../buttons/info-button";
import { PrimaryButton } from "../../buttons/primary-button";
import { SecondaryButton } from "../../buttons/secondary-button";
import { useTimeout } from "../../../hooks/useTimeout";
import { useI18n } from "../../../i18n/hook/useI18n";

export function IsRegisteringMoreThanTwo() {
	const isRegisteringMoreThanTwo = useFirstRegistrationStore(
		(state) => state.isRegisteringMoreThanTwo,
	);
	const setIsRegisteringMoreThanTwo = useFirstRegistrationStore(
		(state) => state.setIsRegisteringMoreThanTwo,
	);

	const goToPreviousStep = useProgressStore((state) => state.goToPreviousStep);
	const goToNextStep = useProgressStore((state) => state.goToNextStep);

	const t = useI18n();

	const options = ["yes", "no"];

	const isValid = isRegisteringMoreThanTwo !== null;

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
				<div className="flex w-full items-baseline justify-between gap-3">
					<p>{t("first-registration.q6")}</p>
					<div
						className="tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right"
						data-tip={t("first-registration.q6.tooltip")}
					>
						<InfoButton />
					</div>
				</div>
				<div className="flex flex-col gap-1">
					{options.map((option) => {
						const name = "first-registration.q6.radio";
						const label = t(option);
						const isChecked =
							(option === "yes" && isRegisteringMoreThanTwo === true) ||
							(option === "no" && isRegisteringMoreThanTwo === false);
						const onChange = () =>
							setIsRegisteringMoreThanTwo(option === "yes");

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
