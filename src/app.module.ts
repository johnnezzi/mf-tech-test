import { Module } from '@nestjs/common';
import { DecodeController } from './controllers/decode.controller';
import { EncodeController } from './controllers/encode.controller';

@Module({
  imports: [],
  controllers: [EncodeController, DecodeController],
})
export class AppModule {}
