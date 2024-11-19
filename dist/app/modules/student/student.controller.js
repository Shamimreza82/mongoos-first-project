"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_service_1 = require("./student.service");
const studentZodValidationSchema_1 = __importDefault(require("./studentZodValidationSchema"));
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body.student;
        const zodParchData = studentZodValidationSchema_1.default.parse(student);
        // const {error, value} = studentValidationSchema.validate(student)
        // if(error){
        //   res.status(500).json({
        //     success: false,
        //     massage: 'something went rang',
        //     error: error.details
        //   })
        // }
        const result = yield student_service_1.StudentServices.createStudentIntoDB(zodParchData);
        res.status(200).json({
            success: true,
            massage: 'student is created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: error.message || 'something went rong',
            error: error,
        });
    }
});
const getAllStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentServices.getAllStudentFromDB();
        res.status(200).json({
            success: true,
            massage: 'get all students',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: error.message || 'something went rong',
            error: error,
        });
    }
});
const getSingleStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentServices.getSingleStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            massage: 'single student retrieve successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: error.message || 'something went rong',
            error: error,
        });
    }
});
const deletedStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentServices.deletedFromStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            massage: 'single student retrieve successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            massage: error.message || 'something went rong',
            error: error,
        });
    }
});
exports.StudentController = {
    createStudent,
    getAllStudent,
    getSingleStudent,
    deletedStudent
};
