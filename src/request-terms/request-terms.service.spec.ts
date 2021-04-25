import { Test, TestingModule } from '@nestjs/testing';
import { RequestTermsService } from './request-terms.service';

describe('RequestTermsService', () => {
  let service: RequestTermsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestTermsService],
    }).compile();

    service = module.get<RequestTermsService>(RequestTermsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
