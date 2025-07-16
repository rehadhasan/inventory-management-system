const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');

router.post("/UserCreate", UserController.UserCreate);
router.post("/UserLogin", UserController.UserLogin);
router.get("/UserDetails", AuthVerifyMiddleware, UserController.UserDetails);
router.post("/UserUpdate", AuthVerifyMiddleware, UserController.UserUpdate);
router.get("/EmailVerify/:email", UserController.EmailVerify);
router.get("/OTPVerify/:email/:otp", UserController.OTPVerify);
router.post("/ResetPassword", UserController.ResetPassword);

module.exports = router;