class login {
  txtUsername = "#user-name";
  txtPassword = "#password";
  txtbtnlogin = "#login-button";
  txtloginvalidation = "h3[data-test='error']";
  txtnav = ".bm-burger-button > button";
  txtlogout = "#logout_sidebar_link";

  setUsername(username) {
    cy.get(this.txtUsername).type(username);
  }

  setPassword(password) {
    cy.get(this.txtPassword).type(password);
  }

  clickLoginbtn() {
    cy.get(this.txtbtnlogin).click();
  }

  checklogin(loginvalidation) {
    cy.get(this.txtloginvalidation).should("contain", loginvalidation);
  }

  logout() {
    cy.get(this.txtnav).click();
    cy.get(this.txtlogout).click();
  }
}

export default login;
