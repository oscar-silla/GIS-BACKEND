import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanceExpensesController } from './finance-expenses.controller';
import { FinanceExpensesSchema } from './finance-expenses.schema';
import { FinanceExpensesService } from './finance-expenses.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'FINANCE_EXPENSES',
        schema: FinanceExpensesSchema
    }])],
    controllers: [FinanceExpensesController],
    providers: [FinanceExpensesService]
})
export class FinanceExpensesModule { }
