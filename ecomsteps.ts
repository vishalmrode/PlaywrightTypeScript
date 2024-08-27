import { expect } from "@playwright/test";
import { createBdd } from 'playwright-bdd';

const {Given,When,Then} =createBdd();


Given('I navigate to {string}', async ({page}, url) => {
    await page.goto(url)
  });
  

  Given('I click on My account', async ({page}, My_account) => {
    //await page.waitForTimeout(10000);
    await page.waitForSelector("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
    await page.getByRole('button', { name: 'My account' }).click();
  });
  

  Given('I enter E-Mail Address {string}', async ({ page }, emailAddress) => {
    await page.getByPlaceholder('E-Mail Address').fill(emailAddress);
  });
  
 
  Given('I enter password {string}', async ({page}, password) => {
    await page.getByPlaceholder('Password').fill(password);
  });
  
  
  When('I click on Login button', async ({page}) => {
    await page.locator("input[value='Login']").click();
  });
  

  Then('I should verify url contains {string}', async ({page}, logged_url) => {
   await expect(page).toHaveURL(new RegExp(logged_url))
  });