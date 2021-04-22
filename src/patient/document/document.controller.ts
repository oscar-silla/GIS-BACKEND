import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { DocumentDTO } from './document.DTO';
import { DocumentService } from './document.service';

@Controller('documents')
export class DocumentController {

    constructor(private documentService: DocumentService) { }

    // GET ALL DOCUMENTS
    @Get()
    getAllDocuments(): Promise<Return> {
        return this.documentService.getAllDocuments();
    }

    // GET DOCUMENT
    @Get('/:id')
    getDocument(@Param('id') id: string): Promise<Return> {
        return this.documentService.getDocument(id);
    }

    // POST DOCUMENT
    @Post('/create')
    postDocument(@Body() detailDocument: DocumentDTO): Promise<Return> {
        return this.documentService.postDocument(detailDocument);
    }

    // PUT DOCUMENT
    @Put('/update/:id')
    putDocument(@Body() detailDocument: DocumentDTO, @Param('id') id: string): Promise<Return> {
        return this.documentService.putDocument(id, detailDocument);
    }

    // DELETE DOCUMENT
    @Delete('/delete/:id')
    deleteDocument(@Param('id') id: string) : Promise<Return> {
        return this.documentService.deleteDocument(id);
    }
}
