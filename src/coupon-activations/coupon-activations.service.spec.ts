import { Test, TestingModule } from '@nestjs/testing';
import { CouponActivationsService } from './coupon-activations.service';

describe('CouponActivationsService', () => {
  let service: CouponActivationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CouponActivationsService],
    }).compile();

    service = module.get<CouponActivationsService>(CouponActivationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
