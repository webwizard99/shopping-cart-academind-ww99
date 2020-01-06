const Sequelize = require('sequelize');

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

client.connect();

module.exports = new Sequelize(client.database, 
  client.user, 
  client.password, {
    host: client.host,
    dialect: 'postgres',
    operatorAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
});