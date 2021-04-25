import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Order } from 'src/orders/schemas/order.schema';
import { Merchandise } from 'src/sellables/schemas/merchandise.schema';

export type OrderMerchandiseDocument = OrderMerchandise & Document;

@Schema({ timestamps: true })
export class OrderMerchandise {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Order.name })
    order: Order;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Merchandise.name })
    merchandise: Merchandise;

    @Prop({ required: true })
    quantity: number;

}

export const OrderMerchandiseSchema = SchemaFactory.createForClass(OrderMerchandise);