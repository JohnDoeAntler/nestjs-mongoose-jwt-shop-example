import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';
import { SellableStatus } from 'src/enums/sellable';

export type AccessoryDocument = Accessory & Document;

@Schema({ timestamps: true })
export class Accessory {

    product: Product;

    name: string;

    description: string;
    
    price: number;

    imageUrl: string;

    status: SellableStatus;

    kind: String;

}

export const AccessorySchema = SchemaFactory.createForClass(Accessory);