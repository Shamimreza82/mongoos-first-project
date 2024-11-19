import express from "express";
import { userOTController, userOtpVeryfy} from "./user.controller";


const router = express.Router()

router.post('/userCreateOTP', userOTController)

router.post('/verifyUser', userOtpVeryfy)

export const UserRouter = router