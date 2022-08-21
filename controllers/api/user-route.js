const router = require('express').Router();
const { User } = require('../../models');
const { response } = require('express');

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

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                user: req.body.user
            }
        })
        if (!userData) {
            res.status(404).json({message: 'Wrong email or password, please try again' })
        } else {
            if (req.body.password == userData.password) {
                req.session.save(() => {
                    req.session.user_id = userData.id
                    req.session.logged_in = true;
                    req.session.username = req.body.user
                    res.status(200).json({ user: userData, message: "You have sucessfully logged in" })
                })
            }
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router