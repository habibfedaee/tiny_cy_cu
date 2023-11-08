class InventoryPage {
  // create objects and locators for all web elements inside this page

  // menu:
  getSandwichMenu() {
    return cy.get(
      "#menu_button_container > div > div:nth-child(3) > div > button"
    );
  }

  getAllItemsButton() {
    return cy.get("#inventory_sidebar_link");
  }

  getAboutButton() {
    return cy.get("#about_sidebar_link");
  }

  get logoutButton() {
    return cy.get("#logout_sidebar_link");
  }

  get resetAppStateButton() {
    return cy.get("#reset_sidebar_link");
  }

  get sandWichMenuCloseButton() {
    return cy.get(
      "#menu_button_container > div > div.bm-menu-wrap > div:nth-child(2) > div > button"
    );
  }

  // Page Label:
  get pageLabel() {
    return cy.get("#inventory_filter_container > div");
  }

  // sort items dropdownlist:
  get sortButton() {
    return cy.get("#inventory_filter_container > select");
    // see how to grab dropdown elements and how to get inner elements
  }

  get inventoryItemNames() {
    return cy.get(".inventory_item_name");
    // see how to return multiple elements using array or
  }

  get inventoryItemPrices() {
    return cy.get(".inventory_item_price");
  }

  get addToCartButton() {
    return cy.get(".btn_primary.btn_inventory");
  }
}

export default InventoryPage;
