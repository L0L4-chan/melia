import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";

const act = new Shareactions()

When("I introduce the url", () => {
    act.start_web();
});

Then("I access the home page", () =>{
    cy.url().should("include","melia");
});