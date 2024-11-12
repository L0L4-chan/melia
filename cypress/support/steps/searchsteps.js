
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

before(() => {
act.start_web();
cy.url().should("include","melia" );
act.close_cookies();
act.log();
});

Given("I introduce the correct information",()=>{

});

Then("I should see a list of options", ()=>{

});
