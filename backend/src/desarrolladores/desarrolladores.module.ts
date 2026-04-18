import { Module } from '@nestjs/common';
import { DesarrolladoresController } from './desarrolladores.controller';
import { DesarrolladoresService } from './desarrolladores.service';

@Module({
  controllers: [DesarrolladoresController],
  providers: [DesarrolladoresService],
})
export class DesarrolladoresModule {}