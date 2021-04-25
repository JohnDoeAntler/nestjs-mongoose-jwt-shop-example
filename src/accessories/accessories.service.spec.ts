import { Test, TestingModule } from '@nestjs/testing';
import { AccessoriesService } from './accessories.service';

describe('AccessoriesService', () => {
  let service: AccessoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccessoriesService],
    }).compile();

    service = module.get<AccessoriesService>(AccessoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
