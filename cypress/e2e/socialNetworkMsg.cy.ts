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
        cy.get('[data-testid="MailOutlineOutlinedIcon"]').last().click();
        cy.get(".MuiListItem-root").should("have.length", 7).first().click();
        cy.get("textarea").first().type("This is a test message");
        cy.contains("Send").click();
        cy.contains("This is a test message").should("have.length", 1);
    });
});
