import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Customer, CustomerDocument } from 'src/accounts/schemas/customer.schema';
import { HashService } from 'src/hash/hash.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
    private readonly hashService: HashService,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    createCustomerDto.role = Customer.name;
    createCustomerDto.password = await this.hashService.hash(createCustomerDto.password);
    return await new this.customerModel(createCustomerDto).save();
  }

  findAll(filter: UpdateCustomerDto) {
    return this.customerModel.find(filter)
      .select('-password')
      .lean();
  }

  findById(id: ObjectId) {
    return this.customerModel.findById(id)
      .select('-password')
      .lean();
  }

  async update(id: ObjectId, updateCustomerDto: UpdateCustomerDto) {
    if (updateCustomerDto.password) {
      updateCustomerDto.password = await this.hashService.hash(updateCustomerDto.password);
    }

    return this.customerModel.findByIdAndUpdate(id, updateCustomerDto)
      .select('-password')
      .lean();
  }

  remove(id: ObjectId) {
    return this.customerModel.findByIdAndDelete(id)
      .select('-password')
      .lean();
  }
}
