import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When("I introduce the url", () => {
    cy.visit("es", { failOnStatusCode: false });
    }
);

Then("I access the home page", () =>{
    cy.url().should("include","melia");
});