import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from 'src/products/schemas/product.schema';
import { Accessory } from './accessory.schema';
import { Merchandise } from './merchandise.schema';
import { SellableStatus } from 'src/enums/sellable';

@Schema({ discriminatorKey: 'kind', timestamps: true })
export class Sellable {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: Product.name })
  product: Product;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  status: SellableStatus;

  @Prop({
    required: true,
    type: String,
    enum: [Accessory.name, Merchandise.name],
  })
  kind: string;
}

export const SellableSchema = SchemaFactory.createForClass(Sellable);
