import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Merchant } from 'src/accounts/schemas/merchant.schema';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Merchant.name })
    merchant: Merchant;

    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    description: string

    @Prop({ required: true })
    imageUrl: string

}

export const ProductSchema = SchemaFactory.createForClass(Product);
