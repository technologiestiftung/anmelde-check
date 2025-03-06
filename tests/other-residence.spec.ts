import { expect, test } from "@playwright/test";

test("should have 4 documents in their checklist: registrationForm, movingInConfirmation, germanIdOrPassport, supplement (abroad)", async ({
	page,
}) => {
	await page.goto("http://localhost:5173/");

	const nextButton = page.getByRole("button", { name: "Weiter" });

	await nextButton.click();

	let noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");

	await noRadio.click(); // first registration in berlin?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // are you married?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // do you have kids under 18?
	await nextButton.click();

	let yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have the german nationality?
	await nextButton.click();

	noRadio = page.locator("div").filter({ hasText: /^Ja$/ }).getByRole("radio");
	await noRadio.click(); // Are you over 16?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // Do you live abroad?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // Do you want to stay more than 3 months in Berlin?
	await nextButton.click();

	const registrationForm = page
		.locator("div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page
		.locator("div")
		.filter({ hasText: /^Einzugsbestätigung des Wohnungsgebers\/Vermieters$/ });
	const germanIdOrPassport = page
		.locator("div")
		.filter({ hasText: /^Dein eigener Personalausweis oder Reisepass$/ });
	const supplement = page.locator("div").filter({
		hasText: /^Beiblatt zur Anmeldung\/Hauptwohnungserklärung$/,
	});

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(germanIdOrPassport).toBeVisible();
	await expect(supplement).toBeVisible();
});

test("should have 4 documents in their checklist: registrationForm, movingInConfirmation, germanIdOrPassport, supplement (inland)", async ({
	page,
}) => {
	await page.goto("http://localhost:5173/");

	const nextButton = page.getByRole("button", { name: "Weiter" });

	await nextButton.click();

	let noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");

	await noRadio.click(); // first registration in berlin?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // are you married?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // do you have kids under 18?
	await nextButton.click();

	let yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have the german nationality?
	await nextButton.click();

	noRadio = page.locator("div").filter({ hasText: /^Ja$/ }).getByRole("radio");
	await noRadio.click(); // Are you over 16?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Do you live abroad?
	await nextButton.click();

	yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // Do you want to stay more than 6 months in Berlin?
	await nextButton.click();

	const registrationForm = page
		.locator("div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page
		.locator("div")
		.filter({ hasText: /^Einzugsbestätigung des Wohnungsgebers\/Vermieters$/ });
	const germanIdOrPassport = page
		.locator("div")
		.filter({ hasText: /^Dein eigener Personalausweis oder Reisepass$/ });
	const supplement = page.locator("div").filter({
		hasText: /^Beiblatt zur Anmeldung\/Hauptwohnungserklärung$/,
	});

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(germanIdOrPassport).toBeVisible();
	await expect(supplement).toBeVisible();
});
