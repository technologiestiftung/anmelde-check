import { useI18n } from "../../i18n/hook/useI18n";

export function HeaderTitle() {
	const t = useI18n();

	return (
		<h1 className="text-xl font-bold md:text-2xl">
			{t("title")}{" "}
			<img
				src="/images/icon-checked-document.svg"
				alt=""
				className="mb-2 inline ltr:ml-2 rtl:mr-2"
			/>
		</h1>
	);
}
