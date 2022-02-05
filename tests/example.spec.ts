import { test, expect } from '@playwright/test';

const screenshots = '../screenshots/';

test('test', async ({ page }) => {

  // Go to https://www.starbucks.com/
  await page.goto('https://www.starbucks.com/');

  // Click text=Menu
  await page.click('text=Menu');
  await expect(page).toHaveURL('https://www.starbucks.com/menu');
  await page.screenshot({ path: '../playwrightPOC/screenshots/screenshot.png' });

  // // Click text=Hot Coffees Hot Coffees >> a
  // await page.click('text=Hot Coffees Hot Coffees >> a');
  // await expect(page).toHaveURL('https://www.starbucks.com/menu/drinks/hot-coffees');

  // // Click a:has-text("Espresso")
  // await page.click('a:has-text("Espresso")');
  // await expect(page).toHaveURL('https://www.starbucks.com/menu/product/410/hot');

  // // Click text=Rewards
  // await page.click('text=Rewards');
  // await expect(page).toHaveURL('https://www.starbucks.com/rewards');

  // // Click text=Or join in the app for the best experience >> a
  // await Promise.all([
  //   page.waitForNavigation(/*{ url: 'https://www.starbucks.com/rewards/mobile-apps/' }*/),
  //   page.click('text=Or join in the app for the best experience >> a')
  // ]);

  // // Click :nth-match(:text("Join now"), 3)
  // await Promise.all([
  //   page.waitForNavigation(/*{ url: 'https://www.starbucks.com/account/create/' }*/),
  //   page.click(':nth-match(:text("Join now"), 3)')
  // ]);

  // // Click text=Join now
  // await page.click('text=Join now');
  // await expect(page).toHaveURL('https://www.starbucks.com/account/create');

  // // Click input[name="firstName"]
  // await page.click('input[name="firstName"]');

  // // Fill input[name="firstName"]
  // await page.fill('input[name="firstName"]', 'cookie');

  // // Click input[name="lastName"]
  // await page.click('input[name="lastName"]');

  // // Fill input[name="lastName"]
  // await page.fill('input[name="lastName"]', 'cloud');

  // // Click input[name="emailAddress"]
  // await page.click('input[name="emailAddress"]');

});



