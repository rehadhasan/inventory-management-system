const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const BrandController = require('../controllers/BrandController');
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');

//User API
router.post("/UserCreate", UserController.UserCreate);
router.post("/UserLogin", UserController.UserLogin);
router.get("/UserLogout", UserController.UserLogout);
router.get("/UserDetails", AuthVerifyMiddleware, UserController.UserDetails);
router.post("/UserUpdate", AuthVerifyMiddleware, UserController.UserUpdate);
router.get("/EmailVerify/:email", UserController.EmailVerify);
router.get("/OTPVerify/:email/:otp", UserController.OTPVerify);
router.post("/ResetPassword", UserController.ResetPassword);

//Brand API
router.post("/CreateBrand", AuthVerifyMiddleware, BrandController.CreateBrand);
router.post("/UpdateBrand/:ID", AuthVerifyMiddleware, BrandController.UpdateBrand);
router.get("/BrandList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, BrandController.BrandList);
router.get("/BrandDropDown", AuthVerifyMiddleware, BrandController.BrandDropDown);

module.exports = router;