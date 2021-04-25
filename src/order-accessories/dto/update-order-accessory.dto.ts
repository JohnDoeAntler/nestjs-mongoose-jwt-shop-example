import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderAccessoryDto } from './create-order-accessory.dto';

export class UpdateOrderAccessoryDto extends PartialType(CreateOrderAccessoryDto) {}
