const { User } = require('../models');

const userData = [
    {
        user: 'vn135766',
        password: '135766',
    },
    {
        user: 'victornunez',
        password: '135766',
    }
]
const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser