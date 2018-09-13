var browserstack = require('browserstack-local');

exports.config = {
  // Browserstack Selenium URL
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserstack.user': '<BROWSERSTACK_USER>',
    'browserstack.key': '<BROWSERSTACK_KEY>',
    // 'os' : 'Windows',
    // 'os_version' : '10',
    // 'browserName' : 'Chrome',
    // 'browser_version' : '68.0',
    'os': 'Windows',
    'os_version': '7',
    'browserName': 'IE',
    'browser_version': '11.0',
    // 'os' : 'OS X',
    // 'os_version' : 'High Sierra',
    // 'browserName' : 'Safari',
    // 'browser_version' : '11.0',
    'resolution': '1600x1200',
    'browserstack.local': 'true',
    'browserstack.debug': 'true',
    'browserstack.console': 'verbose',
  },

  // Code to start browserstack local before start of test
  beforeLaunch: function () {
    console.log("Connecting local");
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({ 'key': exports.config.capabilities['browserstack.key'], 'forceLocal': 'true', 'force': 'true' }, function (error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function () {
    return new Promise(function (resolve, reject) {
      exports.bs_local.stop(resolve);
    });
  },

  // Spec patterns are relative to this directory.
  specs: [
    '../feature_files/*.feature'
  ],

  // baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: ['../step_definitions/*.js'],
    tags: ['@SmokeTest or @RegressionTest'],
    format: 'json:results.json',
    profile: false,
    'no-source': true
  }
};