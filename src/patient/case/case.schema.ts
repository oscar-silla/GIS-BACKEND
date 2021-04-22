import * as mongoose from "mongoose";

export const CaseSchema = new mongoose.Schema({
    id_case: Number,
    id_patient: String,
    date: Date,
    title: String,
    case: String
});