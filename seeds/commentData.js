const { Comment } = require('../models');

const commentData = [
    {
        content: 'ok i understand now',
        user_id: 2
    },
    {
        content: 'i still dont get it',
        user_id: 2
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment 