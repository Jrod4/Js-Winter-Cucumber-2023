const moment = require("moment");

class SignupPage {
  //Locators
  signinLinkElement = "//button[text() = 'Sign in']";
  signupLinkElement = '//a[@data-stid="link-header-account-signup"]';
  emailField = '//*[@id="signupFormEmailInput"]'
  firstNameField = '#signupFormFirstNameInput'
  lastNameField  = '#signupFormLastNameInput'
  passwordField  = '#signupFormPasswordInput'
  emailErr = '#signupFormEmailInput-error'
  fNameErr  = '#signupFormFirstNameInput-error'
  lNameErr = '#signupFormLastNameInput-error'
  checkbox = '#rememberMeSignUpCheckbox'
  checkboxDis = '//span[text()="Keep me signed in"]'
  keepMeSignedInBtn = '#signupFormSubmitButton'
  termsAndCondition = "//a[@href='https://www.hotels.com/customer_care/terms_conditions.html']"
  lastDate = "//span[contains(text(), '01/01/23')]"
  privacyStatementslink = "//a[@href='https://www.hotels.com/customer_care/privacy.html]"
  submitBtn = '#submit-button'
  feedbackLink = "//a[text() = 'Feedback']"
  scrollTo = "//span[text() = 'Please enter your email address (optional)']"
  feedbackErrorMsg = "//p[text() = 'Please fill in the required information highlighted below.']"
  redLine = '#required_box_page_rating'
  starRating1 = '//label[@class="radio-label"]'
  commentField = '#verbatim' 
  likelyToReturn = '#will-you-return'
  priorVisit = "//span[text() = 'No']"
  didYouAccomplish = "(//span[text() = 'No'])[2]"
  thankYouSubmit = '//h5[@data-localization="thank-you-heading"]'






//Interactions
  async signinLink() {
    const signInClick = await $(this.signinLinkElement);
    await signInClick.click();
  }

  async signupLink() {
    const signUpClick = await $(this.signupLinkElement);
    await signUpClick.click();
  }

  async enterEmail() {
    await $(this.emailField).setValue('#!@###');
  }

  async enterFirstName() {
    await $(this.firstNameField).setValue('!@')
  }

  async enterLastName() {
    await $(this.lastNameField).setValue('%^&')
  }

  async enterPassword() {
    await $(this.passwordField).setValue('abc123')
  }

  async emailErrDisplayed() {
    const errDisplayed = await $(this.emailErr).isDisplayed();
    return errDisplayed
  }

  async firstNameErr() {
    const errDisplayed = await $(this.fNameErr).isDisplayed();
    return errDisplayed
  }

  async lastNameErr() {
    const errDisplayed = await $(this.lNameErr).isDisplayed();
    return errDisplayed
  } 

  async checkboxDisplayed() {
    const cBoxDisplayed = await $(this.checkboxDis).isDisplayed();
    const cBoxEnabled = await $(this.checkbox).isEnabled();
      if(cBoxDisplayed === true && cBoxEnabled === true) {
      return true;
    }
  }

  async continueBtn() {
    const cBtnDisplayed = await $(this.keepMeSignedInBtn).isDisplayed();
    const cBtnEnabled = await $(this.keepMeSignedInBtn).isEnabled();
      if(cBtnDisplayed === true || cBtnEnabled !== true){
      return true;
  }
  }

  async tcLink() {
    const clickLink = await $(this.termsAndCondition);
    await clickLink.click();
  }

  async verifyPage() {
    const windowHandles = await browser.getWindowHandles();
    return windowHandles
  }

  async connectWithTermsHandle() {
    const windowHandles = await browser.getWindowHandles();
    for(const handle of windowHandles){
      const title = await browser.getTitle();
      if(title === 'Terms of Service') {
        break;
      }
      await browser.switchToWindow(handle);
    }
  }

  async verifyTermsDate() {
    const date = await $(this.lastDate).getText();
    const expectedFormat = 'MM/DD/YYYY'
    const isDateValidFormat = moment(date, expectedFormat).isValid();
    return isDateValidFormat
  }

  async closeWindow() {
  await browser.closeWindow();
  await browser.pause(4000)
  }

  async psLink() {
    await $(this.privacyStatementslink).click();
    await browser.pause(2000)
  }

  async switchWindow() {
     const windowHandles = await browser.getWindowHandles();
    for(const handle of windowHandles){
      const title = await browser.getTitle();
      if(title === 'Create an account') {
        break;
      }
      await browser.switchToWindow(handle);
    }
    }

    async clickFeedback() {
      const feedback = await $(this.feedbackLink);
      await feedback.click();
      await browser.pause(5000);
    }

    async connectFeedbackPage() {
      const windowHandles = await browser.getWindowHandles();
      for(const handle of windowHandles){
        const title = await browser.getTitle();
        if(title === 'DirectWord') {
        break;
      }
      await browser.switchToWindow(handle);
      }
    }

    async scrollToSubmit() {
      const scrollSubmit = await $(this.scrollTo);
      await scrollSubmit.scrollIntoView(true);
      await browser.pause(5000);
    }

    async clickSubmit() {
      await $(this.submitBtn).click();
      await browser.pause(5000);
    }

    async feedbackErr() {
      const errorMsg = await $(this.feedbackErrorMsg).isDisplayed();
      return errorMsg
    }

    async redLineIsDisplayed() {
      const redDottedLine = await $(this.redLine).isDisplayed();
      return redDottedLine

    }

    async clickStar1() {
      const star1 = await $(this.starRating1);
      await star1.click();
      await browser.pause(1000);

    }

    async enterMsg() {
      const msg = await $(this.commentField);
      await msg.setValue('Not the best website')
      await browser.pause(2000);
    }

    async willYouReturn() {
      await $(this.likelyToReturn).selectByAttribute('value','Somewhat likely');
      await browser.pause(1000);
    }

    async bookedHereBefore() {
      const bookedHere = await $(this.priorVisit);
      await bookedHere.click();
      await browser.pause(1000);
    }

    async accomplishedYourVisit() {
       const accomplished = await $(this.didYouAccomplish);
      await accomplished.click();
      await browser.pause(10000);
    }
    
    async isThankyouDisplayed() {
      const displayedMsg = await $(this.thankYouSubmit).isDisplayed();
      return displayedMsg
    }

    
  









}
module.exports = SignupPage;



// const scrollSubmit = "#submit-button"
// await scrollSubmit.scrollIntoView(true);
// await browser.pause(5000);