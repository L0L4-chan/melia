import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I introduce the url", () => {
    cy.visit("https://www.melia.com/es");
    }
);

Then("I access the home page", () =>{
    cy.url().should("include","melia" );

});