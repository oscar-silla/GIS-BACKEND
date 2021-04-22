import {Document} from 'mongoose';

export interface MedicineCategory extends Document {
    readonly id?: string;
    readonly id_category: number;
    readonly name: string;
    readonly description: string;
}