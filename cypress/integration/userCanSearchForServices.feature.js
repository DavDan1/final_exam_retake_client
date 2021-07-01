describe('User can search for services', () => {
  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://kcsc-api.herokuapp.com/api/search?q=**', {
        fixture: 'services.json',
      });
      cy.visit('/');
    });
    it('is expected to show search input', () => {
      cy.get('[data-cy=header-container]').within(() => {
        cy.get('[data-cy=header-text]').should(
          'contain.text',
          'Kensington and Chelsea Social Council API'
        );
        cy.get('[data-cy=search-input]').should('be.visible');
        cy.get('[data-cy=search-btn]').click();
      });
    });
  });
});
