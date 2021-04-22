import * as mongoose from 'mongoose';

export const LabReportsSchema = new mongoose.Schema({
    id_labReport: Number,
    date: Date,
    patient: String,
    doctor: String,
    report: String
})