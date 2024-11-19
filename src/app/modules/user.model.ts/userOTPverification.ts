import { Model, Schema } from "mongoose";
import { UserOTPVerificationInterface } from "./user.interface";

const UserOTPVerificationSchema = new Schema<UserOTPVerificationInterface>({
    userId: String, 
    otp: String,
    createdAt: Date, 
    expiresAt: Date, 
})

export const UserOTPVerification = new Model("UserOTPVerification", UserOTPVerificationSchema)





