const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

Comment.belongsTo(User, {
    constraints: false,
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    constraints: false
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete:'CASCADE',
})

module.exports = { User, Comment, Post }