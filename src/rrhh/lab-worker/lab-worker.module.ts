import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { LabWorkerController } from './lab-worker.controller';
import { LabWorkerSchema } from './lab-worker.schema';
import { LabWorkerService } from './lab-worker.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'LABWORKER',
        schema: LabWorkerSchema
    }])],
    controllers: [LabWorkerController],
    providers: [LabWorkerService]
})
export class LabWorkerModule {}
