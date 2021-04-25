import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ParseObjectIdPipe } from 'src/utils/pipe';
import { CouponActivationsService } from './coupon-activations.service';
import { CreateCouponActivationDto } from './dto/create-coupon-activation.dto';
import { UpdateCouponActivationDto } from './dto/update-coupon-activation.dto';

@Controller('coupon-activations')
export class CouponActivationsController {
  constructor(private readonly couponActivationsService: CouponActivationsService) {}

  @Post()
  create(@Body() createCouponActivationDto: CreateCouponActivationDto) {
    return this.couponActivationsService.create(createCouponActivationDto);
  }

  @Get()
  findAll(filter) {
    return this.couponActivationsService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.couponActivationsService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: ObjectId, @Body() updateCouponActivationDto: UpdateCouponActivationDto) {
    return this.couponActivationsService.update(id, updateCouponActivationDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.couponActivationsService.remove(id);
  }
}
