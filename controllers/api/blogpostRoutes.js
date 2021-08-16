// URL localhost:3001/api/blogposts
// Required modules
const router = require('express').Router();
// Required files
const { User, Blogpost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET All Blogpost data with comments and users testing
router.get('/', async (req, res) => {
    try {
        const blogpostData = await Blogpost.findAll({
            include: [ 
                { model: User, attributes: ['username'] },
                { model: Comment, 
                    include: [
                        { model: User, attributes: ['username'] }
                    ]
                } 
            ]
        });

        res.json(blogpostData);

    } catch (err) {
        res.status(500).json(err);
    }
})

// Get one blogpost data testing
router.get('/:id', async (req, res) => {
    try {
        const blogpostData = await Blogpost.findByPk(req.params.id, {
            include: [ 
                { model: User, attributes: ['username'] },
                { model: Comment, 
                    include: [
                        { model: User, attributes: ['username'] }
                    ]
                } 
            ]
        });

        res.json(blogpostData);

    } catch (err) {
        res.status(500).json(err);
    }
})

// Create new comment
router.post('/comment', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            userId: req.session.user_id
        });

        res.status(200).json(commentData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Create new blogpost
router.post('/', withAuth, async (req, res) => {
    try {
        const blogpostData = await Blogpost.create({
            ...req.body,
            userId: req.session.user_id
        });

        res.status(200).json(blogpostData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Update blogpost
router.put('/:id', withAuth, async (req, res) => {
    try {
        const blogpostData = await Blogpost.update({
            title: req.body.title,
            content: req.body.content
        },
        {
            where: {
                id: req.params.id
            }
        });

        res.status(200).json(blogpostData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Export
module.exports = router;