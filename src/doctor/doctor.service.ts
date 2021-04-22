import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { Doctor } from './doctor';
import { DoctorDTO } from './doctor.DTO';

@Injectable()
export class DoctorService {

    constructor(@InjectModel('DOCTOR') private doctorModel: Model<Doctor>) { }

    // Get all Doctors
    async getDoctors(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.doctorModel.find().exec().then(result => {
                {
                    resolve({
                        status: 'Ok',
                        msg: 'All doctors!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                }
            });
        });
        return promise;
    }

    // Get Doctor
    async getDoctor(id: string): Promise<Return> {
        const exists = await this.doctorModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.doctorModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'Ok',
                        msg: 'Doctor was found!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'Error',
                    msg: "Doctor wasn't found!",
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // Post Doctor
    async postDoctor(doctorDetail: DoctorDTO): Promise<Return> {
        const exists = await this.doctorModel.exists({ email: doctorDetail.email });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                resolve({
                    status: 'Warning',
                    msg: 'Doctor already exists!',
                    data: undefined,
                    code: 400,
                    validated: false
                });
            } else {
                const doctor = new this.doctorModel(doctorDetail);
                doctor.save().then(result => {
                    resolve({
                        status: 'Ok',
                        msg: 'Doctor has been created!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            }
        });
        return promise;
    }

    // Put Doctor
    async putDoctor(id: string, doctorDetail: DoctorDTO): Promise<Return> {
        const exists = await this.doctorModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.doctorModel.findByIdAndUpdate(id, doctorDetail, { new: true }).then(result => {
                    resolve({
                        status: 'Ok',
                        msg: 'Doctor has been updated!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'Error',
                    msg: "Doctor wasn't found!",
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // Delete Doctor
    async deleteDoctor(id: string): Promise<Return> {
        const exists = await this.doctorModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.doctorModel.findByIdAndDelete(id).then(result => {
                    resolve({
                        status: 'Ok',
                        msg: 'Doctor has been deleted!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'Error',
                    msg: "Doctor wasn't found!",
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
