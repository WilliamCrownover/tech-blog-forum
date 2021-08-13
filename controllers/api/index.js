// Required modules
const router = require('express').Router();
// Required files
const userRoutes = require('./userRoutes');

// Routing
router.use('/users', userRoutes);

// Export
module.exports = router;