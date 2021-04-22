import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { iDocument } from './document';
import { DocumentDTO } from './document.DTO';

@Injectable()
export class DocumentService {

    constructor(@InjectModel('DOCUMENT') private documentModel: Model<iDocument>) { }

    // GET ALL DOCUMENTS
    async getAllDocuments(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.documentModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All documents!',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise
    }

    // GET DOCUMENT
    async getDocument(id: string): Promise<Return> {
        const exists = await this.documentModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.documentModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Document has been found!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: 'ID document not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST DOCUMENT
    async postDocument(detailDocument: DocumentDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            const document = new this.documentModel(detailDocument);
            document.save().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'Document has been created!',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }


    // PUT DOCUMENT
    async putDocument(id: string, detailDocument: DocumentDTO): Promise<Return> {
        const exists = await this.documentModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.documentModel.findByIdAndUpdate(id, detailDocument, { new: true }).then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Document has been updated!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: 'ID document not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE DOCUMENT
    async deleteDocument(id: string): Promise<Return> {
        const exists = await this.documentModel.exists({ _id: id });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                this.documentModel.findByIdAndDelete(id).then(result => {
                    resolve({
                        status: 'OK',
                        msg: 'Document has been deleted!',
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: 'ID document not found!',
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

}
