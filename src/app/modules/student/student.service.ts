import { TStudent } from './student.interface';
import { StudentModel } from './student.model';


const createStudentIntoDB = async (studentData: TStudent) => {
     const result =  await StudentModel.create(studentData) ////// create student in database //// build in static methode
    return result
}

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await StudentModel.findOne({ id });
  // return result;

  const result = await StudentModel.aggregate([
    {$match: {id : id} }
  ])
 return result;
};

const deletedFromStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, {isDeleted: true});
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deletedFromStudentFromDB
};
