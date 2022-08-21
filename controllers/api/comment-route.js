const router = require('express').Router();
const { Comment } = require('../../models');

//this will gets all comments
router.get('/', async (req, res) => {
    try {
        const commentData = Comment.findAll();
        if (!commentData) {
            res.status(404).json('No Users Found');
            return
        } else {
            res.status(200).json(commentData);
        }
    } catch (err) {
        res.status(500).json(err);
    };
});

//this will get a specific comment
router.get('/:id', async (req, res) => {
    try {
        const commentData = Comment.findByPk({
            where: {
                id: req.params.id
            }
        })
        if (!commentData) {
            res.status(400).json({ message: 'There are no comments associated with that id' })
        }
        res.status(200).json(commentData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//this will create a new comment
router.post('/', async (req, res) => {
    try {
        if (req.body.content) {
            const commentData = await Comment.create({
                content: req.body.content,
                post_id: req.body.post_id,
                user_id: req.body.user_id,
            });
            res.status(200).json(commentData);
        } else {
            res.status(400).json({ message: 'You have to enter content into your comment' })
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const commentData = await Comment.update(req.body, {
            where: {
                id: req.params.id
            },
        });
        if (!commentData) {
            res.status(400).json({ message: 'There are no comments associated with that id' })
            return
        }
        res.status(200).json({ message: `Comment #${req.params.id} has been updated` })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!commentData) {
            res.status(400).json({ message: 'There are no comments associated with that id' })
        } else {
            res.status(200).json({ message: `Comment #${req.params.id} has been deleted` })
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router