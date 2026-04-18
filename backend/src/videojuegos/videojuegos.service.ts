import { Injectable } from '@nestjs/common';
import { videojuegos } from './data';

@Injectable()
export class VideojuegosService {

  findAll() {
    return videojuegos;
  }

  findOne(id: number) {
    return videojuegos.find(v => v.id === id);
  }

  create(data: any) {
    const nuevo = {
      id: videojuegos.length + 1,
      ...data
    };
    videojuegos.push(nuevo);
    return nuevo;
  }

  update(id: number, data: any) {
    const index = videojuegos.findIndex(v => v.id === id);
    if (index !== -1) {
      videojuegos[index] = { ...videojuegos[index], ...data };
    }
    return videojuegos[index];
  }

  delete(id: number) {
    const index = videojuegos.findIndex(v => v.id === id);
    if (index !== -1) {
      return videojuegos.splice(index, 1);
    }
  }
}