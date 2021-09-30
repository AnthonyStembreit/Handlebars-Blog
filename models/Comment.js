const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection/connection');
class Comment extends Model{}
Comment.init({
    content:{
        type: DataTypes.STRING,
        allowNull: true
    }
},   {sequelize}) 
module.exports = Comment