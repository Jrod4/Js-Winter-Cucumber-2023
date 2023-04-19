Feature: Sign in
    
    @invalidEmail
    Scenario:TC-21 Verify Verification message for invalid sign in credentials
        Then I click on “Sign in” link
        Then I click on Sign in button
        Then I enter invalid email address
        Then I click on Continue button
        Then I verify error message is displayed