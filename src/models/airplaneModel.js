const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConnect");

const AirplaneModel = sequelize.define('airplanes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    modelNumber: {
        type: DataTypes.STRING,
    },
    capacity: {
        type: DataTypes.STRING,
    },
},
    {
        freezeTableName: true,
        timestamps: true
    })

module.exports = { AirplaneModel }

