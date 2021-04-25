import { Test, TestingModule } from '@nestjs/testing';
import { DiscountProductsService } from './discount-products.service';

describe('DiscountProductsService', () => {
  let service: DiscountProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscountProductsService],
    }).compile();

    service = module.get<DiscountProductsService>(DiscountProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
