import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { LabReportsController } from './lab-reports.controller';
import { LabReportsSchema } from './lab-reports.schema';
import { LabReportsService } from './lab-reports.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'LAB-REPORTS',
        schema: LabReportsSchema
    }])],
    controllers: [LabReportsController],
    providers: [LabReportsService]
})
export class LabReportsModule {}
