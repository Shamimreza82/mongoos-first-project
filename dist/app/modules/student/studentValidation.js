"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
//////  creating a schema using joi 
// UserName Schema
const userNameSchema = joi_1.default.object({
    firstName: joi_1.default.string()
        .trim()
        .min(2)
        .max(50)
        .required()
        .messages({
        'string.empty': 'First name is required',
        'string.min': 'First name must be at least 2 characters long',
        'string.max': 'First name must be less than 50 characters',
    }),
    middleName: joi_1.default.string()
        .trim()
        .max(50)
        .allow('')
        .messages({
        'string.max': 'Middle name must be less than 50 characters',
    }),
    lastName: joi_1.default.string()
        .trim()
        .min(2)
        .max(50)
        .required()
        .pattern(/^[a-zA-Z]+$/)
        .messages({
        'string.empty': 'Last name is required',
        'string.min': 'Last name must be at least 2 characters long',
        'string.max': 'Last name must be less than 50 characters',
        'string.pattern.base': 'Last name must contain only alphabets',
    }),
});
// Guardian Schema
const guardianSchema = joi_1.default.object({
    fatherName: joi_1.default.string().trim().required().messages({
        'string.empty': "Father's name is required",
    }),
    fatherOccupation: joi_1.default.string().trim().required().messages({
        'string.empty': "Father's occupation is required",
    }),
    fatherContact: joi_1.default.string()
        .trim()
        .pattern(/^\d{10,15}$/)
        .required()
        .messages({
        'string.empty': "Father's contact number is required",
        'string.pattern.base': "Father's contact number must be 10 to 15 digits",
    }),
    motherName: joi_1.default.string().trim().required().messages({
        'string.empty': "Mother's name is required",
    }),
    motherOccupation: joi_1.default.string().trim().required().messages({
        'string.empty': "Mother's occupation is required",
    }),
    motherContact: joi_1.default.string()
        .trim()
        .pattern(/^\d{10,15}$/)
        .required()
        .messages({
        'string.empty': "Mother's contact number is required",
        'string.pattern.base': "Mother's contact number must be 10 to 15 digits",
    }),
});
// Local Guardian Schema
const localGuardianSchema = joi_1.default.object({
    name: joi_1.default.string().trim().required().messages({
        'string.empty': "Local guardian's name is required",
    }),
    occupation: joi_1.default.string().trim().required().messages({
        'string.empty': "Local guardian's occupation is required",
    }),
    contactNo: joi_1.default.string()
        .trim()
        .pattern(/^\d{10,15}$/)
        .required()
        .messages({
        'string.empty': "Local guardian's contact number is required",
        'string.pattern.base': 'Contact number must be 10 to 15 digits',
    }),
    address: joi_1.default.string()
        .trim()
        .min(5)
        .required()
        .messages({
        'string.empty': "Local guardian's address is required",
        'string.min': 'Address must be at least 5 characters long',
    }),
});
// Student Schema
const studentValidationSchema = joi_1.default.object({
    id: joi_1.default.string().trim().required().messages({
        'string.empty': 'Student ID is required',
    }),
    name: userNameSchema.required().messages({
        'any.required': 'Name is required',
    }),
    gender: joi_1.default.string()
        .valid('male', 'female', 'other')
        .required()
        .messages({
        'string.empty': 'Gender is required',
        'any.only': "Gender must be 'male', 'female', or 'other'",
    }),
    dateOfBirth: joi_1.default.string()
        .trim()
        .pattern(/^\d{4}-\d{2}-\d{2}$/)
        .required()
        .messages({
        'string.empty': 'Date of birth is required',
        'string.pattern.base': 'Date of birth must be in YYYY-MM-DD format',
    }),
    email: joi_1.default.string()
        .trim()
        .email()
        .required()
        .messages({
        'string.empty': 'Email is required',
        'string.email': 'Please provide a valid email address',
    }),
    contactNo: joi_1.default.string()
        .trim()
        .pattern(/^\d{10,15}$/)
        .required()
        .messages({
        'string.empty': 'Contact number is required',
        'string.pattern.base': 'Contact number must be 10 to 15 digits',
    }),
    emergencyContactNo: joi_1.default.string()
        .trim()
        .pattern(/^\d{10,15}$/)
        .required()
        .messages({
        'string.empty': 'Emergency contact number is required',
        'string.pattern.base': 'Emergency contact number must be 10 to 15 digits',
    }),
    bloodGroup: joi_1.default.string()
        .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
        .required()
        .messages({
        'string.empty': 'Blood group is required',
        'any.only': 'Invalid blood group',
    }),
    presentAddress: joi_1.default.string().trim().required().messages({
        'string.empty': 'Present address is required',
    }),
    permanentAddress: joi_1.default.string().trim().required().messages({
        'string.empty': 'Permanent address is required',
    }),
    guardian: guardianSchema.required().messages({
        'any.required': 'Guardian information is required',
    }),
    localGuardian: localGuardianSchema.required().messages({
        'any.required': 'Local guardian information is required',
    }),
    profileImage: joi_1.default.string()
        .trim()
        .pattern(/\.(jpg|jpeg|png|gif)$/)
        .required()
        .messages({
        'string.empty': 'Profile image is required',
        'string.pattern.base': 'Profile image must be a valid image format (jpg, jpeg, png, gif)',
    }),
    isActive: joi_1.default.string()
        .valid('active', 'blocked')
        .default('active')
        .messages({
        'any.only': "Status must be either 'active' or 'blocked'",
    }),
});
exports.default = studentValidationSchema;
