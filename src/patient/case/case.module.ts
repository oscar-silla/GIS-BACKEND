import { Module } from '@nestjs/common';
import { CaseController } from './case.controller';
import { CaseService } from './case.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CaseSchema } from './case.schema';

@Module({
    imports: [MongooseModule.forFeature([{
        name: "CASE",
        schema: CaseSchema
    }])],
    controllers: [CaseController],
    providers: [CaseService]
})
export class CaseModule { }
