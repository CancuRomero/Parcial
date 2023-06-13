import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entity/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly repositorioProductos: Repository<Producto>,
  ) {}

  buscarTodos(): Promise<Producto[]> {
    return this.repositorioProductos.find();
  }

  buscarUno(id: number): Promise<Producto> {
    return this.repositorioProductos.findOne({ where: { id } });
  }

  crear(producto: Producto): Promise<Producto> {
    return this.repositorioProductos.save(producto);
  }

  async actualizar(id: number, producto: Producto): Promise<Producto> {
    await this.repositorioProductos.update({ id }, producto);
    return this.repositorioProductos.findOne({ where: { id } });
  }

  eliminar(id: number): Promise<void> {
    return this.repositorioProductos.delete(id).then();
  }
}
