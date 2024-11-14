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
    act.log();
});

When("I introduce my wrong login and password",()=>{
    log.elementsLogin.userName.type("name");
    log.elementsLogin.userPassword.type("password");
    log.elementsLogin.submit.click();
});

When("I introduce some {string} but not all",(data)=>{
    if(data == "name"){
        log.elementsLogin.userName.type("name");
        log.elementsLogin.submit.click();
    }else{
        log.elementsLogin.userPassword.type("password");
        log.elementsLogin.submit.click();
    }
});

Then("I access to the site as logged user", () =>{
    cy.url().should("include","dashboard");
    log.elementsLogin.iconLogUSer().should("be visible");
});

Then("The system shows a warning message", () =>{
    cy.url().should("include","login");
    log.elementsLogin.error.should("be visible");
    log.elementsLogin.error.should("contains","C Los datos no coinciden o son incorrectos. Por favor, inténtalo de nuevo.");
}); 


Then("The system shows a warning {string} message", (data) =>{
    cy.url().should("include","login");
    if(data == "name"){
        log.elementsLogin.missingpassword.should("be visible");
        log.elementsLogin.missingpassword.should("contains","Campo obligatorio");
    }else{
        log.elementsLogin.missingname.should("be visible");
        log.elementsLogin,missingname.should("contains","Campo obligatorio");
    }


});





