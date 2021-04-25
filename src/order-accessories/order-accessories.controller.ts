import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OrderAccessoriesService } from './order-accessories.service';
import { CreateOrderAccessoryDto } from './dto/create-order-accessory.dto';
import { UpdateOrderAccessoryDto } from './dto/update-order-accessory.dto';
import { ParseObjectIdPipe } from 'src/utils/pipe';
import { ObjectId } from 'mongoose';

@Controller('order-accessories')
export class OrderAccessoriesController {
  constructor(private readonly orderAccessoriesService: OrderAccessoriesService) {}

  @Post()
  create(@Body() createOrderAccessoryDto: CreateOrderAccessoryDto) {
    return this.orderAccessoriesService.create(createOrderAccessoryDto);
  }

  @Get()
  findAll(@Query() filter) {
    return this.orderAccessoriesService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.orderAccessoriesService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: ObjectId, @Body() updateOrderAccessoryDto: UpdateOrderAccessoryDto) {
    return this.orderAccessoriesService.update(id, updateOrderAccessoryDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.orderAccessoriesService.remove(id);
  }
}
