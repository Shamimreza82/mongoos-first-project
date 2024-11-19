import { NewUser } from "./user.interface";
import { User } from "./user.model";


export const createUserOTPinDB = async (user: NewUser) => {
    const  result = await User.create(user)
    return result
}

export const otpVeryfyUserOTPinDB = async (email: string) => {
    const  result = await User.findOne({email})
    return result
}