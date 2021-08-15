// URL localhost:3001/
// Required modules
const router = require('express').Router();
// Required files
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const blogpostRoutes = require('./blogpostRoutes');
const apiRoutes = require('./api');

// Routing
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/blogposts', blogpostRoutes);
router.use('/api', apiRoutes);

// Export
module.exports = router;