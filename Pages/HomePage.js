class HomePage {
  //Locators
  passWordField = "#pass";
  emailField = "#email";
  LoginBtnLocator = "button=Log In";

  //Interactions
  async emailFieldEnabled() {
    const element = await $(this.emailField)
    return await element.isEnabled();
  }

  async passWordFieldEnabled() {
    const element1 = await $(this.passWordField)
    return await element1.isEnabled();
  }

  async loginBtnEnabled() {
    const element2 = await $(this.LoginBtnLocator)
    return await element2.isEnabled();
  }
}


module.exports = HomePage;