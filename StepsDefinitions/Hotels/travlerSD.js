const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const HomePage = require('../../Pages/Hotels/HomePage')

const homePage = new HomePage();


When (/^I Click on Travelers$/, async function() {
await homePage.WebFieldElement();
})

When (/^I Select “Children” as 2$/, async function() {
await homePage.increaseChild();
})

Then (/^I Verify Children-age dropdown are 2$/, async function() {
    const are2dropdowns = await homePage.childDropdown();
    expect(are2dropdowns, 'There are not two').to.be.true;
})

Then (/^I Verify Plus-button is enabled$/, async function() {
const plusEnabled = await homePage.verifyPlusBtn();
expect(plusEnabled, 'Not enabled').to.be.true;
})

Then (/^I Verify minus-button is enabled$/, async function() {
const minusEnabled = await homePage.verifyminusBtn();
expect(minusEnabled, 'Not enabled').to.be.true;
})

When (/^I Select “Children” as 6$/, async function() {
await homePage.increaseChildBy4();
})

Then (/^I Verify Children-age dropdown are 6$/, async function () {
const dropdownIs = await homePage.verifyCount();
const newDropDownIs = dropdownIs.length;
expect(newDropDownIs,'Wrong dropdown amount').to.equal(6)
})

Then (/^I Verify Plus button is disabled$/, async function() {
const plusEnabled = await homePage.plusDisabled();
expect(plusEnabled, 'Not enabled').to.be.false;
})

Then (/^I Verify minus-button is enabled.$/, async function() {
const minusEnabled2 = await homePage.verifyminusBtn();
expect(minusEnabled2, 'Not enabled').to.be.true;
})

When(/^I Select “Children” as 5$/, async function() {
await homePage.decreaseChild()
})

Then (/^I Verify Children-age dropdown are 5$/, async function () {
const dropdownIs = await homePage.verifyCount();
const newDropDownIs = dropdownIs.length;
expect(newDropDownIs,'Wrong dropdown amount').to.equal(5)
})

Then (/^I Verify Plus button is enabled.$/, async function() {
const plusEnabled2 = await homePage.verifyPlusBtn();
expect(plusEnabled2, 'Not enabled').to.be.true;
})

Then (/^i Verify minus-button is enabled$/, async function() {
const minusEnabled3 = await homePage.verifyminusBtn();
expect(minusEnabled3, 'Not enabled').to.be.true;
})

When(/^I Select “Children” as 0$/, async function() {
await homePage.decreaseChildBy5()
})

Then (/^I Verify Children-age dropdown is NOT displayed$/, async function() {
const dropdown = await homePage.isChildDropdownShown();
expect(dropdown, 'Is displayed').to.be.false;
})

Then (/^I verify Plus button is enabled.$/, async function() {
const plusEnabled4 = await homePage.verifyPlusBtn();
expect(plusEnabled4, 'Not enabled').to.be.true;
})

Then (/^I Verify minus-button is disabled.$/, async function() {
const minusDisabled = await homePage.minusDisabled();
expect(minusDisabled, 'Is enabled').to.be.false;
})

When (/^I Select “Adults as 6$/,async function() {
await homePage.increaseAdult();
})

Then (/^I Select “Children” as 3$/, async function() {
await homePage.increaseChildBy3();
})


Then (/^I Select first child age: 4$/, async function() {
await homePage.child1Age();
})

Then (/^I Select second child age: Under 1$/, async function() {
await homePage.child2Age();
})

Then (/^I Select third child age: 7$/, async function() {
await homePage.child3Age();
})

Then (/^I Click done$/, async function() {
await homePage.clickDone();
})

Then (/^I Verify total number of Travelers is sum of adults and children as same as selected on step #3 and #4$/, async function() {
const sum = await homePage.sumOfTravlers();
expect(sum.endsWith('9 travelers, 1 room'), 'Not the total').to.be.true
})







