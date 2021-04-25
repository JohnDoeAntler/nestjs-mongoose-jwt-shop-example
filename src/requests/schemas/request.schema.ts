import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RequestType } from 'src/enums/request-kind';
import { RequestStatus } from 'src/enums/request-status';
import { RequestTerm } from 'src/request-terms/schemas/request-term.schema';
import { Customer } from 'src/accounts/schemas/customer.schema';

export type RequestDocument = Request & Document;

@Schema({ timestamps: true })
export class Request {

    @Prop({ required: true })
    kind: RequestType;

    @Prop({ required: true })
    status: RequestStatus;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: RequestTerm.name })
    requestTerm: RequestTerm;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Customer.name })
    customer: Customer;

    @Prop({ required: true, type: Date })
    date: Date;

    @Prop({ required: true })
    remark: string;

    @Prop({ required: false })
    imageUrl: string;

    @Prop({ required: true })
    address1: string;
    
    @Prop({ required: true })
    address2: string;

    @Prop({ required: true })
    address3: string;

    @Prop({ required: true })
    address4: string;

}

export const RequestSchema = SchemaFactory.createForClass(Request);