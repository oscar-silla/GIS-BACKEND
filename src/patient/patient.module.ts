import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientController } from './patient.controller';
import { PatientSchema } from './patient.schema';
import { PatientService } from './patient.service';
import { CaseModule } from './case/case.module';
import { DocumentModule } from './document/document.module';

@Module({
    imports:[MongooseModule.forFeature([{
        name: "PATIENT",
        schema: PatientSchema
    }]), CaseModule, DocumentModule],
    controllers: [PatientController],
    providers:[PatientService]
})
export class PatientModule {}
