import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


Given("eu sou o usuário {string} e estou na página {string}", (user: string, page: string) => {
  cy.visit(page);
});

Given("o usuário deve ver o post com título {string}", (title: string) => {
  cy.getDataCy('post-title').contains(title).should('exist');
});


Given("o usuário acessa o post {string}", (post_id: string) => {
    cy.visit(`/post/${post_id}`);
  }
);

Then("a imagem {string} é exibida no componente {string}",
  (filePath: string, component: string) => {    
    const formattedDate = new Date().toISOString().replace(/:/g, "-").replace(/\..+/, "");
    const fileName = `screenshot_${formattedDate}`;

    cy.wait(250);

    cy.fixture(`images/${filePath}`).then((localImage) => {
      cy.getDataCy(component).screenshot(fileName).then(() => {
        cy.fixture(`../screenshots/${fileName}.png`).then((remoteImage) => {
          console.log("remoteImage",remoteImage);
          console.log("localImage",localImage);
          expect(remoteImage, 'the same data').to.equal(localImage);
        });
      });
    });
    
  }
);
