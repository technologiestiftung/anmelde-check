import { test, expect } from "@playwright/test";

test("should translate page to english", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	await page.getByRole("combobox").selectOption("English - EN");

	const englishHeading = page.getByRole("heading", {
		name: "Your RegiCheck",
	});

	await expect(englishHeading).toBeVisible();
});

test("should translate page to german", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	await page.getByRole("combobox").selectOption("English - EN");
	await page.getByRole("combobox").selectOption("Deutsch - DE");

	const germanHeading = page.getByRole("heading", {
		name: "Dein Anmelde-Check",
	});

	await expect(germanHeading).toBeVisible();
});

test("should translate page to arabic", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	await page.getByRole("combobox").selectOption("العربية - AR");

	const arabicHeading = page.getByRole("heading", {
		name: "مساعد التسجيل الخاص بك",
	});

	await expect(arabicHeading).toBeVisible();
});

test("should translate page to spanish", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	await page.getByRole("combobox").selectOption("Español - ES");

	const spanishHeading = page.getByRole("heading", {
		name: "Tu Asistente de Registro",
	});

	await expect(spanishHeading).toBeVisible();
});

test("should translate page to french", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	await page.getByRole("combobox").selectOption("Français - FR");

	const frenchHeading = page.getByRole("heading", {
		name: "Votre assistant de changement d'adresse",
	});

	await expect(frenchHeading).toBeVisible();
});

test("should translate page to turkish", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	await page.getByRole("combobox").selectOption("Türkçe - TR");

	const turkishHeading = page.getByRole("heading", {
		name: "Kayıt Yardımcınız",
	});

	await expect(turkishHeading).toBeVisible();
});

test("should translate page to russian", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	await page.getByRole("combobox").selectOption("Русский - RU");

	const russianHeading = page.getByRole("heading", {
		name: "Ваш помощник по регистрации",
	});

	await expect(russianHeading).toBeVisible();
});

test("should keep the same language after refresh", async ({ page }) => {
	await page.goto("http://localhost:5173/");

	await page.getByRole("combobox").selectOption("English - EN");

	const englishHeadingBeforeRefresh = page.getByRole("heading", {
		name: "Your RegiCheck",
	});

	await expect(englishHeadingBeforeRefresh).toBeVisible();

	await page.reload();

	const englishHeadingAfterRefresh = page.getByRole("heading", {
		name: "Your RegiCheck",
	});

	await expect(englishHeadingAfterRefresh).toBeVisible();
});

test("should correctly change document lang and dir when switching language from german to arabic and back", async ({
	page,
}) => {
	await page.goto("http://localhost:5173/");

	const initialLang = await page.evaluate(() => document.documentElement.lang);
	const initialDir = await page.evaluate(() => document.documentElement.dir);

	expect(initialLang).toBe("de");
	expect(initialDir).toBe("ltr");

	await page.getByRole("combobox").selectOption("العربية - AR");

	const arabicLang = await page.evaluate(() => document.documentElement.lang);
	const arabicDir = await page.evaluate(() => document.documentElement.dir);

	expect(arabicLang).toBe("ar");
	expect(arabicDir).toBe("rtl");

	await page.getByRole("combobox").selectOption("Deutsch - DE");

	const germanLang = await page.evaluate(() => document.documentElement.lang);
	const germanDir = await page.evaluate(() => document.documentElement.dir);

	expect(germanLang).toBe("de");
	expect(germanDir).toBe("ltr");
});
