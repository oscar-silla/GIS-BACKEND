import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Return } from 'src/assets/return.interface';
import { FinanceExpenses } from './finance-expenses';
import { FinanceExpensesDTO } from './finance-expenses.DTO';

@Injectable()
export class FinanceExpensesService {

    constructor(@InjectModel('FINANCE_EXPENSES') private financeModel: Model<FinanceExpenses>) { }

    // GET ALL FINANCE EXPENSES
    async getAllFinanceExpenses(): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            this.financeModel.find().exec().then(result => {
                resolve({
                    status: 'OK',
                    msg: 'All finance expenses',
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // GET ONE FINANCE EXPENSES
    async getOneFinanceExpense(id: string): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.financeModel.findById(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Finance expense with id: ${id} has been found successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Finance expense with id: ${id} not found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // POST FINANCE EXPENSES
    async postFinanceExepenses(DTO: FinanceExpensesDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            const financeExpense = new this.financeModel(DTO);
            financeExpense.save().then(result => {
                resolve({
                    status: 'OK',
                    msg: `Finance expense has been created successfully!`,
                    data: result,
                    code: 200,
                    validated: true
                });
            });
        });
        return promise;
    }

    // PUT FINANCE EXPENSES
    async putFinanceExpenses(id: string, DTO: FinanceExpensesDTO): Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.financeModel.findByIdAndUpdate(id, DTO, { new: true }).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Finance expense has been updated successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Finance expense with id: ${id} not found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }

    // DELETE FINANCE EXPENSES
    async deleteFinance(id: string) : Promise<Return> {
        const promise = new Promise<Return>((resolve, reject) => {
            if (id.match(/^[0-9a-fA-F]{24}$/)) {
                this.financeModel.findByIdAndDelete(id).exec().then(result => {
                    resolve({
                        status: 'OK',
                        msg: `Finance expense has been deleted successfully!`,
                        data: result,
                        code: 200,
                        validated: true
                    });
                });
            } else {
                resolve({
                    status: 'ERROR',
                    msg: `Finance expense with id: ${id} not found!`,
                    data: undefined,
                    code: 404,
                    validated: false
                });
            }
        });
        return promise;
    }
}
