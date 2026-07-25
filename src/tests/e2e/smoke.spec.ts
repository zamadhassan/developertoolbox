import { expect, test } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Everyday Developer Tools/i })).toBeVisible();
});

test('tools directory and pilot tool work', async ({ page }) => {
  await page.goto('/tools');
  await page
    .getByRole('link', { name: /JSON Formatter/i })
    .first()
    .click();
  await page.getByLabel('Input').fill('{"ok":true}');
  await page.getByRole('button', { name: 'Process' }).click();
  await expect(page.getByLabel('Output')).toContainText('"ok": true');
});

test('header search opens and navigates to a tool', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Search tools/i }).click();
  await page.getByLabel('Search tools').fill('base64');
  await page
    .getByRole('dialog', { name: 'Search developer tools' })
    .getByRole('link', { name: /Base64 String Converter/i })
    .click();
  await expect(page.getByRole('heading', { name: 'Base64 String Converter' })).toBeVisible();
});

test('invalid tool route shows not found recovery', async ({ page }) => {
  await page.goto('/tools/not-a-real-tool');
  await expect(page.getByRole('heading', { name: /Page not found/i })).toBeVisible();
});
