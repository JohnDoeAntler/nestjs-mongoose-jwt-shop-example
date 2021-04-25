import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { OrderAccessory, OrderAccessoryDocument } from './schemas/order-accessory.schema';
import { CreateOrderAccessoryDto } from './dto/create-order-accessory.dto';
import { UpdateOrderAccessoryDto } from './dto/update-order-accessory.dto';

@Injectable()
export class OrderAccessoriesService {
  constructor(
    @InjectModel(OrderAccessory.name) private orderAccessoryModel: Model<OrderAccessoryDocument>,
  ) {}

  create(createOrderAccessoryDto: CreateOrderAccessoryDto) {
    return new this.orderAccessoryModel(createOrderAccessoryDto).save();
  }

  findAll(filter) {
    return this.orderAccessoryModel.find(filter)
      .populate('order')
      .populate('accessory')
      .lean();
  }

  findById(id: ObjectId) {
    return this.orderAccessoryModel.findById(id)
      .populate('order')
      .populate('accessory')
      .lean();
  }

  update(id: ObjectId, updateOrderAccessoryDto: UpdateOrderAccessoryDto) {
    return this.orderAccessoryModel.findByIdAndUpdate(id, updateOrderAccessoryDto as Model<OrderAccessoryDocument>)
      .populate('order')
      .populate('accessory')
      .lean();
  }

  remove(id: ObjectId) {
    return this.orderAccessoryModel.findByIdAndDelete(id)
      .populate('order')
      .populate('accessory')
      .lean();
  }
}