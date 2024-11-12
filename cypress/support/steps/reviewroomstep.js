
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When("I select a room from the list", ()=> {
    cy.get("#__next > div > div > main > div:nth-child(3) > div > div.c-section___1kLue > div > div > div > div > div > div:nth-child(1) > div > div.info-wrapper___34DSy > div > div > div.b-wrapper___3CcRc > div > div > div:nth-child(1) > div > div > span")
    .click();
});    

Then("the information about the room is display",()=>{
    cy.get("#moreInfo > div > div > div > div > div.info-columns___2t228 > div > div > div").should("be visible");
});