import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { FarmacyDTO } from './farmacies.DTO';
import { FarmaciesService } from './farmacies.service';

@Controller('farmacies')
export class FarmaciesController {

    constructor(private farmacyService: FarmaciesService) { }

    // GET ALL FARMACIES
    @Get()
    getAllFarmacies(): Promise<Return> {
        return this.farmacyService.getAllFarmacies();
    }

    // GET FARMACY
    @Get('/:id')
    getFarmacy(@Param('id') id: string): Promise<Return> {
        return this.farmacyService.getFarmacy(id);
    }

    // POST FARMACY
    @Post('/create')
    postFarmacy(@Body() DTO: FarmacyDTO): Promise<Return> {
        return this.farmacyService.postFarmacy(DTO);
    }

    // PUT FARMACY
    @Put('/update/:id')
    putFarmacy(@Body() DTO: FarmacyDTO, @Param('id') id: string): Promise<Return> {
        return this.farmacyService.putFarmacy(id, DTO);
    }

    // DELETE FARMACY
    @Delete('/delete/:id')
    deleteFarmacy(@Param('id') id: string): Promise<Return> {
        return this.farmacyService.deleteFarmacy(id);
    }
}
