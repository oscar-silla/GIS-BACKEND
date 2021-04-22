import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { CiteModule } from './cite/cite.module';
import { NurseModule } from './rrhh/nurse/nurse.module';
import { PharmacistModule } from './rrhh/pharmacist/pharmacist.module';
import { LabWorkerModule } from './rrhh/lab-worker/lab-worker.module';
import { TechnicianModule } from './rrhh/technician/technician.module';
import { RecepcionistModule } from './rrhh/recepcionist/recepcionist.module';
import { FinanceExpensesModule } from './finance/finance-expenses/finance-expenses.module';
import { LabReportsModule } from './laboratory/lab-reports/lab-reports.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { MedicinesModule } from './medicine/medicines/medicines.module';
import { CategoryModule } from './medicine/category/category.module';
import { FarmaciesModule } from './farmacy/farmacies/farmacies.module';
import { FarmacyExpensesModule } from './farmacy/farmacy-expenses/farmacy-expenses.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/clinica'),
    PatientModule,
    DoctorModule,
    CiteModule,
    NurseModule,
    PharmacistModule,
    LabWorkerModule,
    TechnicianModule,
    RecepcionistModule,
    FinanceExpensesModule,
    LabReportsModule,
    PrescriptionModule,
    MedicinesModule,
    CategoryModule,
    FarmaciesModule,
    FarmacyExpensesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
