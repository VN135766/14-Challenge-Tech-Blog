const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userData = User.findAll();
        if (!userData) {
            res.status(404).json('There are no Users Found');
            return
        } else {
            res.status(200).json(userData);
        }
    } catch (err) {
        res.status(500).json(err);
    };
});

//CREATES A NEW USER
router.post('/', async (req, res) => {
    try {
        if (req.body.username && req.body.password) {
            const userData = await User.create({
                user: req.body.username,
                password: req.body.password
            })
            res.status(200).json(userData)
        } else {
            res.status(400).json({message: 'You must enter both a username and also a password'})
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

//LOGINS USER
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                user: req.body.user
            }
        })
        if (!userData) {
            res.status(400).json({message: 'Wrong email or password, try again'})
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router