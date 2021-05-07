import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ObjectId } from 'mongoose';
import { ParseObjectIdPipe } from 'src/utils/pipe';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Query() filter) {
    return this.productsService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.productsService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: ObjectId, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.productsService.remove(id);
  }

  @Get('search/:filter')
  search(@Param('filter') filter?: string) {
    return this.productsService.search(filter);
  }
}
