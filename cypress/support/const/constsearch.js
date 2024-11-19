export class Constsearch{
    elements = {
        option  : ()=> cy.get("#__next > div > div > main > div:nth-child(3) > div > div.c-section___1kLue > div",{ timeout: 10000 }),
        warning1  : ()=> cy.get("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.destination___YiVIM > div > div.wrapper___1qplQ > div.notification-wrapper___31yg- > div > div > div > span",{ timeout: 10000 }),
        warning2 : ()=> cy.get("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.destination___YiVIM > div > div.content___NTabH > div > div > div > div > div > div > div > div > div > div > div > div > div.text___O5noN",{ timeout: 10000 }),

    }
}