import * as mongoose from 'mongoose';

export const PatientSchema = new mongoose.Schema({
     id_patient: Number,
     name: String,
     surnames: String,
     email: String,
     address: String,
     phone: Number,
     sex: String,
     born: Date,
     blood_type: String,
     doctor: String,
     image: String,
})