// URL localhost:3001/api/blogposts
// Required modules
const router = require('express').Router();
// Required files
const { User, Blogpost, Comment } = require('../../models');

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
        console.log('@@@@@@@@@');
        res.json(blogpostData);

    } catch (err) {
        res.status(500).json(err);
    }
})

// Export
module.exports = router;