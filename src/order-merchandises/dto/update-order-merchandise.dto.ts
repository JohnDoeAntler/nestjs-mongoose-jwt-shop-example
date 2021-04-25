import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderMerchandiseDto } from './create-order-merchandise.dto';

export class UpdateOrderMerchandiseDto extends PartialType(CreateOrderMerchandiseDto) {}
