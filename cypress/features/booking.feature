Feature: Book a room 

    Background: A search have occurred
        Given User is logged in 
        Given I introduce the correct information
        Given I select a room from the list

    Scenario: try to book a room with extras
        When fill up the form with extras
        Then The payment form is display 

    Scenario: try to book a room without data
        When fill up the form wrongly
        Then The warning for missing information form is display 

    Scenario: try to book a room without accept terms
        When fill up the form without accept terms
        Then The warning for term, "requerido" is display 

    Scenario: try to book a room without name data
        When fill up the without data
        Then The warning for data, "requerido" is display  
@focus 
    Scenario: try to book a room without extras
        When fill up the form without extras
        Then The payment form is display 