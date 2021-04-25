import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ParseObjectIdPipe } from 'src/utils/pipe';
import { DiscountMerchantsService } from './discount-merchants.service';
import { CreateDiscountMerchantDto } from './dto/create-discount-merchant.dto';
import { UpdateDiscountMerchantDto } from './dto/update-discount-merchant.dto';

@Controller('discount-merchant')
export class DiscountMerchantsController {
  constructor(private readonly discountMerchantService: DiscountMerchantsService) {}

  @Post()
  create(@Body() createDiscountMerchantDto: CreateDiscountMerchantDto) {
    return this.discountMerchantService.create(createDiscountMerchantDto);
  }

  @Get()
  findAll(@Query() filter) {
    return this.discountMerchantService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.discountMerchantService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: ObjectId, @Body() updateDiscountMerchantDto: UpdateDiscountMerchantDto) {
    return this.discountMerchantService.update(id, updateDiscountMerchantDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.discountMerchantService.remove(id);
  }
}
