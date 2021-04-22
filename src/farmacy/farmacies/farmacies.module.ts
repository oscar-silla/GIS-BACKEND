import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmaciesController } from './farmacies.controller';
import { FarmacySchema } from './farmacies.schema';
import { FarmaciesService } from './farmacies.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'FARMACY',
        schema: FarmacySchema
    }])],
    controllers: [FarmaciesController],
    providers: [FarmaciesService]
})
export class FarmaciesModule {}
