const { Comment } = require('../models');

const commentData = [
    {
        id:1,
        content: 'ok i understand now',
        user_id: 1,
        post_id: 2,
    },
    {
        id:2,
        content: 'i still dont get it',
        user_id: 2,
        post_id: 1,
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = commentData 