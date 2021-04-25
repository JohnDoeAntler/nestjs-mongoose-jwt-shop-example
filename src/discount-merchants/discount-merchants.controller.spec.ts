import { Test, TestingModule } from '@nestjs/testing';
import { DiscountMerchantsController } from './discount-merchants.controller';
import { DiscountMerchantsService } from './discount-merchants.service';

describe('DiscountMerchantController', () => {
  let controller: DiscountMerchantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountMerchantsController],
      providers: [DiscountMerchantsService],
    }).compile();

    controller = module.get<DiscountMerchantsController>(DiscountMerchantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
