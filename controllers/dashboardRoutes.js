// URL localhost:3001/dashboard
// Required modules
const router = require('express').Router();
// Required files
const withAuth = require('../utils/auth');

// Home route
router.get('/', withAuth, async (req, res) => {
    try {
        res.render('dashboard', {
            logged_in: req.session.logged_in
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
});

// Export
module.exports = router;