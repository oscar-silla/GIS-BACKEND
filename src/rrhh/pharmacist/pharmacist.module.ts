import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { PharmacistController } from './pharmacist.controller';
import { PharmacistSchema } from './pharmacist.schema';
import { PharmacistService } from './pharmacist.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'PHARMACIST',
        schema: PharmacistSchema
    }])],
    controllers: [PharmacistController],
    providers: [PharmacistService]
})
export class PharmacistModule {}
