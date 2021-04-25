import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Discount, DiscountDocument } from './schemas/discount.schema';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';

@Injectable()
export class DiscountsService {
  constructor(
    @InjectModel(Discount.name) private discountModel: Model<DiscountDocument>,
  ) {}

  create(createDiscountDto: CreateDiscountDto) {
    return new this.discountModel(createDiscountDto).save();
  }

  findAll(filter) {
    return this.discountModel.find(filter)
      .populate('merchant')
      .lean();
  }

  findById(id: ObjectId) {
    return this.discountModel.findById(id)
      .populate('merchant')
      .lean();
  }

  update(id: ObjectId, updateDiscountDto: UpdateDiscountDto) {
    return this.discountModel.findByIdAndUpdate(id, updateDiscountDto as Model<DiscountDocument>)
      .populate('merchant')
      .lean();
  }

  remove(id: ObjectId) {
    return this.discountModel.findByIdAndDelete(id)
      .populate('merchant')
      .lean();
  }
}