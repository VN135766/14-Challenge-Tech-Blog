const router = require('express').Router();
const { User, Comment, Post } = require('../../models');

//Gets all Posts
router.get('/', async (req, res) => {
    try {
        const postData = Post.findAll();
        if (!postData) {
            res.status(404).json('There are no Posts Found');
            return
        } else {
            res.status(200).json(postData);
        }
    } catch (err) {
        res.status(500).json(err);
    };
});

//Gets a specific comment
router.get('/:id', async (req, res) => {
    try {
        const postData = Post.findByPk({
            where: {
                id: req.params.id
            }
        })
        if (!postData) {
            res.status(400).json({ message: 'There are no posts associated with that id' })
        }
        res.status(200).json(postData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Creates a new comment
router.post('/', async (req, res) => {
    try {
        if (req.body.title && req.body.description) {
            const postData = await Post.create({
                title: req.body.title,
                description: req.body.description,
            })
            res.status(200).json(postData)
        } else {
            res.status(400).json({ message: 'Your post gotta have a title and also a comment' })
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id
            },
        });
        if (!postData) {
            res.status(400).json({ message: 'There are no Posts associated with that id' })
            return
        }
        res.status(200).json({ message: `Post #${req.params.id} has been updated` })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!postData) {
            res.status(400).json({ message: 'There are no comments associated with that id' })
        } else {
            res.status(200).json({ message: `Post #${req.params.id} has been deleted` })
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router