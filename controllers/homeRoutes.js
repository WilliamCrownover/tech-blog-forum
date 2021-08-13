// Required modules
const router = require('express').Router();
// Required files
const { User, Blogpost, Comment } = require('../models');
const serialize = require('../utils/serialize');

// Home route
router.get('/', async (req, res) => {
    try {
        const blogpostData = await Blogpost.findAll({
            include: [
                { model: User }
            ]
        });

        const blogposts = blogpostData.map(serialize);

        res.render('homepage', {
            blogposts
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

// Export
module.exports = router;