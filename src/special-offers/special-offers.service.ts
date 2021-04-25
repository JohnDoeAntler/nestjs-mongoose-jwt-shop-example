import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { SpecialOffer, SpecialOfferDocument } from './schemas/special-offer.schema';
import { CreateSpecialOfferDto } from './dto/create-special-offer.dto';
import { UpdateSpecialOfferDto } from './dto/update-special-offer.dto';

@Injectable()
export class SpecialOffersService {
  constructor(
    @InjectModel(SpecialOffer.name) private specialOfferModel: Model<SpecialOfferDocument>,
  ) {}

  create(createSpecialOfferDto: CreateSpecialOfferDto) {
    return new this.specialOfferModel(createSpecialOfferDto).save();
  }

  findAll() {
    return this.specialOfferModel.find();
  }

  findById(id: ObjectId) {
    return this.specialOfferModel.findById(id);
  }

  update(id: ObjectId, updateSpecialOfferDto: UpdateSpecialOfferDto) {
    return this.specialOfferModel.findByIdAndUpdate(id, updateSpecialOfferDto as Model<SpecialOfferDocument>);
  }

  remove(id: ObjectId) {
    return this.specialOfferModel.findByIdAndDelete(id);
  }
}