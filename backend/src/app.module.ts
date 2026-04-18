import { Module } from '@nestjs/common';
import { VideojuegosModule } from './videojuegos/videojuegos.module';
import { DesarrolladoresModule } from './desarrolladores/desarrolladores.module';

@Module({
  imports: [VideojuegosModule, DesarrolladoresModule],
})
export class AppModule {}