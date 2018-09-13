var HomepagePageObject = function () {
    this.signInLink = element(by.css('[ng-reflect-router-link="/login"]'));
    this.emailInput = element(by.input('email'));
};

HomepagePageObject.prototype.clickSignInLink = function () {
    return this.signInLink.click();
};
HomepagePageObject.prototype.emailInput = function (email) {
    this.emailInput.text = email;
    return this.emailInput;
};

module.exports = HomepagePageObject;