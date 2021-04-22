import * as mongoose from 'mongoose';

export const CiteSchema = new mongoose.Schema({
    id_cite: Number,
    id_patient: String,
    id_doctor: String,
    date: Date,
    observations: String,
    status: String
});