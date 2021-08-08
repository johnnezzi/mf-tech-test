import { NotImplementedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { EncodeController } from './encode.controller';

describe('EncodeController', () => {
  let encodeController: EncodeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EncodeController],
    }).compile();

    encodeController = app.get<EncodeController>(EncodeController);
  });

  describe('encode', () => {
    it('should encode url', () => {
      throw new NotImplementedException();
    });
  });
});
