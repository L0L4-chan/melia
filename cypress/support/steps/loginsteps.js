import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";
import { ConstLogin } from "../const/constLogin";

const act = new Shareactions();
const log = new ConstLogin();

Given("I access the site correctly", () => {
    act.start_web()
    cy.url().should("include","melia" );
    act.close_cookies();
    }
);
When("I introduce my login and password",()=>{
    act.log();
});

When("I introduce my wrong login and password",()=>{
    log.elementsLogin.userName.type("name");
    log.elementsLogin.userPassword.type("password");
    log.elementsLogin.submit.click();
});

When("II introduce some data but not all",()=>{
    log.elementsLogin.userName.type("name");
    log.elementsLogin.submit.click();
});

Then("I access to the site as logged user", () =>{
    cy.url().should("include","dashboard");
    log.elementsLogin.iconLogUSer().should("be visible");
});

Then("The system shows a warning message", () =>{
    cy.url().should("include","login");
    log.elementsLogin.error.should("be visible");
});





