# U3.W7: Modeling a Real-World Database (SOLO CHALLENGE)

## Release 0: Users Fields

user__profile_photo, user__profile_header, user_id, user_name, user_website, user_bio, user_tweets, user_following, user_followers, user_location

## Release 1: Tweet Fields
<!-- Identify the fields Twitter uses to represent/display a tweet. What are you required or allowed to enter? -->
Fields to represent/display:
user__profile_photo, user_id, user_name, tweet_datetime, tweet_favorites

Requirements or allowed to enter:
When tweeting users can add a photo and/or disclose location, in adition to the text or tweet whicj can have a max of 140 characteres that can include other user_id, hashtags and links.

## Release 2: Explain the relationship
The relationship between `users` and `tweets` is: 
One to multiple because one user can have multiple tweets but one tweet can have only one user.
I think they are conected threw the user_id (@user)

## Release 3: Schema Design
![alt tag](https://raw.githubusercontent.com/sebabelmar/phase_0_unit_3/master/week_7/imgs/Schema-tweeter.png)

## Release 4: SQL Statements
<!-- Include your SQL Statements. How can you make markdown files show blocks of code? -->

## Release 5: Reflection
<!-- Be sure to add your reflection here!!! -->a