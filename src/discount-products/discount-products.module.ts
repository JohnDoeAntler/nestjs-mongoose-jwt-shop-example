import { Module } from '@nestjs/common';
import { DiscountProductsService } from './discount-products.service';
import { DiscountProductsController } from './discount-products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscountProduct, DiscountProductSchema } from './schemas/discount-product.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: DiscountProduct.name, schema: DiscountProductSchema }])],
  controllers: [DiscountProductsController],
  providers: [DiscountProductsService]
})
export class DiscountProductsModule {}
