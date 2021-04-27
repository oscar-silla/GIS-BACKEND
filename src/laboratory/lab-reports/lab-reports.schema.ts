import * as mongoose from 'mongoose';

export const LabReportsSchema = new mongoose.Schema({
    id_labReport: Number,
    date: Date,
    id_patient: String,
    id_doctor: String,
    report: String
})