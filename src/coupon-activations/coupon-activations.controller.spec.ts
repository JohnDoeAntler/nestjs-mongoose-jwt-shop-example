import { Test, TestingModule } from '@nestjs/testing';
import { CouponActivationsController } from './coupon-activations.controller';
import { CouponActivationsService } from './coupon-activations.service';

describe('CouponActivationsController', () => {
  let controller: CouponActivationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CouponActivationsController],
      providers: [CouponActivationsService],
    }).compile();

    controller = module.get<CouponActivationsController>(CouponActivationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
