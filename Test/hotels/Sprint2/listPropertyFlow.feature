Feature: List property
    
    @verifyFlow
    Scenario:TC-29 Verify "List your Property" flow
        Then I click on “List your property”
        Then I verify “What would you like to list” is displayed
        Then I verify “Lodging“ and “Private residence“ options are displayed
        Then I click on “Private residence“
        Then I verify ”Step 1 of 3” is displayed
        Then I verify “See how much you could earn!” is displayed
        Then I enter “4“ as bedroom
        Then I enter “2.5“ as bathroom
        Then I click on “Next” button
        Then I verify ”Step 2 of 3” is displayed
        Then I verify “Where is your property located” is displayed
        Then I enter “121” in address
        Then I select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
        Then I verify graph is displayed
        Then I verify pin in graph is displayed
        Then I verify “Move the pin to adjust the location of your property.“ is displayed below graph

