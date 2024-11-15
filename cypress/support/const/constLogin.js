export class ConstLogin{
    
    elementsLogin  = {

        userName : () => cy.get( '#user',{ timeout: 10000 }),
        userPassword : () => cy.get('#password',{ timeout: 10000 }),
        submit:  () => cy.get('#submitBtn',{ timeout: 10000 }),
        iconLogUSer : () => cy.get('[data-testid="textName"] > span',{ timeout: 10000 }),
        error : () =>  cy.get('#user-request-step > div.content___3JH08 > div > div.form-nodes___Ox0HI > div.c-form___EX68s > div',{ timeout: 10000 }),
        missingpassword : () => cy.get('#user-request-step > div.content___3JH08 > div > div.form-nodes___Ox0HI > div.c-form___EX68s > form > div.b-grid___1vXmM > div > div:nth-child(4) > div > div.errors___IhYnC > p',{ timeout: 10000 }),
        missingname : () => cy.get('#user-request-step > div.content___3JH08 > div > div.form-nodes___Ox0HI > div.c-form___EX68s > form > div.b-grid___1vXmM > div > div:nth-child(1) > div > div.errors___IhYnC > p',{ timeout: 10000 }),
    };


}