import { Document } from 'mongoose';

export interface Patient extends Document {
    readonly id?: string;
    readonly id_patient: number;
    readonly name: string;
    readonly surnames: string;
    readonly email: string;
    readonly address: string;
    readonly phone: number;
    readonly sex: string;
    readonly born: Date;
    readonly blood_type: string;
    readonly doctor: string;
    readonly image: string;
}