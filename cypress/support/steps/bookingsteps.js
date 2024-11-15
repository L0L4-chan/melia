import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";

const act = new Shareactions();


Given("I select a room from the list", ()=> {
    act.selectHotel();
});   


When("fill up the from with extras", ()=>{
    act.pickuproom();
    act.addextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5").should("have.text", "Importe total");
    act.gotoforminfo();
    act.completecorreclty();
    act.gotopayment();
});

When("fill up the from without extras", ()=>{
    act.pickuproom();
    act.noextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5").should("have.text", "Importe total");
    act.gotoforminfo();
    act.completecorreclty();
    act.gotopayment();
});

When("fill up the from wrongly", ()=>{
    act.pickuproom();
    act.addextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5").should("have.text", "Importe total");
    act.gotoforminfo();
    act.gotopayment();
});


When("When fill up the from without accept terms", ()=>{
    act.pickuproom();
    act.addextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5").should("have.text", "Importe total");
    act.gotoforminfo();
    act.fillupSurname();
    act.gotopayment();
});


When("When fill up the without data", ()=>{
    act.pickuproom();
    act.addextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5").should("have.text", "Importe total");
    act.gotoforminfo();
    act.clickonTerms();
    act.gotopayment();
});


Then("The warning for missing information form is display ", ()=>{
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.b-grid___1vXmM > div > div:nth-child(15) > div > div > p").should("contains", "Forma de pago");
});
