const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const User = require('../models/problem');


const connection = new Sequelize(dbConfig);

User.init(connection);

console.log("tesntaod bd")

module.exports = connection;