/// <reference types="cypress" />

context("Actions", () => {
    beforeEach(() => {
        cy.viewport(2000, 750);
        cy.visit("http://localhost:3000");
    });

    it("Check OAuth", () => {
        cy.get("body").type("{downarrow}");
        cy.window().then((win) => {
            win.scrollBy(0, 1);
        });
        cy.get('[data-testid="logo"]')
            .should("have.attr", "src")
            .and("include", "logo_contrast.svg");
        cy.get('[data-testid="faded-text"]').should("have.text", "OAUTH FLOW");
        cy.get('[data-testid="un-faded-text"]').should(
            "have.text",
            "OAUTH FLOW"
        );
        cy.get('[data-testid="blue-line"]').should(
            "have.css",
            "border-bottom",
            "10px solid rgb(8, 122, 217)"
        );
        cy.get('[data-testid="oauth-avatar"]').should("have.length", 2);
    });
});
