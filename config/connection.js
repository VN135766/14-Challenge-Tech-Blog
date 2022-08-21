const Sequelize = require("sequelize");
require('dotenv').config({ path: require('find-config')('.env') });

// create connection to our db
let sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, '##Mybabysarah88', {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;
