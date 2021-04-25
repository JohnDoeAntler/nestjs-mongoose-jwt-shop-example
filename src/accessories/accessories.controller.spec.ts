import { Test, TestingModule } from '@nestjs/testing';
import { AccessoriesController } from './accessories.controller';
import { AccessoriesService } from './accessories.service';

describe('AccessoriesController', () => {
  let controller: AccessoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccessoriesController],
      providers: [AccessoriesService],
    }).compile();

    controller = module.get<AccessoriesController>(AccessoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
