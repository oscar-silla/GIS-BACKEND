import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { TechnicianDTO } from './technician.DTO';
import { TechnicianService } from './technician.service';

@Controller('technicians')
export class TechnicianController {

    constructor(private technicianService: TechnicianService) { }

    @Get()
    getAllTechnicians(): Promise<Return> {
        return this.technicianService.getAllTechnicians();
    }

    @Get('/:id')
    getTechnician(@Param('id') id: string): Promise<Return> {
        return this.technicianService.getTechnician(id);
    }

    @Post('/create')
    postTechnician(@Body() DTO: TechnicianDTO): Promise<Return> {
        return this.technicianService.postTechnician(DTO);
    }

    @Put('/update/:id')
    putTechnician(@Body() DTO: TechnicianDTO, @Param('id') id: string): Promise<Return> {
        return this.technicianService.putTechnician(id, DTO);
    }

    @Delete('/delete/:id')
    deleteTechnician(@Param('id') id: string): Promise<Return> {
        return this.technicianService.deleteTechnician(id);
    }
}
