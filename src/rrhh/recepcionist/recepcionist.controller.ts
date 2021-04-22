import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { RecepcionistDTO } from './recepcionist.DTO';
import { RecepcionistService } from './recepcionist.service';

@Controller('recepcionist')
export class RecepcionistController {

    constructor(private recepcionistService: RecepcionistService) { }

    // GET ALL RECEPCIONISTS
    @Get()
    getAllRecepcionists(): Promise<Return> {
        return this.recepcionistService.getAllRecepcionist();
    }

    // GET RECEPCIONIST
    @Get('/:id')
    getRecepcionist(@Param('id') id: string): Promise<Return> {
        return this.recepcionistService.getRecepcionist(id);
    }

    // POST RECEPCIONIST
    @Post('/create')
    postRecepcionist(@Body() DTO: RecepcionistDTO): Promise<Return> {
        return this.recepcionistService.postRecepcionist(DTO);
    }

    // PUT RECEPCIONIST
    @Put('/update/:id')
    putRecepcionist(@Body() DTO: RecepcionistDTO, @Param('id') id: string) {
        return this.recepcionistService.putRecepcionist(id, DTO);
    }

    // DELETE RECEPCIONIST
    @Delete('/delete/:id')
    deleteRecepcionist(@Param('id') id: string): Promise<Return> {
        return this.recepcionistService.deleteRecepcionist(id);
    }
}
