import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicinesController } from './medicines.controller';
import { MedicineSchema } from './medicines.schema';
import { MedicinesService } from './medicines.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'MEDICINES',
        schema: MedicineSchema
    }])],
    controllers: [MedicinesController],
    providers: [MedicinesService]
})
export class MedicinesModule {}
