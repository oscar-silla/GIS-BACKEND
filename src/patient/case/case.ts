import { Document } from 'mongoose';

export interface Case extends Document {
    readonly id?: string;
    readonly id_patient: string;
    readonly id_case: number;
    readonly date: Date;
    readonly title: string;
    readonly case: string;
}