import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { CiteDTO } from './cite.DTO';
import { CiteService } from './cite.service';

@Controller('cites')
export class CiteController {

    constructor(private citeService : CiteService) {}

    // GET ALL CITES
    @Get()
    getAllCites() : Promise<Return> {
        return this.citeService.getAllCites();
    }

    // GET CITE
    @Get('/:id')
    getCite(@Param('id') id: string) : Promise<Return> {
        return this.citeService.getCite(id);
    }

    // POST CITE
    @Post('/create')
    postCite(@Body() detailCite: CiteDTO) : Promise<Return> {
        return this.citeService.postCite(detailCite);
    }

    // PUT CITE
    @Put('/update/:id')
    putCite(@Body() detailBody: CiteDTO, @Param('id') id: string) : Promise<Return> {
        return this.citeService.putCite(id, detailBody);
    }

    // DELETE CITE
    @Delete('/delete/:id')
    deleteCite(@Param('id') id: string) : Promise<Return> {
        return this.citeService.deleteCite(id);
    }
}
