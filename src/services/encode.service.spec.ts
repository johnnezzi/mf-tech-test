import { Test, TestingModule } from '@nestjs/testing';
import { Encode.ServiceService } from './encode.service.service';

describe('Encode.ServiceService', () => {
  let service: Encode.ServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Encode.ServiceService],
    }).compile();

    service = module.get<Encode.ServiceService>(Encode.ServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
