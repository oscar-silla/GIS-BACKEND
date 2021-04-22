import { Document } from 'mongoose';

export interface LabWorker extends Document {
    readonly id?: string;
    readonly id_labWorker: number;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly address: string;
    readonly phone: number;
    readonly image: string;
}