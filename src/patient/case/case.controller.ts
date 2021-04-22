import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { CaseDTO } from './case.DTO';
import { CaseService } from './case.service';

@Controller('cases')
export class CaseController {

    constructor(private caseService : CaseService) {}

    // GET ALL CASES
    @Get()
    getAllCases() : Promise<Return> {
        return this.caseService.getAllCases();
    }

    // GET CASE
    @Get('/:id')
    getCase(@Param('id') id: string) : Promise<Return> {
        return this.caseService.getCase(id);
    }

    // POST CASE
    @Post('/create')
    postCase(@Body() detailCase: CaseDTO) : Promise<Return> {
        return this.caseService.postCase(detailCase);
    }

    // PUT CASE
    @Put('/update/:id')
    putCase(@Body() detailCase: CaseDTO, @Param('id') id: string) : Promise<Return> {
        return this.caseService.putCase(id, detailCase);
    }

    // DELETE CASE
    @Delete('/delete/:id')
    deleteCase(@Param('id') id: string) : Promise<Return> {
        return this.caseService.deleteCase(id);
    }
}
