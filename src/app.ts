import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/users.route';
import { connectToMongoDB } from "./db/mongodb"
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

dotenv.config();

app.use('/users', userRouter);

connectToMongoDB();

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});