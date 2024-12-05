const express = require('express');
const registerUser = require('../controller/registerUser');
const checkEmail = require('../controller/checkEmail');
const checkPassword = require('../controller/checkPassword');
const userDetails = require('../controller/userDetails');

const router = express.Router();

//Create user api
router.post('/register',registerUser)

//Check user email
router.post('/email', checkEmail)

//Check user password
router.post('/password', checkPassword);

//login user details
router.get('/user-details', userDetails);

module.exports = router;