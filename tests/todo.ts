import { test, expect } from '@playwright/test';

test('Add a todo item', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.getByPlaceholder('What needs to be done?').fill('Write Playwright Tests');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await expect(page.locator('.todo-list li')).toHaveText(['Write Playwright Tests']);
});
