import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { PatientDTO } from './patient.DTO';
import { PatientService } from './patient.service';

@Controller('patients')
export class PatientController {

    constructor(private patientsService: PatientService) { }

    // Get Patients
    @Get()
    getPatients(): Promise<Return> {
        return this.patientsService.getPatients();
    }

    // Get Patient
    @Get('/:id')
    getPatient(@Param('id') id: string): Promise<Return> {
        return this.patientsService.getPatient(id);
    }

    // Post Patient
    @Post('/create')
    postPatient(@Body() detailPatient: PatientDTO): Promise<Return> {
        return this.patientsService.postPatient(detailPatient);
    }

    // Put patiend
    @Put('/update/:id')
    putPatient(@Body() detailPatiend: PatientDTO, @Param('id') id: string): Promise<Return> {
        return this.patientsService.putPatient(id, detailPatiend)
    }

    @Delete('/delete/:id')
    deletePatient(@Param('id') id: string): Promise<Return> {
        return this.patientsService.deletePatient(id);
    }
}
