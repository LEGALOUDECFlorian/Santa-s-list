const SantaClausList = require('./santaClausList');
const Childrens = require('./childrens');


SantaClausList.hasMany(Childrens,{
    foreignKey: 'santa_claus_list_id',
    as: 'childrens'
})

Childrens.belongsTo(SantaClausList,{
    foreignKey: 'santa_claus_list_id',
    as: 'santaclauslist'
})

module.exports = { SantaClausList, Childrens };