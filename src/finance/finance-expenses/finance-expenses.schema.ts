import * as mongoose from 'mongoose';

export const FinanceExpensesSchema = new mongoose.Schema({
    id_financeExpense: Number,
    product: String,
    quantity: Number,
    date: Date
});