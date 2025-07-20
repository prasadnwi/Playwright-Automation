import { Page } from '@playwright/test';

export const loginFixture = async (page: Page, url: string, username: string, password: string) => {
  await page.goto(url);
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');
};
