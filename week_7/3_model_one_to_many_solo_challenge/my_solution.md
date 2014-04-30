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
Statement for all the tweets for a certain user id:  
<code>
SELECT tweeter_users.at_id, name, profile_photo, tweets.140_char, photo, tweets.location  
FROM tweeter_users JOIN tweets  
ON tweeter_users.at_id = tweets.at_id  
WHERE tweeter_users.at_id = "some user"  
</code>

Statement for the tweets for a certain user id that were made after last Wednesday (whenever last Wednesday was for you):  
<code>
SELECT tweeter_users.at_id, name, profile_photo, tweets.140_char, photo, tweets.location  
FROM tweeter_users JOIN tweets  
ON tweeter_users.at_id = tweets.at_id  
WHERE tweetes.created_at <= 4/23/2004 11:59:00 PM 
AND tweeter_users.at_id = "some user"  
</code>

Statement for all the tweets associated with a given user's twitter handle:  
<code>
SELECT tweeter_users.at_id, name, profile_photo, tweets.140_char, photo, tweets.location  
FROM tweeter_users JOIN tweets  
ON tweeter_users.at_id = tweets.at_id  
WHERE tweeter_users.name = "some user name"  
</code>

Statement for the twitter handle associated with a given tweet id:  
<code>
SELECT name
FROM tweeter_users JOIN tweets  
ON tweeter_users.at_id = tweets.at_id  
WHERE tweets.id = "some tweet id"  
</code>


## Release 5: Reflection
Great challenge, I felt I was able to understand better something that I imagine is super complex.
Visualizing schemas is a great learning process. Assuming a structure and getting to write queries for it is hard but a good practice to real challenges that will come soon.
I’m not sure about how I link users and tweets but hopefully somebody get to read my code and so I can double check that one. 