import * as mongoose from 'mongoose';

export const RecepcionistSchema = new mongoose.Schema({
    id_recepcionist: Number,
    name: String,
    email: String,
    password: String,
    address: String,
    phone: Number,
    image: String
});