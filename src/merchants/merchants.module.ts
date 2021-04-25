import { Module } from '@nestjs/common';
import { MerchantsService } from './merchants.service';
import { MerchantsController } from './merchants.controller';
import { AccountsModule } from 'src/accounts/accounts.module';
import { AuthModule } from 'src/auth/auth.module';
import { HashModule } from 'src/hash/hash.module';

@Module({
  imports: [AccountsModule, AuthModule, HashModule],
  controllers: [MerchantsController],
  providers: [MerchantsService]
})
export class MerchantsModule {}
