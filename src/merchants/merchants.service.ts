import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Merchant, MerchantDocument } from 'src/accounts/schemas/merchant.schema';
import { HashService } from 'src/hash/hash.service';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';

@Injectable()
export class MerchantsService {
  constructor(
    @InjectModel(Merchant.name) private readonly merchantModel: Model<MerchantDocument>,
    private readonly hashService: HashService,
  ) {}

  async create(createMerchantDto: CreateMerchantDto) {
    createMerchantDto.role = Merchant.name;
    createMerchantDto.password = await this.hashService.hash(createMerchantDto.password);
    return await new this.merchantModel(createMerchantDto).save();
  }

  findAll(filter: UpdateMerchantDto) {
    return this.merchantModel.find(filter)
      .select('-password')
      .lean();
  }

  findById(id: ObjectId) {
    return this.merchantModel.findById(id)
      .select('-password')
      .lean();
  }

  async update(id: ObjectId, updateMerchantDto: UpdateMerchantDto) {
    if (updateMerchantDto.password) {
      updateMerchantDto.password = await this.hashService.hash(updateMerchantDto.password);
    }

    return this.merchantModel.findByIdAndUpdate(id, updateMerchantDto)
      .select('-password')
      .lean();
  }

  remove(id: ObjectId) {
    return this.merchantModel.findByIdAndDelete(id)
      .select('-password')
      .lean();
  }
}
