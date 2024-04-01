const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

//POST route for login
router.post('/login', authController.login);
//POST route for registration
router.post('/signup', authController.register);

module.exports = router;
