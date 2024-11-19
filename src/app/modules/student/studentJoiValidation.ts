import Joi from "joi";

   //////  creating a schema using joi 


   // UserName Schema
   const userNameSchema = Joi.object({
    firstName: Joi.string()
      .trim()
      .min(2)
      .max(50)
      .required()
      .messages({
        'string.empty': 'First name is required',
        'string.min': 'First name must be at least 2 characters long',
        'string.max': 'First name must be less than 50 characters',
      }),
    middleName: Joi.string()
      .trim()
      .max(50)
      .allow('')
      .messages({
        'string.max': 'Middle name must be less than 50 characters',
      }),
    lastName: Joi.string()
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
  const guardianSchema = Joi.object({
    fatherName: Joi.string().trim().required().messages({
      'string.empty': "Father's name is required",
    }),
    fatherOccupation: Joi.string().trim().required().messages({
      'string.empty': "Father's occupation is required",
    }),
    fatherContact: Joi.string()
      .trim()
      .pattern(/^\d{10,15}$/)
      .required()
      .messages({
        'string.empty': "Father's contact number is required",
        'string.pattern.base': "Father's contact number must be 10 to 15 digits",
      }),
    motherName: Joi.string().trim().required().messages({
      'string.empty': "Mother's name is required",
    }),
    motherOccupation: Joi.string().trim().required().messages({
      'string.empty': "Mother's occupation is required",
    }),
    motherContact: Joi.string()
      .trim()
      .pattern(/^\d{10,15}$/)
      .required()
      .messages({
        'string.empty': "Mother's contact number is required",
        'string.pattern.base': "Mother's contact number must be 10 to 15 digits",
      }),
  });
  
  // Local Guardian Schema
  const localGuardianSchema = Joi.object({
    name: Joi.string().trim().required().messages({
      'string.empty': "Local guardian's name is required",
    }),
    occupation: Joi.string().trim().required().messages({
      'string.empty': "Local guardian's occupation is required",
    }),
    contactNo: Joi.string()
      .trim()
      .pattern(/^\d{10,15}$/)
      .required()
      .messages({
        'string.empty': "Local guardian's contact number is required",
        'string.pattern.base': 'Contact number must be 10 to 15 digits',
      }),
    address: Joi.string()
      .trim()
      .min(5)
      .required()
      .messages({
        'string.empty': "Local guardian's address is required",
        'string.min': 'Address must be at least 5 characters long',
      }),
  });
  
  // Student Schema
  const studentValidationSchema = Joi.object({
    id: Joi.string().trim().required().messages({
      'string.empty': 'Student ID is required',
    }),
    name: userNameSchema.required().messages({
      'any.required': 'Name is required',
    }),
    gender: Joi.string()
      .valid('male', 'female', 'other')
      .required()
      .messages({
        'string.empty': 'Gender is required',
        'any.only': "Gender must be 'male', 'female', or 'other'",
      }),
    dateOfBirth: Joi.string()
      .trim()
      .pattern(/^\d{4}-\d{2}-\d{2}$/)
      .required()
      .messages({
        'string.empty': 'Date of birth is required',
        'string.pattern.base': 'Date of birth must be in YYYY-MM-DD format',
      }),
    email: Joi.string()
      .trim()
      .email()
      .required()
      .messages({
        'string.empty': 'Email is required',
        'string.email': 'Please provide a valid email address',
      }),
    contactNo: Joi.string()
      .trim()
      .pattern(/^\d{10,15}$/)
      .required()
      .messages({
        'string.empty': 'Contact number is required',
        'string.pattern.base': 'Contact number must be 10 to 15 digits',
      }),
    emergencyContactNo: Joi.string()
      .trim()
      .pattern(/^\d{10,15}$/)
      .required()
      .messages({
        'string.empty': 'Emergency contact number is required',
        'string.pattern.base': 'Emergency contact number must be 10 to 15 digits',
      }),
    bloodGroup: Joi.string()
      .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
      .required()
      .messages({
        'string.empty': 'Blood group is required',
        'any.only': 'Invalid blood group',
      }),
    presentAddress: Joi.string().trim().required().messages({
      'string.empty': 'Present address is required',
    }),
    permanentAddress: Joi.string().trim().required().messages({
      'string.empty': 'Permanent address is required',
    }),
    guardian: guardianSchema.required().messages({
      'any.required': 'Guardian information is required',
    }),
    localGuardian: localGuardianSchema.required().messages({
      'any.required': 'Local guardian information is required',
    }),
    profileImage: Joi.string()
      .trim()
      .pattern(/\.(jpg|jpeg|png|gif)$/)
      .required()
      .messages({
        'string.empty': 'Profile image is required',
        'string.pattern.base':
          'Profile image must be a valid image format (jpg, jpeg, png, gif)',
      }),
    isActive: Joi.string()
      .valid('active', 'blocked')
      .default('active')
      .messages({
        'any.only': "Status must be either 'active' or 'blocked'",
      }),
  });
  
export default studentValidationSchema

