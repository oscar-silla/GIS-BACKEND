import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { Medicines } from './medicines';
import { MedicinesDTO } from './medicines.DTO';

@Injectable()
export class MedicinesService {

    constructor(@InjectModel('MEDICINES') private medicinesModel: Model<Medicines>) { }

    // GET ALL MEDICINES
    async getAllMedicines(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.medicinesModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All medicines',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET MEDICINE
    async getMedicine(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.medicinesModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Medicine with id: ${id} has been found successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Medicine with id: ${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST MEDICINE
    async postMedicine(DTO: MedicinesDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            const medicine = new this.medicinesModel(DTO);
            medicine.save().then(result => {
                resolve({
                    status: 'OK',
                    msg: `Medicine has been created successfully!`,
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // PUT MEDICINE 
    async putMedicine(id: string, DTO: MedicinesDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.medicinesModel.findByIdAndUpdate(id, DTO, { new: true }).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Medicine with id: ${id} has been updated successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Medicine with id: ${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE MEDICINE
    async deleteMedicine(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.medicinesModel.findByIdAndDelete(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Medicine with id: ${id} has been deleted successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Medicine with id: ${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
