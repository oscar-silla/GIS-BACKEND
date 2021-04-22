import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { Technician } from './technician';
import { TechnicianDTO } from './technician.DTO';

@Injectable()
export class TechnicianService {

    constructor(@InjectModel('TECHNICIAN') private techModel: Model<Technician>) { }

    // GET ALL TECHNICIANS
    async getAllTechnicians(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.techModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All technicians!',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET TECHNICIAN
    async getTechnician(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.techModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Technician with id: ${id} has been found successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Technician with id: ${id} doesn't exists!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST TECHNICIAN
    async postTechnician(DTO: TechnicianDTO): Promise<Return> {
        const exists = await this.techModel.exists({ email: DTO.email });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                resolve({
                    status: 'ERROR',
                    msg: `Technician already exists!`,
                    data: undefined,
                    code: 500,
                    validated: false
                });
            } else {
                const technician = new this.techModel(DTO);
                technician.save().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Technician has been created successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            }
        });
        return promise;
    }

    // PUT TECHNICIAN
    async putTechnician(id: string, DTO: TechnicianDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.techModel.findByIdAndUpdate(id, DTO, {new: true}).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Technician has been updated successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Technician with id: ${id} doesn't exists!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE TECHNICIAN
    async deleteTechnician(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.techModel.findByIdAndDelete(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Technician has been deleted successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Technician with id: ${id} doesn't exists!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
