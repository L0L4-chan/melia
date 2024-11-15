
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";

const act = new Shareactions();


When("I introduce part information",()=>{ 
    act.wrongSearch();
});

When("I introduce a wrong city {string}", (city)=>{
    act.wrongCity(city)

})

Then("I should see a list of options", ()=>{
    cy.get("#__next > div > div > main > div:nth-child(3) > div > div.c-section___1kLue > div",{ timeout: 10000 } ).should('be.visible'); 
}); 


Then("I should see a warning", ()=>{
    cy.get("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.destination___YiVIM > div > div.wrapper___1qplQ > div.notification-wrapper___31yg- > div > div > div > span",{ timeout: 10000 }).should('be.visible'); 
});


Then("I should see a pop warning", ()=>{
    cy.get("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.destination___YiVIM > div > div.content___NTabH > div > div > div > div > div > div > div > div > div > div > div > div > div.text___O5noN",{ timeout: 10000 }).should('be.visible'); 
    cy.get("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.destination___YiVIM > div > div.content___NTabH > div > div > div > div > div > div > div > div > div > div > div > div > div.text___O5noN",{ timeout: 10000 }).should('contain.text', "no reconoce"); 
    
});


