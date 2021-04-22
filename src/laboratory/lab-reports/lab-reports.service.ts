import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { LabReports } from './lab-reports';
import { LabReportsDTO } from './lab-reports.DTO';

@Injectable()
export class LabReportsService {

    constructor(@InjectModel('LAB-REPORTS') private labReportsModel : Model<LabReports>) {}

    // GET ALL LAB REPORTS
    async getAllLabReports() : Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.labReportsModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All lab reports',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET LABORATORY REPORT
    async getLabReport(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.labReportsModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Lab report with id: ${id} has been found successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Lab report with id: ${id} can't be found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST LABORATORY REPORT
    async postLabReport(DTO: LabReportsDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            const labReport = new this.labReportsModel(DTO);
            labReport.save().then(result => {
                resolve({
                    status: 'OK',
                    msg: `Lab report has been created successfully!`,
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // PUT LABORATORY REPORT
    async putLabReport(id: string, DTO: LabReportsDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if(id.match(/^[0-9a-fA-F]{24}$/)) {
                this.labReportsModel.findByIdAndUpdate(id, DTO, {new: true}).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Lab report has been updated successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Lab report with id: ${id} can't be found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE LABORATORY REPORT
    async deleteLabReport(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if(id.match(/^[0-9a-fA-F]{24}$/)) {
                this.labReportsModel.findByIdAndDelete(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Lab report has been deleted successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Lab report with id: ${id} can't be found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
