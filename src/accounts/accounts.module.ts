import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from './schemas/account.schema';
import {
  Administrator,
  AdministratorSchema,
} from './schemas/administrator.schema';
import { Customer, CustomerSchema } from './schemas/customer.schema';
import { Merchant, MerchantSchema } from './schemas/merchant.schema';

const AccountModels = MongooseModule.forFeature([
  {
    name: Account.name,
    schema: AccountSchema,
    discriminators: [
      { name: Customer.name, schema: CustomerSchema },
      { name: Merchant.name, schema: MerchantSchema },
      { name: Administrator.name, schema: AdministratorSchema },
    ],
  },
]);

@Module({
  imports: [AccountModels],
  exports: [AccountModels],
})
export class AccountsModule {}
