Feature: Open/Close new Windows

  Background:
    Given I open Window page

  Scenario: Assert text after closing the new window
    When I click on Click here button
    Then I see New Window page open
    And I see "New Window" text on the New Window page
    When I close the New Window
    Then I see "Opening a new window" text in the previous Window

  Scenario: Assert text after switching to the previous window
    When I click on Click here button
    Then I see New Window page open
    And I see "New Window" text on the New Window page
    When I switch to the previous window
    Then I see "Opening a new window" text in the previous Window