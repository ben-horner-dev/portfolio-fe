/// <reference types="cypress" />

context("Actions", () => {
    beforeEach(() => {
        cy.viewport(2000, 750);
        cy.visit("http://localhost:3000");
    });

    it("Check Appbar fullscreen", () => {
        cy.get('[data-testid="logo"]')
            .should("be.visible")
            .and(($logo) => {
                expect($logo.offset().left).to.be.closeTo(0, 50);
            });
        cy.get('[data-testid="burger-button"]').should("not.be.visible");
    });
});
