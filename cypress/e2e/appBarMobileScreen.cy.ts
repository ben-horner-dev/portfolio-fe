/// <reference types="cypress" />

context("Actions", () => {
    beforeEach(() => {
        cy.viewport(750, 750);
        cy.visit("http://localhost:3000");
    });

    it("Check Appbar fullscreen", () => {
        cy.get('[data-testid="logo"]')
            .should("be.visible")
            .and(($logo) => {
                expect(
                    Cypress.config().viewportWidth -
                        $logo.offset().left -
                        $logo.width()
                ).to.be.closeTo(0, 900);
            });
        cy.get('[data-testid="burger-button"]').should("be.visible");
    });
});
