import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { Cite } from './cite';
import { CiteDTO } from './cite.DTO';

@Injectable()
export class CiteService {

    constructor(@InjectModel('CITE') private citeModel: Model<Cite>) { }

    // GET ALL CITES
    async getAllCites(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.citeModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All cites!',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET CITE
    async getCite(id: string): Promise<Return> {
        const exists = await this.citeModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.citeModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Cite has been found!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: 'Cite not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST CITE
    async postCite(detailCite: CiteDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            const cite = new this.citeModel(detailCite);
            cite.save().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'Cite has been created!',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // PUT CITE
    async putCite(id: string, detailCite: CiteDTO): Promise<Return> {
        const exists = await this.citeModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.citeModel.findByIdAndUpdate(id, detailCite, { new: true }).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Cite has been updated!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: 'Cite not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE CITE
    async deleteCite(id: string): Promise<Return> {
        const exists = await this.citeModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.citeModel.findByIdAndDelete(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Cite has been deleted!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: 'Cite not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
