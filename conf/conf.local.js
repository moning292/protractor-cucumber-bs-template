exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome',
  },

  // Spec patterns are relative to this directory.
  specs: [
    '../feature_files/*.feature'
  ],

  // baseURL: 'http://localhost:8080/',

  cucumberOpts: {
    require: ['../step_definitions/*.js'],
    tags: ['@SmokeTest'],
    format: 'json:results.json',
    profile: false,
    'no-source': true
  }
};