import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjects/HomePage";
import CartPage from "../PageObjects/CartPage";

//create page object
let homePage = new HomePage();
let cartPage = new CartPage();

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

// add single item to the cart: ----------------------------------------------------
let item = "";
let items = [];
Given("add single item to the cart", () => {
  // no action
  item = "Samsung galaxy s6";
});

When("i navigate and login to the demoblaze app", () => {
  // navigate to the url and login your account
  cy.visit("/");
  //cy.login(username, password);
  //homePage.getLoginLoginButton().click();
});

And("i select item by product title from homepage", () => {
  // select an item by clicking its title
  // loop through items to get the desired item
  cy.contains("Phones").click();
  cy.contains(item).click();
  //homePage.getItemTitle().trigger("mouseover").click();
});

And("i click addToCart button", () => {
  // add the item to the cart using addToCart button
  //cartPage.getAddToCartButton().should("be.visible").click();
  cy.contains("Add to cart").click();
});
And("i navigate to the cart page", () => {
  // navigate to the cart page
  homePage.getNavCart().click();
});
Then("my added item should appear in cart", () => {
  //  check whether your desired item exists

  cy.contains(".success", item);
});

// adding multiple items to the cart:--------------------------------------
items = ["Samsung galaxy s6", "Sony xperia z5", "Nexus 6"];
Given("add multiple items to the cart", () => {
  // no actions,
});
When("i navigate and login to the demoblaze app", () => {
  // navigate to the website and login
  cy.visit("/");
  cy.login(username, password);
  homePage.getLoginLoginButton().should("be.visible").click();
  //homePage.getLoginLoginButton().click(); // login not ok
});
And("i select and add each item to the cart", () => {
  // select items based on items array
  for (let index = 0; index < items.length; index++) {
    const itm = items[index];
    cy.contains(itm).click();
    cy.contains("Add to cart").click();
    cy.contains("Home").click();
  }
});

Then("my added items should appear in cart", () => {
  // assert if success items are equal to items array
  cy.contains("Cart").click();
  for (let i = 0; i < 3; i++) {
    cy.contains(".success", item[i]); // works
  }
});
