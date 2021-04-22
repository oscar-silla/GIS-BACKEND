import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecepcionistController } from './recepcionist.controller';
import { RecepcionistSchema } from './recepcionist.schema';
import { RecepcionistService } from './recepcionist.service';

@Module({
    imports: [MongooseModule.forFeature([{
        name: 'RECEPCIONIST',
        schema: RecepcionistSchema
    }])],
    controllers: [RecepcionistController],
    providers: [RecepcionistService]
})
export class RecepcionistModule {}
