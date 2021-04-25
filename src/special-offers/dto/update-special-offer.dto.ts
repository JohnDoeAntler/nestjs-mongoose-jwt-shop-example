import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecialOfferDto } from './create-special-offer.dto';

export class UpdateSpecialOfferDto extends PartialType(CreateSpecialOfferDto) {}
