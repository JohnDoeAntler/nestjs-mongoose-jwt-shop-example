import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { AccountsModule } from 'src/accounts/accounts.module';
import { AuthModule } from 'src/auth/auth.module';
import { HashModule } from 'src/hash/hash.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/roles/roles.guard';

@Module({
  imports: [AccountsModule, AuthModule, HashModule],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule {}
