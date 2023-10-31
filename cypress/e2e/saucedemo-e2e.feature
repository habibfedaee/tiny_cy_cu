Feature: Login App

@Standard_login
Scenario: standard user Login
Given i enter login page
When i type login credentials
And i click login button
Then i should be in home page

@Invalid_login
Scenario: invalid user Login
Given i enter login page
When i type invalid login credentials
And i click login button
Then i should be redirected to login page with login error

