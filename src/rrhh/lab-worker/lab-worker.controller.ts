import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { LabWorkerDTO } from './lab-worker.DTO';
import { LabWorkerService } from './lab-worker.service';

@Controller('lab-workers')
export class LabWorkerController {

    constructor(private labWorkerService: LabWorkerService) { }

    // GET ALL LABORATORY WORKERS
    @Get()
    getAllLabWorkers(): Promise<Return> {
        return this.labWorkerService.getAllLabWorkers();
    }

    // GET LABORATORY WORKER
    @Get('/:id')
    getLaboratoryWorker(@Param('id') id: string): Promise<Return> {
        return this.labWorkerService.getLaboratoryWorker(id);
    }

    // POST LABORATORY WORKER
    @Post('/create')
    postLaboratoryWorker(@Body() DTO: LabWorkerDTO): Promise<Return> {
        return this.labWorkerService.postLaboratoryWorker(DTO);
    }

    // PUT LABORATORY WORKER
    @Put('/update/:id')
    putLaboratoryWorker(@Body() DTO: LabWorkerDTO, @Param('id') id: string): Promise<Return> {
        return this.labWorkerService.putLaboratoryWorker(id, DTO);
    }

    // DELETE LABORATORY WORKER
    @Delete('/delete/:id')
    deleteLaboratoryWorker(@Param('id') id: string): Promise<Return> {
        return this.labWorkerService.deleteLaboratoryWorker(id);
    }
}
