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
  describe('Shows the search resaults', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://kcsc-api.herokuapp.com/api/search?q=**', {
        fixture: 'search_results.json',
      });
      cy.visit('/');
    });
    it('is expected  to show search resaults', () => {
      cy.get('[data-cy=search-input]').type('Core Serviceses');
      cy.get('[data-cy=search-btn]').click();
      cy.get('[data-cy=resaults-list]').children('eq',10);
    });
  });
});
