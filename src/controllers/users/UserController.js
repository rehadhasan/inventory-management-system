const UserCreateService = require("../../services/user/UserCreateService");
const UserLoginService = require("../../services/user/UserLoginService");
const UserDetailsService = require("../../services/user/UserDetailsService");
const UserUpdateService = require("../../services/user/UserUpdateService");
const EmailVerifyService = require("../../services/user/EmailVerifyService");
const OTPVerifyService = require("../../services/user/OTPVerifyService");
const ResetPasswordService = require("../../services/user/ResetPasswordService");

exports.UserCreate = async (req, res) => {
    let result = await UserCreateService(req);
    res.status(200).json(result);
}

exports.UserLogin = async (req, res) => {
    let result = await UserLoginService(req);

    //Config cookie
    let CookieOptions = {expires:new Date(Date.now()+24*6060*1000), httpOnly:false, credentials:true}
    res.cookie('token', result['token'], CookieOptions)

    //final result
    res.status(200).json(result);
}

exports.UserLogout = async (req, res) => {
    //Update cookie
    let CookieOptions = {expires:new Date(Date.now()-24*6060*1000), httpOnly:false, credentials:true}
    res.cookie('token', "", CookieOptions)

    //final result
    res.status(200).json({status:"success", data: "Logout Successfully"});
}

exports.UserDetails = async (req, res) => {
    let result = await UserDetailsService(req);
    res.status(200).json(result);
}

exports.UserUpdate = async (req, res) => {
    let result = await UserUpdateService(req);
    res.status(200).json(result);
}

exports.EmailVerify = async (req, res) => {
    let result = await EmailVerifyService(req);
    res.status(200).json(result);
}

exports.OTPVerify = async (req, res) => {
    let result = await OTPVerifyService(req);
    res.status(200).json(result);
}

exports.ResetPassword = async (req, res) => {
    let result = await ResetPasswordService(req);
    res.status(200).json(result);
}