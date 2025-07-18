const router = require('express').Router();
const {login,signup} = require('./../controllers/authController');
const {signupValidation,loginValidation} = require('../validators/authValidation');



router.post('/signup',signupValidation,signup);
router.post('/login',loginValidation,login);

module.exports = router;