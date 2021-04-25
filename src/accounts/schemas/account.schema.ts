import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Administrator } from './administrator.schema';
import { Customer } from './customer.schema';
import { Merchant } from './merchant.schema';

export type AccountDocument = Account & Document;

@Schema({ discriminatorKey: 'role', timestamps: true })
export class Account {

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  nickname: string;

  @Prop({ required: false, unique: true })
  phone: string;

  @Prop({ required: false, unique: true })
  email: string;

  @Prop({ required: false })
  imageUrl: string;

  @Prop({
    type: String,
    required: true,
    enum: [Customer.name, Merchant.name, Administrator.name],
  })
  role: string;

}

export const AccountSchema = SchemaFactory.createForClass(Account);