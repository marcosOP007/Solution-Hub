const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');


const Problem = require('../models/problem');


const connection = new Sequelize(dbConfig);

Problem.init(connection);



module.exports = connection;