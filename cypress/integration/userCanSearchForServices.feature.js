describe('User can search for services', () => {
  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://kcsc-api.herokuapp.com/api/search?q=**', {
        fixture: 'search_results.json',
      });
      cy.visit('/');
    });
    it('is expected to show search input', () => {
      cy.get('[data-cy=header-container]').within(() => {
        cy.get('[data-cy=header-text]').should(
          'contain.text',
          'Kensington and Chelsea Social Council API'
        );
      });
    });
  });
  describe('Shows the search results', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://kcsc-api.herokuapp.com/api/search?q=**', {
        fixture: 'search_results.json',
      });
      cy.visit('/');
    });
    it('is expected  to show search results', () => {
      cy.get('[data-cy=search-input]').type('Core Services');
      cy.get('[data-cy=search-btn]').click();
      cy.get('[data-cy=results-container]').within(() => {
        cy.get('[data-cy=results-list]').should('have.length', 10);
      });
    });
  });
});
