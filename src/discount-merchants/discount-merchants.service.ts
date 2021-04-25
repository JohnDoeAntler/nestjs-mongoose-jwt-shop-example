import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { DiscountMerchant, DiscountMerchantDocument } from './schemas/discount-merchant.schema';
import { CreateDiscountMerchantDto } from './dto/create-discount-merchant.dto';
import { UpdateDiscountMerchantDto } from './dto/update-discount-merchant.dto';

@Injectable()
export class DiscountMerchantsService {
  constructor(
    @InjectModel(DiscountMerchant.name) private discountMerchantModel: Model<DiscountMerchantDocument>,
  ) {}

  create(createDiscountMerchantDto: CreateDiscountMerchantDto) {
    return new this.discountMerchantModel(createDiscountMerchantDto).save();
  }

  findAll(filter) {
    return this.discountMerchantModel.find(filter)
      .populate('discount')
      .lean();
  }

  findById(id: ObjectId) {
    return this.discountMerchantModel.findById(id)
      .populate('discount')
      .lean();
  }

  update(id: ObjectId, updateDiscountMerchantDto: UpdateDiscountMerchantDto) {
    return this.discountMerchantModel.findByIdAndUpdate(id, updateDiscountMerchantDto as Model<DiscountMerchantDocument>)
      .populate('discount')
      .lean();
  }

  remove(id: ObjectId) {
    return this.discountMerchantModel.findByIdAndDelete(id)
      .populate('discount')
      .lean();
  }
}