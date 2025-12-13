import mongoose, { Document, Schema } from 'mongoose';

export interface IExpense extends Document {
  description: string;
  amount: number;
  category: string;
  date: Date;
}

const ExpenseSchema: Schema = new Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Expense = mongoose.model<IExpense>('Expense', ExpenseSchema);

export default Expense;
