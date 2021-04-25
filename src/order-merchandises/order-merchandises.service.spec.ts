import { Test, TestingModule } from '@nestjs/testing';
import { OrderMerchandisesService } from './order-merchandises.service';

describe('OrderMerchandisesService', () => {
  let service: OrderMerchandisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderMerchandisesService],
    }).compile();

    service = module.get<OrderMerchandisesService>(OrderMerchandisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
