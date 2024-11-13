import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";

const act = new Shareactions();

And("fill up the from", ()=>{
    act.pickuproom();
    act.addextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5").should("contain", "Importe total");
    act.gotoforminfo();
    act.completecorreclty();
    act.gotopayment();
});

And("fill up the from", ()=>{
    act.pickuproom();
    act.noextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5").should("contain", "Importe total");
    act.gotoforminfo();
    act.completecorreclty();
    act.gotopayment();
});

And("fill up the from wrongly", ()=>{
    act.pickuproom();
    act.addextras();
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5").should("contain", "Importe total");
    act.gotoforminfo();
    act.gotopayment();
});


Then("The warning for missing information form is display ", ()=>{
    cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.b-grid___1vXmM > div > div:nth-child(15) > div > div > p").should("contains", "Forma de pago");
});
