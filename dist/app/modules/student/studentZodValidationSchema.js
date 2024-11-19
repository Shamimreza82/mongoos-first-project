"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userNameSchema = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .trim()
        .min(2, { message: "First name must be at least 2 characters long" })
        .max(50, { message: "First name must be less than 50 characters" }),
    middleName: zod_1.z
        .string()
        .trim()
        .max(50, { message: "Middle name must be less than 50 characters" })
        .optional(),
    lastName: zod_1.z
        .string()
        .trim()
        .min(2, { message: "Last name must be at least 2 characters long" })
        .max(50, { message: "Last name must be less than 50 characters" })
        .regex(/^[a-zA-Z]+$/, { message: "Last name must contain only alphabets" }),
});
// Guardian Schema
const guardianSchema = zod_1.z.object({
    fatherName: zod_1.z.string().trim().nonempty({ message: "Father's name is required" }),
    fatherOccupation: zod_1.z.string().trim().nonempty({ message: "Father's occupation is required" }),
    fatherContact: zod_1.z
        .string()
        .trim()
        .regex(/^\d{10,15}$/, { message: "Father's contact number must be 10 to 15 digits" }),
    motherName: zod_1.z.string().trim().nonempty({ message: "Mother's name is required" }),
    motherOccupation: zod_1.z.string().trim().nonempty({ message: "Mother's occupation is required" }),
    motherContact: zod_1.z
        .string()
        .trim()
        .regex(/^\d{10,15}$/, { message: "Mother's contact number must be 10 to 15 digits" }),
});
// Local Guardian Schema
const localGuardianSchema = zod_1.z.object({
    name: zod_1.z.string().trim().nonempty({ message: "Local guardian's name is required" }),
    occupation: zod_1.z.string().trim().nonempty({ message: "Local guardian's occupation is required" }),
    contactNo: zod_1.z
        .string()
        .trim()
        .regex(/^\d{10,15}$/, { message: "Contact number must be 10 to 15 digits" }),
    address: zod_1.z
        .string()
        .trim()
        .min(5, { message: "Address must be at least 5 characters long" }),
});
// Student Schema
const studentSchema = zod_1.z.object({
    id: zod_1.z.string().trim().nonempty({ message: "Student ID is required" }),
    password: zod_1.z.string().max(20, { message: "password max length 20 character" }),
    name: userNameSchema,
    gender: zod_1.z.enum(['male', 'female', 'other'], {
        required_error: "Gender is required",
        invalid_type_error: "Gender must be 'male', 'female', or 'other'",
    }),
    dateOfBirth: zod_1.z
        .string()
        .trim()
        .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Date of birth must be in YYYY-MM-DD format" }),
    email: zod_1.z.string().trim().email({ message: "Please provide a valid email address" }),
    contactNo: zod_1.z
        .string()
        .trim()
        .regex(/^\d{10,15}$/, { message: "Contact number must be 10 to 15 digits" }),
    emergencyContactNo: zod_1.z
        .string()
        .trim()
        .regex(/^\d{10,15}$/, { message: "Emergency contact number must be 10 to 15 digits" }),
    bloodGroup: zod_1.z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
        required_error: "Blood group is required",
        invalid_type_error: "Invalid blood group",
    }),
    presentAddress: zod_1.z.string().trim().nonempty({ message: "Present address is required" }),
    permanentAddress: zod_1.z.string().trim().nonempty({ message: "Permanent address is required" }),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImage: zod_1.z
        .string()
        .trim()
        .regex(/\.(jpg|jpeg|png|gif)$/, { message: "Profile image must be a valid image format (jpg, jpeg, png, gif)" }),
    isActive: zod_1.z.enum(['active', 'blocked']).default('active'),
    isDeleted: zod_1.z.boolean().default(false)
});
exports.default = studentSchema;
