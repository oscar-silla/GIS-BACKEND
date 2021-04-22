import { Document } from 'mongoose';

export interface Farmacy extends Document {
    readonly id?: string
    readonly id_farmacy: number;
    readonly name: string;
    readonly address: string;
    readonly phone: number;
}