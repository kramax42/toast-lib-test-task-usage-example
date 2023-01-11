import { defaultToastConfig } from '@/constants/default-toast-config';

const containerId = 1;
const MAX_DISPLAYING_TOASTS = 4;

describe('Toasts e2e', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('create toast button should exist and work', () => {
    cy.get(`button[data-test="create-toast-btn-${containerId}"]`)
      .should('exist')
      .click();
    cy.get(`div[data-test="toast-1"]`).should('exist');
  });

  it('toast should be able for auto-closing', () => {
    cy.get(`button[data-test="create-toast-btn-${containerId}"]`).click();
    cy.get(`div[data-test="toast-1"]`).should('exist');
    cy.wait(defaultToastConfig.duration);
    cy.get(`div[data-test="toast-1"]`).should('not.exist');
  });

  it('toast updating duration should work', () => {
    cy.get(`button[data-test="create-toast-btn-${containerId}"]`).click();

    cy.get(`input[data-test="duration-input-${containerId}"]`)
      .should('have.value', defaultToastConfig.duration)
      .type('0')
      .should('have.value', `${defaultToastConfig.duration}0`);

    cy.get(`button[data-test="create-toast-btn-${containerId}"]`).click();
    cy.get(`div[data-test="toast-2"]`).should('exist');
    cy.wait(defaultToastConfig.duration);
    cy.get(`div[data-test="toast-2"]`).should('exist');
  });

  it(`amount of displaying toasts in container should be less or equal then ${MAX_DISPLAYING_TOASTS}`, () => {
    for (let i = 0; i < MAX_DISPLAYING_TOASTS; i += 1) {
      cy.get(`button[data-test="create-toast-btn-${containerId}"]`).click();
    }

    cy.get(`div[data-test="toast-${MAX_DISPLAYING_TOASTS}"]`).should('exist');
    cy.get(`div[data-test="toast-${MAX_DISPLAYING_TOASTS + 1}"]`).should(
      'not.exist',
    );
  });
});
