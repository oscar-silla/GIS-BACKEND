import {Document} from 'mongoose';

export interface LabReports extends Document {
    readonly id?: string;
    readonly id_labReport: number;
    readonly date: Date;
    readonly patient: string;
    readonly doctor: string;
    readonly report: string;
}