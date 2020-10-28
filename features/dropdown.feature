Feature: Dropdown behaviour

  Scenario Outline: Check option selection
    Given I open Dropdown page
    Then I see disabled option initially selected
    When I select <Value> from dropdown
    Then I see <OptionText> value selected

    Examples:
      |Value  | OptionText |
      | 1     | Option 1 |
      | 2     | Option 2 |

