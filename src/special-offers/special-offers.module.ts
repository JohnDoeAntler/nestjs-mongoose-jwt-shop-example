import { Module } from '@nestjs/common';
import { SpecialOffersService } from './special-offers.service';
import { SpecialOffersController } from './special-offers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecialOffer, SpecialOfferSchema } from './schemas/special-offer.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: SpecialOffer.name, schema: SpecialOfferSchema }])],
  controllers: [SpecialOffersController],
  providers: [SpecialOffersService]
})
export class SpecialOffersModule {}
