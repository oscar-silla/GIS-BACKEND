import {Document} from 'mongoose';

export interface FarmacyExpenses extends Document {
    readonly id?: number;
    readonly id_farmacyExpense: number;
    readonly nameFarmacy: string;
    readonly nameMedicine: string;
    readonly quantity: number;
    readonly price: number;
}