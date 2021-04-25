import { Module } from '@nestjs/common';
import { DiscountMerchantsService } from './discount-merchants.service';
import { DiscountMerchantsController } from './discount-merchants.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscountMerchant, DiscountMerchantSchema } from './schemas/discount-merchant.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: DiscountMerchant.name, schema: DiscountMerchantSchema }])],
  controllers: [DiscountMerchantsController],
  providers: [DiscountMerchantsService]
})
export class DiscountMerchantsModule {}
