import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Bookmark, BookmarkDocument } from './schemas/bookmark.schema';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectModel(Bookmark.name) private bookmarkModel: Model<BookmarkDocument>,
  ) {}

  create(createBookmarkDto: CreateBookmarkDto) {
    return new this.bookmarkModel(createBookmarkDto).save();
  }

  findAll(filter) {
    return this.bookmarkModel.find(filter)
      .populate('customer')
      .populate('product')
      .lean();
  }

  findById(id: ObjectId) {
    return this.bookmarkModel.findById(id)
      .populate('customer')
      .populate('product')
      .lean();
  }

  update(id: ObjectId, updateBookmarkDto: UpdateBookmarkDto) {
    return this.bookmarkModel.findByIdAndUpdate(id, updateBookmarkDto as Model<BookmarkDocument>)
      .populate('customer')
      .populate('product')
      .lean();
  }

  remove(id: ObjectId) {
    return this.bookmarkModel.findByIdAndDelete(id)
      .populate('customer')
      .populate('product')
      .lean();
  }
}