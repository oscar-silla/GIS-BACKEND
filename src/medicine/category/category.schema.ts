import * as mongoose from 'mongoose';

export const MedicineCategorySchema = new mongoose.Schema({
    id_category: Number,
    name: String,
    description: String
});