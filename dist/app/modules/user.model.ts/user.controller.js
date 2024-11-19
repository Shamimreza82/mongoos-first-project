"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOtpVeryfy = exports.userOTController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const user_service_1 = require("./user.service");
const user_model_1 = require("./user.model");
const userOTController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        console.log(user);
        user.dateOfBirth = new Date();
        const saltRounds = 10;
        const otp = Math.floor((1000 + Math.random() * 9000));
        const hasdPass = yield bcrypt_1.default.hash(user.password, saltRounds);
        user.password = hasdPass;
        user.otp = otp;
        const result = yield (0, user_service_1.createUserOTPinDB)(user);
        ////////// Node mailer ////////////////////////
        const transporter = nodemailer_1.default.createTransport({
            host: 'smtp.gmail.com', // Use the correct SMTP server for your email provider
            port: 465, // Use 465 for SSL, 587 for TLS
            secure: true, // true for 465, false for 587
            auth: {
                user: "shamimrezabd67@gmail.com",
                pass: "kahv yhme kvab nagz", // Your password or App Password
            },
        });
        const mailOptions = {
            from: 'shamimrezabd67@gmail.com',
            to: user.email,
            subject: 'Otp send',
            text: `Hello, this is a test email! ${user.otp}`,
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Error:', err);
            }
            else {
                res.status(200).json({
                    success: true,
                    message: 'Otp Send Check y',
                });
            }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Faild',
            data: error,
        });
    }
});
exports.userOTController = userOTController;
const userOtpVeryfy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, emailOtp } = req.body;
    console.log(email, emailOtp);
    const result = yield (0, user_service_1.otpVeryfyUserOTPinDB)(email);
    if (result.otp === emailOtp) {
        const v = yield user_model_1.User.updateOne({ email }, { verified: true });
        res.status(200).json({
            success: true,
            message: 'Verify Completed',
            data: v
        });
    }
    else {
        res.status(500).json({
            success: false,
            message: 'Please input Valid Otp',
        });
    }
});
exports.userOtpVeryfy = userOtpVeryfy;
