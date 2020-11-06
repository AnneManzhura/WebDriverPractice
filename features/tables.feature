Feature: Working with tables

  Scenario: Deleting by email in first half of the day
    When I open Tables page
    When I do some action to the table
    Then I see that changed row is the right one
    And I see that number of items with price <= "50" is "2"
