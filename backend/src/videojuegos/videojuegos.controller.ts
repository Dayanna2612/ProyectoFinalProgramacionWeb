import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { VideojuegosService } from './videojuegos.service';

@Controller('videojuegos')
export class VideojuegosController {

  constructor(private readonly service: VideojuegosService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.service.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.service.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}