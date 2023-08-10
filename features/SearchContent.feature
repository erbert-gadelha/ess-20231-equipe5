Feature: Search Content
    As a random user
    I want to Search for tags
    To find posts related to then

    Scenario: Search for one Tag
        Given I am on Search page
        And there is on system, only 3 posts containing the tag "t1", posts "p1", "p2" and "p3"
        And the user search only for the tag "t1"
        Then only these three posts will be displayed on screen

    Scenario: Search for multiple Tags
        Given I am on publish page
        And the system contains only 3 posts ("p1", "p2" and "p3")
        And these three post contains respectivaly the tags ("t1" and "t2"), ("t2") and ("t1" and "t3")
        And the user search for the tags "t1" and "t2"
        Then only the post "p1" , who match the tags, will be displayed on screen

    Scenario: Search for unmatching Tags
        Given I am on publish page
        And the system contains only 3 posts ("p1", "p2" and "p3")
        And these three post contains respectivaly the tags ("t1" and "t2"), ("t2") and ("t1" and "t3")
        And i search for the tags "t1" and "t3"
        Then no matching post will be returned from system
        And a message about the unmatch gonna be showed    

    Scenario: SearchBar Hints
        Given The user focus on SearchBar
        And the user has recently searched only for "comedia" and "terror" tags
        Then will be diplayed near to the searchbar buttons with the tags "comedia" and "terror" respectivaly
    
    Scenario: SearchBar AutoFill
        Given The user focus on SearchBar
        And the searchbar has hinted the tags "comedia" and "terror"
        And the user select the tag "comedia"
        Then the searchbar will be overwrited by the tag "comedia"
    
    Scenario: Clear Hints
        Given The user focus on SearchBar
        And the tags "comedia" and "terror" wich are in the system as recently searched
        And they are diplayed as Hints
        And the user select the buttom to clear recent searchs
        Then the tags "comedia" and "terror" are removed from system
        And are not displayed anymore