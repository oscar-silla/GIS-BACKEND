import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { Farmacy } from './farmacies';
import { FarmacyDTO } from './farmacies.DTO';

@Injectable()
export class FarmaciesService {

    constructor(@InjectModel('FARMACY') private farmacyModel: Model<Farmacy>) { }

    // GET ALL FARMACIES
    async getAllFarmacies(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.farmacyModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All farmacies',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET FARMACY
    async getFarmacy(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.farmacyModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Farmacy with id:${id} has been found successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Farmacy with id:${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST FARMACY
    async postFarmacy(DTO: FarmacyDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            const farmacy = new this.farmacyModel(DTO);
            farmacy.save().then(result => {
                resolve({
                    status: 'OK',
                    msg: `Farmacy has been created successfully!`,
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // PUT FARMACY
    async putFarmacy(id: string, DTO: FarmacyDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.farmacyModel.findByIdAndUpdate(id, DTO, { new: true }).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Farmacy with id:${id} has been updated successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Farmacy with id:${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE FARMACY
    async deleteFarmacy(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.farmacyModel.findByIdAndDelete(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Farmacy with id:${id} has been deleted successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Farmacy with id:${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
