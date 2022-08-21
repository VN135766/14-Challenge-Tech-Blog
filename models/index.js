const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// User.hasMany(Post, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });


// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Comment.belongsTo(Post, {
//     foreignKey: 'comment_id'
// })

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// Post.hasMany(Comment, {
//     foreignKey: 'comment_id',
//     onDelete: 'CASCADE'
// })

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