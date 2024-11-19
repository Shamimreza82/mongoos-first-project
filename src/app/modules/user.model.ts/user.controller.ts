import { Request, Response } from 'express';
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'
import { createUserOTPinDB, otpVeryfyUserOTPinDB,} from './user.service';
import { User } from './user.model';



export const userOTController = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    console.log(user);
    user.dateOfBirth = new Date()
    const saltRounds = 10;
    const otp: number = Math.floor((1000 + Math.random() * 9000 ))
    const hasdPass = await bcrypt.hash(user.password, saltRounds)
 
    user.password = hasdPass
    user.otp = otp
    const result = await createUserOTPinDB(user);


////////// Node mailer ////////////////////////
      const transporter = nodemailer.createTransport({
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
        } else {
          
        res.status(200).json({
        success: true,
        message: 'Otp Send Check y',
      });
        }
      });    

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Faild',
      data: error,
    });
  }
};

 export const userOtpVeryfy = async (req: Request, res: Response) => {
    const {email, emailOtp} = req.body
    console.log(email, emailOtp)
    const result = await otpVeryfyUserOTPinDB(email)
    if(result.otp === emailOtp){
        const v = await User.updateOne({email}, {verified: true})

        res.status(200).json({
            success: true,
            message: 'Verify Completed',
            data: v
          });
    } else {
        res.status(500).json({
            success: false,
            message: 'Please input Valid Otp',
          });
    }

    
    }
