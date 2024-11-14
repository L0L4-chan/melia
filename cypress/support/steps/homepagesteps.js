import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When("I introduce the url", () => {
    cy.visit("es",   { headers: {
        'User-Agent': 'PostmanRuntime/7.42.0' ,
        'Accept': '*/*',
        'Host': 'www.melia.com',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
        }
    });
});

Then("I access the home page", () =>{
    cy.url().should("include","melia");
});