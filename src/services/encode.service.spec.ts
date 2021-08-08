import { Test, TestingModule } from '@nestjs/testing';
import { EncodeService } from './encode.service';

describe('EncodeService', () => {
  let encodeService: EncodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncodeService],
    }).compile();

    encodeService = module.get<EncodeService>(EncodeService);
  });

  describe('processUrls', () => {
    it('if a url already exists it returns that url', async () => {
      encodeService.checkIfExists = jest.fn(() => 'a2dw9ijp');
      const result = await encodeService.processUrls({
        url: 'http://test.com',
      });
      expect(result).toEqual({
        data: { url: 'http://localhost:3000/a2dw9ijp' },
      });
    });
  });
});
