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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentServices = void 0;
const student_model_1 = require("./student.model");
const createStudentIntoDB = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.create(studentData); ////// create student in database //// build in static methode
    return result;
});
const getAllStudentFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.find();
    return result;
});
const getSingleStudentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await StudentModel.findOne({ id });
    // return result;
    const result = yield student_model_1.StudentModel.aggregate([
        { $match: { id: id } }
    ]);
    return result;
});
const deletedFromStudentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.updateOne({ id }, { isDeleted: true });
    return result;
});
exports.StudentServices = {
    createStudentIntoDB,
    getAllStudentFromDB,
    getSingleStudentFromDB,
    deletedFromStudentFromDB
};
