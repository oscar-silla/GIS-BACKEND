import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { PharmacistDTO } from './pharmacist.DTO';
import { PharmacistService } from './pharmacist.service';

@Controller('pharmacists')
export class PharmacistController {

    constructor(private pharmacistService: PharmacistService) {}

    // GET ALL PHARMACISTS
    @Get()
    getAllPharmacists() : Promise<Return> {
        return this.pharmacistService.getAllPharmacists();
    }

    // GET PHARMACIST
    @Get('/:id')
    getPharmacist(@Param('id') id: string) : Promise<Return> {
        return this.pharmacistService.getPharmacist(id);
    }

    // POST PHARMACIST
    @Post('/create')
    postPharmacist(@Body() DTO: PharmacistDTO) : Promise<Return> {
        return this.pharmacistService.postPharmacist(DTO);
    }

    // PUT PHARMACIST
    @Put('/update/:id')
    putPharmacist(@Body() DTO: PharmacistDTO, @Param('id') id: string) : Promise<Return> {
        return this.pharmacistService.putPharmacist(id, DTO);
    }

    // DELETE PHARCIST
    @Delete('/delete/:id')
    deletePharmacist(@Param('id') id: string) : Promise<Return> {
        return this.pharmacistService.deletePharmacist(id);
    }
}
