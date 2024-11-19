import  { model,Schema } from "mongoose";
import { NewUser } from "./user.interface";


const userModel = new Schema<NewUser>({
    name: {
        type: String, 
        require: [true, {message: "name is required "}], 
    },
    email: {
        type: String, 
        require: [true, {message: "name is required "}], 
    },
    password: {
        type: String, 
        require: [true, {message: "name is required "}], 
    },
    dateOfBirth: {
        type: Date, 
        require: [true, {message: "name is required "}], 

    }, 
    verified: {
        type: Boolean,
        default: false
    },
    otp: Number
})



userModel.pre('save', function(){
    console.log(this);
})


export const User = model('User', userModel)