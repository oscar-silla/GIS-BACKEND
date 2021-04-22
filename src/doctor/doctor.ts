import { Document } from 'mongoose';
export interface Doctor extends Document{
    readonly id?: string;
    readonly id_doctor: number;
    readonly name: string;
    readonly surnames: string;
    readonly email: string;
    readonly password: string;
    readonly address: string;
    readonly image: string;
    readonly phone: number;
    readonly occupation: string;
}