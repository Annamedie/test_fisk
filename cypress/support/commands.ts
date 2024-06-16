/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getById(dataCyId: string): Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add("getById", (dataCyId: string) => {
  return cy.get(`[data-cy="${dataCyId}"]`);
});
