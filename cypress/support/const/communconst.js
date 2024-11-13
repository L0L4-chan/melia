export class Commun{
    elements = {
        accessUSer: () => cy.customFindElements("#icon___3dZhp",100)  ,
        login : () => cy.customFindElements("#access", 100),
        cookies : () => cy.customFindElements("#didomi-notice-disagree-button", 100),

        //search

        searchArea :  () => cy.customFindElements("#__next > div > div > div.search___2t_BT > div > div > div.tabs___28rrG > ul > li:nth-child(1) > a",100) ,
        testDestination :  () => cy.customFindElements("#suggest-input",100),
        optionDestination : () => cy.customFindElements("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.destination___YiVIM > div > div.content___NTabH > div > div > div > div > div > div > div > div > div > div:nth-child(1) > button" ,100) ,
        startDate : () => cy.customFindElements("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.content___NTabH > div > div > div > div > div > div > div > div.react-calendar__viewContainer > div:nth-child(1) > div > div > div.react-calendar__month-view__days > button:nth-child(34) > abbr",100) ,
        endDate :  () => cy.customFindElements("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.content___NTabH > div > div > div > div > div > div > div > div.react-calendar__viewContainer > div:nth-child(2) > div > div > div.react-calendar__month-view__days > button:nth-child(36)",100) ,
        searchButton : () => cy.customFindElements("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.submit___3burc > button", 100) ,
    
        //view and booking
        hotel : () => cy.customFindElements( "#__next > div > div > main > div:nth-child(3) > div > div.c-section___1kLue > div > div > div > div > div > div:nth-child(1) > div > div.info-wrapper___34DSy > div > div > div.b-wrapper___3CcRc > div > div > div:nth-child(1) > div > div > span" ,100),
    
        //booking

        room : () => cy.customFindElements("#__next > div > div > main > div:nth-child(4) > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(4) > div > div.info-wrapper___34DSy > div > div > div.actions-wrapper___3x3wS > div > div > div > div > div:nth-child(2) > button", 100),
        addextras : () => cy.customFindElements( "#extra-services > div > div > div > div > div > div > div.cell.expandables-wrapper___2P3nj > div > div.body___AjL7f > div > div:nth-child(2) > div > div > div.plus___2yynh > svg > g > g" , 100), 
        acceptextras : () => cy.customFindElements("#__next > div > div > main > div.c-modal___2lrxj > div.container___1q-Ao > div > div > div > div > div.actions___zTbmZ > div > div > div.c-block___29w0l > div > button:nth-child(2)", 100),
        refuseextras : () => cy.customFindElements("#__next > div > div > main > div.c-modal___2lrxj > div.container___1q-Ao > div > div > div > div > div.actions___zTbmZ > div > div > div.c-block___29w0l > div > button:nth-child(1)", 100),
    
        // booking info

        accessform : () => cy.customFindElements( "#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > button:nth-child(2)", 100),
        fill2surname : () => cy.customFindElements( "#surname2", 100),
        termsandconditions :  () => cy.customFindElements("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.b-grid___1vXmM > div > div:nth-child(15) > div > label" , 100),

        // booking to payment

        proceedtopayment : () => cy.customFindElements("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.submit___1GWPg > button:nth-child(2)" , 100),
    }
}