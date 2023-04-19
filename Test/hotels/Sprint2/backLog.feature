Feature: blacklog testing on hotel.com

    @disabledDates
    Scenario:TC-17 Verify past dates and back button on Current month's calendar is disabled
        When I click on dates
        Then I go to current month if not displayed
        Then I verify past dates are disabled
        Then I verify back on current month is disabled