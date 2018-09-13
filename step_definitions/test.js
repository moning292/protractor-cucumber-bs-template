const EC = protractor.ExpectedConditions;
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const { Before, Given, When, Then } = require(path.join(
  __dirname,
  '..',
  'node_modules',
  'protractor-cucumber-framework',
  'lib',
  'cucumberLoader'
)).load();

Before(function () {
  var width = 1600;
  var height = 1200;
  browser.driver.manage().window().setSize(width, height);
  console.log('Set the browser size to ' + width + 'x' + height);
});

Given('I go to {string}', { timeout: 4 * 5000 }, function (url) {
  return browser.get(url);
});

When('I add {string} in the email field', { timeout: 4 * 5000 }, function (email) {
  browser.waitForAngular();

  var eleInputEmail = element(by.css('input.auth0-lock-input[name="email"]'));
  eleInputEmail.getText().then(function (value) {
    console.log('Email Text =>' + value);
  });
  eleInputEmail.sendKeys(email);
  browser.sleep(500);
  return browser.getCurrentUrl();
});

When('I add {string} in the password field', { timeout: 4 * 5000 }, function (password) {
  var eleInputPwd = element(by.css('input.auth0-lock-input[name="password"]'));
  eleInputPwd.getText().then(function (value) {
    console.log('Password Text =>' + value);
  });
  eleInputPwd.sendKeys(password);
  browser.sleep(500);
  return browser.getCurrentUrl();
});

When('I click sign in button', { timeout: 4 * 5000 }, function () {
  var eleSubmitButton = element(by.css('button.auth0-lock-submit'));
  eleSubmitButton.getText().then(function (value) {
    console.log('SIGN IN Button =>' + value);
  });
  eleSubmitButton.click();
  return browser.sleep(7000);
});

Then('I should be able to log in to the dashboard', { timeout: 4 * 5000 }, function () {
  browser.waitForAngularEnabled(false); //could empty Protractors/Seleniums ChangeDetection on the ControlFlow
  var eleUserTopMenuButton = element(by.css('button.user-name-btn.mat-icon-button'));
  // browser.sleep(500);
  // eleUserTopMenuButton.click();
  // browser.sleep(500);
  // var eleSignOutButton = element(by.xpath('//button[contains(text(), " Sign out ")]'));
  // eleSignOutButton.click();
  // browser.sleep(10000);
  return browser.wait(EC.urlContains('https://www.chaichakan.com'), 5000);
});