import 'reflect-metadata';
import express, { Request, Response } from 'express';
import router from './router';

const app = express();

app.use(express.json());

app.use('/api', router);

app.get('/', (req: Request, res: Response): Response => {
  return res.json({ message: 'It works!' });
});

const start = async (): Promise<void> => {
  try {
    app.listen(3000, () => {
      console.log('Server started at http://localhost:3000');
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
