import { Test, TestingModule } from '@nestjs/testing';
import { SpecialOffersController } from './special-offers.controller';
import { SpecialOffersService } from './special-offers.service';

describe('SpecialOffersController', () => {
  let controller: SpecialOffersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialOffersController],
      providers: [SpecialOffersService],
    }).compile();

    controller = module.get<SpecialOffersController>(SpecialOffersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
