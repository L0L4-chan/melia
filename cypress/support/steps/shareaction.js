export class Shareactions {

    elemnts = {
        user: "maria111999@gmail.com",
        password: "Merlintesting1",

    };

    start_web(){
        cy.visit("/");
    }


    close_cookies(){
        cy.get("#didomi-notice-disagree-button").click();
    }
    to_login(){
        cy.get("#icon___3dZhp").click();
        cy.get("#access").click();
    }

    log(){
        cy.find("#user").type(this.elemnts.user);
        cy.find("#password").type(this.elemnts.password);
        cy.get("#submitBtn").click();
    }
}