import login from "../PageObjectModel/LoginPage";

describe("Login Suite", () => {
  it("Login user Test", () => {
    const log = new login();

    cy.fixture("loginData").then((data) => {
      data.forEach((userdata) => {
        cy.visit("https://www.saucedemo.com/v1/index.html");
        log.setUsername(userdata.username);
        log.setPassword(userdata.password);
        log.clickLoginbtn();
        if (
          userdata.username == "standard_user" &&
          userdata.password == "secret_sauce"
        ) {
          log.logout();
        } else {
          log.checklogin(
            "Username and password do not match any user in this service"
          );
        }
      });
    });
  });
});
