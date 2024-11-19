
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";
import { Constsearch } from "../const/constsearch";

const act = new Shareactions();
const el = new Constsearch();

When("I introduce part information",()=>{ 
    act.wrongSearch();
});

When("I introduce a wrong city {string}", (city)=>{
    act.wrongCity(city);

})

Then("I should see a list of options", ()=>{
    el.elements.option().should("be.visible");    
}); 


Then("I should see a warning", ()=>{
    el.elements.warning1().should('be.visible'); 
});


Then("I should see a pop warning {string}", (texto)=>{
    cy.log(texto);
    el.elements.warning2().should('be.visible').should('contain.text', texto); 
    
});


