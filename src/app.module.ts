import { Module } from '@nestjs/common';
import { DecodeController } from './controllers/decode.controller';
import { EncodeController } from './controllers/encode.controller';
import { Encode.ServiceService } from './encode.service/encode.service.service';

@Module({
  imports: [],
  controllers: [EncodeController, DecodeController],
  providers: [Encode.ServiceService],
})
export class AppModule {}
