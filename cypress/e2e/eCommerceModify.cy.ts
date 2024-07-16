/// <reference types="cypress" />

context("Actions", () => {
    beforeEach(() => {
        cy.viewport(2000, 750);
        cy.visit("http://localhost:3000");
    });

    it("Check ECommerce Payment", () => {
        cy.get("body").type("{downarrow}");
        cy.window().then((win) => {
            win.scrollBy(0, 100);
        });
        cy.wait(1000);
        cy.get("body").type("{downarrow}");
        cy.window().then((win) => {
            win.scrollBy(0, 100);
        });
        cy.get("body").type("{downarrow}");
        cy.window().then((win) => {
            win.scrollBy(0, 100);
        });
        cy.contains("E-COMMERCE").should("have.length", 1);
        cy.get('[data-testid="product-image"]').should("have.length", 7);
        cy.get('[data-testid="product-image"]').first().trigger("mouseover");
        cy.get('[data-testid="product-info"]').should("have.length", 7);
        cy.get('[data-testid="product-info"]')
            .first()
            .should("have.text", "Product 1$2");
        cy.get('[data-testid="product-btn"]').should("have.length", 7);
        cy.get('[data-testid="product-btn"]').first().click({ force: true });
        cy.get('[data-testid="product-btn"]').first().click({ force: true });
        cy.get(".MuiBadge-badge").contains("2");
        cy.get('[data-testid="shopping-cart-btn"]').click();
        cy.get(".MuiTableCell-body").should("have.length", 6);
        cy.get(".MuiTableCell-body").first().should("have.text", "Product 1");
        cy.get(".MuiTableCell-body").eq(1).should("have.text", "$2");
        cy.get(".MuiTableCell-body").eq(4).should("have.text", "2");
        cy.get('[data-testid="RemoveCircleOutlineIcon"]').click();
        cy.get(".MuiTableCell-body").eq(4).should("have.text", "1");
        cy.get('[data-testid="RemoveCircleOutlineIcon"]').click();
        cy.get('[data-testid="RemoveCircleOutlineIcon"]').click();
        cy.contains("You have no items in your cart");
    });
});
