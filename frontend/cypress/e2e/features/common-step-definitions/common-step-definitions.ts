// e.g Given("o usuário "tal" está logado", (page: string) => {});
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("o usuário está na página {string}", (page: string) => {
  cy.visit(page);
});

When("o usuário pressionar o botão {string}", (field: string) => {
  cy.getDataCy(field).click();
});

Then("o usuário deve ver redirecionado para página {string}", (page: string) => {
  cy.url().should('include', page);
});

When("o usuário preenche o campo {string} com {string} e clica no botão {string}",
  (field: string, value: string, button: string) => {
    cy.getDataCy(field).type(value);
    cy.getDataCy(button).click();
  }
);

When("o usuário preenche o campo {string} com {string}",
  (field: string, value: string) => {
    cy.getDataCy(field).type(value);
  }
);