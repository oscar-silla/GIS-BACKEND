import {Document} from 'mongoose';

export interface Medicines extends Document {
    readonly id?: string;
    readonly id_medicine: number;
    readonly id_farmacy: string;
    readonly name: string;
    readonly description: string;
    readonly brand: string;
    readonly stock: number;
    readonly category: string;
    readonly price: number;
    readonly image: string;
    readonly expirationDate: Date;
}