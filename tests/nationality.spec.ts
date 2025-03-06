import { test, expect } from "@playwright/test";

test("should have 4 documents in their checklist: registrationForm, movingInConfirmation, germanIdOrPassportOrChildPassport, confirmationOfCustodian", async ({
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

	yesRadio = page.getByLabel("Nein");
	await yesRadio.click(); // Are you over 16?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	const registrationForm = page
		.locator("div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page
		.locator("div")
		.filter({ hasText: /^Einzugsbestätigung des Wohnungsgebers\/Vermieters$/ });
	const germanIdOrPassportOrChildPassport = page.locator("div").filter({
		hasText: /^Dein eigener Personalausweis, Reisepass oder Kinderpass$/,
	});
	const confirmationOfCustodian = page
		.locator("div")
		.filter({ hasText: /^Einverständniserklärung Deiner Sorgeberechtigten$/ });

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(germanIdOrPassportOrChildPassport).toBeVisible();
	await expect(confirmationOfCustodian).toBeVisible();
});

test("should have 3 documents in their checklist: registrationForm, movingInConfirmation, euIdOrPassportOrReplacement", async ({
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

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // do you have the german nationality?
	await nextButton.click();

	let yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have an EU nationality?
	await nextButton.click();

	noRadio = page.locator("div").filter({ hasText: /^Ja$/ }).getByRole("radio");
	await noRadio.click(); // Are you over 16?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Are you a political refugee?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	const registrationForm = page
		.locator("div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page
		.locator("div")
		.filter({ hasText: /^Einzugsbestätigung des Wohnungsgebers\/Vermieters$/ });
	const euIdOrPassportOrReplacement = page.locator("div").filter({
		hasText: /^Europäische ID-Card, Reisepass oder Passersatzpapiere$/,
	});

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(euIdOrPassportOrReplacement).toBeVisible();
});

test("should have 4 documents in their checklist: registrationForm, movingInConfirmation, euIdOrPassportOrReplacement, confirmationOfCustodian", async ({
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

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // do you have the german nationality?
	await nextButton.click();

	let yesRadio = page.getByLabel("Ja");
	await yesRadio.click(); // do you have an EU nationality?
	await nextButton.click();

	yesRadio = page.getByLabel("Nein");
	await yesRadio.click(); // Are you over 16?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Are you a political refugee?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	const registrationForm = page
		.locator("div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page
		.locator("div")
		.filter({ hasText: /^Einzugsbestätigung des Wohnungsgebers\/Vermieters$/ });
	const euIdOrPassportOrReplacement = page.locator("div").filter({
		hasText: /^Europäische ID-Card, Reisepass oder Passersatzpapiere$/,
	});
	const confirmationOfCustodian = page
		.locator("div")
		.filter({ hasText: /^Einverständniserklärung Deiner Sorgeberechtigten$/ });

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(euIdOrPassportOrReplacement).toBeVisible();
	await expect(confirmationOfCustodian).toBeVisible();
});

test("should have 4 documents in their checklist: registrationForm, movingInConfirmation, nonEuIdOrPassportOrReplacement, confirmationOfCustodian", async ({
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

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // do you have the german nationality?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // do you have an EU nationality?
	await nextButton.click();

	let yesRadio = page.getByLabel("Nein");
	await yesRadio.click(); // Are you over 16?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Are you a political refugee?
	await nextButton.click();

	noRadio = page
		.locator("div")
		.filter({ hasText: /^Nein$/ })
		.getByRole("radio");
	await noRadio.click(); // Do you stay registered in another flat?
	await nextButton.click();

	const registrationForm = page
		.locator("div")
		.filter({ hasText: /^Anmeldeformular$/ });
	const movingInConfirmation = page
		.locator("div")
		.filter({ hasText: /^Einzugsbestätigung des Wohnungsgebers\/Vermieters$/ });
	const confirmationOfCustodian = page
		.locator("div")
		.filter({ hasText: /^Einverständniserklärung Deiner Sorgeberechtigten$/ });
	const nonEuIdOrPassportOrReplacement = page.locator("div").filter({
		hasText: /^Reisepass oder Passersatzpapiere$/,
	});

	await expect(registrationForm).toBeVisible();
	await expect(movingInConfirmation).toBeVisible();
	await expect(confirmationOfCustodian).toBeVisible();
	await expect(nonEuIdOrPassportOrReplacement).toBeVisible();
});
