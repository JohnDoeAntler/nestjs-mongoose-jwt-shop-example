import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Customer } from 'src/accounts/schemas/customer.schema';
import { Product } from 'src/products/schemas/product.schema';

export type BookmarkDocument = Bookmark & Document;

@Schema({ timestamps: true })
export class Bookmark {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Customer.name })
    customer: Customer;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Product.name })
    product: Product;

}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);