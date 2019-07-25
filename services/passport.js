const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser( (user, done) => {
  done(null, user.id);
});

passport.deserializeUser( (id, done) => {
  User.findById(id).then( user => { done(null, user); });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/google/auth2callback"
  },
  (accessToken, refreshToken, profile, cb) => {
    User.findOne({ googleId: profile.id }).then( existingUser => {
      if( existingUser ){
        cb(null, existingUser);
      } else {
        new User({ googleId: profile.id, name: profile.displayName })
          .save()
          .then(user => cb(null, user));
      }
    });
  }
));