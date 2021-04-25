import { Test, TestingModule } from '@nestjs/testing';
import { DiscountProductsController } from './discount-products.controller';
import { DiscountProductsService } from './discount-products.service';

describe('DiscountProductsController', () => {
  let controller: DiscountProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountProductsController],
      providers: [DiscountProductsService],
    }).compile();

    controller = module.get<DiscountProductsController>(DiscountProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
