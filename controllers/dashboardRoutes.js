// Required modules
const router = require('express').Router();

// Home route
router.get('/', async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Export
module.exports = router;