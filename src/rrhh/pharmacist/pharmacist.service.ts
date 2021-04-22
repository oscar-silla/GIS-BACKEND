import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { Pharmacist } from './pharmacist';
import { PharmacistDTO } from './pharmacist.DTO';

@Injectable()
export class PharmacistService {

    constructor(@InjectModel('PHARMACIST') private pharmacistModel: Model<Pharmacist>) { }

    // GET ALL PHARMACISTS
    async getAllPharmacists(): Promise<Return> {
        const promise = new Promise<Return>((resolve, resject) => {
            this.pharmacistModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All pharmacists',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET PHARMACIST
    async getPharmacist(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.pharmacistModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Pharmacist',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Pharmacist ${id} doesn't found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST PHARMACIST
    async postPharmacist(DTO: PharmacistDTO): Promise<Return> {
        const exists = await this.pharmacistModel.exists({ email: DTO.email });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                resolve({
                    status: 'WARNING',
                    msg: 'This pharmacist already exists!',
                    data: undefined,
                    code: 200,
                    validated: false
                });
            } else {
                const pharmacist = new this.pharmacistModel(DTO);
                pharmacist.save().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Pharmacist has been created successfully!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            }
        });
        return promise;
    }

    // PUT PHARMACIST
    async putPharmacist(id: string, DTO: PharmacistDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.pharmacistModel.findByIdAndUpdate(id, DTO, { new: true }).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Pharmacist has been updated successfully!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Pharmacist ${id} doesn't found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE PHARMACIST
    async deletePharmacist(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.pharmacistModel.findByIdAndDelete(id).then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Pharmacist has been deleted successfully!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Pharmacist ${id} doesn't found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
