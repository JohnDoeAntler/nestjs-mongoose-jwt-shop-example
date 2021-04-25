import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return new this.productModel(createProductDto).save();
  }

  findAll(filter) {
    return this.productModel.find(filter)
      .populate('merchant')
      .lean();
  }

  findById(id: ObjectId) {
    return this.productModel.findById(id)
      .populate('merchant')
      .lean();
  }

  update(id: ObjectId, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto as Model<ProductDocument>)
      .populate('merchant')
      .lean();
  }

  remove(id: ObjectId) {
    return this.productModel.findByIdAndDelete(id)
      .populate('merchant')
      .lean();
  }
}