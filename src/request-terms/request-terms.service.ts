import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { RequestTerm, RequestTermDocument } from './schemas/request-term.schema';
import { CreateRequestTermDto } from './dto/create-request-term.dto';
import { UpdateRequestTermDto } from './dto/update-request-term.dto';

@Injectable()
export class RequestTermsService {
  constructor(
    @InjectModel(RequestTerm.name) private requestTermModel: Model<RequestTermDocument>,
  ) {}

  create(createRequestTermDto: CreateRequestTermDto) {
    return new this.requestTermModel(createRequestTermDto).save();
  }

  findAll(filter) {
    return this.requestTermModel.find(filter)
      .populate('merchant')
      .lean();
  }

  findById(id: ObjectId) {
    return this.requestTermModel.findById(id)
      .populate('merchant')
      .lean();
  }

  update(id: ObjectId, updateRequestTermDto: UpdateRequestTermDto) {
    return this.requestTermModel.findByIdAndUpdate(id, updateRequestTermDto as Model<RequestTermDocument>)
      .populate('merchant')
      .lean();
  }

  remove(id: ObjectId) {
    return this.requestTermModel.findByIdAndDelete(id)
      .populate('merchant')
      .lean();
  }
}