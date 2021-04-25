import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Accessory, AccessorySchema } from './schemas/accessory.schema';
import { Merchandise, MerchandiseSchema } from './schemas/merchandise.schema';
import { Sellable, SellableSchema } from './schemas/sellable.schema';

const SellableModels = MongooseModule.forFeature([
  {
    name: Sellable.name,
    schema: SellableSchema,
    discriminators: [
      { name: Accessory.name, schema: AccessorySchema },
      { name: Merchandise.name, schema: MerchandiseSchema },
    ],
  },
]);

@Module({
    imports: [SellableModels],
    exports: [SellableModels],
})
export class SellablesModule {}
