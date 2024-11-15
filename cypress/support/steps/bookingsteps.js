import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";

const act = new Shareactions();


Given("I select a room from the list", ()=> {
    act.selectHotel();
});   


When("fill up the form with extras", ()=>{
    act.pickuproom();
    act.addextras();
    act.gotoforminfo();
    act.completecorreclty();
    act.gotopayment();
});

Then("The payment form is display", () =>{
    cons.payment().should("be.visible");
})
















When("fill up the form without extras", ()=>{
    act.pickuproom();
    act.noextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5",{ timeout: 10000 }).should("have.text", "Importe total");
    act.gotoforminfo();
    act.completecorreclty();
    act.gotopayment();
});

When("fill up the form wrongly", ()=>{
    act.pickuproom();
    act.addextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5",{ timeout: 10000 }).should("have.text", "Importe total");
    act.gotoforminfo();
    act.gotopayment();
});


When("When fill up the form without accept terms", ()=>{
    act.pickuproom();
    act.addextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5", { timeout: 10000 }).should("have.text", "Importe total");
    act.gotoforminfo();
    act.fillupSurname();
    act.gotopayment();
});


When("When fill up the without data", ()=>{
    act.pickuproom();
    act.addextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5", { timeout: 10000 }).should("have.text", "Importe total");
    act.gotoforminfo();
    act.clickonTerms();
    act.gotopayment();
});






Then("The warning for data {string} is display ", (text) =>{
    cons.errordata().should('contain.text', text); 
})

Then("The warning for term {string} is display ", (text) =>{
    cons.errorterm().should('contain.text', text); 
})

Then("The warning for missing information form is display ", ()=>{
    cons.errormissing().should("contain.text", "es");
});