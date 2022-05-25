/// <reference types="cypress" />

context('main-page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients').as('getIngredients');
    cy.visit('http://localhost:3001');
    cy.wait('@getIngredients');
  });

  it('move-ingredient', () => {
    cy.get('[data-test="draggable-bun"]').eq(0).trigger('dragstart');
    cy.get('[data-test="droppable"]').trigger('drop');

    cy.get('[data-test="draggable-ingredients"]').eq(0).trigger('dragstart');
    cy.get('[data-test="droppable"]').trigger('drop');

    cy.get('[data-test="dropped-bun"]').should('be.visible');
    cy.get('[data-test="dropped-bun"]').should('be.visible');
  });

  it('show ingredient details', () => {
    cy.get('[data-test="draggable-ingredients"]').eq(0).click();

    cy.get('[data-test="ingredient-details"]').should('be.visible');
  });

  it('create order when user is authorized', () => {
    cy.intercept('POST', 'https://norma.nomoreparties.space/api/orders', { order: { number: 666 }, success: true }).as('createOrders');
    cy.intercept('GET', 'https://norma.nomoreparties.space/api/auth/user', { user: { name: 'name', email: 'email' }, success: true }).as('userAuth');

    cy.get('[data-test="draggable-bun"]').eq(0).trigger('dragstart');
    cy.get('[data-test="droppable"]').trigger('drop');

    cy.get('[data-test="draggable-ingredients"]').eq(0).trigger('dragstart');
    cy.get('[data-test="droppable"]').trigger('drop');

    window.localStorage.setItem('refreshToken', 'test-refreshToken');

    cy.get('[data-test="order-creater"] button').click();
    cy.wait(['@createOrders', '@userAuth']);
    cy.get('[data-test="order-details"]').should('be.visible');

    cy.clearLocalStorage();
  });

  it('create order when user is not authorized', () => {
    cy.get('[data-test="draggable-bun"]').eq(0).trigger('dragstart');
    cy.get('[data-test="droppable"]').trigger('drop');

    cy.get('[data-test="draggable-ingredients"]').eq(0).trigger('dragstart');
    cy.get('[data-test="droppable"]').trigger('drop');

    cy.get('[data-test="order-creater"] button').click();
    cy.get('[data-test="login-form"]').should('be.visible');
  });
});
