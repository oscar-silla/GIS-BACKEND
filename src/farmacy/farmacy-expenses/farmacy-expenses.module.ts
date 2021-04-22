import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmacyExpensesController } from './farmacy-expenses.controller';
import { FarmacyExpensesSchema } from './farmacy-expenses.schema';
import { FarmacyExpensesService } from './farmacy-expenses.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'FARMACY_EXPENSES',
        schema: FarmacyExpensesSchema
    }])],
    controllers: [FarmacyExpensesController],
    providers: [FarmacyExpensesService]
})
export class FarmacyExpensesModule {}
