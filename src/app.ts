import express, { Application} from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './app/config';
import { StudentRoute } from './app/modules/student/student.route';
import { UserRouter } from './app/modules/user.model.ts/user.router';


const app: Application = express();

app.use(cors());
app.use(express.json());



async function main() {
  try {
    await mongoose.connect(config.database_Url as string);
   
   app.use('/api/v1/students', StudentRoute)
   app.use('/api/v1/users', UserRouter)
  
    // const getAController = (req: Request, res: Response) => {
    //   res.send('Hello World!');
    // }

    // app.get('/', getAController);



  } catch (error) {
    console.log(error);
  }
}
main()

export default app;
