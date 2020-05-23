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
