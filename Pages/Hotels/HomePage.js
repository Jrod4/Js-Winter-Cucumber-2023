class HomePage {
//Locators
travelersWebField = "//button[@data-stid='open-room-picker']"

increaseBtn = "//label[@for='traveler_selector_children_step_input-0']/following::button[2]"

decreaseBtn = "//label[@for='traveler_selector_children_step_input-0']/following::button[1]"

child1 = "//label[text() = 'Child 1 age']"
child2 = "//label[text() = 'Child 2 age']"
child3 = "//label[text() = 'Child 3 age']"

child1Dropdown = '#age-traveler_selector_children_age_selector-0-0'
child2Dropdown = '#age-traveler_selector_children_age_selector-0-1'
child3Dropdown = '#age-traveler_selector_children_age_selector-0-2'


selectedDropdowns = '//select'

disabledPlusBtn  = "(//div[@class='uitk-layout-flex uitk-layout-flex-item uitk-step-input-controls'])[2]//button/following-sibling::button"

disabledMinusBtn = "(//div[@class='uitk-layout-flex uitk-layout-flex-item uitk-step-input-controls'])[2]//button[1]"

increaseAdultBtn = '//h3[text() = "Room 1"]/following::button[2]'

doneBtn = '#traveler_selector_done_button'

numOfTravlers = "//button[text() = '9 travelers, 1 room']"





//Interactions
async WebFieldElement() {
    const travlerClick = await $(this.travelersWebField);
    await travlerClick.click();
    await browser.pause(2000);
}

async increaseChild() {
    const increase = await $(this.increaseBtn)
    await increase.click();
    await increase.click();
    await browser.pause(2000);
}

async childDropdown() {
    const dropdown1 = await $(this.child1).isEnabled();
    const dropdown2 = await $(this.child2).isEnabled();
    if(dropdown1 === true && dropdown2 === true) {
        return true
    }
}

async verifyPlusBtn() {
    const plusBtn = await $(this.increaseBtn).isEnabled();
    return plusBtn
}

async verifyminusBtn() {
    const minusBtn = await $(this.decreaseBtn).isEnabled();
    return minusBtn
}

async increaseChildBy4() {
    const increase = await $(this.increaseBtn)
    await increase.click();
    await increase.click();
    await increase.click();
    await increase.click();
    await browser.pause(2000);
}

async verifyCount() {
const countIs = await $$(this.selectedDropdowns)
return countIs
}

async plusDisabled() {
    const disabledBtn = await $(this.disabledPlusBtn).isEnabled();
    return disabledBtn
}

async minusDisabled() {
    const disabledBtn = await $(this.disabledMinusBtn).isEnabled();
    return disabledBtn
}

async decreaseChild() {
    const decrease = await $(this.decreaseBtn);
    decrease.click();
    await browser.pause(2000);
}

async decreaseChildBy5() {
    const decrease = await $(this.decreaseBtn);
    decrease.click();
    decrease.click();
    decrease.click();
    decrease.click();
    decrease.click();
    await browser.pause(2000);
}

async isChildDropdownShown() {
    const dropdown1 = await $(this.child1).isDisplayed();
    return dropdown1
}

async increaseAdult() {
    const increase = await $(this.increaseAdultBtn);
    increase.click();
    increase.click();
    increase.click();
    increase.click();
    await browser.pause(2000);
}

async increaseChildBy3() {
    const increase = await $(this.increaseBtn);
    await increase.click();
    await increase.click();
    await increase.click();
    await browser.pause(2000);
}

async child1Age() {
    const childDropdown = await $(this.child1Dropdown);
    childDropdown.selectByAttribute('value','4')
    await browser.pause(2000);

}

async child2Age() {
    const childDropdown = await $(this.child2Dropdown);
    childDropdown.selectByAttribute('value','0')
    await browser.pause(2000);

}

async child3Age() {
    const childDropdown = await $(this.child3Dropdown);
    childDropdown.selectByAttribute('value','7')
    await browser.pause(2000);
}

async clickDone(){
    const done = await $(this.doneBtn);
    await done.click()
    await browser.pause(2000);
}

async sumOfTravlers() {
const travlerstotal = await $(this.numOfTravlers).getText();
return travlerstotal
}















}
module.exports= HomePage;