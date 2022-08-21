const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get("/", async (req, res) => {
    const postData = await Post.findAll({
        include: [{
            model: User,
            attributes: {
                exclude: 'password'
            }
        }]
    })
    const posts = postData.map(post => post.get({ plain: true }));

    res.render("homepage", {
        posts
    });
});

router.get('/login', async (req, res) => {
    res.render("login");
});

router.get('/signup', async (req, res) => {
    res.render("signup");
});

router.get('/dashboard', async (req, res) => {
    res.render("dashboard");
});

router.get('/thread/:id', async (req, res) => {
    res.render("thread");
});

router.get('/newpost', async (req, res) => {
    res.render("newpost");
});

router.get('/editpost/:id', async (req, res) => {
    res.render("editpost");
});

module.exports = router 