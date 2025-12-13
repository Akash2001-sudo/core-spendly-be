import express, { Express } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import expenseRoutes from './routes/expenseRoutes';
import { notFound, errorHandler } from './middleware/errorMiddleware';

dotenv.config();

connectDB();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/expenses', expenseRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
