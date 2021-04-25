import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Merchandise, MerchandiseDocument } from 'src/sellables/schemas/merchandise.schema';
import { CreateMerchandiseDto } from './dto/create-merchandise.dto';
import { UpdateMerchandiseDto } from './dto/update-merchandise.dto';

@Injectable()
export class MerchandisesService {
  constructor(
    @InjectModel(Merchandise.name) private merchandiseModel: Model<MerchandiseDocument>,
  ) {}

  create(createMerchandiseDto: CreateMerchandiseDto) {
    return new this.merchandiseModel(createMerchandiseDto).save();
  }

  findAll(filter) {
    return this.merchandiseModel.find(filter)
      .populate('product')
      .lean();
  }

  findById(id: ObjectId) {
    return this.merchandiseModel.findById(id)
      .populate('product')
      .lean();
  }

  update(id: ObjectId, updateMerchandiseDto: UpdateMerchandiseDto) {
    return this.merchandiseModel.findByIdAndUpdate(id, updateMerchandiseDto as Model<MerchandiseDocument>)
      .populate('product')
      .lean();
  }

  remove(id: ObjectId) {
    return this.merchandiseModel.findByIdAndDelete(id)
      .populate('product')
      .lean();
  }
}