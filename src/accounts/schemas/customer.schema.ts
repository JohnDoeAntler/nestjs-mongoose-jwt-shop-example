import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema({ timestamps: true })
export class Customer {

  username: string;

  password: string;

  nickname: string;

  phone: string;

  email: string;

  imageUrl: string;

  role: string;

  @Prop({ required: false })
  address1: string;

  @Prop({ required: false })
  address2: string;

  @Prop({ required: false })
  address3: string;

  @Prop({ required: false })
  address4: string;

}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
