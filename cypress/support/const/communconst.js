export class Commun{
    elements = {
        accessUSer: () => cy.get('.text___3uBUg'),
        login : () => cy.get('#access'),
        cookies : () => cy.get('#didomi-notice-disagree-button'),
        //search

        searchArea :  () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div.tabs___28rrG > ul > li:nth-child(1) > a') ,
        testDestination :  () => cy.get('#suggest-input'),
        optionDestination : () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.destination___YiVIM > div > div.content___NTabH > div > div > div > div > div > div > div > div > div > div:nth-child(1) > button') ,
        startDate : () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.content___NTabH > div > div > div > div > div > div > div > div.react-calendar__viewContainer > div:nth-child(1) > div > div > div.react-calendar__month-view__days > button:nth-child(34) > abbr') ,
        endDate :  () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.content___NTabH > div > div > div > div > div > div > div > div.react-calendar__viewContainer > div:nth-child(2) > div > div > div.react-calendar__month-view__days > button:nth-child(36)') ,
        searchButton : () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.submit___3burc > button') ,
    
        //view and booking
        hotel : () => cy.get( '#__next > div > div > main > div:nth-child(3) > div > div.c-section___1kLue > div > div > div > div > div > div:nth-child(1) > div > div.info-wrapper___34DSy > div > div > div.b-wrapper___3CcRc > div > div > div:nth-child(1) > div > div > span'),
    
        //booking

        room : () => cy.get('#__next > div > div > main > div:nth-child(4) > div:nth-child(3) > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(4) > div > div.info-wrapper___34DSy > div > div > div.actions-wrapper___3x3wS > div > div > div > div > div:nth-child(2) > button'),
        addextras : () => cy.get( '#extra-services > div > div > div > div > div > div > div.cell.expandables-wrapper___2P3nj > div > div.body___AjL7f > div > div:nth-child(2) > div > div > div.plus___2yynh > svg > g > g'), 
        acceptextras : () => cy.get('#__next > div > div > main > div.c-modal___2lrxj > div.container___1q-Ao > div > div > div > div > div.actions___zTbmZ > div > div > div.c-block___29w0l > div > button:nth-child(2)'),
        refuseextras : () => cy.get('#__next > div > div > main > div.c-modal___2lrxj > div.container___1q-Ao > div > div > div > div > div.actions___zTbmZ > div > div > div.c-block___29w0l > div > button:nth-child(1)'),
    
        // booking info

        accessform : () => cy.get( '#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > button:nth-child(2)'),
        fill2surname : () => cy.get( '#surname2'),
        termsandconditions :  () => cy.get('#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.b-grid___1vXmM > div > div:nth-child(15) > div > label' ),

        // booking to payment

        proceedtopayment : () => cy.get('#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.submit___1GWPg > button:nth-child(2)' ),
    }
}