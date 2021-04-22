import * as mongoose from 'mongoose';

export const TechnicianSchema = new mongoose.Schema({
    id_technician: Number,
    name: String,
    email: String,
    password: String,
    address: String,
    phone: Number,
    image: String
});