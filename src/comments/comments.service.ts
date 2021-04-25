import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    return new this.commentModel(createCommentDto).save();
  }

  findAll(filter) {
    return this.commentModel.find(filter)
      .populate('customer')
      .populate('product')
      .lean();
  }

  findById(id: ObjectId) {
    return this.commentModel.findById(id)
      .populate('customer')
      .populate('product')
      .lean();
  }

  update(id: ObjectId, updateCommentDto: UpdateCommentDto) {
    return this.commentModel.findByIdAndUpdate(id, updateCommentDto as Model<CommentDocument>)
      .populate('customer')
      .populate('product')
      .lean();
  }

  remove(id: ObjectId) {
    return this.commentModel.findByIdAndDelete(id)
      .populate('customer')
      .populate('product')
      .lean();
  }
}