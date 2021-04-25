import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OrderMerchandisesService } from './order-merchandises.service';
import { CreateOrderMerchandiseDto } from './dto/create-order-merchandise.dto';
import { UpdateOrderMerchandiseDto } from './dto/update-order-merchandise.dto';
import { ParseObjectIdPipe } from 'src/utils/pipe';
import { ObjectId } from 'mongoose';

@Controller('order-merchandises')
export class OrderMerchandisesController {
  constructor(private readonly orderMerchandisesService: OrderMerchandisesService) {}

  @Post()
  create(@Body() createOrderMerchandiseDto: CreateOrderMerchandiseDto) {
    return this.orderMerchandisesService.create(createOrderMerchandiseDto);
  }

  @Get()
  findAll(@Query() filter) {
    return this.orderMerchandisesService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.orderMerchandisesService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: ObjectId, @Body() updateOrderMerchandiseDto: UpdateOrderMerchandiseDto) {
    return this.orderMerchandisesService.update(id, updateOrderMerchandiseDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.orderMerchandisesService.remove(id);
  }
}
