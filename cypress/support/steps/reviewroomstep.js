
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { Shareactions } from "../actions/shareaction";
import { ConstReview } from "../const/constreview";

const act = new Shareactions();
const el = new ConstReview();

When("I select a hotel from the list", ()=> {
    act.pickupHotel();
});   

Then("the information about the room is display",()=>{
    el.elements.info().should("be.visible");
});