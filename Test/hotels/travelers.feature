Feature: Hotel Travlers
    Background: 
        When I Click on Travelers
    

    @verifyAge
    Scenario:TC-28 Verify Child-age dropdowns are same as number of Children selected
       
        When I Select “Children” as 2
        Then I Verify Children-age dropdown are 2
        Then I Verify Plus-button is enabled
        Then I Verify minus-button is enabled
        When I Select “Children” as 6
        Then I Verify Children-age dropdown are 6
        Then I Verify Plus button is disabled
        Then I Verify minus-button is enabled.
        When I Select “Children” as 5
        Then I Verify Children-age dropdown are 5
        Then I Verify Plus button is enabled.
        Then i Verify minus-button is enabled
        When I Select “Children” as 0
        Then I Verify Children-age dropdown is NOT displayed
        Then I verify Plus button is enabled.
        Then I Verify minus-button is disabled.

    @verifyGuest
    Scenario:TC-18 Verify user can update number of guests on Home page
        
        When I Select “Adults as 6
        Then I Select “Children” as 3
        Then I Select first child age: 4
        Then I Select second child age: Under 1
        Then I Select third child age: 7
        Then I Click done
        Then I Verify total number of Travelers is sum of adults and children as same as selected on step #3 and #4
