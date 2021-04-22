import {Document} from 'mongoose';

export interface Prescription extends Document {
    readonly id?: string;
    readonly id_prescription: number;
    readonly id_patient: string;
    readonly id_doctor: string;
    readonly date: Date;
    readonly history:string;
}