const express = require("express");

const app = express(); //first express application

/* represents an express application
this application is used to set up configuration that
 listen to requests coming from the Node side and then route
 the requests to different route handlers */

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

const PORT = process.env.PORT || 5000;
/*
We have to wait until the app is being executed
by Heroku when we can look in the underlying environment
to see if a port has been declared

If we are running in a developping environment this
variable may not be declared so we need to add the 5000 as default.

Or whatever port Heroku is telling us to listen to.
*/

app.listen(PORT);

/*
app -> Express App to register this route handler.

get -> creating a brand new route handlers
      watch for incoming http requesrs with this method
      methods are used to indicate a type
      get info
'/' -> watch for reuests trying to access '/' :route
      route portion of the handler
req -> object representing the incoming requests
      data about who is making the request
res -> Object representing the outgoing response
      data that is about to be sent back for the requests
res.send({ hi: "there" }); -> immediately close the request
                            and send some JSOn back to whoever
                            made this request
app.listen(5000); -> instructs Express to tell Node that it
                    wants to listen for incoming traffic on port 5000

*/
