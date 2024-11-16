import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const result = StudentServices.createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      massage: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};



const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      massage: 'get all students',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
try {
  const {studentId} = req.params
  const result = await StudentServices.getSingleStudentFromDB(studentId)

  res.status(200).json({
    success: true,
    massage: 'single student retrieve successfully',
    data: result,
  });
} catch (error) {
  console.log(error);
}


}



export const StudentController = {
  createStudent,
  getAllStudent, 
  getSingleStudent
};
