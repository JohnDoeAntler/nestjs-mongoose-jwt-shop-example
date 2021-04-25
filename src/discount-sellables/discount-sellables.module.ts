import { Module } from '@nestjs/common';
import { DiscountSellablesService } from './discount-sellables.service';
import { DiscountSellablesController } from './discount-sellables.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscountSellable, DiscountSellableSchema } from './schemas/discount-sellable.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: DiscountSellable.name, schema: DiscountSellableSchema }])],
  controllers: [DiscountSellablesController],
  providers: [DiscountSellablesService]
})
export class DiscountSellablesModule {}
