const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
//because we only want that specific property

const app = express(); //first express application

passport.use(new GoogleStrategy());
/*
passport.use --> generic register

new GoogleStrategy() --> new instance of the passport.Strategy
*/

const PORT = process.env.PORT || 5000;
app.listen(PORT);
