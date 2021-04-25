import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Discount } from 'src/discounts/schemas/discount.schema';
import { Merchant } from 'src/accounts/schemas/merchant.schema';
import { DiscountType } from 'src/enums/discount';

export type DiscountMerchantDocument = DiscountMerchant & Document;

@Schema({ timestamps: true })
export class DiscountMerchant {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Discount.name })
    discount: Discount;

    @Prop({ required: true })
    discountType: DiscountType;

    @Prop({ required: true })
    discountRate: number;

}

export const DiscountMerchantSchema = SchemaFactory.createForClass(DiscountMerchant);