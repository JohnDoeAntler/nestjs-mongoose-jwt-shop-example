import { Module } from '@nestjs/common';
import { CouponActivationsService } from './coupon-activations.service';
import { CouponActivationsController } from './coupon-activations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponActivation, CouponActivationSchema } from './schemas/coupon-activation.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CouponActivation.name, schema: CouponActivationSchema }])],
  controllers: [CouponActivationsController],
  providers: [CouponActivationsService]
})
export class CouponActivationsModule {}
