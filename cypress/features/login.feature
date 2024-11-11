Feature: Log in on the website

Scenario: Correct login
    Given: I access the site correctly and I have a valid login
    When: I introduce my login and password
    Then: I access to the site as logged user

Scenario: Incorrect login    
    Given: I access the site correctly and I have an invalid login
    When: I introduce my wrong login and password
    Then: The system shows a warning message