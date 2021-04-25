import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Accessory, AccessoryDocument } from 'src/sellables/schemas/accessory.schema';
import { CreateAccessoryDto } from './dto/create-accessory.dto';
import { UpdateAccessoryDto } from './dto/update-accessory.dto';

@Injectable()
export class AccessoriesService {
  constructor(
    @InjectModel(Accessory.name) private accessoryModel: Model<AccessoryDocument>,
  ) {}

  create(createAccessoryDto: CreateAccessoryDto) {
    return new this.accessoryModel(createAccessoryDto).save();
  }

  findAll(filter) {
    return this.accessoryModel.find()
      .populate('product')
      .lean();
  }

  findById(id: ObjectId) {
    return this.accessoryModel.findById(id)
      .populate('product')
      .lean();
  }

  update(id: ObjectId, updateAccessoryDto: UpdateAccessoryDto) {
    return this.accessoryModel.findByIdAndUpdate(id, updateAccessoryDto as Model<AccessoryDocument>)
      .populate('product')
      .lean();
  }

  remove(id: ObjectId) {
    return this.accessoryModel.findByIdAndDelete(id)
      .populate('product')
      .lean();
  }
}