import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";

let username = "hboy";
let password = "admin";

let homePage = new HomePage();
// signupDone = false;
// positive login scenario:
Given("i navigate to demoblaze and Register section", () => {
  // load website: demoblaze.com and navigate to login section
  // case 1:
  cy.visit("/");
  // register user: hfboy, admin
  // homePage.getNavSignUp().click();
  // homePage.getSignUsernameInput().type(username);
  // homePage.getSignPasswordInput().type(password);
  // homePage.getSignUpButton().click();
});

When("i type login credentials", () => {
  // click login button to access login frame
  homePage.getNavLogin().click();
  // type user credentials:
  homePage.getLoginUsernameInput().type(username);
  homePage.getLoginPasswordInput().type(password);
});

And("i click login button", () => {
  // click login button:
  homePage.getLoginLoginButton().click();
});

Then("i should be in home page", () => {
  // assert if username appears in top menu
  homePage.getNavWelcomeUser().should("be.visible").contains(username);
});
