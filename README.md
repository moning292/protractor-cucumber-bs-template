# Protractor Cucumber Browserstack Framework Template


This repository is about the end to end automation test framework that is using the following libraries:

- Protractor
- CucumberJS
- Browserstack
- Protractor Cucumber Framework

## Folder Structure

- conf: contains all the configuration files
- feature_files: contains all the feature files that can be used by cucumber
- page_objects: Page Object files (to be defined)
- step_definitions: where we define the method definitions

## To update and start web drivers
`webdriver-manager update`
`webdriver-manager start`

Which test scenarios you want to run
>
>    cucumberOpts: {
>      ...
>      tags: ['@SmokeTest'],
>      //tags: ['@SmokeTest or @RegressionTest'],
>      ...
>    }
>

##To run the test
`protractor <config_file>`
>e.g. `protractor /conf/conf.local.js`