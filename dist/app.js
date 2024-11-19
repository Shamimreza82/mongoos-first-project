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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./app/config"));
const student_route_1 = require("./app/modules/student/student.route");
const user_router_1 = require("./app/modules/user.model.ts/user.router");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.database_Url);
            app.use('/api/v1/students', student_route_1.StudentRoute);
            app.use('/api/v1/users', user_router_1.UserRouter);
            // const getAController = (req: Request, res: Response) => {
            //   res.send('Hello World!');
            // }
            // app.get('/', getAController);
        }
        catch (error) {
            console.log(error);
        }
    });
}
main();
exports.default = app;
