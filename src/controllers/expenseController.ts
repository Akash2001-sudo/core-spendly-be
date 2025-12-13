import { Request, Response } from 'express';
import Expense, { IExpense } from '../models/Expense';

// @desc    Get all expenses
// @route   GET /api/expenses
// @access  Public
export const getExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// @desc    Create an expense
// @route   POST /api/expenses
// @access  Public
export const createExpense = async (req: Request, res: Response) => {
  const { description, amount, category, date } = req.body;

  const newExpense: IExpense = new Expense({
    description,
    amount,
    category,
    date,
  });

  try {
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// @desc    Get a single expense
// @route   GET /api/expenses/:id
// @access  Public
export const getExpenseById = async (req: Request, res: Response) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (expense) {
      res.status(200).json(expense);
    } else {
      res.status(404).json({ message: 'Expense not found' });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// @desc    Update an expense
// @route   PUT /api/expenses/:id
// @access  Public
export const updateExpense = async (req: Request, res: Response) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (expense) {
      expense.description = req.body.description || expense.description;
      expense.amount = req.body.amount || expense.amount;
      expense.category = req.body.category || expense.category;
      expense.date = req.body.date || expense.date;

      const updatedExpense = await expense.save();
      res.status(200).json(updatedExpense);
    } else {
      res.status(404).json({ message: 'Expense not found' });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// @desc    Delete an expense
// @route   DELETE /api/expenses/:id
// @access  Public
export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (expense) {
      res.status(200).json({ message: 'Expense removed' });
    } else {
      res.status(404).json({ message: 'Expense not found' });
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
