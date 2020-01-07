var express = require('express');
const Sequelize = require('sequelize');
const Product = require('../models/Product');

var router = express.Router();

// const productSeeder = require('../seed/ProductSeeder');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.findAll()
    .then(products => res.render('shop/index', { title: 'Bork bork', products: products }))
    .catch(err => console.log(err));
});

router.get('/seed_products', (req, res) => {
  res.status(200).send('products seeded');
  // productSeeder();
  
});

module.exports = router;
