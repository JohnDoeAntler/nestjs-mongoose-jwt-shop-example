import { Test, TestingModule } from '@nestjs/testing';
import { OrderAccessoriesController } from './order-accessories.controller';
import { OrderAccessoriesService } from './order-accessories.service';

describe('OrderAccessoriesController', () => {
  let controller: OrderAccessoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderAccessoriesController],
      providers: [OrderAccessoriesService],
    }).compile();

    controller = module.get<OrderAccessoriesController>(OrderAccessoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
