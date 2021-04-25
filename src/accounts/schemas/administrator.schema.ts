import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdministratorDocument = Administrator & Document;

@Schema({ timestamps: true })
export class Administrator {

  username: string;

  password: string;

  nickname: string;

  phone: string;

  email: string;

  imageUrl: string;

  role: string;

}

export const AdministratorSchema = SchemaFactory.createForClass(Administrator);
