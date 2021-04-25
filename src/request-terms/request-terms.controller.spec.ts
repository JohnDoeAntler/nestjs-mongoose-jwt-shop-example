import { Test, TestingModule } from '@nestjs/testing';
import { RequestTermsController } from './request-terms.controller';
import { RequestTermsService } from './request-terms.service';

describe('RequestTermsController', () => {
  let controller: RequestTermsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestTermsController],
      providers: [RequestTermsService],
    }).compile();

    controller = module.get<RequestTermsController>(RequestTermsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
