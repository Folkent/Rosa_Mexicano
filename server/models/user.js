const { DataTypes } = require( 'sequelize');

module.exports =(sequelize) => sequelize.define( 'users',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    age: DataTypes.INTEGER,
    emailAdress: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,

});