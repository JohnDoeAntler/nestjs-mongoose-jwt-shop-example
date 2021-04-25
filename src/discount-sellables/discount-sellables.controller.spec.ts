import { Test, TestingModule } from '@nestjs/testing';
import { DiscountSellablesController } from './discount-sellables.controller';
import { DiscountSellablesService } from './discount-sellables.service';

describe('DiscountSellablesController', () => {
  let controller: DiscountSellablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountSellablesController],
      providers: [DiscountSellablesService],
    }).compile();

    controller = module.get<DiscountSellablesController>(DiscountSellablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
