class LoginPage {
  // create page elements from this page's elements

  getUsernameInput() {
    return cy.get("#user-name");
  }

  getPasswordInput() {
    return cy.get("#password");
  }

  getLoginButton() {
    return cy.get("#login-button");
  }

  getErrorMsg() {
    return cy.get("h3[data-test='error']");
  }
}

export default LoginPage;
