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

# Authorized Redirect URI's
## Error: redirect_url_mismatch
Your redirect uri should match in your script and in the credentials of yur google cloud platform or else google will not allow you/client to proceed

# OAuth Callbacks
## Cannot GET /auth/google/callback

you do not CURRENTLY have a route handler to do a job once you get redirected back to our server when we get the code

insert this before your PORT

```
app.get('/aurh/google/callback', passport.authenticate('google'));
```

# Access and Refresh Tokens

## When your code does nothing to handle the underlying request

in your terminal you will see your accessToken (line 24 of your index.js)

The callback function: (accessToken) => {console.log(accessToken);}
is an arrow function.

change it to:
```
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,

      callbackURL: "/auth/google/callback",
    },
    (accessToken,refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile:', profile);
    }
  )
);
```

**accessToken :** allows us to reach into google and the token proves that we can go into the user's profile and take info

**refreshToken:** allows us to refresh an access token which has expired. 
