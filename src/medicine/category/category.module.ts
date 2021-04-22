import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicineCategoryController } from './category.controller';
import { MedicineCategorySchema } from './category.schema';
import { MedicineCategoryService } from './category.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'MEDICINE_CATEGORY',
        schema: MedicineCategorySchema
    }])],
    controllers: [MedicineCategoryController],
    providers: [MedicineCategoryService]
})
export class CategoryModule {}
