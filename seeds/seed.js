const sequelize = require('../config/connection');
const userData = require('./userData');
const commentData = require('./commentData');
const postData = require('./postData');
const { User, Post, Comment } = require('../models');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, { individualHooks: true, returning: true });
    await Post.bulkCreate(postData);
    await Comment.bulkCreate(commentData);

    process.exit(0);
};

seedAll();