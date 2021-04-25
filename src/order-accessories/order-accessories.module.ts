import { Module } from '@nestjs/common';
import { OrderAccessoriesService } from './order-accessories.service';
import { OrderAccessoriesController } from './order-accessories.controller';
import { OrderAccessory, OrderAccessorySchema } from './schemas/order-accessory.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: OrderAccessory.name, schema: OrderAccessorySchema }])],
  controllers: [OrderAccessoriesController],
  providers: [OrderAccessoriesService],
})
export class OrderAccessoriesModule {}
