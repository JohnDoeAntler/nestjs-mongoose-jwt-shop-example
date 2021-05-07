import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Administrator, AdministratorDocument } from 'src/accounts/schemas/administrator.schema';
import { HashService } from 'src/hash/hash.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';

@Injectable()
export class AdministratorsService {
  constructor(
    @InjectModel(Administrator.name) private administratorModel: Model<AdministratorDocument>,
    private readonly hashService: HashService,
  ) {}

  async create(createAdministratorDto: CreateAdministratorDto) {
    createAdministratorDto.role = Administrator.name;
    createAdministratorDto.password = await this.hashService.hash(createAdministratorDto.password);
    return await new this.administratorModel(createAdministratorDto).save();
  }

  findAll(filter: UpdateAdministratorDto) {
    return this.administratorModel.find(filter)
      .select('-password')
      .lean();
  }

  findById(id: ObjectId) {
    return this.administratorModel.findById(id)
      .select('-password')
      .lean();
  }

  async update(id: ObjectId, updateAdministratorDto: UpdateAdministratorDto) {
    if (updateAdministratorDto.password) {
      updateAdministratorDto.password = await this.hashService.hash(updateAdministratorDto.password);
    }

    return this.administratorModel.findByIdAndUpdate(id, updateAdministratorDto)
      .select('-password')
      .lean();
  }

  remove(id: ObjectId) {
    return this.administratorModel.findByIdAndDelete(id)
      .select('-password')
      .lean();
  }

  search(filter?: string) {
    return this.administratorModel.find({
      $or: [
        {
          username: { $regex: filter, $options: "i" },
        }, {
          nickname: { $regex: filter, $options: "i" },
        }, {
          phone: { $regex: filter, $options: "i" },
        }, {
          email: { $regex: filter, $options: "i" },
        },
      ]
    });
  }
}
