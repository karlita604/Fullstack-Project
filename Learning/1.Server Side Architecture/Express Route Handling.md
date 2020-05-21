/* route handler or root file or startup file
==> usually named index.js
*/

**const express = require("express");**

/*Javascript Modules:
require keyword to give access to express library.

* common JS modules in the server side -- system implemented in NOdeJS which requires
code to be shared between file.

*the import syntax allows for much easier access.

*/

**const app = express(); //first express application**

/* represents an express application
this application is used to set up configuration that
 listen to requests coming from the Node side and then route
 the requests to different route handlers */

**app.get("/", (req, res) => {
  res.send({ hi: "there" });
});**

**app.listen(5000);**

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
