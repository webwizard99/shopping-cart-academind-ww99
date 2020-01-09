const passport = require('passport');
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt-nodejs');



passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  console.log('local.signup strategy invoked...');
  const generateHash = (pword) => {
    return bCrypt.hashSync(pword, bCrypt.genSaltSync(8), null);
  }
  
  User.findOne({ 
    where: { email: email 
    }
  })
    .then(user => {
      console.log(user);
      if (user) {
        return done(null, false, {message: 'Email is already in use.'})
      } else {
        const userPassword = generateHash(password);
        
        User.create({
          email: email,
          password: userPassword
        }).then(
          (user, created) => {
            if (!user) {
              return done(null, false)
            }
            if (user) {
              return done(null, user);
            }
          })
        .catch(err => {return done(err)})
      }
      
    })
    .catch(err => {
      return done(err)}
      );
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findAll({ where: { id: id }})
    .then(user => done(null, user))
    .catch(err => console.log(err));
});
