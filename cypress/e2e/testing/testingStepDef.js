import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

// open test website
Given("given task: open a url", () => {
  cy.visit("www.gmail.com");
});

When("when task: none", () => {
  // click next and verify the answer:
  cy.get("#identifierNext").click();
  // assert if the response equals ''
  cy.get('[jsname="B34EJ"] > span').should(
    "have.text",
    "Enter an email or phone number"
  );
});

Then("then task: verify the url opened", () => {
  // verify the url is correct and website is fully loaded
  cy.url().should("include", "accounts.google.com");
});
