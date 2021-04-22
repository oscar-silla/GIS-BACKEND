import * as mongoose from 'mongoose';

export const PrescriptionSchema = new mongoose.Schema({
    id_prescription: Number,
    id_patient: String,
    id_doctor: String,
    date: Date,
    history:String
});