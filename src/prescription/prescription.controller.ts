import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { PrescriptionDTO } from './prescription.DTO';
import { PrescriptionService } from './prescription.service';

@Controller('prescriptions')
export class PrescriptionController {

    constructor(private prescriptionService: PrescriptionService) {}

    // GET ALL PRESCRIPTIONS
    @Get()
    getAllPrescriptions(): Promise<Return> {
        return this.prescriptionService.getAllPrescriptions();
    }

    // GET PRESCRIPTION
    @Get('/:id')
    getPrescription(@Param('id') id: string): Promise<Return> {
        return this.prescriptionService.getPrescription(id);
    }

    // POST PRESCRIPTION
    @Post('/create')
    postPrescription(@Body() DTO: PrescriptionDTO): Promise<Return> {
        return this.prescriptionService.postPrescription(DTO);
    }

    // PUT PRESCRIPTION
    @Put('/update/:id')
    putPrescription(@Body() DTO: PrescriptionDTO, @Param('id') id: string): Promise<Return> {
        return this.prescriptionService.putPrescription(id, DTO);
    }

    // DELETE PRESCRIPTION
    @Delete('/delete/:id')
    deletePrescription(@Param('id') id: string): Promise<Return> {
        return this.prescriptionService.deletePrescription(id);
    }
}
