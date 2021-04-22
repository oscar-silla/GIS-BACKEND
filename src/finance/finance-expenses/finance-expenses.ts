import { Document } from 'mongoose';

export interface FinanceExpenses extends Document {
    readonly id?: string;
    readonly id_financeExpense: number;
    readonly product: string;
    readonly quantity: number;
    readonly date: Date;
}