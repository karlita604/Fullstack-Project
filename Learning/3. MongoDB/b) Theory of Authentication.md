# Notes: Theory of Authentication 

## What it means to be Authentication? Why do we care about it?
 
 Recall that HTTP (requests) is Stateless!
 * Between any two requests, HTTP cannot differentiate between them.
 * Information between requests is not shared (ie. identity of requestor is not maintained in server/between requests)

To fix this, once you log in (are authenticated), ** our server gives you a code = cookie = token**. This token is proof that you are authenticated. The token is unique to each login request.
* Each time we make a request, we want to include that token so our server knows that we are already authenticated.

### We cannot rely on raw HTTP requests to identify our clients

So, then what do we do?

## Cookie Based Authentication 

When we get a request (Google OAuth) to the server // When a client goes through the OAuth Process ==> we will generate an identifying piece of information = **Set-Cookie**.

* In the response we send back to the user = include a **header**
* **Header** will contain a "Set-Cookie:" information
* The browser will automatically append all requests to the cookie. 
	* Browser automatically manages these cookies.
* The cookie will contain the key identifying piece of information.


# Signing in with OAuth
Before we dive into OAuth, let us look at email/password login
## Email and Password Flow

1. **Sign-up**
* we store in the server
2. **Sign-out**
3. **Login**
* we cross reference with our server, if they match then we are able to grant a token.
4. 

## OAuth Flow
We need to find some unique identifying tokens in the user's Google profile. Is that consistent between logins? Use that to decide if the user is the same.

We need a consistent piece of information that we can use like email/password.

we can't use email address because google allows more than one account per user.
* Google gives us a profile id

OAuth allows us to use their account id as the authentication for our app. We are trusting a third party (Google) by allowing them to carry out our authentication.

1. **Sign-up**
* here is a google profile
2. **Sign-out**
3. **Login**
* we cross reference with our server, if they match then we are able to grant a token.
5.

## Introducing MongoDB

1. **Sign-up**
* Client brings up a profile and we check our DB if that specific google profile id exists
* If not we create a new user in DB which corresponds to the new profile ID
* We assign a cookie to this specific user.
	* Our response back to the client has "Set-Cookie:" and all HTTP requests that user makes will be appended to that token
2. **Sign-out**
* We unset the cookie we have given the user
	* "Set-Cookie:" ""
4. **Login**
* we cross reference with our server, if they match then we are able to grant  the same token (unique to that google profile ID).
