import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

//eu sou o usuário "pedro12" e estou na página de criação de post "/post/new_post"
Given("eu sou o usuário {string} e estou na página {string}", (user: string, page: string) => {
  cy.visit(page);
});

Given("o usuário deve ver o post com título {string}", (title: string) => {
  cy.getDataCy('post-title').contains(title).should('exist');
});

