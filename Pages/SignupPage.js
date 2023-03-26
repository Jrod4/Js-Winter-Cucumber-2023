class SignupPage {
  //locators
  createAcctBtn = "//a[text() = 'Create new account']";
  monthLocator = '//*[@title="Month"]//option[@selected="1"]';
  dateLocator = '//*[@title="Day"]//option[@selected="1"]';
  yearLocator = '//*[@title="Year"]//option[@selected="1"]';

  //interactions
  async btn() {
    const createAcctBttn = await $(this.createAcctBtn);
    createAcctBttn.click();
  }

  async monthSelected() {
    const month = await $(this.monthLocator);
    return await month.isSelected();
  }

  async dateSlected() {
    const date = await $(this.dateLocator);
    return await date.isSelected();
  }

  async yearSelected() {
    const year = await $(this.yearLocator);
    return await year.isSelected();
  }
}

module.exports = SignupPage;