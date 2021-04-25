import { Test, TestingModule } from '@nestjs/testing';
import { OrderAccessoriesService } from './order-accessories.service';

describe('OrderAccessoriesService', () => {
  let service: OrderAccessoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderAccessoriesService],
    }).compile();

    service = module.get<OrderAccessoriesService>(OrderAccessoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
