const router = require('express').Router();

// IMPORT ROUTES
const users = require('./users.routes');
const projects = require('./projects.routes');

// ROUTER USE
router.use('/api/users/', users);
router.use('/api/projects', projects);

module.exports = router;