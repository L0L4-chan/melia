export class Commun{
    elements = {
        accessUSer: () => cy.get('.text___3uBUg', { timeout: 15000 }),
        login : () => cy.get('#access',{ timeout: 15000 }),
        cookies : () => cy.get('#didomi-notice-disagree-button',{ timeout: 20000 }),
        //search

        searchArea :  () => cy.get('.destination___YiVIM > .c-popup-opener___2WbuX > .wrapper___1qplQ > .button___1vWAZ',{ timeout: 15000 }),
        testDestination :  () => cy.get('#suggest-input',{ timeout: 15000 }),
        optionDestination : () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.destination___YiVIM > div > div.content___NTabH > div > div > div > div > div > div > div > div > div > div:nth-child(1) > button',{ timeout: 15000 }) ,
        datearea : () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.wrapper___1qplQ > button',{ timeout: 15000 }),
        startDate : () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.content___NTabH > div > div > div > div > div > div > div > div.react-calendar__viewContainer > div:nth-child(1) > div > div > div.react-calendar__month-view__days > button:nth-child(34) > abbr',{ timeout: 15000 }) ,
        endDate :  () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div > div.content___NTabH > div > div > div > div > div > div > div > div.react-calendar__viewContainer > div:nth-child(2) > div > div > div.react-calendar__month-view__days > button:nth-child(36)',{ timeout: 15000 }) ,
        searchButton : () => cy.get('#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.submit___3burc > button',{ timeout: 15000 }) ,
    
        //view and booking
        hotel : () => cy.get( '#__next > div > div > main > div:nth-child(3) > div > div.c-section___1kLue > div > div > div > div > div > div:nth-child(1) > div > div.info-wrapper___34DSy > div > div > div.b-wrapper___3CcRc > div > div > div:nth-child(1) > div > div > span',{ timeout: 20000 }),
        getHotel : () =>  cy.get("#__next > div > div > main > div:nth-child(3) > div > div.c-section___1kLue > div > div > div > div > div > div:nth-child(1) > div > div.info-wrapper___34DSy > div > div > div.actions-wrapper___3x3wS > div > div > div > div:nth-child(2) > button", { timeout: 20000 }),            
        //booking
        room : () => cy.get('#__next > div > div > main > div:nth-child(4) > div.c-section___1kLue > div > div > div:nth-child(2) > div > div > div > div > div > div > div > div:nth-child(1) > div > div.info-wrapper___34DSy > div > div > div.actions-wrapper___3x3wS > div > div > div > div > div:nth-child(2) > button',{ timeout: 15000 }),
        
        addextras : () => cy.get( '#extra-services > div > div > div > div > div > div > div.cell.expandables-wrapper___2P3nj > div > div.body___AjL7f > div > div:nth-child(2) > div > div > div.plus___2yynh > svg',{ timeout: 20000 }), 
        acceptextras : () => cy.get('#__next > div > div > main > div.c-modal___2lrxj > div.container___1q-Ao > div > div > div > div > div.actions___zTbmZ > div > div > div.c-block___29w0l > div > button:nth-child(2)',{ timeout: 20000 }),
        accessform : () => cy.get( '#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > button:nth-child(2)',{ timeout: 25000 }),
        fill2surname : () => cy.get( '#surname2',{ timeout: 15000 }),
        termsandconditions :  () => cy.get('#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.b-grid___1vXmM > div > div:nth-child(15) > div > label',{ timeout: 15000 } ),
        proceedtopayment : () => cy.get('#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.submit___1GWPg > button:nth-child(2)' ,{ timeout: 15000 }),
        

        tarifa: ()=> cy.get('[data-size="4"] > .c-button___2XZmD', { timeout: 20000 }),


        refuseextras : () => cy.get('#__next > div > div > main > div.c-modal___2lrxj > div.container___1q-Ao > div > div > div > div > div.actions___zTbmZ > div > div > div.c-block___29w0l > div > button:nth-child(1)',{ timeout: 25000 }),
        advance:() =>   cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-aside___3QqwC > div > div:nth-child(4) > div.c-block___29w0l > div > div:nth-child(1) > h5",{ timeout: 25000 }),
        // booking info

        
    
    }
}

