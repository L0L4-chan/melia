Feature: Log in on the website

Background:  The user is logged in 
    Given I access the site correctly 

Scenario: Correct login
    When I introduce my login and password
    Then I access to the site as logged user

Scenario: Incorrect login    
    When I introduce my wrong login and password
    Then The system shows a warning message

Scenario Outline: Attemp of login with missing data
    When I introduce some "<data>" but not all
    Then The system shows a warning "<data>" message

Examples:
| data     |
| name     |
| passcode |