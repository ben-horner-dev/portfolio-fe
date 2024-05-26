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
                const offsetLeft = $logo.offset()?.left;
                const logoWidth = $logo.width();

                if (offsetLeft !== undefined && logoWidth !== undefined) {
                    expect(
                        Cypress.config().viewportWidth - offsetLeft - logoWidth
                    ).to.be.closeTo(0, 900);
                }
            });
        cy.get('[data-testid="burger-button"]').should("be.visible");
    });
});
