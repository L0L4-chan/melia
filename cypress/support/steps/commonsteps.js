import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";
import { ConstLogin } from "../const/constLogin";

const act = new Shareactions();

    Given("User is logged in",() => {    
        act.start_web();
        cy.url().should("include","melia" );
        act.close_cookies();
        act.to_login();
        act.log();
    });

    When("I introduce the correct information",()=>{
        act.rightSearch();
    });
