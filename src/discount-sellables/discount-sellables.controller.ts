import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ParseObjectIdPipe } from 'src/utils/pipe';
import { DiscountSellablesService } from './discount-sellables.service';
import { CreateDiscountSellableDto } from './dto/create-discount-sellable.dto';
import { UpdateDiscountSellableDto } from './dto/update-discount-sellable.dto';

@Controller('discount-sellables')
export class DiscountSellablesController {
  constructor(private readonly discountSellablesService: DiscountSellablesService) {}

  @Post()
  create(@Body() createDiscountSellableDto: CreateDiscountSellableDto) {
    return this.discountSellablesService.create(createDiscountSellableDto);
  }

  @Get()
  findAll(@Query() filter) {
    return this.discountSellablesService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.discountSellablesService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: ObjectId, @Body() updateDiscountSellableDto: UpdateDiscountSellableDto) {
    return this.discountSellablesService.update(id, updateDiscountSellableDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.discountSellablesService.remove(id);
  }
}
