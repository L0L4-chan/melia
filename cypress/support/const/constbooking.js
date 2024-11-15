export class Constbooking{
    elements = {
        payment :()=> cy.get("#metodo-pago",{ timeout: 10000 }),
        errordata : () => cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.b-grid___1vXmM > div > div:nth-child(5) > div > div.errors___IhYnC > pp" ,{ timeout: 10000 }),
        errorterm : () => cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.b-grid___1vXmM > div > div:nth-child(15) > div > div > p" ,{ timeout: 10000 }),
        errormissing: () => cy.get("#__next > div > div > main > div.b-wrapper___3CcRc > div > div.content-body___jxs7r > div:nth-child(3) > div > form > div.b-grid___1vXmM > div > div:nth-child(15) > div > div > p", { timeout: 10000 }),
    }
}