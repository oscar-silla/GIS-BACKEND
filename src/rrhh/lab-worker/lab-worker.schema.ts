import * as mongoose from 'mongoose';

export const LabWorkerSchema = new mongoose.Schema({
    id_labWorker: Number,
    name: String,
    email: String,
    password: String,
    address: String,
    phone: Number,
    image: String,
});