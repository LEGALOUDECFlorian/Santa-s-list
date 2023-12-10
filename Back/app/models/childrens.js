const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelize');

class Childrens extends Model {}

Childrens.init({
  name: DataTypes.TEXT,
  age: DataTypes.TEXT,
  description: DataTypes.TEXT,
  position: DataTypes.INTEGER
},{
  sequelize,
  tableName: 'childrens',
  modelName: 'Childrens'
})

module.exports = Childrens;
