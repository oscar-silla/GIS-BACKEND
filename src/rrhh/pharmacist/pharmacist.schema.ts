import * as mongoose from 'mongoose';

export const PharmacistSchema = new mongoose.Schema({
    id_pharmacist: Number,
    name: String,
    email: String,
    password: String,
    address: String,
    phone: Number,
    image: String,
});