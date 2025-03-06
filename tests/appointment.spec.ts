import { expect, test } from "@playwright/test";

test("Should read appointment from URL query params", async ({ page }) => {
	await page.goto("http://localhost:5173/?appointment=2024-02-28T15:30:00Z");

	const appointmentParagraph = page.getByText("Dein Termin:Mittwoch, 28.");
	await expect(appointmentParagraph).toBeVisible();
});

test("Should display fallback when no appointment is in URL query params", async ({
	page,
}) => {
	await page.goto("http://localhost:5173/");

	const appointmentParagraph = page.getByText("Du hast noch keinen Termin?");
	await expect(appointmentParagraph).toBeVisible();
});
