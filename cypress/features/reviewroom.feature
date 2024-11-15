Feature: Review room information

    Background: A search have occurred
        Given User is logged in 
        Given I introduce the correct information

    Scenario: Review hotel
        When I select a hotel from the list
        Then the information about the room is display