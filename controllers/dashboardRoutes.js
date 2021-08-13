// URL localhost:3001/dashboard
// Required modules
const router = require('express').Router();
// Required files
const { Blogpost, User } = require('../models');
const withAuth = require('../utils/auth');
const serialize = require('../utils/serialize');

// Home route
router.get('/', withAuth, async (req, res) => {
    try {
        const blogpostData = await Blogpost.findAll({
            include: [
                { model: User }
            ],
            where: {
                userId: req.session.user_id
            }
        })

        const blogposts = blogpostData.map(serialize);

        res.render('dashboard', {
            blogposts,
            logged_in: req.session.logged_in
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

// Export
module.exports = router;