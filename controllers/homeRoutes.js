// URL localhost:3001/
// Required modules
const router = require( 'express' ).Router();
// Required files
const { User, Blogpost } = require( '../models' );
const serialize = require( '../utils/serialize' );

// Home route
router.get( '/', async ( req, res ) => {
	try {
		const blogpostData = await Blogpost.findAll( {
			include: [
				{ model: User }
			],
			order: [
				[ 'dateCreated', 'DESC' ]
			]
		} );

		const blogposts = blogpostData.map( serialize );

		res.render( 'homepage', {
			blogposts,
			logged_in: req.session.logged_in
		} );

	} catch ( err ) {
		res.status( 500 ).json( err );
	}
} );

// Signup route
router.get( '/signup', async ( req, res ) => {
	if ( req.session.logged_in ) {
		res.redirect( '/' );
		return;
	}

	res.render( 'signup' );
} );

// Login route
router.get( '/login', async ( req, res ) => {
	if ( req.session.logged_in ) {
		res.redirect( '/' );
		return;
	}

	res.render( 'login' );
} );

// Export
module.exports = router;