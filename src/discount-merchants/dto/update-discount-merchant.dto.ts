import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscountMerchantDto } from './create-discount-merchant.dto';

export class UpdateDiscountMerchantDto extends PartialType(CreateDiscountMerchantDto) {}
