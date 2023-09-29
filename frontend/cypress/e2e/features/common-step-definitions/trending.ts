import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


Then("o anime {string} tem o numero de visualizações {string}",
  (anime: string, value:string) => {
  //const animeCard = cy.getDataCy("anime-card").contains(anime).parent();
  const animeCard = cy.getDataCy("anime-card").contains(anime);
  animeCard.getDataCy("item-value").should("contain", value);
});

