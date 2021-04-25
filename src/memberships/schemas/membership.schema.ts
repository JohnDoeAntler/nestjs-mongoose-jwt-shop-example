import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Customer } from 'src/accounts/schemas/customer.schema';
import { Merchant } from 'src/accounts/schemas/merchant.schema';

export type MembershipDocument = Membership & Document;

@Schema({ timestamps: true })
export class Membership {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Customer.name })
    customer: Customer;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Merchant.name })
    merchant: Merchant;

    @Prop({ required: true, default: 0, min: 0 })
    point: number;

    @Prop({ required: true, default: 1, min: 1 })
    level: number;

}

export const MembershipSchema = SchemaFactory.createForClass(Membership);