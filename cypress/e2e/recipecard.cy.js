describe('RecipeCard Component', () => {
  beforeEach(() => {
    cy.visit('/'); // Asegúrate de que la URL sea la correcta para tu aplicación
  });

  it('renders the Shopping Now button', () => {
    cy.get('button').contains('Shopping Now').should('be.visible');
  });

  it('renders the Cooking Illustration image', () => {
    cy.get('img[alt="Cooking Illustration"]').should('be.visible');
  });

  

  it('button changes style on hover', () => {
    cy.get('button').contains('Shopping Now')
      .trigger('mouseover')
      .should('have.class', 'hover:bg-green-600');
  });

  
});