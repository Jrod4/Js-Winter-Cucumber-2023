
const { Given, Then, And, When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const SignupPage = require('../../Pages/Facebook/SignupPage')

const signupPage = new SignupPage();

Given(/^I am on Facebook homepage$/, async function () {
  await browser.url("/")
  await browser.pause(2000);
});

When(/^I click on Create New Account button$/, async function () {
    await signupPage.btn();
    await browser.pause(2000)
});

Then(/^I verify current month is selected in month dropdown$/, async function () {
    const month = await signupPage.monthSelected();
    expect(month,'Month is not selected').to.be.true;
});

Then(/^I verify current date is selected in date dropdown$/, async function () {
    const date = await signupPage.dateSlected();
    expect(date,'Date is not selected').to.be.true;
});

Then(/^I verify current year is selected in year dropdown$/, async function () {
  const year = await signupPage.yearSelected();
  expect(year, "Year is not selected").to.be.true;
});

//HW4
Then(/^I verify current date is selected$/, async function() {
const fbDefualtDate1 = signupPage.fbDefualtDate();

expect(fbDefualtDate1, "Date is not selected").to.be.true;

});


