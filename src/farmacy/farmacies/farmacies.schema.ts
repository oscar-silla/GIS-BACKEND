import * as mongoose from 'mongoose';

export const FarmacySchema = new mongoose.Schema({
    id_farmacy: Number,
    name: String,
    address: String,
    phone: Number
});