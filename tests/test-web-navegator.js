import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
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