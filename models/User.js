const Sequelize = require('sequelize');
const db = require('../config/database');
// const bcrypt = require('bcrypt-nodejs');
// const crypto = require('crypto');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowedNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowedNull: false
  }
});

// User.encryptPassword = (password) => {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
// };

// User.validPassword = (password) => {
//   return bcrypt.compareSync(password, this.password);
// }

// User.generateSalt = function() {
//   return crypto.randomBytes(16).toString('base64')
// }

// User.encryptPassword = function(plainText, salt) {
//   return crypto
//     .createHash('RSA-SHA256')
//     .update(plainText)
//     .update(salt)
//     .digest('hex')
// }

// const setSaltAndPassword = user => {
//   console.log('reached setSaltAndPassword');
//   if (user.changed('password')) {
//     user.salt = User.generateSalt();
//     user.password = User.encryptPassword(user.password(), user.salt())
//   }
// }

// User.prototype.correctPassword = function(enteredPassword) {
//   return User.encryptPassword(enteredPassword, this.salt()) === this.password()
// }

// User.beforeCreate((user) => setSaltAndPassword(user));
// User.beforeUpdate((user) => setSaltAndPassword(user));

module.exports = User;