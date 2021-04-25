import { Test, TestingModule } from '@nestjs/testing';
import { MerchandisesService } from './merchandises.service';

describe('MerchandisesService', () => {
  let service: MerchandisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MerchandisesService],
    }).compile();

    service = module.get<MerchandisesService>(MerchandisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
