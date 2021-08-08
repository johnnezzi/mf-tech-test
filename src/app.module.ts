import { Module } from '@nestjs/common';
import { EncodeController } from './controllers/encode.controller';
import { EncodeService } from './services/encode.service';

@Module({
  imports: [],
  controllers: [EncodeController],
  providers: [EncodeService],
})
export class AppModule {}
