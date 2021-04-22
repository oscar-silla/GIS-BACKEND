import { Document } from 'mongoose';

export interface Technician extends Document {
    readonly id?: string;
    readonly id_technician: number;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly address: string;
    readonly phone: number;
    readonly image: string;
}