Feature: Login 

Background:
    Given I am on facebook homepage



Scenario: Verify login fields are enabled
    Then I verify login email field is enabled
    And I verify login password field is enabled
    And I verify login button field is enabled


