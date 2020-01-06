const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image_path: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.REAL,
    allowNull: false
  }
});

module.exports = Product;