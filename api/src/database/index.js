const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');


const Problem = require('../models/problem');
const User = require('../models/user');
const TagControoller = require('../models/tag');


const connection = new Sequelize(dbConfig);

Problem.init(connection);
User.init(connection)
TagControoller.init(connection)

Problem.associate(connection.models);
User.associate(connection.models);
TagControoller.associate(connection.models);




module.exports = connection;