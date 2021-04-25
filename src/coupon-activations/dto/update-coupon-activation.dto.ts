import { PartialType } from '@nestjs/mapped-types';
import { CreateCouponActivationDto } from './create-coupon-activation.dto';

export class UpdateCouponActivationDto extends PartialType(CreateCouponActivationDto) {}
