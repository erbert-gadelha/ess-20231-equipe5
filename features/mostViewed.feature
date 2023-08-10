Feature: Most Viewed Anime
	As a random user
	I want to see a list containing the most viewed anime in a given time period


Scenario: Accessing the Most Viewed list

Given: I'm at home page
When: I click on "Most Viewed"
Then: I go to "Most Viewed" page

Scenario: Change time period

Given: I access the Most Viewed page
Then: I see the list elements are ordered based on data from "Since the Beginning" time period
When: I click "Since the Beginning" button
Then: I see "Today" option
And: I see "This Week" option
And: I see "This Month" option
And: I see "This Year" option
When: I click on "This Month" option
Then: I see the list elements are ordered based on data from "This Month" time period