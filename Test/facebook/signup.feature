Feature: Sign up date

Scenario: Verify current date is selected in sign up form
    Given I am on Facebook homepage
    When I click on Create New Account button
    Then I verify current month is selected in month dropdown
    And I verify current date is selected in date dropdown
    And I verify current year is selected in year dropdown