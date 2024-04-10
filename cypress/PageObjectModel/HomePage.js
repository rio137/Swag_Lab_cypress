class filter1 {
  slcdrpdwn = ".product_sort_container";

  txtAllProductName = ".inventory_item_name";
  txtAllProductPrice = ".inventory_item_price";

  TwitterIconlink = ".social_twitter";
  FacebookIconlink = ".social_facebook";
  linkedinIconLink = ".social_linkedin";

  TxtAddToCartBtn = ".btn_primary.btn_inventory";
  TxtCartBtn = "span.fa-layers-counter.shopping_cart_badge";

  TxtCartBtnClick = "#shopping_cart_container";

  setDropdownZtoA() {
    cy.get(this.slcdrpdwn).select("Name (Z to A)");
  }

  setDropdownAtoZ() {
    cy.get(this.slcdrpdwn).select("Name (A to Z)");
  }

  setDropdownlowtohigh() {
    cy.get(this.slcdrpdwn).select("Price (low to high)");
  }

  setDropdownhightolow() {
    cy.get(this.slcdrpdwn).select("Price (high to low)");
  }

  selectAllProductPriceAsc() {
    cy.get(this.txtAllProductPrice).then(($prices) => {
      const originalprice = [];
      $prices.each((index, element) => {
        const priceWithoutDollarSign = parseFloat(
          element.textContent.replace("$", "")
        );
        originalprice.push(priceWithoutDollarSign);
      });

      const originalpriceCopy = [...originalprice];
      const sortedPrice = originalprice.sort((a, b) => a - b);
      expect(sortedPrice).to.deep.equal(originalpriceCopy);
    });
  }

  selectAllProductPriceDsc() {
    cy.get(this.txtAllProductPrice).then(($prices) => {
      const originalprice = [];
      $prices.each((index, element) => {
        const priceWithoutDollarSign = parseFloat(
          element.textContent.replace("$", "")
        );
        originalprice.push(priceWithoutDollarSign);
      });

      const originalpriceCopy = [...originalprice];
      const sortedPrice = originalprice.sort((a, b) => a - b).reverse();
      expect(sortedPrice).to.deep.equal(originalpriceCopy);
    });
  }

  selectAllProductNameAsc() {
    cy.get(this.txtAllProductName).then(($names) => {
      const originalname = [];
      $names.each((index, element) => {
        originalname.push(element.textContent.trim());
      });

      const originalnameCopy = [...originalname];
      const sortedname = originalname.sort().reverse();
      expect(sortedname).to.deep.equal(originalnameCopy);
    });
  }

  selectAllProductNameDsc() {
    cy.get(this.txtAllProductName).then(($names) => {
      const originalname = [];
      $names.each((index, element) => {
        originalname.push(element.textContent.trim());
      });

      const originalnameCopy = [...originalname];
      const sortedname = originalname.sort();
      expect(sortedname).to.deep.equal(originalnameCopy);
    });
  }

  clickTwitterIcon() {
    cy.get(this.TwitterIconlink).click();
    cy.url().should("include", "https://twitter.com/");
  }
  clickFacebookIcon() {
    cy.get(this.FacebookIconlink).click();

    cy.url().should("include", "https://facebook.com/");
  }
  clickLinkedInIcon() {
    cy.get(this.linkedinIconLink).click();
    cy.url().should("include", "https://linkedin.com/");
  }

  clickOnAddToCartbtn() {
    cy.get(this.TxtAddToCartBtn).then(($addocartbtn) => {
      const addtocartbuttonArray = $addocartbtn.toArray();
      const arraylen = addtocartbuttonArray.length;
      Cypress.env("arraylen", arraylen);
      addtocartbuttonArray.forEach((button, index) => {
        cy.wrap(button).click();
      });

      console.log("array len:", arraylen);
    });
  }

  cartnumberbtn() {
    cy.get(this.TxtCartBtn)
      .invoke("text")
      .then((cartbtntext) => {
        const cartButtonText = parseInt(cartbtntext.trim(), 10);
        const arraylen = Cypress.env("arraylen");
        Cypress.env("cartButtonText", cartButtonText);

        expect(cartButtonText).to.deep.equal(arraylen);
      });
  }

  clickCartBtn() {
    cy.get(this.TxtCartBtnClick).click();
    cy.url().should("include", "https://www.saucedemo.com/v1/cart.html");
  }
}

export default filter1;
