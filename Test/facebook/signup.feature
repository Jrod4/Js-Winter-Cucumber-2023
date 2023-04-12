@regression 
Feature: Sign up date

Background: 
    Given I am on Facebook homepage
    When I click on Create New Account button

Scenario: Verify current date is selected in sign up form
    
    
    Then I verify current month is selected in month dropdown
    And I verify current date is selected in date dropdown
    And I verify current year is selected in year dropdown


    # Scenario: Verify default state of signup form

    # Then I verify firstname field is empty
    # And I verify lastname field is empty
    # And I verify phone number field is empty
    # And I verify current date is selected
    # And I verify no gender is selected              