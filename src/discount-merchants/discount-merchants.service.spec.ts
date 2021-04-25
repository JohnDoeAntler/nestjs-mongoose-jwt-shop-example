import { Test, TestingModule } from '@nestjs/testing';
import { DiscountMerchantsService } from './discount-merchants.service';

describe('DiscountMerchantService', () => {
  let service: DiscountMerchantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscountMerchantsService],
    }).compile();

    service = module.get<DiscountMerchantsService>(DiscountMerchantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
