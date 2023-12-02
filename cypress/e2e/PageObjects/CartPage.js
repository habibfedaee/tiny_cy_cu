class CartPage {
  // web elements inside cartpage:
  // item title:
  getSelectedItemTitle() {
    return cy.get("#tbodyid > h2");
  }

  // item price:
  getSelectedItemPrice() {
    return cy.get("#tbodyid > h3");
  }

  // item description:
  getSelectedItemDesc() {
    return cy.get("#more-information > p");
  }

  // add to cart button:
  getAddToCartButton() {
    return cy.get(".col-sm-12 > .btn");
  }

  // added item title (can be many)
  getAddedItemTitle() {
    return cy.get("tr td:nth-child(2)");
  }

  // added item price:
  getAddedItemPrice() {
    return cy.get("tr td:nth-child(3)");
  }

  // total price label

  // added Item Delete Button
  getAddedItemDeleteButton() {
    return cy.get("#tbodyid > tr:nth-child(1) > td:nth-child(4) > a");
  }

  // place order button:
  getPlaceOrderButton() {
    return cy.get("#page-wrapper > div > div.col-lg-1 > button");
  }
}

export default CartPage;
