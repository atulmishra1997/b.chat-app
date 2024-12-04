const express = require('express');
const registerUser = require('../controller/registerUser');
const checkEmail = require('../controller/checkEmail');

const router = express.Router();

//Create user api
router.post('/register',registerUser)

//Check user email
router.post('/email', checkEmail)

module.exports = router;