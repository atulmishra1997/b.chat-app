const express = require('express');
const registerUser = require('../controller/registerUser');
const checkEmail = require('../controller/checkEmail');
const checkPassword = require('../controller/checkPassword');
const userDetails = require('../controller/userDetails');
const logout = require('../controller/logout');
const updateUserDetails = require('../controller/updateUserDetails');

const router = express.Router();

//Create user api
router.post('/register',registerUser)

//Check user email
router.post('/email', checkEmail)

//Check user password
router.post('/password', checkPassword);

//login user details
router.get('/user-details', userDetails);

//logout user 
router.get('/logout', logout);

//Update User Details
router.post('/update-user', updateUserDetails)

module.exports = router;