import { test, expect } from '@playwright/test';
import { loadJsonData } from '../../util/fileUtils';
import { loginFixture } from '../../fixtures/loginFixture';
import { LoginData } from '../../types';
import dotenv from 'dotenv';

test.describe('Login Tests', () => {
  dotenv.config();

  let loginData: LoginData;
  const baseUrl: string = process.env.BASE_URL || '';

  // Load the login data before all tests
  test.beforeAll(async () => {
    loginData = loadJsonData('testData/loginData.json');
    if (!loginData) {
      throw new Error('Failed to load login data from testData/loginData.json');
    }
  });

  // Test for valid login
  test('Valid login', async ({ page }) => {
    const validUser = loginData.validUser;

    // Use the login fixture to perform the login
    await loginFixture(page, baseUrl, validUser.username, validUser.password);

    // Assert that the user is redirected to the inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Optionally, verify the presence of a product list
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  // Test for invalid login
  test('Invalid login shows error', async ({ page }) => {
    const invalidUser = loginData.invalidUser;

    // Use the login fixture to perform the login with invalid credentials
    await loginFixture(page, baseUrl, invalidUser.username, invalidUser.password);

    // Assert that the error message appears
    const errorMessage = page.locator('.error-message-container');  
    await expect(errorMessage).toBeVisible();

    // Verify the specific error message
    await expect(errorMessage).toContainText('Username and password do not match any user in this service');
  });
});