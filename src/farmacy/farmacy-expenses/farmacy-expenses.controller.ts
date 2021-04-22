import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { FarmacyExpensesDTO } from './farmacy-expenses.DTO';
import { FarmacyExpensesService } from './farmacy-expenses.service';

@Controller('farmacy/expenses')
export class FarmacyExpensesController {

    constructor(private farmacyExpenseService : FarmacyExpensesService) {}
    
    // GET ALL FARMACY EXPENSES
    @Get()
    getAllFarmacyExpenses():Promise<Return> {
        return this.farmacyExpenseService.getAllFarmacies();
    }

    // GET FARMACY EXPENSE
    @Get('/:id')
    getFarmacyExpense(@Param('id') id: string):Promise<Return> {
        return this.farmacyExpenseService.getFarmacyExpense(id);
    }

    // POST FARMACY EXPENSE
    @Post('/create')
    postFarmacyExpense(@Body() DTO: FarmacyExpensesDTO): Promise<Return> {
        return this.farmacyExpenseService.postFarmacyExpense(DTO);
    }

    // PUT FARMACY EXPENSE
    @Put('/update/:id')
    putFarmacyExpense(@Body() DTO: FarmacyExpensesDTO, @Param('id') id: string): Promise<Return> {
        return this.farmacyExpenseService.putFarmacyExpense(id, DTO);
    }

    // DELETE FARMACY EXPENSE
    @Delete('/delete/:id')
    deleteFarmacyExpense(@Param('id') id: string): Promise<Return> {
        return this.farmacyExpenseService.deleteFarmacyExpense(id);
    }
}
