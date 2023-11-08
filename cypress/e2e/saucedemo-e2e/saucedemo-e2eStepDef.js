import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../PageObjects/loginPage";
// Standard login------------------------------------------------------------------------------

Given("i enter login page", () => {
  //cy.visit("https://saucedemo.com");
  cy.visit("/", { setTimeout: 30000 });
});

When("i type login credentials", () => {
  //cy.get("#user-name").type("standard_user");
  //cy.get("#user-name").type(Cypress.env("standard_user"));
  new LoginPage().getUsernameInput().type(Cypress.env("standard_user"));
  //cy.get("#password").type("secret_sauce");
  //cy.get("#password").type(Cypress.env("standard_pass"));
  new LoginPage().getPasswordInput().type(Cypress.env("standard_pass"));
});
And("i click login button", () => {
  cy.get("#login-button").click();
});

Then("i should be in home page", () => {
  cy.get(
    "#header_container > div.primary_header > div.header_label > div"
  ).should("have.text", "Swag Labs");
});

// Invalid login------------------------------------------------------------------------------
// When i type incorrent login credentials

When("i type incorrent login credentials", () => {
  cy.get("#user-name").type(Cypress.env("problem_user"));
  cy.get("#password").type(Cypress.env("problem_pass"));
});

//Then i should be redirected to login page with login error
Then("i should be redirected to login page with login error", () => {
  // check current url is the login page then ok
  cy.location().should((loc) => {
    expect(loc.pathname).to.equal("saucedemo.com");
  });

  // check if the correct incorrect login error message is showing
  cy.get(
    "#login_button_container > div > form > div.error-message-container.error > h3 > button"
  ).should(
    "have.text",
    "Epic sadface: Username and password do not match any user in this service"
  );
});
