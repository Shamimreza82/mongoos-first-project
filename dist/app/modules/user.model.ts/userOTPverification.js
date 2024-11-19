"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOTPVerification = void 0;
const mongoose_1 = require("mongoose");
const UserOTPVerificationSchema = new mongoose_1.Schema({
    userId: String,
    otp: String,
    createdAt: Date,
    expiresAt: Date,
});
exports.UserOTPVerification = new mongoose_1.Model("UserOTPVerification", UserOTPVerificationSchema);
