// URL localhost:3001/api/users
// Required modules
const router = require('express').Router();
// Required files
const { User } = require('../../models');

// Create new user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });

    } catch (err) {
      res.status(400).json(err);
    }
});

// Export
module.exports = router;