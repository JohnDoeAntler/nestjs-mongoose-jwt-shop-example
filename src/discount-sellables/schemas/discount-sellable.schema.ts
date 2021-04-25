import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Discount } from 'src/discounts/schemas/discount.schema';
import { DiscountType } from 'src/enums/discount';
import { Sellable } from 'src/sellables/schemas/sellable.schema';

export type DiscountSellableDocument = DiscountSellable & Document;

@Schema({ timestamps: true })
export class DiscountSellable {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Discount.name })
    discount: Discount;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Sellable.name })
    sellable: Sellable;

    @Prop({ required: true })
    discountType: DiscountType;

    @Prop({ required: true })
    discountRate: number;

}

export const DiscountSellableSchema = SchemaFactory.createForClass(DiscountSellable);