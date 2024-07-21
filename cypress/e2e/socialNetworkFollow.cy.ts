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
        cy.wait(1000);
        cy.get("body").type("{downarrow}");
        cy.window().then((win) => {
            win.scrollBy(0, 100);
        });
        cy.contains("NETWORK").should("have.length", 1);
        cy.get('[data-testid="PeopleAltOutlinedIcon"]').last().click();
        cy.get("input").first().type("profile_1").type("{enter}");
    });
});
