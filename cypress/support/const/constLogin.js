export class ConstLogin{
    elementsLogin  = {

        userName : () => cy.customFindElements( "#user", 100),
        userPassword : () => cy.customFindElements("#password", 100),
        submit:  () => cy.customFindElements("#submitBtn", 100),
        iconLogUSer : () => cy.customFindElements("#button_content_2cPJr" ,100),
        error : () => cy.customFindElements("#error_3B9Tw", 100),
    };


}