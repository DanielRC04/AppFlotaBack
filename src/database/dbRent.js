const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config(); 

const db = {};
const sequelize = new Sequelize(
  process.env.DB_LOCAL,
  process.env.DB_USER_LOCAL,
  process.env.DB_PASS_LOCAL,
  {
    host: process.env.DB_HOST_LOCAL,
    port: '3306',
    dialect: 'mysql',
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      connectTimeout: 600000
    },
    timezone: "-05:00",
    pool: {
      max: 10,
      min: 0,
      acquire: 60000,
      idle: 60000
    }
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
