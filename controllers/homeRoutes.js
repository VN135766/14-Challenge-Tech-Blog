const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get("/", async (req, res) => {
    res.render("homepage");
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

router.get('/thread', async (req, res) => {
    res.render("thread");
});

router.get('/newpost', async (req, res) => {
    res.render("newpost");
});

router.get('/editpost', async (req, res) => {
    res.render("editpost");
});

module.exports = router 