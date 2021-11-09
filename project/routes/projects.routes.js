const router = require('express').Router();
const { signin } = require('../controllers/users.controllers');

router.post('/signin', signin);