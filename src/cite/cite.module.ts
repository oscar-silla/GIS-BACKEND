import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CiteController } from './cite.controller';
import { CiteSchema } from './cite.schema';
import { CiteService } from './cite.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'CITE',
        schema: CiteSchema
    }])],
    controllers: [CiteController],
    providers: [CiteService]
})
export class CiteModule { }
