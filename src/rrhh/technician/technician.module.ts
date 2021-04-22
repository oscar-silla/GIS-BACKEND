import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TechnicianController } from './technician.controller';
import { TechnicianSchema } from './technician.schema';
import { TechnicianService } from './technician.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'TECHNICIAN',
        schema: TechnicianSchema
    }])],
    controllers: [TechnicianController],
    providers: [TechnicianService]
})
export class TechnicianModule { }
