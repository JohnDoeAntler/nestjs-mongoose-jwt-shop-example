import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { DiscountProduct, DiscountProductDocument } from './schemas/discount-product.schema';
import { CreateDiscountProductDto } from './dto/create-discount-product.dto';
import { UpdateDiscountProductDto } from './dto/update-discount-product.dto';

@Injectable()
export class DiscountProductsService {
  constructor(
    @InjectModel(DiscountProduct.name) private discountProductModel: Model<DiscountProductDocument>,
  ) {}

  create(createDiscountProductDto: CreateDiscountProductDto) {
    return new this.discountProductModel(createDiscountProductDto).save();
  }

  findAll(filter) {
    return this.discountProductModel.find(filter)
      .populate('discount')
      .populate('product')
      .lean();
  }

  findById(id: ObjectId) {
    return this.discountProductModel.findById(id)
      .populate('discount')
      .populate('product')
      .lean();
  }

  update(id: ObjectId, updateDiscountProductDto: UpdateDiscountProductDto) {
    return this.discountProductModel.findByIdAndUpdate(id, updateDiscountProductDto as Model<DiscountProductDocument>)
      .populate('discount')
      .populate('product')
      .lean();
  }

  remove(id: ObjectId) {
    return this.discountProductModel.findByIdAndDelete(id)
      .populate('discount')
      .populate('product')
      .lean();
  }
}