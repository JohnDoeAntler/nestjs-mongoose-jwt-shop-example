import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RequestTermsService } from './request-terms.service';
import { CreateRequestTermDto } from './dto/create-request-term.dto';
import { UpdateRequestTermDto } from './dto/update-request-term.dto';
import { ParseObjectIdPipe } from 'src/utils/pipe';
import { ObjectId } from 'mongoose';

@Controller('request-terms')
export class RequestTermsController {
  constructor(private readonly requestTermsService: RequestTermsService) {}

  @Post()
  create(@Body() createRequestTermDto: CreateRequestTermDto) {
    return this.requestTermsService.create(createRequestTermDto);
  }

  @Get()
  findAll(@Query() filter) {
    return this.requestTermsService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.requestTermsService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: ObjectId, @Body() updateRequestTermDto: UpdateRequestTermDto) {
    return this.requestTermsService.update(id, updateRequestTermDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.requestTermsService.remove(id);
  }
}
