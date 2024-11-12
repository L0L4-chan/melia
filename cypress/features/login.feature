Feature: Log in on the website

Scenario: Correct login
    Given: I access the site correctly and I have a login
    When: I introduce my login and password
    Then: I access to the site as logged user

Scenario: Incorrect login    
    Given: I access the site correctly and I have a login
    When: I introduce my wrong login and password
    Then: The system shows a warning message


Scenario: Attemp of login with missing data
    Given: I access the site correctly and I have a login
    When: I introduce some data but not all
    Then: The system shows a warning message
