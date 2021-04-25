import { Test, TestingModule } from '@nestjs/testing';
import { OrderMerchandisesController } from './order-merchandises.controller';
import { OrderMerchandisesService } from './order-merchandises.service';

describe('OrderMerchandisesController', () => {
  let controller: OrderMerchandisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderMerchandisesController],
      providers: [OrderMerchandisesService],
    }).compile();

    controller = module.get<OrderMerchandisesController>(OrderMerchandisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
