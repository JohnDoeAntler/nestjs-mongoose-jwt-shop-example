import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';
import { Discount } from 'src/discounts/schemas/discount.schema';
import { DiscountType } from 'src/enums/discount';

export type DiscountProductDocument = DiscountProduct & Document;

@Schema({ timestamps: true })
export class DiscountProduct {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Discount.name })
    discount: Discount;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Product.name })
    product: Product;

    @Prop({ required: true })
    discountType: DiscountType;

    @Prop({ required: true })
    discountRate: number;

}

export const DiscountProductSchema = SchemaFactory.createForClass(DiscountProduct);