const Sequelize = require('sequelize');
const db = {}
const sequelize = new Sequelize(process.env.DB_ABRAGEO, process.env.DB_USER_ABRAGEO, process.env.DB_PASS_ABRAGEO, {
    host: process.env.DB_HOST_ABRAGEO,
    port: '3306',
    dialect: 'mysql',
    operatorAliases: false,
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
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db