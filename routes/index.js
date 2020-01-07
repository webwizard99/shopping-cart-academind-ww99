const express = require('express');
const Sequelize = require('sequelize');
const Product = require('../models/Product');
const csrf = require('csurf');

const csrfProtection = csrf();

const router = express.Router();

// mount CSRF module
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.findAll()
    .then(products => {
      let productChunks = [];
      const chunkSize = 3;
      for (let i = 0; i < products.length; i += chunkSize) {
        let term = i + chunkSize;
        if (term > products.length -1) {
          term = products.length;
        }
        productChunks.push(products.slice(i, term));
      }
      res.render('shop/index', { title: 'Bork bork', products: productChunks })
    })
    .catch(err => console.log(err));
});

router.get('/user/signup', (req, res, next) => {
  res.render('user/signup', { csrfToken: req.csrfToken() })
});

router.post('/user/signup', (req, res, next) => {
  passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  })
});

router.get('/profile', (req, res, next) => {
  res.render('user/profile')
})

module.exports = router;
