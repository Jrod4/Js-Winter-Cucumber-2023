const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const SignupPage = require("../../Pages/Hotels/SignupPage");

const signuppage = new SignupPage();


//TC-22
Then (/^I Click Sign in link$/, async function() {
    await signuppage.signinLink();
    await browser.pause(2000)
})

Then (/^I Click Sign up link$/, async function() {
    await signuppage.signupLink();
    await browser.pause(2000)
})

When (/^I Enter invalid email address$/,
async function () {
await signuppage.enterEmail()
await browser.pause(2000)
})

Then (/^I Verify error is displayed Enter a valid email$/, async function () {
const isDisplayed1 = await signuppage.emailErrDisplayed();
expect(isDisplayed1, 'Email error is not displayed').to.be.true;
})

When (/^I Enter invalid first name$/, async function (){
await signuppage.enterFirstName();
await browser.pause(2000)
})

Then (/^I Verify error is displayed first name cannot contain special characters$/, async function () {
const isDisplayed2 = await signuppage.firstNameErr();
expect(isDisplayed2, 'First name error not displayed').to.be.true;
})

When (/^I Enter invalid last name$/, async function () {
await signuppage.enterLastName();
await browser.pause(2000)
})

Then (/^I Verify error is displayed last name cannot contain special characters$/, async function () {
const isDisplayed3 = await signuppage.lastNameErr();
expect(isDisplayed3, 'Last name error not displayed').to.be.true;
})

Then (/^I Enter a password/, async function () {
await signuppage.enterPassword();
await browser.pause(2000)
})

Then (/^I Verify “Keep me signed in” checkbox is displayed and enabled$/, async function () {
const isDisplayed4 = await signuppage.checkboxDisplayed();
await browser.pause(2000)
expect(isDisplayed4, 'Check box not displayed and enabled').to.be.true;
})

Then (/^I Verify “Continue” button is displayed but NOT enabled$/, async function () {
const isDisplayed5 = await signuppage.continueBtn();
expect(isDisplayed5, 'Contiune button is not displayed and is enabled').to.be.true;
})

//TC-20
When (/^I Click “Terms and Conditions” link$/, async function () {
await signuppage.tcLink();
await browser.pause(2000)
})

Then (/^I Verify “Terms and Conditions” page opens in new tab$/, async function () {
const newTabTc = await signuppage.verifyPage();
const newTabTc1 = newTabTc.length;
expect(newTabTc1,'Not on a new tab').to.equal(2);
})

Then (/^I Verify “Last revised“ date$/, async function () {
await signuppage.verifyDateTermsHandle();
const date = await signuppage.verifyDate();
expect(date.endsWith('01/01/23'),'Not revised').to.equal('01/01/23')
})

// signuppage.switchWindow(); 


// Then (/^I Click “Privacy Statement” link$/, async function () {
// await signuppage.psLink();
// await browser.pause(2000)
// })

//TC-24
When (/^I Click “Feedback”$/, async function () {
await signuppage.clickFeedback();
})


Then (/^I Click on Submit button$/, async function () {
await signuppage.connectFeedbackPage();
await signuppage.scrollToSubmit();
await signuppage.clickSubmit();

})

Then (/^I Verify error message is displayed Please fill in the required information highlighted below$/, async function () {
const errMsgDisplayed = await signuppage.feedbackErr();
expect(errMsgDisplayed, 'Not displayed').to.be.true;
})

Then (/^I Verify red-dotted line is displayed around star-section$/, async function () {
const dotRedLine = await signuppage.redLineIsDisplayed();
expect(dotRedLine, 'Not displayed').to.be.true;
})

//TC-25
When(/^I Select any star-rating$/, async function () {
await signuppage.clickFeedback();
await signuppage.connectFeedbackPage();
await signuppage.clickStar1();
})

Then (/^I Enter any comments$/, async function () {
await signuppage.enterMsg();
})

Then (/^I Select any option for “How likely are you to return to Hotels.com”$/, async function () {
await signuppage.willYouReturn();
})

Then (/^I Select any answer for “Prior to this visit, have you ever booked on Hotels.com”$/, async function () {
await signuppage.bookedHereBefore();
})

Then (/^I Select any answer for ”Did you accomplish what you wanted to do on this page”$/, async function () {
await signuppage.accomplishedYourVisit();
})

Then (/^I Click on Submit button.$/, async function () {
await signuppage.scrollToSubmit();
await signuppage.clickSubmit();
})

Then (/^I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed$/, async function () {
const isDisplayed = await signuppage.isThankyouDisplayed();
expect(isDisplayed, 'Not displayed').to.be.true;
})
