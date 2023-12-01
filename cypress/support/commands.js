// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import HomePage from "../e2e/PageObjects/HomePage";
let homePage = new HomePage();
// -- This is a parent command --
Cypress.Commands.add("login", (username, password) => {
  homePage.getLoginUsernameInput().should("be.visible").type(username);
  homePage.getLoginPasswordInput().should("be.visible").type(password);
  //homePage.getLoginButton().click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// add to cart:
Cypress.Commands.add("addToCart", (productName) => {
  // add to cart process:
  cy.get(".product-block").contains(productName).click(); // this might not work
  // your code here:
});

// checkout:
Cypress.Commands.add("checkout", () => {
  // checkout process:
  cy.get(".cart-icon").click(); // this might not work
  // your code here:
});
