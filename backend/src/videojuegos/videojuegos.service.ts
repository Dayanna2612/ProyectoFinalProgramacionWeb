import { Injectable } from '@nestjs/common';

export interface Videojuego {
  id: number;
  nombre: string;
  genero: string;
  plataforma: string;
  precio: number;
}

@Injectable()
export class VideojuegosService {

  private videojuegos: Videojuego[] = [];

  findAll(): Videojuego[] {
    return this.videojuegos;
  }

  create(data: Omit<Videojuego, 'id'>): Videojuego {
    const nuevo: Videojuego = {
      id: Date.now(),
      ...data
    };
    this.videojuegos.push(nuevo);
    return nuevo;
  }

  update(id: number, data: Partial<Videojuego>): Videojuego | null {
    const index = this.videojuegos.findIndex(v => v.id == id);

    if (index !== -1) {
      this.videojuegos[index] = { ...this.videojuegos[index], ...data };
      return this.videojuegos[index];
    }

    return null;
  }

  remove(id: number) {
    this.videojuegos = this.videojuegos.filter(v => v.id != id);
    return { mensaje: 'Eliminado' };
  }
}