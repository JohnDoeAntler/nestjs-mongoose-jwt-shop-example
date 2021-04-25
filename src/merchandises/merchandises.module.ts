import { Module } from '@nestjs/common';
import { MerchandisesService } from './merchandises.service';
import { MerchandisesController } from './merchandises.controller';
import { SellablesModule } from 'src/sellables/sellables.module';

@Module({
  imports: [SellablesModule],
  controllers: [MerchandisesController],
  providers: [MerchandisesService]
})
export class MerchandisesModule {}
