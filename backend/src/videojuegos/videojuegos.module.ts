import { Module } from '@nestjs/common';
import { VideojuegosController } from './videojuegos.controller';
import { VideojuegosService } from './videojuegos.service';

@Module({
  controllers: [VideojuegosController],
  providers: [VideojuegosService],
})
export class VideojuegosModule {}