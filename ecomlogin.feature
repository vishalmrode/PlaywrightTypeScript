Feature: Verify login
    Feature Description

	Verify user is able to login with valid and invalid credentials

  Scenario: Verify user is able to login with valid credentials
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    And I click on My account
    And I enter E-Mail Address "vishaltest1@gmail.com"
    And I enter password "Test1234"
    When I click on Login button
    Then I should verify url contains "route=account/account"
