import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ParseObjectIdPipe } from 'src/utils/pipe';
import { AdministratorsService } from './administrators.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';

@Controller('administrators')
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}

  @Post()
  create(@Body() createAdministratorDto: CreateAdministratorDto) {
    return this.administratorsService.create(createAdministratorDto);
  }

  @Get()
  findAll(@Query() filter: UpdateAdministratorDto) {
    return this.administratorsService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.administratorsService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: ObjectId, @Body() updateAdministratorDto: UpdateAdministratorDto) {
    return this.administratorsService.update(id, updateAdministratorDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.administratorsService.remove(id);
  }

  @Get('search/:filter')
  search(@Param('filter') filter?: string) {
    return this.administratorsService.search(filter);
  }
}
