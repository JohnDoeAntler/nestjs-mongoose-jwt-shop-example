import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { DiscountSellable, DiscountSellableDocument } from './schemas/discount-sellable.schema';
import { CreateDiscountSellableDto } from './dto/create-discount-sellable.dto';
import { UpdateDiscountSellableDto } from './dto/update-discount-sellable.dto';

@Injectable()
export class DiscountSellablesService {
  constructor(
    @InjectModel(DiscountSellable.name) private discountSellableModel: Model<DiscountSellableDocument>,
  ) {}

  create(createDiscountSellableDto: CreateDiscountSellableDto) {
    return new this.discountSellableModel(createDiscountSellableDto).save();
  }

  findAll(filter) {
    return this.discountSellableModel.find(filter)
      .populate('discount')
      .populate('sellable')
      .lean();
  }

  findById(id: ObjectId) {
    return this.discountSellableModel.findById(id)
      .populate('discount')
      .populate('sellable')
      .lean();
  }

  update(id: ObjectId, updateDiscountSellableDto: UpdateDiscountSellableDto) {
    return this.discountSellableModel.findByIdAndUpdate(id, updateDiscountSellableDto as Model<DiscountSellableDocument>)
      .populate('discount')
      .populate('sellable')
      .lean();
  }

  remove(id: ObjectId) {
    return this.discountSellableModel.findByIdAndDelete(id)
      .populate('discount')
      .populate('sellable')
      .lean();
  }
}