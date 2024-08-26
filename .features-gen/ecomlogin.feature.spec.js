/** Generated from: ecomlogin.feature */
import { test } from "playwright-bdd";

test.describe("Verify login", () => {

  test("Verify user is able to login with valid credentials", async ({ Given, page, And, When, Then }) => {
    await Given("I navigate to \"https://ecommerce-playground.lambdatest.io/\"", null, { page });
    await And("I click on My account", null, { page });
    await And("I enter E-Mail Address \"vishaltest1@gmail.com\"", null, { page });
    await And("I enter password \"Test1234\"", null, { page });
    await When("I click on Login button", null, { page });
    await Then("I should verify url contains \"route=account/account\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("ecomlogin.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify user is able to login with valid credentials": {"pickleLocation":"6:3"},
};