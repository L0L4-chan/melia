
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";

const act = new Shareactions();

When("I select a hotel from the list", ()=> {
    act.pickupHotel();
});   

Then("the information about the room is display",()=>{
    cy.get("#moreInfo > div > div > div > div > div.info-columns___2t228 > div > div > div",{ timeout: 10000 }).should("be.visible");
});