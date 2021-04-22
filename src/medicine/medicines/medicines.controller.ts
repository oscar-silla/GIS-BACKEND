import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { MedicinesDTO } from './medicines.DTO';
import { MedicinesService } from './medicines.service';

@Controller('medicines')
export class MedicinesController {

    constructor(private medicineService: MedicinesService) { }

    // GET ALL MEDICINES
    @Get()
    getAllMedicines(): Promise<Return> {
        return this.medicineService.getAllMedicines();
    }

    // GET MEDICINE
    @Get('/:id')
    getMedicine(@Param('id') id: string): Promise<Return> {
        return this.medicineService.getMedicine(id);
    }

    // POST MEDICINE
    @Post('/create')
    postMedicine(@Body() DTO: MedicinesDTO): Promise<Return> {
        return this.medicineService.postMedicine(DTO);
    }

    // PUT MEDICINE
    @Put('/update/:id')
    putMedicine(@Body() DTO: MedicinesDTO, @Param('id') id: string): Promise<Return> {
        return this.medicineService.putMedicine(id, DTO);
    }

    // DELETE MEDICINE
    @Delete('/delete/:id')
    deleteMedicine(@Param('id') id:string): Promise<Return> {
        return this.medicineService.deleteMedicine(id);
    }
}
