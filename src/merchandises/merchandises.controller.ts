import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MerchandisesService } from './merchandises.service';
import { CreateMerchandiseDto } from './dto/create-merchandise.dto';
import { UpdateMerchandiseDto } from './dto/update-merchandise.dto';
import { ParseObjectIdPipe } from 'src/utils/pipe';
import { ObjectId } from 'mongoose';

@Controller('merchandises')
export class MerchandisesController {
  constructor(private readonly merchandisesService: MerchandisesService) {}

  @Post()
  create(@Body() createMerchandiseDto: CreateMerchandiseDto) {
    return this.merchandisesService.create(createMerchandiseDto);
  }

  @Get()
  findAll(@Query() filter) {
    return this.merchandisesService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.merchandisesService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: ObjectId, @Body() updateMerchandiseDto: UpdateMerchandiseDto) {
    return this.merchandisesService.update(id, updateMerchandiseDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.merchandisesService.remove(id);
  }

  @Get('search/:filter')
  search(@Param('filter') filter?: string) {
    return this.merchandisesService.search(filter);
  }
}
