import { Module } from '@nestjs/common';
import { AccessoriesService } from './accessories.service';
import { AccessoriesController } from './accessories.controller';
import { SellablesModule } from 'src/sellables/sellables.module';

@Module({
  imports: [SellablesModule],
  controllers: [AccessoriesController],
  providers: [AccessoriesService]
})
export class AccessoriesModule {}
