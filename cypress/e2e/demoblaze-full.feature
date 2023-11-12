Feature: DemoBlaze App Full

@positive_login
Scenario: positive user Login
Given i enter login page
When i type login credentials
And i click login button
Then i should be in home page
