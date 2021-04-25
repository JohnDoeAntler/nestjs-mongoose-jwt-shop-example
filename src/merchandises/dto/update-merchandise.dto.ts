import { PartialType } from '@nestjs/mapped-types';
import { CreateMerchandiseDto } from './create-merchandise.dto';

export class UpdateMerchandiseDto extends PartialType(CreateMerchandiseDto) {}
