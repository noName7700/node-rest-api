const Sequelize = require("sequelize");

const DB_NAME = 'node_todo';
const USER_NAME = 'root';
const PASSWORD = '';

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = sequelize;