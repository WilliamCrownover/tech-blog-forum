// Required modules
const router = require( 'express' ).Router();
// Required files
const userRoutes = require( './userRoutes' );
const blogpostRoutes = require( './blogpostRoutes' );

// Routing
router.use( '/users', userRoutes );
router.use( '/blogposts', blogpostRoutes );

// Export
module.exports = router;