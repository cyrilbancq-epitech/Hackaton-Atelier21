const router = require('express').Router();
const { getProjects } = require('../controllers/projects.controllers');

router.get('/projects', getProjects);

module.exports = router;