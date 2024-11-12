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

    rightSearch(){
        cy.get("#__next > div > div > div.search___2t_BT").find("#__next > div > div > div.search___2t_BT > div > div > div.tabs___28rrG > ul > li:nth-child(1) > a").click();
        cy.find("#suggest-input").type("Paris");
        cy.get("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.destination___YiVIM > div > div.content___NTabH > div > div > div > div > div > div > div > div > div > div:nth-child(1) > button").click(); 
        cy.get("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.wrapper___1qplQ > button > div")
        .find("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.content___NTabH > div > div > div > div > div > div > div > div.react-calendar__viewContainer > div:nth-child(1) > div > div > div.react-calendar__month-view__days > button:nth-child(34) > abbr")
        .click();
        cy.find("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.content___NTabH > div > div > div > div > div > div > div > div.react-calendar__viewContainer > div:nth-child(2) > div > div > div.react-calendar__month-view__days > button:nth-child(36)").click();
        cy.get("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.submit___3burc > button").click()

    }

}