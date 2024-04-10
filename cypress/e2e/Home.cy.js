import { expect } from "chai";
import filter1 from "../PageObjectModel/HomePage";
import login from "../PageObjectModel/LoginPage";

describe("Home Page test", () => {
  let homefilter;
  let log;
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
    homefilter = new filter1();
    log = new login();
  });

  afterEach(() => {
    log.logout();
  });

  it("Drop down filter test for Name Z to A", () => {
    cy.fixture("loginData").then((data) => {
      const firsObj = data[0];
      log.setUsername(firsObj.username);
      log.setPassword(firsObj.password);
      log.clickLoginbtn();

      if (
        firsObj.username == "standard_user" &&
        firsObj.password == "secret_sauce"
      ) {
        cy.wait(3000);
        homefilter.setDropdownZtoA();
        homefilter.selectAllProductNameAsc();
      }
    });
  });

  it("Drop down filter test for Name A to Z", () => {
    cy.fixture("loginData").then((data) => {
      const firsObj = data[0];
      log.setUsername(firsObj.username);
      log.setPassword(firsObj.password);
      log.clickLoginbtn();

      if (
        firsObj.username == "standard_user" &&
        firsObj.password == "secret_sauce"
      ) {
        cy.wait(3000);
        homefilter.setDropdownAtoZ();
        homefilter.selectAllProductNameDsc();
      }
    });
  });

  it("Drop down filter test for Price High to Low", () => {
    cy.fixture("loginData").then((data) => {
      const firsObj = data[0];
      log.setUsername(firsObj.username);
      log.setPassword(firsObj.password);
      log.clickLoginbtn();

      if (
        firsObj.username == "standard_user" &&
        firsObj.password == "secret_sauce"
      ) {
        cy.wait(3000);
        homefilter.setDropdownhightolow();
        homefilter.selectAllProductPriceDsc();
      }
    });
  });

  it("Drop down filter test for Price Low to High", () => {
    cy.fixture("loginData").then((data) => {
      const firsObj = data[0];
      log.setUsername(firsObj.username);
      log.setPassword(firsObj.password);
      log.clickLoginbtn();

      if (
        firsObj.username == "standard_user" &&
        firsObj.password == "secret_sauce"
      ) {
        cy.wait(3000);

        homefilter.setDropdownlowtohigh();
        homefilter.selectAllProductPriceAsc();
      }
    });
  });

  it("Twitter link test", () => {
    cy.fixture("loginData").then((data) => {
      const firsObj = data[0];
      log.setUsername(firsObj.username);
      log.setPassword(firsObj.password);
      log.clickLoginbtn();

      if (
        firsObj.username == "standard_user" &&
        firsObj.password == "secret_sauce"
      ) {
        cy.wait(3000);

        homefilter.clickTwitterIcon();
        //homefilter.selectAllProductNameAsc();
      }
    });
  });

  it("Facebook link test", () => {
    cy.fixture("loginData").then((data) => {
      const firsObj = data[0];
      log.setUsername(firsObj.username);
      log.setPassword(firsObj.password);
      log.clickLoginbtn();

      if (
        firsObj.username == "standard_user" &&
        firsObj.password == "secret_sauce"
      ) {
        cy.wait(3000);

        homefilter.clickFacebookIcon();
        //homefilter.selectAllProductNameAsc();
      }
    });
  });

  it("LinkedIn link test", () => {
    cy.fixture("loginData").then((data) => {
      const firsObj = data[0];
      log.setUsername(firsObj.username);
      log.setPassword(firsObj.password);
      log.clickLoginbtn();

      if (
        firsObj.username == "standard_user" &&
        firsObj.password == "secret_sauce"
      ) {
        cy.wait(3000);

        homefilter.clickLinkedInIcon();
        //homefilter.selectAllProductNameAsc();
      }
    });
  });

  it("Test the add to cart button by clicking", () => {
    cy.fixture("loginData").then((data) => {
      const firsObj = data[0];
      log.setUsername(firsObj.username);
      log.setPassword(firsObj.password);
      log.clickLoginbtn();

      if (
        firsObj.username == "standard_user" &&
        firsObj.password == "secret_sauce"
      ) {
        cy.wait(3000);

        homefilter.clickOnAddToCartbtn();

        cy.wait(3000);
        homefilter.cartnumberbtn();
      }
    });
  });

  it("Click on cart icon to navigate the pages", () => {
    cy.fixture("loginData").then((data) => {
      const firsObj = data[0];
      log.setUsername(firsObj.username);
      log.setPassword(firsObj.password);
      log.clickLoginbtn();

      if (
        firsObj.username == "standard_user" &&
        firsObj.password == "secret_sauce"
      ) {
        cy.wait(3000);

        homefilter.clickCartBtn();
      }
    });
  });
});
