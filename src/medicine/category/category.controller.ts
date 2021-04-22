import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Return } from 'src/assets/return.interface';
import { MedicineCategoryDTO } from './category.DTO';
import { MedicineCategoryService } from './category.service';

@Controller('medicine/categories')
export class MedicineCategoryController {

    constructor(private mCategoryService: MedicineCategoryService) { }

    // GET ALL CATEGORIES
    @Get()
    getAllCategories(): Promise<Return> {
        return this.mCategoryService.getAllCategories();
    }

    // GET CATEGORY
    @Get('/:id')
    getCategory(@Param('id') id: string): Promise<Return> {
        return this.mCategoryService.getCategory(id);
    }

    // POST CATEGORY
    @Post('/create')
    postCategory(@Body() DTO: MedicineCategoryDTO): Promise<Return> {
        return this.mCategoryService.postCategory(DTO);
    }

    // PUT CATEGORY
    @Put('/update/:id')
    putCategory(@Body() DTO: MedicineCategoryDTO, @Param('id') id: string): Promise<Return> {
        return this.mCategoryService.putCategory(id, DTO);
    }

    // DELETE CATEGORY
    @Delete('/delete/:id')
    deleteCategory(@Param('id') id: string): Promise<Return> {
        return this.mCategoryService.deleteCategory(id);
    }

}
