
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";

const act = new Shareactions();

Given("User is logged in",() => {    
    act.start_web();
    cy.url().should("include","melia" );
    act.close_cookies();
    act.log();
    });

When("I introduce the correct information",()=>{
    act.rightSearch();
});

When("I introduce part information",()=>{ 
    act.wrongSearch();
});

Then("I should see a list of options", ()=>{
    cy.get("#__next > div > div > main > div:nth-child(3) > div > div.c-section___1kLue > div").should('be visible'); 
});   
Then("I should see a warning", ()=>{
    cy.get("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.destination___YiVIM > div > div.wrapper___1qplQ > div.notification-wrapper___31yg- > div > div > div > span").should('be visible'); 
});