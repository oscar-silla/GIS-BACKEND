import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { LabReportsDTO } from './lab-reports.DTO';
import { LabReportsService } from './lab-reports.service';

@Controller('lab-reports')
export class LabReportsController {

    constructor(private labReportService: LabReportsService) {}

    // GET ALL LAB REPORTS
    @Get()
    getAllLabReports(): Promise<Return> {
        return this.labReportService.getAllLabReports();
    }

    // GET LAB REPORT
    @Get('/:id')
    getLabReport(@Param('id') id: string): Promise<Return> {
        return this.labReportService.getLabReport(id);
    }

    // POST LAB REPORT
    @Post('/create')
    postLabReport(@Body() DTO: LabReportsDTO): Promise<Return> {
        return this.labReportService.postLabReport(DTO);
    }

    // PUT LAB REPORT
    @Put('/update/:id')
    putLabReport(@Body() DTO: LabReportsDTO, @Param('id') id: string) {
        return this.labReportService.putLabReport(id, DTO);
    }

    // DELETE LAB REPORT
    @Delete('/delete/:id')
    deleteLabReport(@Param('id') id: string): Promise<Return> {
        return this.labReportService.deleteLabReport(id);
    }
}
