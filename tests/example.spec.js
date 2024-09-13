// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://partners-dev.drvn.com/#/login');
  await page.getByRole('img').click();
  await page.getByRole('link', { name: 'Enter Mobile Number' }).click();
  await expect(page.getByRole('textbox', { name: 'Mobile Number' })).toBeVisible();
  await page.close();



});

test('test', async ({ page }) => {
  await page.goto('https://partners-dev.drvn.com/#/login');
  await page.getByPlaceholder('Enter Mobile Number').click();
  await page.getByPlaceholder('Enter Mobile Number').fill('(317) 983-3835');
  await page.getByRole('button', { name: 'SIGN IN' }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('4');
  await page.getByRole('textbox').nth(1).fill('4');
  await page.getByRole('textbox').nth(2).fill('4');
  await page.getByRole('textbox').nth(3).fill('2');
  await page.getByRole('button', { name: 'Verify Now' }).click();
  await page.getByRole('button', { name: 'menu' }).click();
  await page.getByText('Profile').click();
  await page.getByText('Payment Profile').click();
  await page.getByText('American Express Bank').click();
  await page.getByRole('button', { name: 'CANCEL' }).click();
  await page.getByText('CONTINUE PAYMENT SETUP').click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByLabel('back', { exact: true }).click();
  await page.getByText('Edit your profile').click();
  await page.getByRole('textbox', { name: 'Enter drivers last name' }).click();
  await page.getByRole('textbox', { name: 'Enter drivers last name' }).fill('Martino 123123123');
  await page.getByRole('button', { name: 'save outline SAVE' }).click();
  await page.getByRole('button', { name: 'menu' }).click();
  await page.getByText('Home').click();
});