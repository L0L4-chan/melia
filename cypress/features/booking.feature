Feature: Review room information

    Background: A search have occurred
        Given User is logged in 
        Given I introduce the correct information
        Given I select a room from the list
@focus 
    Scenario: try to book a room with extras
        When fill up the from with extras
        Then The payment form is display 
@focus 
    Scenario: try to book a room without data
        When fill up the from wrongly
        Then The warning for missing information form is display 
@focus                 
    Scenario: try to book a room without accept terms
        When fill up the from without accept terms
        Then The warning for "this" is display 
@focus
    Scenario: try to book a room without data
        When fill up the without data
        Then The warning for "this" is display  
@focus 
    Scenario: try to book a room without extras
        When fill up the from without extras
        Then The payment form is display 