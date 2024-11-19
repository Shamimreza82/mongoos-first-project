import { Schema, model } from 'mongoose';
import {TGuardian, TLocalGuardian, TStudent, TUserName,  } from './student.interface';
import validator from 'validator';
import bcrypt from 'bcrypt'
import config from '../../config';


const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
    minlength: [2, "First name must be at least 2 characters long"],
    maxlength: [50, "First name must be less than 50 characters"],
  },
  middleName: {
    type: String,
    trim: true,
    maxlength: [50, "Middle name must be less than 50 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
    minlength: [2, "Last name must be at least 2 characters long"],
    maxlength: [50, "Last name must be less than 50 characters"],
    validate: {
      validator: (value: string) => validator.isAlpha (value),
      message: '{VALUE} is not valid'
    }
  },
});


const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
    trim: true,
  },
  fatherContact: {
    type: String,
    required: [true, "Father's contact number is required"],
    match: [/^\d{10,15}$/, "Father's contact number must be 10 to 15 digits"],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required"],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
    trim: true,
  },
  motherContact: {
    type: String,
    required: [true, "Mother's contact number is required"],
    match: [/^\d{10,15}$/, "Mother's contact number must be 10 to 15 digits"],
  },
});


const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required"],
    trim: true,
    validate: function(value: string){
      console.log(value);
    }
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
    match: [/^\d{10,15}$/, "Contact number must be 10 to 15 digits"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
    trim: true,
    minlength: [5, "Address must be at least 5 characters long"],
  },
});




const studentSchema = new Schema<TStudent>({
  id: {
    type: String,
    required: [true, "Student ID is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  name: {
    type: userNameSchema,
    required: [true, "Name is required"],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: "Gender must be 'male', 'female', or 'other'",
    },
    required: [true, "Gender is required"],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Date of birth is required"],
    match: [/^\d{4}-\d{2}-\d{2}$/, "Date of birth must be in YYYY-MM-DD format"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    validate: {
      validator: (value: string) => validator.isEmail(value), 
      message: "{VALUE} is not valid"
    }
    // match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
    match: [/^\d{10,15}$/, "Contact number must be 10 to 15 digits"],
  },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
    match: [/^\d{10,15}$/, "Emergency contact number must be 10 to 15 digits"],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: "Invalid blood group",
    },
    required: [true, "Blood group is required"],
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
    trim: true,
  },
  guardian: {
    type: guardianSchema,
    required: [true, "Guardian information is required"],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, "Local guardian information is required"],
  },
  profileImage: {
    type: String,
    required: [true, "Profile image is required"],
    match: [/\.(jpg|jpeg|png|gif)$/, "Profile image must be a valid image format (jpg, jpeg, png, gif)"],
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message: "Status must be either 'active' or 'blocked'",
    },
    default: 'active',
  },
  isDeleted: {
    type: Boolean, 
    default: false
  }
});

////  pre save middelware 
studentSchema.pre('save', async function(next){
  const user = this;
 user.password = await bcrypt.hash(user.password,Number(config.bcrypt_salt_round))
next()
})

/// post save middelware 
studentSchema.post('save', function(doc, next){
  doc.password = ""
  next()
})



///queary middelware 

studentSchema.pre('find', async function (next) {
  this.find({isDeleted: {$ne: true}})
  next()
} )


studentSchema.pre('findOne', async function (next) {
  this.find({isDeleted: {$ne: true}})
  next()
} )


//[ { '$match': { id: '183657' } } ]

// studentSchema.pre('aggregate', async function (next) {
//   console.log(this.pipeline().unshift({$match : }));
//   // next()
// } )



export const StudentModel = model<TStudent>('Student', studentSchema)
