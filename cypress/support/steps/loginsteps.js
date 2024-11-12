import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I access the site correctly and I have a valid login", () => {
    act.start_web()
    cy.url().should("include","melia" );
    act.close_cookies();
    }
);
When("I introduce my login and password",()=>{
    act.log();
});
Then("I access to the site as logged user", () =>{
    cy.url().should("include","dashboard");
    cy.find("#button_content_2cPJr");
});


Given("I access the site correctly and I have an invalid login", () => {
    act.start_web()
    cy.url().should("include","melia" );
    act.close_cookies();
    }
);
When("I introduce my wrong login and password",()=>{
    cy.find("#user").type("name");
    cy.find("#password").type("password");
    cy.get("#submitBtn").click();
});
Then("The system shows a warning message", () =>{
    cy.url().should("include","login");
    cy.find("#error_3B9Tw");
});





