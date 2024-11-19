import {z} from 'zod'


const userNameSchema = z.object({
    firstName: z
      .string()
      .trim()
      .min(2, { message: "First name must be at least 2 characters long" })
      .max(50, { message: "First name must be less than 50 characters" }),
    middleName: z
      .string()
      .trim()
      .max(50, { message: "Middle name must be less than 50 characters" })
      .optional(),
    lastName: z
      .string()
      .trim()
      .min(2, { message: "Last name must be at least 2 characters long" })
      .max(50, { message: "Last name must be less than 50 characters" })
      .regex(/^[a-zA-Z]+$/, { message: "Last name must contain only alphabets" }),
  });
  
  // Guardian Schema
  const guardianSchema = z.object({
    fatherName: z.string().trim().nonempty({ message: "Father's name is required" }),
    fatherOccupation: z.string().trim().nonempty({ message: "Father's occupation is required" }),
    fatherContact: z
      .string()
      .trim()
      .regex(/^\d{10,15}$/, { message: "Father's contact number must be 10 to 15 digits" }),
    motherName: z.string().trim().nonempty({ message: "Mother's name is required" }),
    motherOccupation: z.string().trim().nonempty({ message: "Mother's occupation is required" }),
    motherContact: z
      .string()
      .trim()
      .regex(/^\d{10,15}$/, { message: "Mother's contact number must be 10 to 15 digits" }),
  });
  
  // Local Guardian Schema
  const localGuardianSchema = z.object({
    name: z.string().trim().nonempty({ message: "Local guardian's name is required" }),
    occupation: z.string().trim().nonempty({ message: "Local guardian's occupation is required" }),
    contactNo: z
      .string()
      .trim()
      .regex(/^\d{10,15}$/, { message: "Contact number must be 10 to 15 digits" }),
    address: z
      .string()
      .trim()
      .min(5, { message: "Address must be at least 5 characters long" }),
  });
  
  // Student Schema
  const studentSchema = z.object({
    id: z.string().trim().nonempty({ message: "Student ID is required" }),
    password: z.string().max(20, {message: "password max length 20 character"}),
    name: userNameSchema,
    gender: z.enum(['male', 'female', 'other'], {
      required_error: "Gender is required",
      invalid_type_error: "Gender must be 'male', 'female', or 'other'",
    }),
    dateOfBirth: z
      .string()
      .trim()
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Date of birth must be in YYYY-MM-DD format" }),
    email: z.string().trim().email({ message: "Please provide a valid email address" }),
    contactNo: z
      .string()
      .trim()
      .regex(/^\d{10,15}$/, { message: "Contact number must be 10 to 15 digits" }),
    emergencyContactNo: z
      .string()
      .trim()
      .regex(/^\d{10,15}$/, { message: "Emergency contact number must be 10 to 15 digits" }),
    bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
      required_error: "Blood group is required",
      invalid_type_error: "Invalid blood group",
    }),
    presentAddress: z.string().trim().nonempty({ message: "Present address is required" }),
    permanentAddress: z.string().trim().nonempty({ message: "Permanent address is required" }),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImage: z
      .string()
      .trim()
      .regex(/\.(jpg|jpeg|png|gif)$/, { message: "Profile image must be a valid image format (jpg, jpeg, png, gif)" }),
    isActive: z.enum(['active', 'blocked']).default('active'),
    isDeleted: z.boolean().default(false)
  });


  export default studentSchema