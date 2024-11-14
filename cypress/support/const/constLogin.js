export class ConstLogin{
    wait = 1000;
    elementsLogin  = {

        userName : () => cy.customFindElements( "#user", wait),
        userPassword : () => cy.customFindElements("#password", wait),
        submit:  () => cy.customFindElements("#submitBtn", wait),
        iconLogUSer : () => cy.customFindElements("#button_content_2cPJr" ,wait),
        error : () => cy.customFindElements("#error_3B9Tw", wait),
        missingpassword : () => cy.customFindElements("#user-request-step > div.content___3JH08 > div > div.form-nodes___Ox0HI > div.c-form___EX68s > form > div.b-grid___1vXmM > div > div:nth-child(4) > div > div.errors___IhYnC > p", wait),
        missingname : () => cy.customFindElements("#user-request-step > div.content___3JH08 > div > div.form-nodes___Ox0HI > div.c-form___EX68s > form > div.b-grid___1vXmM > div > div:nth-child(1) > div > div.errors___IhYnC > p", wait),
    };


}