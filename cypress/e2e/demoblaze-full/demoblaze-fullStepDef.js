import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

// open test website
Given("given task: open a url", () => {
  cy.visit("https://www.demoblaze.com/");
});

When("when task: none", () => {
  // click next and verify the answer:
  //cy.get("#headingText > span").should("have.text", "Sign in");
});

Then("then task: verify the url opened", () => {
  // verify the url is correct and website is fully loaded
  cy.url().should("include", "demoblaze");
});
