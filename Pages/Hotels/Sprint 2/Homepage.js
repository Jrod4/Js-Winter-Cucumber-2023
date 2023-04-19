const { expect } = require("chai")
const moment = require("moment")

class Homepage {
//Locators 
//TC-31
englishBtn = "//div[text() = 'English']"
espanolBtn = "//div[text() = 'Español']"
languageDropDown = '#language-selector'
saveBtn = "//button[text() = 'Save']"
gruadarBtn = "//button[text() = 'Guardar']"

//TC-29
listYourPropertyLink = '#listYourProperty'
title = "//p[text() = 'What would you like to list?']"
lodging = "//p[text() = 'Lodging']"
privateResidence = "//p[text() = 'Private residence']"
stepsOneOfThreeDisplayed = "//div[text() = 'Step 1 of 3']"
earningsText = "//h1[text() = 'See how much you could earn!']"
increaseBedroomBtn = '//*[@aria-label="Increase bedrooms"]'
increaseBathroomBtn = '//*[@aria-label="Increase bathrooms"]'
nextBtn = "#propertyInfoNextBtn"
stepsTwoOfThreeDisplayed = "//div[text() = 'Step 2 of 3']"
whereIsLocationDisplayed = "//h1[text() = 'Where is your property located?']"
enterAddress = '#locationTypeAhead'
address = '//span[@class="react-typeahead--matched"]'
map = '//section[@class="map-section location"]'
pin = "(//div[contains(@style, 'width: 34px; height: 40px;')])[2]"
movePinTxt = "//span[text() = 'Move the pin to adjust the location of your property.']"

//TC-21
signInBtn = "//a[text() = 'Sign in']"
emailField = "#loginFormEmailInput"
ContinueBtn = "#loginFormSubmitButton"
errDisplayed = "#loginFormEmailInput-error"

//TC-17
disabledDates = "//button[contains(@aria-label, 'date disabled')]"
dateField = "#date_form_field-btn"
currDateYear = '(//div[@class="uitk-date-picker-menu-months-container"]//h2)[1]'
disableBtn = '//button[@data-stid="date-picker-paging"]'



//Interactions

//TC-31
async clickEnLink() {
await $(this.englishBtn).click();
await browser.pause(5000);
}

async selectEspanol() {
const dropdown = await $(this.languageDropDown);
await dropdown.selectByVisibleText('Español (Estados Unidos)')
await browser.pause(5000);
}

async clickSave() {
await $(this.saveBtn).click();
await browser.pause(5000);
}

async isEspanolDisplayed() {
const language = await $(this.espanolBtn).isDisplayed();
return language;
}

async clickEspLink() {
await $(this.espanolBtn).click();
await browser.pause(5000);
}

async selectEnglish() {
const dropdown = await $(this.languageDropDown);
await dropdown.selectByVisibleText('English (United States)')
await browser.pause(5000);
}

async clickGuadar() {
await $(this.gruadarBtn).click();
await browser.pause(5000);
}

async isEnglishDisplayed() {
const language = await $(this.englishBtn).isDisplayed();
return language;
}


//TC-29
async clickListProperty() {
await $(this.listYourPropertyLink).click();
await browser.pause(5000);
}

async connectBrowser() {
const windowHandles = await browser.getWindowHandles();
for(const handle of windowHandles) {
    const title = await browser.getTitle();
    if(title === 'Property Info - Join Expedia') {
       break;
    }
   await browser.switchToWindow(handle); 
}
}

async whatTypeOfProperty() {
const isTitleDisplayed = $(this.title).isDisplayed()
return isTitleDisplayed;
}

async listingOptDIsplayed() {
const lodgingListing = await $(this.lodging).isDisplayed();
const privateListing = await $(this.privateResidence).isDisplayed();
if(lodgingListing === true && privateListing === true) {
    return true;
}
}

async clickPrivateResidence() {
await $(this.privateResidence).click();
}

async stepOneOfThree() {
const isDisplayed = await $(this.stepsOneOfThreeDisplayed).isDisplayed();
await browser.pause(2000);
return isDisplayed;
}

async verifyEarnDisplayedTxt() {
const txtDisplayed = await $(this.earningsText).isDisplayed();
return txtDisplayed;
}

async increaseBedroom() {
const increase = await $(this.increaseBedroomBtn);
increase.click();
increase.click();
increase.click();
increase.click();
await browser.pause(2000);
}

async increaseBathroom() {
const increase = await $(this.increaseBathroomBtn);
increase.click();
increase.click();
increase.click();
await browser.pause(2000);
}

async clicknext(){
await $(this.nextBtn).click();
await browser.pause(2000);
}

async stepTwoOfThree() {
const isDisplayed = await $(this.stepsTwoOfThreeDisplayed).isDisplayed();
return isDisplayed
}

async whereIsLocationTxt() {
const isDisplayed = await $(this.whereIsLocationDisplayed).isDisplayed();
return isDisplayed
}

async enterAddressField() {
await $(this.enterAddress).setValue('1211 6th')
await browser.pause(3000);
}

async selectAddress() {
await $(this.address).click();
await browser.pause(3000);
}

async mapDisplayed() {
const mapVisable = await $(this.map).isDisplayed();
return mapVisable
}

async pinDisplayed() {
const pinVisable = await $(this.pin).isDisplayed();
return pinVisable
}

async adjustPinTxt() {
const isDisplayed = await $(this.movePinTxt).isDisplayed();
return isDisplayed
}

//TC-21
async clickSigninBtn() {
await $(this.signInBtn).click();
}

async enterInvalidEmail()  {
await $(this.emailField).setValue('abc123')
}

async clickContinueBtn() {
await $(this.ContinueBtn).click();
}

async verifyErr() {
const errorTxt = await $(this.errDisplayed).isDisplayed();
return errorTxt
}

//TC-17
async clickDates() {
await $(this.dateField).click();
}

async goToCurrentMonth() {
const monthYearOnHotels = await $(this.currDateYear).getText();
const currMonthYear = moment().format('MMMM YYYY')
if(monthYearOnHotels.localeCompare(currMonthYear) !== 0) {
await $('//div[@class="uitk-date-picker-menu-months-container"][1]').click();
await browser.pause(3000);
}
}

async pastDatesDisabled() {
const dates = await $$(this.disabledDates);
        let areDatesDisabled = true;
        for (const dateElement of dates) {
            const isDateDisabled = await dateElement.isEnabled();
            if (isDateDisabled) {
                areDatesDisabled = false;
                break;
            }
        }
        expect(areDatesDisabled, 'Dates not disabled').to.be.true;

}

async isBackBtnDisabled() {
const button = await $(this.disableBtn).isEnabled();
return button
}

















}
module.exports = Homepage;