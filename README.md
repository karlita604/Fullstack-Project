# Fullstack-Project
Feedback Collection Application


What we need to do:

1. Users sign up via Google OAuth 

   Users will need some kind of authentication when they sign up for our service.
   When a user first comes to our application they sign in with google. Keep our authentication nice and easy.
   
   Express Server + MongoDB + PassportJS
   
2. User will pay for email credits via stripe
   
   Our service will not be offered for free.
   Credit based service. 
   
   Stripe + MongoDB
   
3. User creates a new "campaign"

   React + Redux 

4. User enters a list of emails to send survey to (feedback collection email)

   The emails will belong to thier users who are using their application.
   We do not want to limit the size of this list.
   
    React + Redux + Redux Form

5. We send emails to the list of surveyees

   Email Provider (3rd party)

6. When the email is received the surveyees will click the link in email to give feedback.

   Email Provider + Express + Mongo

7. We receive and tabulate feedback

   Receive all the feedback from the users.
   
   MongoDB + Mongo? (a bunch of different ways to tabulate feedback)

8. The user will be able to access the report of all the survey responses.
   
   Mongo + React + Redux

** user will refer to our customers **
