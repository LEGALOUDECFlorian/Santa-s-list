const { DataTypes, Model } = require('sequelize');
const sequelize = require('./sequelize');

class SantaClausList extends Model {}

SantaClausList.init({
  title: DataTypes.TEXT,
  color: DataTypes.TEXT,
  position: DataTypes.INTEGER
},{
  sequelize,
  tableName: 'santa_claus_list',
  modelName: 'SantaClausList'
})

module.exports = SantaClausList;