import { expect, firefox, test } from "@playwright/test";
import type { Page } from "@playwright/test";

function getTab(browserName: string) {
	if (browserName === "webkit") {
		return "Alt+Tab";
	}

	return "Tab";
}

async function getPageWithUserPrefs(page: Page, browserName: string) {
	if (browserName === "firefox") {
		const browser = await firefox.launch({
			// this is necessary to make so firefox allows to navigate between focusable elements with the tab key
			firefoxUserPrefs: { "accessibility.tabfocus": 7 },
		});

		return browser.newPage();
	}

	return page;
}
test("App should be usable with keyboard", async ({ page, browserName }) => {
	const customPage = await getPageWithUserPrefs(page, browserName);

	await customPage.goto("http://localhost:5173/");

	const tab = getTab(browserName);

	await customPage.keyboard.press(tab); // move focus to language select
	await customPage.keyboard.press(tab); // move focus to book appointment
	await customPage.keyboard.press(tab); // move focus to next button

	await customPage.keyboard.press("Enter"); // click next button

	const q1 = customPage.getByText("Meldest Du Dich zum ersten");

	await expect(q1).toBeVisible();

	await customPage.keyboard.press(tab); // move focus to info button
	await customPage.keyboard.press(tab); // move focus to radio buttons
	await customPage.keyboard.press("ArrowDown"); // chose no

	await customPage.keyboard.press("Enter"); // click next button

	const q2 = customPage.getByText("Bist Du verheiratet?");
	await expect(q2).toBeVisible();

	await customPage.keyboard.press(tab); // move focus to info button
	await customPage.keyboard.press(tab); // move focus to radio buttons
	await customPage.keyboard.press("ArrowDown"); // chose no

	await customPage.keyboard.press("Enter"); // click next button

	const q3 = customPage.getByText("Hast Du Kinder unter 18 Jahren?");
	await expect(q3).toBeVisible();

	await customPage.keyboard.press(tab); // move focus to info button
	await customPage.keyboard.press(tab); // move focus to radio buttons
	await customPage.keyboard.press("ArrowDown"); // chose no

	await customPage.keyboard.press("Enter"); // click next button

	const q4 = customPage.getByText("Hast Du die deutsche Staatsangehörigkeit?");
	await expect(q4).toBeVisible();

	await customPage.keyboard.press(tab); // move focus to info button
	await customPage.keyboard.press(tab); // move focus to radio buttons
	await customPage.keyboard.press("ArrowDown"); // chose no

	await customPage.keyboard.press("Enter"); // click next button

	const q5 = customPage.getByText("Kommst Du aus einem EU-Land?");
	await expect(q5).toBeVisible();

	await customPage.keyboard.press(tab); // move focus to info button
	await customPage.keyboard.press(tab); // move focus to radio buttons
	await customPage.keyboard.press("ArrowDown"); // chose no

	await customPage.keyboard.press("Enter"); // click next button

	const q6 = customPage.getByText("Bist Du über 16 Jahre alt?");
	await expect(q6).toBeVisible();

	await customPage.keyboard.press(tab); // move focus to info button
	await customPage.keyboard.press(tab); // move focus to radio buttons
	await customPage.keyboard.press("ArrowDown"); // chose no

	await customPage.keyboard.press("Enter"); // click next button

	const q7 = customPage.getByText("Bist Du Geflüchtete:r?");
	await expect(q7).toBeVisible();

	await customPage.keyboard.press(tab); // move focus to info button
	await customPage.keyboard.press(tab); // move focus to radio buttons
	await customPage.keyboard.press("ArrowDown"); // chose no

	await customPage.keyboard.press("Enter"); // click next button

	const q8 = customPage.getByText(
		"Bleibst Du in einer anderen Wohnung gemeldet?",
	);
	await expect(q8).toBeVisible();

	await customPage.keyboard.press(tab); // move focus to info button
	await customPage.keyboard.press(tab); // move focus to radio buttons
	await customPage.keyboard.press("ArrowDown"); // chose no

	await customPage.keyboard.press("Enter"); // click next button

	const overview = customPage.getByRole("heading", {
		name: "Deine Dokumenten-Checkliste",
	});
	const registrationForm = customPage
		.locator("div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = customPage
		.locator("div")
		.filter({ hasText: /^Einzugsbestätigung des Wohnungsgebers\/Vermieters$/ });
	const confirmationOfCustodian = customPage
		.locator("div")
		.filter({ hasText: /^Einverständniserklärung Deiner Sorgeberechtigten$/ });

	const germanIdOrPassport = customPage
		.locator("div")
		.filter({ hasText: /^Reisepass oder Passersatzpapiere$/ });

	await expect(overview).toBeVisible();
	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(confirmationOfCustodian).toBeVisible();
	await expect(germanIdOrPassport).toBeVisible();
});
