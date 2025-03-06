import { useProgressStore } from "../steps/store";

export function Progress({ id }: { id: string }) {
	const currentStep = useProgressStore((state) => state.currentStep);
	const maxStep = useProgressStore((state) => state.maxSteps);

	return (
		<>
			<label htmlFor={id} className="sr-only">
				Current progress: {currentStep} of {maxStep} steps
			</label>
			<progress
				className="h-1 w-full bg-transparent"
				id={id}
				value={currentStep}
				max={maxStep}
			/>
		</>
	);
}
