Feature: Review room information

    Background: A search have occurred
        Given User is logged in 
        Then I introduce the correct information

    Scenario: try to book a room with extras
        When I select a room from the list
        And fill up the from with extras
        Then The payment form is display 

    Scenario: try to book a room without data
        When I select a room from the list
        And fill up the from wrongly
        Then The warning for missing information form is display 

    Scenario: try to book a room without extras
        When I select a room from the list
        And fill up the from without extras
        Then The payment form is display 