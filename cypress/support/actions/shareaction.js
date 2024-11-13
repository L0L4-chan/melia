import { Commun } from "../const/communconst";
import { ConstLogin } from "../const/constLogin";
export class Shareactions {

    el= new Commun();
    lo = new ConstLogin();

    elemnts = {
        user: "maria111999@gmail.com",
        password: "Merlintesting1",
        surname : "Garcia",

    };

    start_web(){
        cy.visit("/");
    }


    close_cookies(){
        this.el.elements.cookies.click();
    }
    to_login(){
        this.el.elements.accessUSer.click();
        this.el.elements.login.click();
    }

    log(){
        this.lo.elementsLogin.userName.type(this.elemnts.user);
        this.lo.elementsLogin.password.type(this.elemnts.password);
        this.lo.elementsLogin.submit.click();
    }

    rightSearch(){
        this.el.elements.searchArea.click();
        this.el.elements.testDestination.type("Paris");
        this.el.elements.optionDestination.click(); 
        this.el.elements.startDate.click();
        this.el.elements.endDate.click();
        this.el.elements.searchButton.click()
    }

    wrongSearch(){
        this.el.elements.searchArea.click();
        this.el.elements.testDestination.type("Paris");
        this.el.elements.startDate.click();
        this.el.elements.endDate.click();
        this.el.elements.searchButton.click() 
    }

    pickupHotel(){
        this.el.elements.hotel.click();
    }

    pickuproom(){

        this.el.elements.room.click(); 
    }

    addextras(){
        this.el.elements.addextras.click();
        this.el.elements.acceptextras.click();
    }

    noextras(){
        this.el.elements.refuseextras.click();
    }

    gotoforminfo(){
        this.el.elements.accessform.click();
    }

    completecorreclty(){
        this.el.elements.termsandconditions.click();
        this.el.elements.fill2surname.type(act.elemnts.surname);
    }

    gotopayment(){
        this.el.elements.proceedtopayment.click();

    }

}