export class ConstLogin{
    elementsLogin  = {

        userName : cy.customFindElements( "#user", 100),
        userPassword :  cy.customFindElements("#password", 100),
        submit:  cy.customFindElements("#submitBtn", 100),

    };


}