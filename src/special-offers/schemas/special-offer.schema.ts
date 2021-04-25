import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Discount } from 'src/discounts/schemas/discount.schema';

export type SpecialOfferDocument = SpecialOffer & Document;

@Schema({ timestamps: true })
export class SpecialOffer {

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Discount.name })
    discount: Discount;

    @Prop({ required: true, type: Date })
    from: Date;

    @Prop({ required: true, type: Date })
    to: Date;

}

export const SpecialOfferSchema = SchemaFactory.createForClass(SpecialOffer);