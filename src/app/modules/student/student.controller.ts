import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import { z } from 'zod';
import studentSchema from './studentZodValidationSchema';
import { any } from 'joi';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    const zodParchData = studentSchema.parse(student);
    // const {error, value} = studentValidationSchema.validate(student)

    // if(error){
    //   res.status(500).json({
    //     success: false,
    //     massage: 'something went rang',
    //     error: error.details
    //   })
    // }

    const result = await StudentServices.createStudentIntoDB(zodParchData);

    res.status(200).json({
      success: true,
      massage: 'student is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: error.message || 'something went rong',
      error: error,
    });
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
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: error.message || 'something went rong',
      error: error,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      massage: 'single student retrieve successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: error.message || 'something went rong',
      error: error,
    });
  }
};



const deletedStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deletedFromStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      massage: 'single student retrieve successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: error.message || 'something went rong',
      error: error,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  deletedStudent
};
