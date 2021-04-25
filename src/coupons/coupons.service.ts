import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Coupon, CouponDocument } from './schemas/coupon.schema';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Injectable()
export class CouponsService {
  constructor(
    @InjectModel(Coupon.name) private couponModel: Model<CouponDocument>,
  ) {}

  create(createCouponDto: CreateCouponDto) {
    return new this.couponModel(createCouponDto).save();
  }

  findAll(filter) {
    return this.couponModel.find(filter)
      .populate('discount')
      .lean();
  }

  findById(id: ObjectId) {
    return this.couponModel.findById(id)
      .populate('discount')
      .lean();
  }

  update(id: ObjectId, updateCouponDto: UpdateCouponDto) {
    return this.couponModel.findByIdAndUpdate(id, updateCouponDto as Model<CouponDocument>)
      .populate('discount')
      .lean();
  }

  remove(id: ObjectId) {
    return this.couponModel.findByIdAndDelete(id)
      .populate('discount')
      .lean();
  }
}