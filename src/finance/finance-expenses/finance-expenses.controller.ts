import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { FinanceExpensesDTO } from './finance-expenses.DTO';
import { FinanceExpensesService } from './finance-expenses.service';

@Controller('finance-expenses')
export class FinanceExpensesController {

    constructor(private financeService: FinanceExpensesService) { }

    // GET ALL FINANCE EXPENSES
    @Get()
    getAllFinanceExpenses(): Promise<Return> {
        return this.financeService.getAllFinanceExpenses();
    }

    // GET ONE FINANCE EXPENSES
    @Get('/:id')
    getOneFinanceExpense(@Param('id') id: string): Promise<Return> {
        return this.financeService.getOneFinanceExpense(id);
    }

    // POST FINANCE EXPENSES
    @Post('/create')
    postFinanceExpense(@Body() DTO: FinanceExpensesDTO): Promise<Return> {
        return this.financeService.postFinanceExepenses(DTO);
    }

    // PUT FINANCE EXPENSES
    @Put('/update/:id')
    putFinanceExpense(@Body() DTO: FinanceExpensesDTO, @Param('id') id: string): Promise<Return> {
        return this.financeService.putFinanceExpenses(id, DTO);
    }

    // DELETE FINANCE EXPENSES
    @Delete('/delete/:id')
    deleteFinanceExpense(@Param('id') id: string): Promise<Return> {
        return this.financeService.deleteFinance(id);
    }
}
