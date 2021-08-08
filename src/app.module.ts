import { Module } from '@nestjs/common';
import { DecodeController } from './controllers/decode.controller';
import { EncodeController } from './controllers/encode.controller';
import { EncodeService } from './services/encode.service';

@Module({
  imports: [],
  controllers: [EncodeController, DecodeController],
  providers: [EncodeService],
})
export class AppModule {}
