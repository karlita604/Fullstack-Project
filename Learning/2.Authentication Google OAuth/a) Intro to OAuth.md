# Intro to Google OAuth

**1. User signs up via Google OAuth**
* Most challenging feature to develop.
2.  User pays for email credits via stripe
3. User creates a new 'campaign'
4. User enters list of emails to send to survey
5. We send email to list of surveyees
6. Surveyees click on link in email to provide feedback
7. We tabulate feedback
8. Users can see report of all the survey responses.**



## OAuth Workflow
**What is OAuth?**
We essentially just want to have a "Sign in with Google" button which only requires a google account to sign in/sign up.

## please refer to the OAuth Workflow Diagram

Each arrow will be labelled as a step here just to understand.

Step 1: User clicks 'Login' and the client is directed to localhost:500/auth/google

Step 2: Server forwards users request to google
google.com/auth?appid=123

Step 3: Google will ask the user if they grant permission

Step 4: User grants permission and then google spits out localhost:5000/auth/google/callback?code=456
**Code is very important**

Step 5: The Server puts the user on hold and inspects the 'code' from the URL

Step 6: Server uses that code to make a follow up request to google, using the code
Exchange the code for details about the user (ie. email) 

Step 7: Google replies with specific user details

Step 8: Record the user in the data base

Step 9: Set uer ID in cookie for user

** the following is less important atm**

Step 10: Kick user back to localhost:3000, then user is logged in

Step 11: Need some resources from API , Cookie included.

Step 12: the request has a cookie with user id = code





# Overview of PassportJS
## PassportJS handles steps 2-7

*Common complaints:* 
* does help us automate the majority of the flow, but requires us to add extra code in certain parts to make it work properly.
* What is PassportJS? = at least 2 different libraries

## Passport Library Components

 **passport**: General helpers, objects, functions for handling auth in Express apps
**passport strategy:** Helpers with authenticating with one very specific method/provider (email/password, google, facebook, etc) 

You will need a distinct passport strategy for each method you want to authenticate.


## How to install PassportJS
npm install -- save passport passport-google-oauth20


