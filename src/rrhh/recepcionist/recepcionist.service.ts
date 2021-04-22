import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { Recepcionist } from './recepcionist';
import { RecepcionistDTO } from './recepcionist.DTO';

@Injectable()
export class RecepcionistService {

    constructor(@InjectModel('RECEPCIONIST') private recepcionistModel: Model<Recepcionist>) { }

    // GET ALL RECEPCIONISTS
    async getAllRecepcionist(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.recepcionistModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All recepcionists',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET RECEPCIONIST
    async getRecepcionist(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.recepcionistModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Recepcionist with id: ${id} has been founded!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Recepcionist with id: ${id} doesn't exists!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST RECEPCIONIST
    async postRecepcionist(DTO: RecepcionistDTO): Promise<Return> {
        const exists = await this.recepcionistModel.exists({email: DTO.email});
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                resolve({
                    status: 'ERROR',
                    msg: `Recepcionist already exists!`,
                    data: undefined,
                    code: 500,
                    validated: false
                });
            } else {
                const recepcionist = new this.recepcionistModel(DTO);
                recepcionist.save().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Recepcionist has been created!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            }
        });
        return promise;
    }

    // PUT RECEPCIONIST
    async putRecepcionist(id: string, DTO: RecepcionistDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.recepcionistModel.findByIdAndUpdate(id, DTO, {new: true}).then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Recepcionist has been updated!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Recepcionist with id: ${id} doesn't exists!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE RECEPCIONIST
    async deleteRecepcionist(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.recepcionistModel.findByIdAndDelete(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Recepcionist has been deleted!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Recepcionist with id: ${id} doesn't exists!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
