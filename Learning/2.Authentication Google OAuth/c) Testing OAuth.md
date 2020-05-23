# Testing Google OAuth
importing ExpressJS, PassportJS --> specifically the google strategy
```
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
```

import file keys.js and make first express app.
```
const keys = require("./config/keys");
const app = express();
```
generic register that passes a new instance of passport.Strategy
```
passport.use(
  new GoogleStrategy(
    {
      //unique to this strategy
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,

      // step 4 
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);
```
**the callback uri is specified in credentials of google cloud platform**

new route handler
```
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
```


## Error: redirect_url_mismatch
 Your redirect uri should match in your script and in the credentials of yur google cloud platform or else google will not allow you/client to proceed
