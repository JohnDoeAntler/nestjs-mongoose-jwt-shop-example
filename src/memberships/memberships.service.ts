import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Membership, MembershipDocument } from './schemas/membership.schema';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';

@Injectable()
export class MembershipsService {
  constructor(
    @InjectModel(Membership.name) private membershipModel: Model<MembershipDocument>,
  ) {}

  create(createMembershipDto: CreateMembershipDto) {
    return new this.membershipModel(createMembershipDto).save();
  }

  findAll(filter) {
    return this.membershipModel.find(filter)
      .populate('customer')
      .populate('merchant')
      .lean();
  }

  findById(id: ObjectId) {
    return this.membershipModel.findById(id)
      .populate('customer')
      .populate('merchant')
      .lean();
  }

  update(id: ObjectId, updateMembershipDto: UpdateMembershipDto) {
    return this.membershipModel.findByIdAndUpdate(id, updateMembershipDto as Model<MembershipDocument>)
      .populate('customer')
      .populate('merchant')
      .lean();
  }

  remove(id: ObjectId) {
    return this.membershipModel.findByIdAndDelete(id)
      .populate('customer')
      .populate('merchant')
      .lean();
  }
}