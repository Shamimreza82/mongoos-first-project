

export type NewUser = {
    name: string; 
    email: string; 
    password: string; 
    dateOfBirth: Date; 
    verified: boolean
    otp?: number
}

export type UserOTPVerificationInterface = {
    userId: string; 
    otp: string; 
    createdAt: Date; 
    expiresAt: Date; 
}