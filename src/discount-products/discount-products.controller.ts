import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ParseObjectIdPipe } from 'src/utils/pipe';
import { DiscountProductsService } from './discount-products.service';
import { CreateDiscountProductDto } from './dto/create-discount-product.dto';
import { UpdateDiscountProductDto } from './dto/update-discount-product.dto';

@Controller('discount-products')
export class DiscountProductsController {
  constructor(private readonly discountProductsService: DiscountProductsService) {}

  @Post()
  create(@Body() createDiscountProductDto: CreateDiscountProductDto) {
    return this.discountProductsService.create(createDiscountProductDto);
  }

  @Get()
  findAll(@Query() filter) {
    return this.discountProductsService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.discountProductsService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: ObjectId, @Body() updateDiscountProductDto: UpdateDiscountProductDto) {
    return this.discountProductsService.update(id, updateDiscountProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.discountProductsService.remove(id);
  }
}
