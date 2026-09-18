require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME || "flight",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "admin@123",
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql",
  }
);

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("db connected");
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

module.exports = { dbConnection, sequelize };
