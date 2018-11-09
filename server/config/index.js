module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/auth/google/callback',
    profileFields: [
      'id',
      'first_name',
      'last_name',
      'displayName',
      'picture',
      'email',
    ],
  },
  mongo: {
    URI: process.env.MONGO_URI,
  },
  cookieKey: process.env.COOKIE_KEY,
}
