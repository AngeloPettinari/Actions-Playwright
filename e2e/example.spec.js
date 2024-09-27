// @ts-check
const { test, expect, devices } = require('@playwright/test');
// @ts-ignore
const { chromium } = require('playwright');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  
  await expect(page).toHaveTitle(/Playwright/);
  await page.close();
});

test('get started link', async ({ page }) => {
  await page.goto('https://partners-dev.drvn.com/#/login');
  await page.getByPlaceholder('Enter Mobile Number').click();
  await page.getByPlaceholder('Enter Mobile Number').fill('(317) 983-3835');
  await page.getByRole('button', { name: 'SIGN IN' }).click();
  await page.waitForTimeout(1000);  
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('4');
  await page.getByRole('textbox').nth(1).fill('4');
  await page.getByRole('textbox').nth(2).fill('4');
  await page.getByRole('textbox').nth(3).fill('2');
  await page.getByRole('button', { name: 'Verify Now' }).click();
  await page.getByRole('button', { name: 'menu' }).click();
  await page.close();
  
 
});


test('drvn cc test en iPhone 11 Pro', async ({}) => {
  const iPhone11 = devices['iPhone 11 Pro'];

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    ...iPhone11,
    viewport: { width: 375, height: 812 }, 
    isMobile: true, 
    hasTouch: true,
  });

  const page = await context.newPage();
  
  await page.goto("https://drvn.cc/onboarding/slides");

  await page.close();
  await browser.close();
});