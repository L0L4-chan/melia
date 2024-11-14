import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";
import { ConstLogin } from "../const/constLogin";

const act = new Shareactions();
const log = new ConstLogin();

Given("I access the site correctly", () => {
    act.start_web();
    cy.url().should("include","melia" );
    act.close_cookies();
    }
);
When("I introduce my login and password",()=>{
    act.to_login();
    cy.wait(2000);
    act.log();
});

When("I introduce my wrong login and password",()=>{
    act.to_login();
    cy.wait(6000);
    log.elementsLogin.userName().type("name");
    log.elementsLogin.userPassword().type("password");
    log.elementsLogin.submit().click();
});

When("I introduce some {string} but not all",(data)=>{
    act.to_login();
    cy.wait(10000);
    if(data == "name"){
        log.elementsLogin.userName().type("name");
        log.elementsLogin.submit().click();
    }else{
        log.elementsLogin.userPassword().type("password");
        log.elementsLogin.submit().click();
    }
});

Then("I access to the site as logged user", () =>{
    cy.url().should("include","dashboard");
    cy.wait(5000);
    log.elementsLogin.iconLogUSer().should("be.visible");
});

Then("The system shows a warning message", () =>{
    cy.url().should("include","login");
    cy.wait(10000);
    log.elementsLogin.error().should("be.visible");
    log.elementsLogin.error().should("contain.text","Los datos no coinciden");
}); 


Then("The system shows a warning {string} message", (data) =>{
    cy.url().should("include","login");
    cy.wait(10000);
    if(data == "name"){
        log.elementsLogin.missingpassword().should("be.visible");
        log.elementsLogin.missingpassword().should("contain.test","Campo obligatorio");
    }else{
        log.elementsLogin.missingname().should("be.visible");
        log.elementsLogin.missingname().should("contain.text","Campo obligatorio");
    }


});





