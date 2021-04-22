import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { LabWorker } from './labWorker';
import { LabWorkerDTO } from './lab-worker.DTO';

@Injectable()
export class LabWorkerService {

    constructor(@InjectModel('LABWORKER') private labWorkerModel: Model<LabWorker>) { }

    // GET ALL LABORATORY WORKERS
    async getAllLabWorkers(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.labWorkerModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All laboratory workers!',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET LABORATORY WORKER
    async getLaboratoryWorker(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.labWorkerModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Laboratory worker with id: ${id} has been found successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Laboratory worker with id: ${id} doesn't exists!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST LABORATORY WORKER
    async postLaboratoryWorker(DTO: LabWorkerDTO): Promise<Return> {
        const exists = await this.labWorkerModel.exists({ email: DTO.email });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                resolve({
                    status: 'ERROR',
                    msg: `Laboratory worker already exists!`,
                    data: undefined,
                    code: 500,
                    validated: false
                });
            } else {
                const labWorker = new this.labWorkerModel(DTO);
                labWorker.save().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Laboratory worker has been created successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            }
        });
        return promise;
    }

    // PUT LABORATORY WORKER
    async putLaboratoryWorker(id: string, DTO: LabWorkerDTO): Promise<Return> {
        console.log(id);
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.labWorkerModel.findByIdAndUpdate(id, DTO, { new: true }).then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Laboratory worker has been updated successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Laboratory worker with id: ${id} doesn't exists!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE LABORATORY WORKER
    async deleteLaboratoryWorker(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.labWorkerModel.findByIdAndDelete(id).then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Laboratory worker has been deleted successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Laboratory worker with id: ${id} doesn't exists!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
