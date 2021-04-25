import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Order } from 'src/orders/schemas/order.schema';
import { Coupon } from 'src/coupons/schemas/coupon.schema';

export type CouponActivationDocument = CouponActivation & Document;

@Schema({ timestamps: true })
export class CouponActivation {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Order.name })
    order: Order;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Coupon.name })
    coupon: Coupon;

}

export const CouponActivationSchema = SchemaFactory.createForClass(CouponActivation);