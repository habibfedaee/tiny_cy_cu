import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";

//create page object
let homePage = new HomePage();

// variables
let username = "hboy";
let password = "admin";

// signupDone = false;
// positive login scenario:
Given("i navigate to demoblaze and Register section", () => {
  // load website: demoblaze.com and navigate to login section
  // case 1:
  cy.visit("/");
});

When("i type login credentials", () => {
  // click login button to access login frame
  homePage.getNavLogin().should("be.visible").click();

  // type user credentials:
  //homePage.getLoginUsernameInput().should("be.visible").type(username);
  //homePage.getLoginPasswordInput().should("be.visible").type(password);

  // login command:
  cy.login(username, password);
});

And("i click login button", () => {
  // click login button:
  homePage.getLoginLoginButton().should("be.visible").click();
});

Then("i should be in home page", () => {
  // assert if username appears in top menu
  homePage.getNavWelcomeUser().should("be.visible").contains(username);
});
