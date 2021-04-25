import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Merchant } from 'src/accounts/schemas/merchant.schema';

export type DiscountDocument = Discount & Document;

@Schema({ timestamps: true })
export class Discount {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    imageUrl: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Merchant.name })
    merchant: Merchant;

}

export const DiscountSchema = SchemaFactory.createForClass(Discount);