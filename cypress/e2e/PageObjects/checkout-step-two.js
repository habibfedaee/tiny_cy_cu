class CheckOut {
  getProductTitle() {
    return cy.get("div a div");
  }

  // product price:
  getProductPrice() {
    return cy.get(".item_pricebar");
  }

  // payment information:
  getPaymentInfo() {
    // format--> SauceCard #12345 --> 12345
    // need to trim extra text
    return cy.get(".summary_info div:nth-child(2)");
  }

  // Shipping Information:
  getShippingInfo() {
    return cy.get(".summary_info div:nth-child(4)");
  }

  // price total:
  getPriceItemTotal() {
    // format--> Item total: $12.12 --> 12.12
    // need to trim the text
    return cy.get(".summary_subtotal_label");
  }

  // item tax
  getItemTax() {
    // format --> Tax: $2.25 --> 2.25
    return cy.get(".summary_tax_label");
  }

  // grand total
  getGrandTotal() {
    // format--> Total: $32.23 --> 32.23
    return cy.get(".summary_info_label.summary_total_label");
  }

  // cancel checkout button
  getCancelCheckoutButton() {
    return cy.get("#cancel");
  }

  // finish checkout button
  getFinishButton() {
    return cy.get("#finish");
  }
}

export default CheckOut;
