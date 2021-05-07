import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { ParseObjectIdPipe } from 'src/utils/pipe';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(
    private readonly customersService: CustomersService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  findAll(@Query() filter: UpdateCustomerDto) {
    return this.customersService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.customersService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseObjectIdPipe) id: ObjectId, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseObjectIdPipe) id: ObjectId) {
    return this.customersService.remove(id);
  }

  // auth

  @Post('register')
  async register(@Body() createCustomerDto: CreateCustomerDto) {
    const doc = await this.customersService.create(createCustomerDto);
    const elm = await this.customersService.findById(doc._id);
    const ret = await this.authService.login(elm);
    return ret;
  }

  @Get('search/:filter')
  search(@Param('filter') filter?: string) {
    return this.customersService.search(filter);
  }
}
