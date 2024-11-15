export class Commun{
    elements = {
        accessUSer: () => cy.get('.text___3uBUg', { timeout: 10000 }),
        login : () => cy.get('#access',{ timeout: 10000 }),
        cookies : () => cy.get('#didomi-notice-disagree-button',{ timeout: 10000 }),
        //search

        searchArea :  () => cy.get('.destination___YiVIM > .c-popup-opener___2WbuX > .wrapper___1qplQ > .button___1vWAZ',{ timeout: 10000 }),
        testDestination :  () => cy.get('#suggest-input',{ timeout: 10000 }),
        optionDestination : () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.destination___YiVIM > div > div.content___NTabH > div > div > div > div > div > div > div > div > div > div:nth-child(1) > button',{ timeout: 10000 }) ,
        datearea : () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.wrapper___1qplQ > button',{ timeout: 10000 }),
        startDate : () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.content___NTabH > div > div > div > div > div > div > div > div.react-calendar__viewContainer > div:nth-child(1) > div > div > div.react-calendar__month-view__days > button:nth-child(34) > abbr',{ timeout: 10000 }) ,
        endDate :  () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.content___NTabH > div > div > div > div > div > div > div > div.react-calendar__viewContainer > div:nth-child(2) > div > div > div.react-calendar__month-view__days > button:nth-child(36)',{ timeout: 10000 }) ,
        searchButton : () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.submit___3burc > button',{ timeout: 10000 }) ,
    
        //view and booking
        hotel : () => cy.get( '#__next > div > div > main > div:nth-child(3) > div > div.c-section___1kLue > div > div > div > div > div > div:nth-child(1) > div > div.info-wrapper___34DSy > div > div > div.b-wrapper___3CcRc > div > div > div:nth-child(1) > div > div > span',{ timeout: 10000 }),
        getHotel : () =>  cy.get("#__next > div > div > main > div:nth-child(3) > div > div.c-section___1kLue > div > div > div > div > div > div:nth-child(1) > div > div.info-wrapper___34DSy > div > div > div.actions-wrapper___3x3wS > div > div > div > div:nth-child(2) > button") ,
        
        //booking
        room : () => cy.get('#__next > div > div > main > div:nth-child(4) > div.c-section___1kLue > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(1) > div > div.info-wrapper___34DSy > div > div > div.actions-wrapper___3x3wS > div > div > div > div > div:nth-child(2) > button',{ timeout: 10000 }),
        addextras : () => cy.get( '#extra-services > div > div > div > div > div > div > div.cell.expandables-wrapper___2P3nj > div > div.body___AjL7f > div > div:nth-child(2) > div > div > div.plus___2yynh > svg > g > g',{ timeout: 10000 }), 
        acceptextras : () => cy.get('#__next > div > div > main > div.c-modal___2lrxj > div.container___1q-Ao > div > div > div > div > div.actions___zTbmZ > div > div > div.c-block___29w0l > div > button:nth-child(2)',{ timeout: 10000 }),
        refuseextras : () => cy.get('#__next > div > div > main > div.c-modal___2lrxj > div.container___1q-Ao > div > div > div > div > div.actions___zTbmZ > div > div > div.c-block___29w0l > div > button:nth-child(1)',{ timeout: 10000 }),
    
        // booking info

        accessform : () => cy.get( '#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > button:nth-child(2)',{ timeout: 10000 }),
        fill2surname : () => cy.get( '#surname2',{ timeout: 10000 }),
        termsandconditions :  () => cy.get('#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.b-grid___1vXmM > div > div:nth-child(15) > div > label',{ timeout: 10000 } ),

        // booking to payment

        proceedtopayment : () => cy.get('#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.submit___1GWPg > button:nth-child(2)' ,{ timeout: 10000 }),
    }
}