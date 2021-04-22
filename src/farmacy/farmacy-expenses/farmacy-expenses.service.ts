import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { FarmacyExpenses } from './farmacy-expenses';
import { FarmacyExpensesDTO } from './farmacy-expenses.DTO';

@Injectable()
export class FarmacyExpensesService {

    constructor(@InjectModel('FARMACY_EXPENSES') private fExpensesModel: Model<FarmacyExpenses>) { }

    // GET ALL FARMACY EXPENSES
    async getAllFarmacies(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.fExpensesModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All farmacy expenses',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET FARMACY ESPENSES
    async getFarmacyExpense(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.fExpensesModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Farmacy expense with id: ${id} has been found successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'OK',
                    msg: `Farmacy expense with id: ${id} has been not found!`,
                    data: undefined,
                    code: 200,
                    validated: true
                });
            }
        });
        return promise;
    }

    // POST FARMACY ESPENSES
    postFarmacyExpense(DTO: FarmacyExpensesDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            const farmacyExpense = new this.fExpensesModel(DTO);
            farmacyExpense.save().then(result => {
                resolve({
                    status: 'OK',
                    msg: `Farmacy expense has been created successfully!`,
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // PUT FARMACY ESPENSES
    putFarmacyExpense(id: string, DTO: FarmacyExpensesDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.fExpensesModel.findByIdAndUpdate(id, DTO, { new: true }).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Farmacy expense with id: ${id} has been updated successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'OK',
                    msg: `Farmacy expense with id: ${id} has been not found!`,
                    data: undefined,
                    code: 200,
                    validated: true
                });
            }
        });
        return promise;
    }

    // DELETE FARMACY ESPENSES
    async deleteFarmacyExpense(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.fExpensesModel.findByIdAndDelete(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Farmacy expense with id: ${id} has been deleted successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'OK',
                    msg: `Farmacy expense with id: ${id} has been not found!`,
                    data: undefined,
                    code: 200,
                    validated: true
                });
            }
        });
        return promise;
    }
}
