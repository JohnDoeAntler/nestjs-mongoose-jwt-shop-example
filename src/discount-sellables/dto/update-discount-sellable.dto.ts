import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscountSellableDto } from './create-discount-sellable.dto';

export class UpdateDiscountSellableDto extends PartialType(CreateDiscountSellableDto) {}
