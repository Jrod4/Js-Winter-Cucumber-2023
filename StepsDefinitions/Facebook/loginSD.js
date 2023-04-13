
const { Given, Then} = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HomePage = require('../../Pages/Facebook/HomePage')

const homePage = new HomePage();

Given(/^I am on facebook homepage$/, async function () {
  await browser.url("/");
  await browser.pause(2000)
});

Then(/^I verify login email field is enabled$/, async function () {
  const enabledEmail = await homePage.emailFieldEnabled();
  expect(enabledEmail, "Email field is not Enabled").to.be.true;
});


Given(/^I verify login password field is enabled$/, async function () {
    const enabledPass = await homePage.passWordFieldEnabled();
    expect(enabledPass,'Password Field is not enabled').to.be.true;
});


Given(/^I verify login button field is enabled$/, async function () {
  const enabledBtn = await homePage.loginBtnEnabled();
  expect(enabledBtn,'Button is not enabled').to.be.true;
});






