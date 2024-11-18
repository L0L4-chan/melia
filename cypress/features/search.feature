
Feature: Hotel room under some preferences

    Background: The user should be loog in
        Given User is logged in
@focus 
    Scenario: Complete search
        When I introduce the correct information
        Then I should see a list of options
@focus 
    Scenario: Search without a data
        When I introduce part information
        Then I should see a warning

@focus 
    Scenario: Search with a wrong data
        When I introduce a wrong city "gngn"
        Then I should see a pop warning