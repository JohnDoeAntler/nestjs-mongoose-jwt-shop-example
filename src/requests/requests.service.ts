import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Request, RequestDocument } from './schemas/request.schema';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel(Request.name) private requestModel: Model<RequestDocument>,
  ) {}

  create(createRequestDto: CreateRequestDto) {
    return new this.requestModel(createRequestDto).save();
  }

  findAll(filter) {
    return this.requestModel.find(filter)
      .populate('requestTerm')
      .populate('customer')
      .lean();
  }

  findById(id: ObjectId) {
    return this.requestModel.findById(id)
      .populate('requestTerm')
      .populate('customer')
      .lean();
  }

  update(id: ObjectId, updateRequestDto: UpdateRequestDto) {
    return this.requestModel.findByIdAndUpdate(id, updateRequestDto as Model<RequestDocument>)
      .populate('requestTerm')
      .populate('customer')
      .lean();
  }

  remove(id: ObjectId) {
    return this.requestModel.findByIdAndDelete(id)
      .populate('requestTerm')
      .populate('customer')
      .lean();
  }
}