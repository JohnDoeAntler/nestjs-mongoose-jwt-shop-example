import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { OrderMerchandise, OrderMerchandiseDocument } from './schemas/order-merchandise.schema';
import { CreateOrderMerchandiseDto } from './dto/create-order-merchandise.dto';
import { UpdateOrderMerchandiseDto } from './dto/update-order-merchandise.dto';

@Injectable()
export class OrderMerchandisesService {
  constructor(
    @InjectModel(OrderMerchandise.name) private orderMerchandiseModel: Model<OrderMerchandiseDocument>,
  ) {}

  create(createOrderMerchandiseDto: CreateOrderMerchandiseDto) {
    return new this.orderMerchandiseModel(createOrderMerchandiseDto).save();
  }

  findAll(filter) {
    return this.orderMerchandiseModel.find(filter)
      .populate('order')
      .populate('merchandise')
      .lean();
  }

  findById(id: ObjectId) {
    return this.orderMerchandiseModel.findById(id)
      .populate('order')
      .populate('merchandise')
      .lean();
  }

  update(id: ObjectId, updateOrderMerchandiseDto: UpdateOrderMerchandiseDto) {
    return this.orderMerchandiseModel.findByIdAndUpdate(id, updateOrderMerchandiseDto as Model<OrderMerchandiseDocument>)
      .populate('order')
      .populate('merchandise')
      .lean();
  }

  remove(id: ObjectId) {
    return this.orderMerchandiseModel.findByIdAndDelete(id)
      .populate('order')
      .populate('merchandise')
      .lean();
  }
}