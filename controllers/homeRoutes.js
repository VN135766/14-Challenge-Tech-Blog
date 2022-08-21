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
        posts,
        loggedIn: req.session.logged_in,
        username: req.session.username,
        user_id: req.session.user_id,
    });
});

router.get('/login', async (req, res) => {
    res.render("login", {
        loggedIn: req.session.logged_in,
        username: req.session.username,
        user_id: req.session.user_id,
    });
});

router.get('/signup', async (req, res) => {
    res.render("signup", {
        loggedIn: req.session.logged_in,
        username: req.session.username,
        user_id: req.session.user_id,
    });
});

router.get('/dashboard', async (req, res) => {
    if (req.session.logged_in) {
        const postData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: 'password' },
            include: [{ model: Post }],
        });
        const posts = postData.get({ plain: true }).posts;
        res.render("dashboard", {
            posts,
            loggedIn: req.session.logged_in,
            username: req.session.username,
            user_id: req.session.user_id,
        });
    } else {
        res.redirect('/login')
    }

});

router.get('/thread/:id', async (req, res) => {
    const postData = await Post.findByPk(req.params.id, {
        where: {
            post_id: req.params.id
        }, include: [{
            model: User,
            attributes: {
                exclude: 'password',
            },
        }],
    });
    const post = postData.get({ plain: true })
    console.log(post);


    const commentData = await Comment.findAll({
        where: {
            post_id: req.params.id
        }, include: [{
            model: User,
            attributes: {
                exclude: 'password'
            },
        }],
    });
    const comments = commentData.map(comment => comment.get({ plain: true }))
    res.render("thread", {
        post,
        comments,
        loggedIn: req.session.logged_in,
        username: req.session.username,
        user_id: req.session.user_id,
    });
});

router.get('/newpost', async (req, res) => {
    res.render("newpost", {
        loggedIn: req.session.logged_in,
        username: req.session.username,
        user_id: req.session.user_id,
    });
});

router.get('/editpost/:id', async (req, res) => {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true })
    console.log(post)

    res.render("editpost", {
        post,
        loggedIn: req.session.logged_in,
        username: req.session.username,
        user_id: req.session.user_id,
    });
});
router.get('/logout', async (req, res) => {
    req.session.destroy();
    res.redirect('/')
})

module.exports = router 