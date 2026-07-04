Feature: Google Search

Scenario: Search for a term on Google
  Given I am on the Google homepage
  When I search for "Cucumber BDD" into the search box
  And I click the search button
  Then I should see results related to "Cucumber BDD"