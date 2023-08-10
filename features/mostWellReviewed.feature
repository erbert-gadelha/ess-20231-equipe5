Feature: Most Well Reviewed Anime
	As a random user
	I want to see a list containing the most well reviewed anime


Scenario: Accessing the Most Well Reviewed list

Given: I'm at home page
When: I click on "Most Well Reviewed"
Then: I go to "Most Well Reviewed" page


Scenario: Change Most Well Reviewed list order

Given: I access “Most Well Reviewed” page
And: The first item on the list is “Cowboy Bebop: score 8”
And: The secong item on the list is “Shingeki no Kyojin: score 6”
And: The third item on the list is “One Piece: score 3”
When: I click on “Sort ascending”
Then: The first item on the list is “One Piece: score 3”
And: The second item on the list is “Shingeki no Kyojin: score 6”
And: The third item on the list is “Cowboy Bebop: score 8”