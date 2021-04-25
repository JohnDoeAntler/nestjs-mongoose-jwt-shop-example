import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Customer } from 'src/accounts/schemas/customer.schema';
import { Product } from 'src/products/schemas/product.schema';

export type CommentDocument = Comment & Document;

@Schema({ timestamps: true })
export class Comment {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Customer.name })
    customer: Customer;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Product.name })
    product: Product;

    @Prop({ required: true, min: 1, max: 5 })
    rating: number;

    @Prop({ required: false })
    review: string;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);