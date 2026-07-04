Feature: Google Search Homepage

#1) Positive Case – Valid Search
Scenario: User searches for a valid term
  Given I am on the Google homepage
  When I search for "Cucumber BDD" into the search box
  And I click the search button
  Then I should see results related to "Cucumber BDD"
  And the results should contain relevant content for "Cucumber BDD"  ---to additional step to verify the content of the search results

#2) Positive Case – Search from Auto-Suggest
Scenario: User selects a suggested search term
  Given I am on the Google homepage
  When I type "Cucum"
  And I select a suggestion from the dropdown
  Then the search should be executed
  And the results page should load successfully

#3) Negative Case – Empty Search
Scenario: User submits an empty search
  Given I am on the Google homepage
  When I leave the search box empty
  And I submit the search
  Then the system should not navigate to a results page
  And I should see a clear validation message or no action should occur

#4) Negative Case – Whitespace-Only Input
Scenario: User submits whitespace-only input
  Given I am on the Google homepage
  When I enter only spaces in the search box
  And I submit the search
  Then the system should reject the input gracefully
  And no invalid search should be executed

#5) Edge Case – Special Characters
Scenario: User searches with special characters
  Given I am on the Google homepage
  When I enter the search term "@#$%&*"
  And I submit the search
  Then the page should remain stable
  And the system should handle the input safely without crashing

#6) Edge Case – Very Long Input
Scenario: User enters a very long search query
  Given I am on the Google homepage
  When I enter a query longer than the supported input limit
  And I submit the search
  Then the application should handle it gracefully
  And it should either truncate, reject, or safely process the input

#7) Edge Case – Unicode and Non-Latin Characters
Scenario: User searches using Unicode text
  Given I am on the Google homepage
  When I enter the search term "مرحبا بالعالم"
  And I submit the search
  Then the search should be processed correctly
  And the page should remain functional and readable

#8) Security Case – SQL Injection Payload
Scenario: User enters a SQL injection-style payload
  Given I am on the Google homepage
  When I enter the search term "' OR 1=1 --"
  And I submit the search
  Then the application should not crash
  And the system should not expose database errors or sensitive information

#9) Security Case – XSS Payload
Scenario: User enters an XSS-style payload
  Given I am on the Google homepage
  When I enter the search term "<script>alert('x')</script>"
  And I submit the search
  Then the input should be handled safely
  And the page should remain stable without executing script content

#10) Security Case – Brute Force / Rapid Repeated Searches
Scenario: User repeatedly submits searches in a short period
  Given I am on the Google homepage
  When I submit multiple consecutive searches rapidly
  Then the system should remain responsive
  And it should apply protection measures such as throttling or rate limiting if configured

#11) Reliability Case – Slow Network
Scenario: Network is slow or interrupted during search
  Given I am on the Google homepage
  When I submit a search under a slow or interrupted network condition
  Then the user should see a loading state or recovery message
  And the application should allow retry without breaking

#12) API Validation Point – If Search API Is Used
Scenario: Search request returns a valid response contract
  Given I am on the Google homepage
  When I submit a valid search
  Then the underlying search request should return a successful response
  And the response should include the expected content type and usable data
  And the UI should render the results without broken states