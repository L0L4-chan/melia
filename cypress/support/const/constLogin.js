export class ConstLogin{
    
    elementsLogin  = {

        userName : () => cy.get( '#user'),
        userPassword : () => cy.get('#password'),
        submit:  () => cy.get('#submitBtn'),
        iconLogUSer : () => cy.get('[data-testid="textName"] > span'),
        error : () => cy.get('#error_3B9Tw'),
        missingpassword : () => cy.get('#user-request-step > div.content___3JH08 > div > div.form-nodes___Ox0HI > div.c-form___EX68s > form > div.b-grid___1vXmM > div > div:nth-child(4) > div > div.errors___IhYnC > p'),
        missingname : () => cy.get('#user-request-step > div.content___3JH08 > div > div.form-nodes___Ox0HI > div.c-form___EX68s > form > div.b-grid___1vXmM > div > div:nth-child(1) > div > div.errors___IhYnC > p'),
    };


}