@regression
Feature: Hotels Signup
    Background: 
        Then I Click Sign in link

       
    @SignUpForm1
    Scenario:TC-22 Verify error message for invalid data in SignUp form
            
            Then I Click Sign up link
            When I Enter invalid email address
            Then I Verify error is displayed Enter a valid email
            When I Enter invalid first name
            Then I Verify error is displayed first name cannot contain special characters
            When I Enter invalid last name
            Then I Verify error is displayed last name cannot contain special characters
            Then I Enter a password
            Then I Verify “Keep me signed in” checkbox is displayed and enabled
            Then I Verify “Continue” button is displayed but NOT enabled

    @SignUpForm2
    Scenario:TC-20 Verify error message for invalid data in SignUp form
            
            Then I Click Sign up link
            When I Click “Terms and Conditions” link
            Then I Verify “Terms and Conditions” page opens in new tab
            Then I Verify “Last revised“ date 
            # Then I Click “Privacy Statement” link
            # Then I Verify “Privacy Statement” page opens in new tab
            # Then I Verify “Last Updated“ date format



    @verifyError
    Scenario:TC-24 Verify error is displayed when user submits the empty feedback form
            
            When I Click “Feedback”
            Then I Click on Submit button
            Then I Verify error message is displayed Please fill in the required information highlighted below
            Then I Verify red-dotted line is displayed around star-section

    @verifySubmit
    Scenario:TC-25 Verify user can submit feedback after completing the feedback form

            When I Select any star-rating
            Then I Enter any comments
            Then I Select any option for “How likely are you to return to Hotels.com”
            Then I Select any answer for “Prior to this visit, have you ever booked on Hotels.com”
            Then I Select any answer for ”Did you accomplish what you wanted to do on this page”
            Then I Click on Submit button.
            Then I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed




            




