import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";
import { Constbooking } from "../const/constbooking";

const act = new Shareactions();
const cons = new Constbooking();

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

When("fill up the form wrongly", ()=>{
    act.pickuproom();
    act.addextras();
    act.gotoforminfo();
    act.gotopayment();
});



When("fill up the form without accept terms", ()=>{
    act.pickuproom();
    act.addextras();
    act.gotoforminfo();
    act.fillupSurname();
    act.gotopayment();
});


When("fill up the without data", ()=>{
    act.pickuproom();
    act.addextras();
    act.gotoforminfo();
    act.clickonTerms();
    act.gotopayment();
});

When("fill up the form without extras", ()=>{
    act.pickuproom();
    act.noextras();
    act.gotoforminfo();
    act.completecorreclty();
    act.gotopayment();
});

Then("The payment form is display", () =>{
    cons.elements.payment().should("be.visible");
})

Then("The warning for missing information form is display", ()=>{
    cons.elements.errormissing().should("contain.text", "Campo");
});


Then("The warning for term, {string} is display", (text) =>{
    cons.elements.errorterm().should('contain.text', text); 
})

Then("The warning for data, {string} is display", (text) =>{
    cons.elements.errordata().should('contain.text', text); 
})


afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});
