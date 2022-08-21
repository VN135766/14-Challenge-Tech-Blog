const router = require('express').Router();
const { response } = require('express');
const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userData = User.findAll();
        if (!userData) {
            res.status(404).json('There are no users found');
            return
        } else {
            res.status(200).json(userData);
        }
    } catch (err) {
        res.status(500).json(err);
    };
});

//this creates a new user. 
router.post('/', async (req, res) => {
    try {
        if (req.body.user && req.body.password) {
            const userData = await User.create({
                user: req.body.user,
                password: req.body.password
            })
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
                req.session.username = req.body.user;
                res.status(200).json(userData);
            })
        }

    } catch (err) {
        res.status(500).json(err)
    }
})

//this logs in a user.
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                user: req.body.user
            }
        });
        if (!userData) {
            res.status(404).json({ message: 'that is an incorrect email or password, please try again!' })
            return
        };

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(404).json({ message: 'that is an incorrect email or password, please try again!' })
            return
        };
            req.session.save(() => {
                req.session.user_id = userData.id
                req.session.logged_in = true;
                req.session.username = req.body.user
                res.status(200).json({ user: userData, message: "Success, you are not logged in" })
            })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router