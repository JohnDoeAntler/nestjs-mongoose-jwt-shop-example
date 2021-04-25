import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Accessory } from 'src/sellables/schemas/accessory.schema';
import { Order } from 'src/orders/schemas/order.schema';

export type OrderAccessoryDocument = OrderAccessory & Document;

@Schema({ timestamps: true })
export class OrderAccessory {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Order.name })
    order: Order;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Accessory.name })
    accessory: Accessory;

    @Prop({ required: true })
    quantity: number;

}

export const OrderAccessorySchema = SchemaFactory.createForClass(OrderAccessory);