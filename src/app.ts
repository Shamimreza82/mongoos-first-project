import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './app/config';

const app: Application = express();

app.use(cors());
app.use(express.json());



async function main() {
  try {
    await mongoose.connect(config.database_Url as string);

    const getAController = (req: Request, res: Response) => {
      res.send('Hello World!');
    }

    app.get('/', getAController);



  } catch (error) {
    console.log(error);
  }
}
main()

export default app;
