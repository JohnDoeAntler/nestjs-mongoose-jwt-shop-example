import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return new this.orderModel(createOrderDto).save();
  }

  findAll(filter) {
    return this.orderModel.find(filter)
      .populate('customer')
      .lean();
  }

  findById(id: ObjectId) {
    return this.orderModel.findById(id)
      .populate('customer')
      .lean();
  }

  update(id: ObjectId, updateOrderDto: UpdateOrderDto) {
    return this.orderModel.findByIdAndUpdate(id, updateOrderDto as Model<OrderDocument>)
      .populate('customer')
      .lean();
  }

  remove(id: ObjectId) {
    return this.orderModel.findByIdAndDelete(id)
      .populate('customer')
      .lean();
  }
}