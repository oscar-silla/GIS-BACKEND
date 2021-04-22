import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { Case } from './case';
import { CaseDTO } from './case.DTO';

@Injectable()
export class CaseService {

    constructor(@InjectModel('CASE') private caseModel: Model<Case>) { }

    // GET ALL CASES
    async getAllCases(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.caseModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All cases!',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET CASE
    async getCase(id: string): Promise<Return> {
        const exists = await this.caseModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.caseModel.findById(id).then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Case has been found!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'Error',
                    msg: 'Case not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST CASE
    async postCase(detailCase: CaseDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            const newCase = new this.caseModel(detailCase);
            newCase.save().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'Case has been created!',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // PUT CASE
    async putCase(id: string, detailCase: CaseDTO): Promise<Return> {
        const exists = await this.caseModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.caseModel.findByIdAndUpdate(id, detailCase, { new: true }).then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Case has been updated!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'Error',
                    msg: 'Case not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE CASE
    async deleteCase(id: string): Promise<Return> {
        const exists = await this.caseModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.caseModel.findByIdAndDelete(id).then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Case has been deleted!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'Error',
                    msg: 'Case not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
