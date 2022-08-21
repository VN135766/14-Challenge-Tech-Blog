const { Post } = require('../models');

const postData = [
    {
        title: 'What is Javascript?',
        description: 'is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.',
        user_id: 1,
    },
    {
        title: 'What is HTML?',
        description: 'HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.',
        user_id: 1,
        comment_id: 2,
    },
]

const seedPost = () => Post.bulkCreate(postData)

module.exports = seedData