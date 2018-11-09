const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const config = require('../config/index')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})

let message
passport.use(
  new GoogleStrategy(
    config.google,
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })
      if (existingUser) {
        message = 'That User already exists'
        done(null, existingUser)
        return message
      }
      message = 'User created successfullly'
      const user = new User({ googleId: profile.id }).save()
      done(null, user)
      return message
    },
  ),
)
