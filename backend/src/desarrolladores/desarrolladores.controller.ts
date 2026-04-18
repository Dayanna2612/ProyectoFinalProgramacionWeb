import { Controller, Get, Post, Body } from '@nestjs/common';
import { DesarrolladoresService } from './desarrolladores.service';

@Controller('desarrolladores')
export class DesarrolladoresController {
  constructor(private readonly service: DesarrolladoresService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() data: any) {
    return this.service.create(data);
  }
}