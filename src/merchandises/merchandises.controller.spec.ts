import { Test, TestingModule } from '@nestjs/testing';
import { MerchandisesController } from './merchandises.controller';
import { MerchandisesService } from './merchandises.service';

describe('MerchandisesController', () => {
  let controller: MerchandisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerchandisesController],
      providers: [MerchandisesService],
    }).compile();

    controller = module.get<MerchandisesController>(MerchandisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
