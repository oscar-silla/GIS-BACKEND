import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicineCategory } from './category'
import { Return } from 'src/assets/return.interface';
import { MedicineCategoryDTO } from './category.DTO';

@Injectable()
export class MedicineCategoryService {

    constructor(@InjectModel('MEDICINE_CATEGORY') private categoryModel: Model<MedicineCategory>) { }

    // GET ALL CATEGORIES
    async getAllCategories(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.categoryModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All medicine categories',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET CATEGORY
    async getCategory(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.categoryModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Category with id: ${id} has been found successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Category with id: ${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST CATEGORY
    async postCategory(DTO: MedicineCategoryDTO): Promise<Return> {
        const exists = await this.categoryModel.exists({ name: DTO.name });
        const promise = new Promise<Return>((resolve, reject) => {
            if (exists) {
                resolve({
                    status: 'ERROR',
                    msg: `This category already exists!`,
                    data: undefined,
                    code: 500,
                    validated: false
                });
            } else {
                const medicineCategory = new this.categoryModel(DTO);
                medicineCategory.save().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Category has been created successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            }
        });
        return promise;
    }

    // PUT CATEGORY
    async putCategory(id: string, DTO: MedicineCategoryDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.categoryModel.findByIdAndUpdate(id, DTO, { new: true }).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Category with id: ${id} has been updated successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Category with id: ${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE CATEGORY
    async deleteCategory(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.categoryModel.findByIdAndDelete(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Category with id: ${id} has been updated successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Category with id: ${id} has not been found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
