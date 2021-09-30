const { Model, DataTypes } = require('sequelize');

class Comment extends Model{}
Comment.init({
    content:{
        type: DataTypes.STRING,
        allowNull: true
    }
},   {sequelize}) 
module.exports = Comment