
Feature: Hotel room under some preferences

    Background: The user should be loog in
        Given: User is logged in
    Scenario: Complete search
        When: I introduce the correct information
        Then: I should see a list of options

    Scenario: Search without a data
        When: I introduce the part information
        Then: I should see a warning