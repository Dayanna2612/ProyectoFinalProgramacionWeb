import { Injectable } from '@nestjs/common';
import { desarrolladores } from './data';

@Injectable()
export class DesarrolladoresService {

  findAll() {
    return desarrolladores;
  }

  create(data: any) {
    const nuevo = {
      id: desarrolladores.length + 1,
      ...data
    };
    desarrolladores.push(nuevo);
    return nuevo;
  }
}