
const commentData = [
    {
        content: 'ok i understand now',
        user_id: 2,
        post_id: 1,
    },
    {
        content: 'i still dont get it',
        user_id: 1,
        post_id: 2,
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = commentData 