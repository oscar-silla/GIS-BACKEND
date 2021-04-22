import * as mongoose from 'mongoose';

export const FarmacyExpensesSchema = new mongoose.Schema({
    id_farmacyExpense: Number,
    nameFarmacy: String,
    nameMedicine: String,
    quantity: Number,
    price: Number
});