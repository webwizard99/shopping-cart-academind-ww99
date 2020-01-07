const passport = require('passport');
const User = require('../models/User');
const LocalStrategy = require('passport-local');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findAll({ where: { id: id }})
    .then(user => done(err, user))
    .catch(err => console.log(err));
});

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallBack: true
}, (req, email, password, done) => {
  User.findAll({ where: { email: email }})
    .then(user => {
      if (user) {
        return done(null, false, {message: 'Email is already in use.'})
      } else {
        User.create({
          email,
          password
        }).then(
          user => {
            return done(null, user);
          }
        )
        .catch(err => {return done(err)})
      }
      
    })
    .catch(err => {
      return done(err)}
      );
}));