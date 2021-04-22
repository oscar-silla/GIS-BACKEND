import * as mongoose from 'mongoose';

export const DocumentSchema = new mongoose.Schema({
    id_document: Number,
    id_patient: String,
    title: String,
    file: String,
    date: Date
});