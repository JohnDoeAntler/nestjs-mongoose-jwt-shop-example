import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestTermDto } from './create-request-term.dto';

export class UpdateRequestTermDto extends PartialType(CreateRequestTermDto) {}
