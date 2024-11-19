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
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailVerification = void 0;
const emailVerification = (result) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Hi i am user", result);
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com', // Use the correct SMTP server for your email provider
    //     port: 465, // Use 465 for SSL, 587 for TLS
    //     secure: true, // true for 465, false for 587
    //     auth: {
    //         user: "shamimrezabd67@gmail.com",
    //         pass: "kahv yhme kvab nagz", // Your password or App Password
    //     },
    //   });
    //   const mailOptions = {
    //     from: 'shamimrezabd67@gmail.com',
    //     to: 'md633530@gmail.com',
    //     subject: 'Test Email',
    //     text: 'Hello, this is a test email!',
    //   };
    //   transporter.sendMail(mailOptions, (err, info) => {
    //     if (err) {
    //       console.error('Error:', err);
    //     } else {
    //       console.log('Email sent:', info.response);
    //     }
    //   });
});
exports.emailVerification = emailVerification;
