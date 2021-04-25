import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CouponActivation, CouponActivationDocument } from './schemas/coupon-activation.schema';
import { CreateCouponActivationDto } from './dto/create-coupon-activation.dto';
import { UpdateCouponActivationDto } from './dto/update-coupon-activation.dto';

@Injectable()
export class CouponActivationsService {
  constructor(
    @InjectModel(CouponActivation.name) private couponActivationModel: Model<CouponActivationDocument>,
  ) {}

  create(createCouponActivationDto: CreateCouponActivationDto) {
    return new this.couponActivationModel(createCouponActivationDto).save();
  }

  findAll(filter) {
    return this.couponActivationModel.find(filter)
      .populate('order')
      .populate('coupon')
      .lean();
  }

  findById(id: ObjectId) {
    return this.couponActivationModel.findById(id)
      .populate('order')
      .populate('coupon')
      .lean();
  }

  update(id: ObjectId, updateCouponActivationDto: UpdateCouponActivationDto) {
    return this.couponActivationModel.findByIdAndUpdate(id, updateCouponActivationDto as Model<CouponActivationDocument>)
      .populate('order')
      .populate('coupon')
      .lean();
  }

  remove(id: ObjectId) {
    return this.couponActivationModel.findByIdAndDelete(id)
      .populate('order')
      .populate('coupon')
      .lean();
  }
} 