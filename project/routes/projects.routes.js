const router = require('express').Router();
const { getProjects } = require('../controllers/projects.controllers');

router.get('/get', getProjects);

module.exports = router;