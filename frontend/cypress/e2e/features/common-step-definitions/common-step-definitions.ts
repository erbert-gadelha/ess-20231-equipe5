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

When("o usuário selecionar a opção {string} no campo {string}",
  (value: string, field: string) => {
    cy.getDataCy(field).select(value)
  }
);

Then("o usuário deve ser redirecionado para a página {string}",
  (page: string) => {
    cy.url().should('include', page);
  }
);

Then("o usuário deve ver os items de {string} organizados pelo campo {string} em ordem {string}",
(section: string, field: string, order: string) => {
    
    const trendingSection = cy.getDataCy(section);
    const items = trendingSection.find(`[data-cy="${field}"]`);

    const values = [];
    items.each((item) => {
      //console.log(item.text());
      const fieldValue = item.text();
      const numeric = fieldValue.match(/\d+/);
      
      values.push(parseInt(numeric[0]));
    });
  
    if (order === "decrescente")
      for (let i = 0; i < values.length - 1; i++) 
        expect(values[i]).to.be.at.least(values[i + 1]);
    else if (order === "crescente")
      for (let i = 0; i < values.length - 1; i++) 
        expect(values[i]).to.be.at.most(values[i + 1]);
    
});


Then ("o usuário deve ver o componente {string} contendo o valor {string}",
  (field:string, value:string) => {
    cy.getDataCy(field).contains(value);
  }
);

Then("existe um {string} com os valores {string} e {string}",
    (section: string, value1: string, value2: string) => {
    cy.getDataCy(section).contains(value1).parent().contains(value2).should('exist');
});

Given("o usuário anexa a imagem {string} no campo {string}",
  (file_path: string, field: string) => {
    cy.getDataCy(field).selectFile(`./cypress/fixtures/images/${file_path}`);
  }
);