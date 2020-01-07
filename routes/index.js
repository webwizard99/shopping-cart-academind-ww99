var express = require('express');
var router = express.Router();

const productSeeder = require('../seed/ProductSeeder');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Bork bork' });
});

router.get('/seed_products', (req, res) => {
  res.status(200).send('products seeded');
  // productSeeder();
  
});

module.exports = router;
