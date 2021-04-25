import { Module } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { AdministratorsController } from './administrators.controller';
import { AccountsModule } from 'src/accounts/accounts.module';
import { HashModule } from 'src/hash/hash.module';

@Module({
  imports: [AccountsModule, HashModule],
  controllers: [AdministratorsController],
  providers: [AdministratorsService]
})
export class AdministratorsModule {}
