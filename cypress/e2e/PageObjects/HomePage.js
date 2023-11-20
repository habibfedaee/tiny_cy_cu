class HomePage {
  // Title
  getNavTitle() {
    return cy.get("nav .navbar-brand");
  }

  // Menu bar:
  getNavHome() {
    return cy.get("#navbarExample > ul > li.nav-item.active > a");
  }

  getNavContact() {
    return cy.get("#navbarExample > ul > li:nth-child(2) > a");
  }

  getNavAbout() {
    return cy.get("#navbarExample > ul > li:nth-child(3) > a");
  }

  getNavCart() {
    return cy.get("#navbarExample > ul > li:nth-child(4) > a");
  }

  getNavLogin() {
    return cy.get("#navbarExample > ul > li:nth-child(5) > a");
  }

  getNavSignUp() {
    return cy.get("#signin2");
  }

  getNavWelcomeUser() {
    return cy.get("#nameofuser");
  }

  // Categories: Phones, Laptops, Monitors
  getPhonesCategory() {
    return cy.get(".list-group a:nth-child(2)");
  }

  getLaptopCategory() {
    return cy.get(".list-group a:nth-child(3)");
  }

  getMonitorCategory() {
    return cy.get(".list-group a:nth-child(4)");
  }

  // items: title, price, desc

  getItemTitle() {
    return cy.get(".card-block h4 a");
  }

  getItemPrice() {
    return cy.get(".card-block h5");
  }

  getItemDesc() {
    return cy.get(".card-block p");
  }

  // navigation buttons:
  getPreviousPageButton() {
    return cy.get(".page-item #prev2");
  }

  getNextPageButton() {
    return cy.get(".page-item #next2");
  }

  // loginFrame: username, password, close, login
  getLoginFrameLabel() {
    return cy.get("#logInModalLabel");
  }

  getLoginUsernameInput() {
    return cy.get("#loginusername");
  }

  getLoginPasswordInput() {
    return cy.get("#loginpassword");
  }

  getLoginCloseButton() {
    return cy.get(
      "#logInModal > div > div > div.modal-footer > button.btn.btn-secondary"
    );
  }

  getLoginLoginButton() {
    return cy.get(
      "#logInModal > div > div > div.modal-footer > button.btn.btn-primary"
    );
  }

  getLogoutButton() {
    return cy.get("#logout2");
  }

  // register frame:
  getSignUsernameInput() {
    return cy.get("#sign-username");
  }

  getSignPasswordInput() {
    return cy.get("#sign-password");
  }

  getSignUpButton() {
    return cy.get(
      "#signInModal > div > div > div.modal-footer > button.btn.btn-primary"
    );
  }

  getSignCloseButton() {
    return cy.get(
      "#signInModal > div > div > div.modal-footer > button.btn.btn-secondary"
    );
  }
}

export default HomePage;
