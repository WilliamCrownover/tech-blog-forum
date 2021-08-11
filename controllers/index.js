// Required modules
const router = require('express').Router();
// Required files
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Routing
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Export
module.exports = router;