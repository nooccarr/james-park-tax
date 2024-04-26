const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.route('/signup').post(authController.signUp);
router.route('/login').post(authController.Login);
router.route('/verify').post(authMiddleware.userVerification);

module.exports = router;
