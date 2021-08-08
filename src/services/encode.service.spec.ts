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
        url: 'http://localhost:3000/a2dw9ijp',
      });
    });

    it('if a url doesnt exist it calls the encode function', async () => {
      encodeService.checkIfExists = jest.fn(() => null);
      encodeService.encode = jest.fn(() => 'a2dw9ijp');
      expect(encodeService.encode).not.toHaveBeenCalled();
      await encodeService.processUrls({
        url: 'http://test.com',
      });
      expect(encodeService.encode).toHaveBeenCalled();
    });
  });

  describe('checkIfExists', () => {
    it('returns the code if it exists in the db', async () => {
      const database = { a2dw9ijp: 'http://test.com'};
      encodeService.getKeyByValue = jest.fn(() => 'a2dw9ijp');
      const result = await encodeService.checkIfExists('http://test.com', database);
      expect(result).toEqual('a2dw9ijp');
    });

    it('returns null if it does not exists in the db', async () => {
      const database = { a2dw9ijp: 'http://test.com'};
      const result = await encodeService.checkIfExists('http://testother.com', database);
      expect(result).toEqual(null);
    });
  });

  describe('encode', () => {
    it('returns an eight digit string', async () => {
      const result = await encodeService.encode('http://test.com');
      expect(result).toHaveLength(8);
      expect(typeof result).toBe('string');
    });
  });

  describe('decode', () => {
    it('it returns a url if it finds the encode', async () => {
      const database = { a2dw9ijp: 'http://test.com'};
      const result = await encodeService.decode('http://localhost:3000/a2dw9ijp', database);
      expect(result).toEqual('http://test.com');
    });
  });
});
