import { Document } from 'mongoose';

export interface iDocument extends Document {
    readonly id?: string;
    readonly id_document: number;
    readonly id_patient: string;
    readonly title: string;
    readonly file: string;
    readonly date: Date;
}