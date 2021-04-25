import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Discount } from 'src/discounts/schemas/discount.schema';

export type CouponDocument = Coupon & Document;

@Schema({ timestamps: true })
export class Coupon {

    @Prop({ required: true, unique: true })
    code: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Discount.name })
    discount: Discount;

    @Prop({ required: true, type: Date })
    expiredAt: Date;

    @Prop({ required: true })
    useLimit: number;

}

export const CouponSchema = SchemaFactory.createForClass(Coupon);