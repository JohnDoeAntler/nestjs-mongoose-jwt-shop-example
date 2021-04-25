import { Test, TestingModule } from '@nestjs/testing';
import { DiscountSellablesService } from './discount-sellables.service';

describe('DiscountSellablesService', () => {
  let service: DiscountSellablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscountSellablesService],
    }).compile();

    service = module.get<DiscountSellablesService>(DiscountSellablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
