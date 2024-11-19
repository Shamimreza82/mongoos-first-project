"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, { message: "name is required " }],
    },
    email: {
        type: String,
        require: [true, { message: "name is required " }],
    },
    password: {
        type: String,
        require: [true, { message: "name is required " }],
    },
    dateOfBirth: {
        type: Date,
        require: [true, { message: "name is required " }],
    },
    verified: {
        type: Boolean,
        default: false
    },
    otp: Number
});
userModel.pre('save', function () {
    console.log(this);
});
exports.User = (0, mongoose_1.model)('User', userModel);
