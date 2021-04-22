import * as mongoose from 'mongoose';

export const NurseSchema = new mongoose.Schema({
    id_nurse: Number,
    name: String,
    email: String,
    password: String,
    address: String,
    phone: Number,
    image: String
});