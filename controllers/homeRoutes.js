// Required modules
const router = require('express').Router();

// Home route
router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Export
module.exports = router;