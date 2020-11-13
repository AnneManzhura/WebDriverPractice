@skip()
Feature: DuckDuckGo search

  Background:
    Given I open DuckDuckGo page

  Scenario: Search for "Clearmove"
    When I enter "Clearmove" into search field
    And I click on the Search button
    Then I see 10 results on the page
    And I see Clearmove site in the 1 place
