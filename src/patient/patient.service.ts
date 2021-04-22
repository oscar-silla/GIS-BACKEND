import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';

import { Patient } from './patient';
import { PatientDTO } from './patient.DTO';

@Injectable()
export class PatientService {

    constructor(@InjectModel("PATIENT") private patientModel: Model<Patient>) { }

    // Get All Patients
    async getPatients(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.patientModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'Ok',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // Get Patient
    async getPatient(id: string): Promise<Return> {
        const exists = await this.patientModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.patientModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Ok',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: 'Patient not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }


    // Post Patient
    async postPatient(detailPatient: PatientDTO): Promise<Return> {
        const exists = await this.patientModel.exists({ email: detailPatient.email });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                resolve({
                    status: 'WARNING',
                    msg: 'The patient already exists!',
                    data: undefined,
                    code: 400,
                    validated: false
                });
            } else {
                const patient = new this.patientModel(detailPatient);
                patient.save().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'The patient has been created!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            }
        });
        return promise;
    }

    // Put Patient
    async putPatient(id: string, detailPatient: PatientDTO): Promise<Return> {
        const exists = await this.patientModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.patientModel.findByIdAndUpdate(id, detailPatient, {new: true}).then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'The patient has been updated!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: 'Patient not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // Delete Patient
    async deletePatient(id: string): Promise<Return> {
        const exists = await this.patientModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.patientModel.findByIdAndDelete(id).then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'The patient has been deleted!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                })
            } else {
                resolve({
                    status: 'ERROR',
                    msg: 'Patient not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
