const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const queryController = require('../controllers/queryController');

// router.post('/signup', queryValidator.validateUser, queryController.createUser);
router.post('/', queryController.getQuery);
router.get('/', queryController.keepAlive);

module.exports = router