import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './entity/producto.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  buscarTodos(): Promise<Producto[]> {
    return this.productosService.buscarTodos();
  }

  @Get(':id')
  buscarUno(@Param('id') id: number): Promise<Producto> {
    return this.productosService.buscarUno(id);
  }

  @Post()
  crear(@Body() producto: Producto): Promise<Producto> {
    return this.productosService.crear(producto);
  }

  @Put(':id')
  actualizar(@Param('id') id: number, @Body() producto: Producto): Promise<Producto> {
    return this.productosService.actualizar(id, producto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number): Promise<void> {
    return this.productosService.eliminar(id);
  }
}
