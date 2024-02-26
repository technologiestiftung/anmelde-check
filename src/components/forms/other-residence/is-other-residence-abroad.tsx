import { useOtherResidenceStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";
import { RadioInput } from "../../radio-input";
import { InfoButton } from "../../buttons/info-button";
import { PrimaryButton } from "../../buttons/primary-button";
import { SecondaryButton } from "../../buttons/secondary-button";
import { useTimeout } from "../../../hooks/useTimeout.tsx";

export function IsOtherResidenceAbroad() {
  const isOtherResidenceAbroad = useOtherResidenceStore(
    (state) => state.isOtherResidenceAbroad,
  );
  const setIsOtherResidenceAbroad = useOtherResidenceStore(
    (state) => state.setIsOtherResidenceAbroad,
  );

  const isValid = isOtherResidenceAbroad !== null;

  const goToPreviousStep = useProgressStore((state) => state.goToPreviousStep);
  const goToNextStep = useProgressStore((state) => state.goToNextStep);

  const language = useI18nStore((state) => state.language);

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
        <h3 className="flex w-full items-baseline justify-between gap-3">
          {t("other-residence.q2", language)}
          <div
            className="tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right"
            data-tip={t("other-residence.q2.tooltip", language)}
          >
            <InfoButton />
          </div>
        </h3>
        <div className="flex flex-col gap-1">
          {options.map((option) => {
            const name = "other-residence.q2.radio";
            const isChecked =
              (option === "yes" && isOtherResidenceAbroad === true) ||
              (option === "no" && isOtherResidenceAbroad === false);
            const onChange = () => setIsOtherResidenceAbroad(option === "yes");
            const label = t(option, language);

            return (
              <RadioInput
                key={option}
                name={`${name}.${option}`}
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
              ? `tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right ${arePointerEventsDisabled ? "pointer-events-none" : ""}`
              : undefined
          }`}
          data-tip={!isValid ? t("button.next.tooltip", language) : undefined}
        >
          <PrimaryButton
            label={t("button.next", language)}
            type="submit"
            disabled={!isValid}
          />
        </div>

        <SecondaryButton
          label={t("button.back", language)}
          onClick={goToPreviousStep}
        />
      </div>
    </form>
  );
}
