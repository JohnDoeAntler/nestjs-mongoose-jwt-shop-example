import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';
import { SellableStatus } from 'src/enums/sellable';

export type MerchandiseDocument = Merchandise & Document;

@Schema({ timestamps: true })
export class Merchandise {

    product: Product;

    name: string;

    description: string;
    
    price: number;

    imageUrl: string;

    status: SellableStatus;

    kind: String;

}

export const MerchandiseSchema = SchemaFactory.createForClass(Merchandise);