const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        content: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'comment'
    }
);

module.exports = Comment; 