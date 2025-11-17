const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users/UserController');
const BrandController = require('../controllers/brands/BrandController');
const CategoryController = require('../controllers/categories/CategoryController');
const SupplierController = require('../controllers/suppliers/SupplierController');
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

//Category API
router.post("/CreateCategory", AuthVerifyMiddleware, CategoryController.CreateCategory);
router.post("/UpdateCategory/:ID", AuthVerifyMiddleware, CategoryController.UpdateCategory);
router.get("/CategoryList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, CategoryController.CategoryList);
router.get("/CategoryDropDown", AuthVerifyMiddleware, CategoryController.CategoryDropDown);

//Supplier API
router.post("/CreateSupplier", AuthVerifyMiddleware, SupplierController.CreateSupplier);
router.post("/UpdateSupplier/:ID", AuthVerifyMiddleware, SupplierController.UpdateSupplier);
router.get("/SupplierList/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, SupplierController.SupplierList);
router.get("/SupplierDropDown", AuthVerifyMiddleware, SupplierController.SupplierDropDown);

module.exports = router;




