import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Customer } from 'src/accounts/schemas/customer.schema';
import { OrderStatus } from 'src/enums/order';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Customer.name })
  customer: Customer;

  @Prop({ required: true })
  address1: string;

  @Prop({ required: true })
  address2: string;

  @Prop({ required: true })
  address3: string;

  @Prop({ required: true })
  address4: string;

  @Prop({ required: true })
  status: OrderStatus;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
