// Required modules
const sequelize = require('../config/connection');
// Required files
const { User, Blogpost, Comment } = require('../models');
const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');
const commentData = require('./commentData.json');

// Seed the database
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData);

    await Blogpost.bulkCreate(blogpostData);

    await Comment.bulkCreate(commentData);

    process.exit(0);
};

seedDatabase();