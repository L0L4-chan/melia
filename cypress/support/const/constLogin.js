export class ConstLogin{
    elementsLogin  = {

        userName : () => cy.customFindElements( "#user", 100),
        userPassword : () => cy.customFindElements("#password", 100),
        submit:  () => cy.customFindElements("#submitBtn", 100),
        iconLogUSer : () => cy.customFindElements("#button_content_2cPJr" ,100),
        error : () => cy.customFindElements("#error_3B9Tw", 100),
        missingpassword : () => cy.customFindElements("#user-request-step > div.content___3JH08 > div > div.form-nodes___Ox0HI > div.c-form___EX68s > form > div.b-grid___1vXmM > div > div:nth-child(4) > div > div.errors___IhYnC > p", 100),
        missingname : () => cy.customFindElements("#user-request-step > div.content___3JH08 > div > div.form-nodes___Ox0HI > div.c-form___EX68s > form > div.b-grid___1vXmM > div > div:nth-child(1) > div > div.errors___IhYnC > p", 100),
    };


}