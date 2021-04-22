import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { NurseDTO } from './nurse.DTO';
import { NurseService } from './nurse.service';

@Controller('nurses')
export class NurseController {

    constructor(private nurseService : NurseService) {}

    // GET ALL NURSES
    @Get()
    getAllNurses() : Promise<Return> {
        return this.nurseService.getAllNurses();
    }

    // GET NURSE
    @Get('/:id')
    getNurse(@Param('id') id: string) : Promise<Return> {
        return this.nurseService.getNurse(id);
    }

    // POST NURSE
    @Post('/create')
    postNurse(@Body() nurseDetail : NurseDTO) : Promise<Return> {
        return this.nurseService.postNurse(nurseDetail);
    }

    // PUT NURSE
    @Put('/update/:id')
    putNurse(@Param('id') id: string, @Body() nurseDetail: NurseDTO) : Promise<Return> {
        return this.nurseService.putNurse(id, nurseDetail);
    }

    // DELETE NURSE
    @Delete('/delete/:id')
    deleteNurse(@Param('id') id: string) : Promise<Return> {
        return this.nurseService.deleteNurse(id);
    }
}
