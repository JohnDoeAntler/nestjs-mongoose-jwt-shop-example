import { Module } from '@nestjs/common';
import { OrderMerchandisesService } from './order-merchandises.service';
import { OrderMerchandisesController } from './order-merchandises.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderMerchandise, OrderMerchandiseSchema } from './schemas/order-merchandise.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: OrderMerchandise.name, schema: OrderMerchandiseSchema }])],
  controllers: [OrderMerchandisesController],
  providers: [OrderMerchandisesService]
})
export class OrderMerchandisesModule {}
