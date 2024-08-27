import { expect } from "@playwright/test";
import { createBdd } from 'playwright-bdd';

const {Given,When,Then} =createBdd();

// 1. Missing step definition for "ecomlogin.feature:7:5"
Given('I navigate to {string}', async ({page}, url) => {
    await page.goto(url)
  });
  
  // 2. Missing step definition for "ecomlogin.feature:8:5"
  Given('I click on My account', async ({page}, My_account) => {
    //await page.waitForTimeout(10000);
    await page.getByRole('button', { name: 'My account' }).click();
    await page.waitForTimeout(10000);
  });
  
  // 3. Missing step definition for "ecomlogin.feature:9:5"
  Given('I enter E-Mail Address {string}', async ({ page }, emailAddress) => {
    await page.getByPlaceholder('E-Mail Address').fill(emailAddress);
  });
  
  // 4. Missing step definition for "ecomlogin.feature:10:5"
  Given('I enter password {string}', async ({page}, password) => {
    await page.getByPlaceholder('Password').fill(password);
  });
  
  // 5. Missing step definition for "ecomlogin.feature:11:5"
  When('I click on Login button', async ({page}) => {
    await page.getByText('Login').click();
  });
  
  // 6. Missing step definition for "ecomlogin.feature:12:5"
  Then('I should verify url contains {string}', async ({page}, logged_url) => {
   await expect(page).toHaveURL(new RegExp(logged_url))
  });