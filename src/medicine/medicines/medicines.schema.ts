import * as mongoose from 'mongoose';

export const MedicineSchema = new mongoose.Schema({
    id_medicine: Number,
    id_farmacy: String,
    name: String,
    description: String,
    stock: Number,
    category: String,
    price: Number,
    image: String,
    expirationDate: Date
});