import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { DoctorDTO } from './doctor.DTO';
import { DoctorService } from './doctor.service';

@Controller('doctors')
export class DoctorController {

    constructor(private doctorService: DoctorService) {}

    // GET ALL DOCTORS
    @Get()
    getAllDoctors() : Promise<Return> {
        return this.doctorService.getDoctors();
    }

    // GET DOCTOR
    @Get('/:id')
    getDoctor(@Param('id') id: string) : Promise<Return> {
        return this.doctorService.getDoctor(id);
    }

    // POST DOCTOR
    @Post('/create')
    postDoctor(@Body() detailDoctor : DoctorDTO) : Promise<Return> {
        return this.doctorService.postDoctor(detailDoctor);
    }

    // PUT DOCTOR
    @Put('/update/:id')
    putDoctor(@Body() detailDoctor : DoctorDTO, @Param('id') id: string) : Promise<Return> {
        return this.doctorService.putDoctor(id, detailDoctor);
    }

    // Delete DOCTOR
    @Delete('/delete/:id')
    deleteDoctor(@Param('id') id : string) : Promise<Return> {
        return this.doctorService.deleteDoctor(id);
    }
}
