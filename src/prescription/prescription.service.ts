import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { Prescription } from './prescription';
import { PrescriptionDTO } from './prescription.DTO';

@Injectable()
export class PrescriptionService {

    constructor(@InjectModel('PRESCRIPTION') private prescriptionModel: Model<Prescription>) { }

    // GET ALL PRESCRIPTIONS
    async getAllPrescriptions(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.prescriptionModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All prescriptions',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET PRESCRIPTION
    async getPrescription(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.prescriptionModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Prescription with id: ${id} has been found successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Prescription with id: ${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST PRESCRIPTION
    async postPrescription(DTO: PrescriptionDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            const prescription = new this.prescriptionModel(DTO);
            prescription.save().then(result => {
                resolve({
                    status: 'OK',
                    msg: `Prescription has been created successfully!`,
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // PUT PRESCRIPTION
    async putPrescription(id: string, DTO: PrescriptionDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.prescriptionModel.findByIdAndUpdate(id, DTO, { new: true }).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Prescription with id: ${id} has been updated successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Prescription with id: ${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE PRESCRIPTION
    async deletePrescription(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.prescriptionModel.findByIdAndDelete(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Prescription with id: ${id} has been deleted successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Prescription with id: ${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
