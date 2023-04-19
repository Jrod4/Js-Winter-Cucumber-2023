const { Then, When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const HomePage = require('../../../Pages/Hotels/Sprint 2/Homepage')
const SignupPage = require("../../../Pages/Hotels/SignupPage");

const homepage = new HomePage();
const signuppage = new SignupPage();

//TC-31
Then(/^I click English language$/, async function() {
    await homepage.clickEnLink();
})

Then(/^I Select Español in Language dropdown$/, async function() {
    await homepage.selectEspanol();
})

Then(/^I click on save button$/, async function() {
    await homepage.clickSave();
})

Then(/^I verify Español is displayed$/, async function() {
    const isDisplayed = await homepage.isEspanolDisplayed();
    expect(isDisplayed, 'Espanol is not displayed').to.be.true;
})

Then(/^I click on Espanol language$/, async function() {
    await homepage.clickEspLink();
})

Then(/^I Select English in Language dropdown$/, async function() {
    await homepage.selectEnglish();
})

Then(/^I click on Gaurdar button$/, async function() {
    await homepage.clickGuadar();
})

Then(/^I verify English is displayed$/, async function() {
    const englishDisplayed = await homepage.isEnglishDisplayed();
    expect(englishDisplayed, 'Not displayed').to.be.true;
})

//TC-29
Then(/^I click on “List your property”$/, async function(){
    await homepage.clickListProperty();
})

Then(/^I verify “What would you like to list” is displayed$/, async function(){
await homepage.connectBrowser();
const isDisplayed = await homepage.whatTypeOfProperty();
expect(isDisplayed, 'Not displayed').to.be.true;
})

Then(/^I verify “Lodging“ and “Private residence“ options are displayed$/, async function(){
const listingTypesDisplayed = await homepage.listingOptDIsplayed();
expect(listingTypesDisplayed, 'Both types not displayed').to.be.true;
})

Then(/^I click on “Private residence“$/, async function(){
await homepage.clickPrivateResidence();   
})

Then(/^I verify ”Step 1 of 3” is displayed$/, async function(){
const stepOneDisplayed = await homepage.stepOneOfThree();
expect(stepOneDisplayed, 'Not displayed').to.be.true;  
})

Then(/^I verify “See how much you could earn!” is displayed$/, async function(){
const earnDisplayedTxt = await homepage.verifyEarnDisplayedTxt();
expect(earnDisplayedTxt, 'Not displayed').to.be.true;
})

Then(/^I enter “4“ as bedroom$/, async function(){
await homepage.increaseBedroom();   
})

Then(/^I enter “2.5“ as bathroom$/, async function(){
await homepage.increaseBathroom();  
})

Then(/^I click on “Next” button$/, async function(){
await homepage.clicknext(); 
})

Then(/^I verify ”Step 2 of 3” is displayed$/, async function(){
const stepTwoDisplayed = await homepage.stepTwoOfThree()
expect(stepTwoDisplayed, 'Step 2 not displayed').to.be.true;   
})

Then(/^I verify “Where is your property located” is displayed$/, async function(){
const propertyLoactionTxt = await homepage.whereIsLocationTxt();
expect(propertyLoactionTxt, 'Not displayed').to.be.true;    
})

Then(/^I enter “121” in address$/, async function(){
await homepage.enterAddressField();   
})

Then(/^I select “1211 6th Avenue, New York, NY, USA” from auto-suggestion$/, async function(){
await homepage.selectAddress();
})

Then(/^I verify graph is displayed$/, async function(){
const graphDisplayed = await homepage.mapDisplayed();
expect(graphDisplayed, 'Graph not displayed').to.be.true;
})

Then(/^I verify pin in graph is displayed$/, async function(){
const isPinDisplayed = await homepage.pinDisplayed();
expect(isPinDisplayed, 'Not displayed').to.be.true;    
})

Then(/^I verify “Move the pin to adjust the location of your property.“ is displayed below graph$/, async function(){
const movePinTxt = await homepage.adjustPinTxt();
expect(movePinTxt, 'Not displayed').to.be.true;   
})

//TC-21
Then(/^I click on “Sign in” link$/, async function() {
await signuppage.signinLink();
await browser.pause(2000);
})

Then(/^I click on Sign in button$/, async function() {
await homepage.clickSigninBtn();
await browser.pause(2000);
})

Then(/^I enter invalid email address$/, async function() {
await homepage.enterInvalidEmail();
await browser.pause(2000);
})

Then(/^I click on Continue button$/, async function() {
await homepage.clickContinueBtn();
await browser.pause(2000);
})

Then(/^I verify error message is displayed$/, async function() {
const invalidEmailMsg = await homepage.verifyErr();
expect(invalidEmailMsg, 'Not displayed').to.be.true;
})

//TC-17
When(/^I click on dates$/, async function() {
await homepage.clickDates();
})

Then(/^I go to current month if not displayed$/, async function() {
await homepage.goToCurrentMonth();
})

Then(/^I verify past dates are disabled$/, async function() {
await homepage.pastDatesDisabled();
})

Then(/^I verify back on current month is disabled$/, async function() {
const monthBackBtn = await homepage.isBackBtnDisabled();
expect(monthBackBtn, 'Not disabled').to.be.false;
})



