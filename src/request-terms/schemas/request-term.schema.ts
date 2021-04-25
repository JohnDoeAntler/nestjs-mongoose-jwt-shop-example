import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { RequestType } from 'src/enums/request-kind';
import { Merchant } from 'src/accounts/schemas/merchant.schema';

export type RequestTermDocument = RequestTerm & Document;

@Schema({ timestamps: true })
export class RequestTerm {

    @Prop({ required: true })
    kind: RequestType;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Merchant.name})
    merchant: Merchant;

    @Prop({ required: true })
    price: number;

    @Prop({ true: true, type: Date })
    from: Date;

    @Prop({ true: true, type: Date })
    to: Date;

}

export const RequestTermSchema = SchemaFactory.createForClass(RequestTerm);
