import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MerchantDocument = Merchant & Document;

@Schema({ timestamps: true })
export class Merchant {

  username: string;

  password: string;

  nickname: string;

  phone: string;

  email: string;

  imageUrl: string;

  role: string;

  @Prop({ required: true, default: false })
  membershipEnable: boolean;

  @Prop({ required: true, default: 0 })
  membershipFee: number;

}

export const MerchantSchema = SchemaFactory.createForClass(Merchant);
