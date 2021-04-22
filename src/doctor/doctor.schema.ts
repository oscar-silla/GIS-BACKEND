import * as mongoose from 'mongoose';

export const DoctorSchema = new mongoose.Schema({
    id_doctor: Number,
    name: String,
    surnames: String,
    email: String,
    password: String,
    address: String,
    image: String,
    phone: Number,
    occupation: String,
});