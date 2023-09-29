import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";



Then("o usuário deve ver o post de título {string} do usuário {string}", (title: string, user: string) => {
  cy.contains(`[data-cy="post"]`, title).contains(user).should('exist'); 
});

Then("o usuário não deve ver o post de título {string} do usuário {string}", (title: string) => {
  cy.contains(`[data-cy="post"]`, title).should('not.exist');
});

Then("o usuário verá o aviso {string}", (adivice: string) => {
  cy.contains(adivice).should('exist');
});

Given("o usuário não tem pesquisas recentes", () => {
  cy.clearLocalStorage();
});

When("o usuário selecionar o campo {string}", (field: string) => {
  cy.getDataCy(field).focus();
});

Then("em {string} deve	haver a opção {string}", (field: string, tag: string) => {
  cy.getDataCy(field).contains(tag);
});

Given("o usuario buscou recentemente por {string}", (tags: string) => {
  cy.window().then((win) => {
    const recentSearches = [];
    
    tags.split(',').map((tag) => {
      recentSearches.push(tag.trim());
    });


    console.log(recentSearches);
    win.localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  });
});

Then("as buscas recentes deve estar vazia", () => {
  cy.window().then((win) => {
    const recentSearches = win.localStorage.getItem('recentSearches');
    expect(recentSearches).to.be.equal('[]');
  });
});