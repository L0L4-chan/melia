import { Commun } from "../const/communconst";
import { ConstLogin } from "../const/constLogin";
export class Shareactions {

    el= new Commun();
    lo = new ConstLogin();

    elemnts = {
        user: "maria111999garcia@gmail.com",
        password: "Merlintesting1",
        surname : "Garcia",
        city : "Paris",
    };

    start_web(){
        cy.visit("/",   { headers: {
            'User-Agent': 'Chrome/94.0.4606.71' ,
            'Accept': '*/*',
            'Host': 'www.melia.com',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            }
        });
    }


    close_cookies(){
        try{
            this.el.elements.cookies().click();
        } catch {
            cy.log("Not cookies found");
        }
    }
    to_login(){
        this.el.elements.accessUSer().click();
        cy.wait(2000);
        this.el.elements.login().click();
    }

    log(){
        this.lo.elementsLogin.userName().type(this.elemnts.user);
        this.lo.elementsLogin.userPassword().type(this.elemnts.password);
        this.lo.elementsLogin.submit().click();
    }

    rightSearch(){
        this.el.elements.searchArea().click();
        this.el.elements.testDestination().type(this.elemnts.city);
        this.el.elements.optionDestination().click(); 
        //this.el.elements.datearea().click();
        //cy.get("#__next > div > div > div.search___2t_BT > div > div > div:nth-child(5) > form > div.b-wrapper___3CcRc > div > div.calendar___3o0XN > div").set
        this.el.elements.startDate().click();
        this.el.elements.endDate().click();
        this.el.elements.searchButton().click()
    }

    wrongSearch(){
        this.el.elements.searchArea().click();
        this.el.elements.testDestination().type(this.elemnts.city);
        this.el.elements.datearea().click();
        this.el.elements.startDate().click();
        this.el.elements.endDate().click();
        this.el.elements.searchButton().click() 
    }

    wrongCity(city){
        this.el.elements.searchArea().click();
        this.el.elements.testDestination().type(city);
    }

    pickupHotel(){
        this.el.elements.hotel().should('be.visible').click();
    }

    selectHotel(){
        cy.wait(2000);
        this.el.elements.getHotel().should('be.visible').should('not.be.disabled').click();
    }
//revisar desde aui, los elementos escogidos 
    pickuproom(){
        this.el.elements.room().should('be.visible').click(); 
    }

    addextras(){
        this.el.elements.addextras().should('be.visible').click();
        this.el.elements.acceptextras().should('be.visible').click();
    }

    gotoforminfo(){
        this.el.elements.accessform().should('be.visible').click();
    }

    completecorreclty(){
        this.clickonTerms();
        this.fillupSurname()
    }


    gotopayment(){
        this.el.elements.proceedtopayment().should('be.visible').click();

    }


    noextras(){
        this.el.elements.refuseextras().should('be.visible').click();
    }

    advance(){
        this.el.elements.advance();
    }

    clickonTerms(){
        this.el.elements.termsandconditions().should('be.visible').click();
    }

    fillupSurname(){
        this.el.elements.fill2surname().should('be.visible').type(this.elemnts.surname);
    }


}