Feature: User Login
    As a normal user
    I should be able to login to a main page
    In order to use this website

    @SmokeTest @RegressionTest
    Scenario: Normal User Login
        Given I go to "https://www.chaichakan.com"
        When I add "testadnca1@test.com" in the email field
        And I add "test1234" in the password field
        And I click sign in button
        Then I should be able to log in to the dashboard

    # @RegressionTest
    # Scenario: Power User Login
    #     Given I go to "https://www.chaichakan.com"
    #     When I add "testagnca1@test.com" in the email field
    #     And I add "Test@5678" in the password field
    #     And I click sign in button
    #     Then I should be able to log in to the dashboard