/// <reference types="cypress" />


context('Actions', () => {
  beforeEach(() => {
    cy.viewport(2000, 750);
    cy.visit('http://localhost:3000');
  });

  it('Check Hero', () => {
    cy.get('[data-testid="subheader"]').should('be.visible')
    const siblings = cy.get('[data-testid="subheader"]').siblings();
    siblings.should('have.length', 3);
    const fullScreenText = cy.get('[data-testid="subheader"]').siblings().eq(0);
    fullScreenText.should($el => {
      expect($el).to.have.css('display', 'block');
    });
    const mobileScreenText = cy.get('[data-testid="subheader"]').siblings().eq(1);
    mobileScreenText.should($el => {
      expect($el).to.have.css('display', 'none');
    });
    const contactBtn = cy.get('[data-testid="subheader"]').siblings().eq(2);
    contactBtn.should('have.text', 'Contact');
  });
});
