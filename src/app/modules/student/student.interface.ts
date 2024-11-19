import { Model } from "mongoose";


export type TGuardian = {
    fatherName: string; 
    fatherOccupation: string; 
    fatherContact: string; 
    motherName: string; 
    motherOccupation: string; 
    motherContact: string; 
}

export type TUserName = {
    firstName: string; 
    middleName?: string; 
    lastName: string; 
}

export type TLocalGuardian = {
    name: string; 
    occupation: string; 
    contactNo: string; 
    address: string
}


export type TStudent = {
    id: string;
    password: string;
    name: TUserName;
    gender: 'male' | 'female' | 'other'; 
    dateOfBirth: string; 
    email: string; 
    contactNo: string; 
    emergencyContactNo: string; 
    bloodGroup?:  'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'; 
    presentAddress: string; 
    permanentAddress:string; 
    guardian: TGuardian; 
    localGuardian: TLocalGuardian; 
    profileImage?: string;   //// save database in url
    isActive: 'active' | 'blocked'
    isDeleted: boolean;
}
  //// for creating instance 
// export type StudentMethods = {
//     isUserExist(id: string): Promise<TStudent | null>
// }

export type Student = Model<TStudent>


////for creating static 

// export interface StudentModel extends Model<TStudent> {
//     isUserExist(id: string): Promise<TStudent | null>;
//   }
  