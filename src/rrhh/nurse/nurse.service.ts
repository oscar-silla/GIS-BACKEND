import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { Nurse } from './nurse';
import { NurseDTO } from './nurse.DTO';

@Injectable()
export class NurseService {

    constructor(@InjectModel('NURSE') private nurseModel: Model<Nurse>) { }

    // GET ALL NURSES
    async getAllNurses(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.nurseModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All nurses',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET NURSE
    async getNurse(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.nurseModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Nurse',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'OK',
                    msg: 'Nurse',
                    data: `Nurse ${id} doesn't exists!`,
                    code: 200,
                    validated: true
                });
            }
        });
        return promise;
    }

    // POST NURSE
    async postNurse(nurseDetail: NurseDTO): Promise<Return> {
        const exists = await this.nurseModel.exists({ email: nurseDetail.email });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                resolve({
                    status: 'OK',
                    msg: 'This nurse already exists!',
                    data: undefined,
                    code: 200,
                    validated: true
                });
            } else {
                const nurse = new this.nurseModel(nurseDetail);
                nurse.save().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Nurse created successfully!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            }
        });
        return promise;
    }

    // PUT NURSE
    async putNurse(id: string, nurseDetail: NurseDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.nurseModel.findByIdAndUpdate(id, nurseDetail, { new: true }).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Nurse has been updated successfully!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'OK',
                    msg: 'Nurse',
                    data: `Nurse ${id} don't exists!`,
                    code: 200,
                    validated: true
                });
            }
        });
        return promise;
    }

    // DELETE NURSE
    async deleteNurse(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.nurseModel.findByIdAndDelete(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Nurse has been deleted successfully!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'OK',
                    msg: 'Nurse',
                    data: `Nurse ${id} don't exists!`,
                    code: 200,
                    validated: true
                });
            }
        });
        return promise;
    }
}
