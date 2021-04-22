import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { NurseController } from './nurse.controller';
import { NurseSchema } from './nurse.schema';
import { NurseService } from './nurse.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'NURSE',
        schema: NurseSchema
    }])],
    controllers: [NurseController],
    providers: [NurseService]
})
export class NurseModule {}
